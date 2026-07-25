// Manual, on-demand changelog version cut. NOT CI-triggered, NOT per-PR — you run
// it by hand when you decide a batch of entries is ready to become a version.
//
// Dry-run by default: it REPORTS the plan (new version + included entries) and
// changes nothing. Pass `--apply` to actually write.
//
//   node scripts/cut-changelog-version.mjs            # report only
//   node scripts/cut-changelog-version.mjs --apply    # perform the cut
//
// With --apply it:
//   1. Finds every changelog/entries/*.md missing a `version:` field (the uncut batch).
//   2. Bumps the last cut version by the highest-severity `type` in that batch
//      (major > minor > patch).
//   3. Writes `version: vX.X.X` into each uncut entry — additive only, nothing else touched.
//   4. Creates changelog/versions/vX.X.X.md with `version`, `date`, and an empty
//      `blurb: ""` placeholder. The blurb is manual narrative — never auto-generated.
//
// Version scheme is standard three-part semver vMAJOR.MINOR.PATCH:
//   major -> (MAJOR+1).0.0    minor -> MAJOR.(MINOR+1).0    patch -> MAJOR.MINOR.(PATCH+1)
import {
  readFileSync,
  writeFileSync,
  readdirSync,
  existsSync,
  mkdirSync,
} from "node:fs";
import { join } from "node:path";

const APPLY = process.argv.includes("--apply");
const ENTRIES_DIR = "changelog/entries";
const VERSIONS_DIR = "changelog/versions";

// v1.0–v1.3 live as hardcoded "legacy" releases on the changelog page, not as
// files in changelog/versions/. The first real cut therefore baselines off v1.3.0.
const LEGACY_LATEST = { major: 1, minor: 3, patch: 0 };

const SEVERITY = { patch: 0, minor: 1, major: 2 };

// Read the `key: value` pairs from a file's leading `---` frontmatter block.
function frontmatter(text) {
  const lines = text.split("\n");
  const out = {};
  if (lines[0]?.trim() !== "---") return out;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === "---") break;
    const m = lines[i].match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (m) out[m[1]] = m[2].trim();
  }
  return out;
}

function existingVersions() {
  if (!existsSync(VERSIONS_DIR)) return [];
  return readdirSync(VERSIONS_DIR)
    .filter((f) => /^v\d+\.\d+\.\d+\.md$/.test(f))
    .map((f) => {
      const [major, minor, patch] = f.slice(1, -3).split(".").map(Number);
      return { major, minor, patch };
    });
}

function lastCutVersion() {
  const vers = existingVersions();
  if (!vers.length) return { ...LEGACY_LATEST, fromLegacy: true };
  vers.sort((a, b) => b.major - a.major || b.minor - a.minor || b.patch - a.patch);
  return { ...vers[0], fromLegacy: false };
}

function bump(last, severity) {
  if (severity === "major") return { major: last.major + 1, minor: 0, patch: 0 };
  if (severity === "minor") return { major: last.major, minor: last.minor + 1, patch: 0 };
  return { major: last.major, minor: last.minor, patch: last.patch + 1 }; // patch
}

// --- gather the uncut batch ---
const uncut = readdirSync(ENTRIES_DIR)
  .filter((f) => f.endsWith(".md"))
  .sort()
  .map((f) => ({ file: f, ...frontmatter(readFileSync(join(ENTRIES_DIR, f), "utf-8")) }))
  .filter((e) => !("version" in e));

if (!uncut.length) {
  console.log("Nothing to cut: every entry already has a `version:` field.");
  process.exit(0);
}

let topSeverity = "patch";
for (const e of uncut) {
  if ((SEVERITY[e.type] ?? -1) > SEVERITY[topSeverity]) topSeverity = e.type;
}

const last = lastCutVersion();
const next = bump(last, topSeverity);
const nextTag = `v${next.major}.${next.minor}.${next.patch}`;
const lastTag = `v${last.major}.${last.minor}.${last.patch}`;

const now = new Date();
const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
  now.getDate(),
).padStart(2, "0")}`;

// --- report (always, before any writes) ---
console.log(`\nChangelog version cut${APPLY ? "" : "  (DRY RUN — pass --apply to write)"}`);
console.log(`  last cut version : ${lastTag}${last.fromLegacy ? " (legacy baseline)" : ""}`);
console.log(`  highest severity : ${topSeverity}`);
console.log(`  NEW VERSION      : ${nextTag}   (${date})`);
console.log(`  entries included (${uncut.length}):`);
for (const e of uncut) console.log(`    • ${e.file}  [${e.type ?? "no-type"}]`);
console.log("");

if (!APPLY) {
  console.log("Dry run only — no files changed. Re-run with --apply to perform the cut.\n");
  process.exit(0);
}

// --- apply: stamp `version:` into each entry (additive), then write the version file ---
for (const e of uncut) {
  const path = join(ENTRIES_DIR, e.file);
  const lines = readFileSync(path, "utf-8").split("\n");
  let close = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === "---") {
      close = i;
      break;
    }
  }
  if (close === -1) {
    console.error(`✗ ${e.file}: no closing frontmatter fence, skipped`);
    continue;
  }
  lines.splice(close, 0, `version: ${nextTag}`);
  writeFileSync(path, lines.join("\n"));
}

if (!existsSync(VERSIONS_DIR)) mkdirSync(VERSIONS_DIR, { recursive: true });
const versionFile = join(VERSIONS_DIR, `${nextTag}.md`);
writeFileSync(versionFile, `---\nversion: ${nextTag}\ndate: ${date}\nblurb: ""\n---\n`);

console.log(`✓ Cut ${nextTag}: stamped ${uncut.length} entries and wrote ${versionFile}.`);
console.log(`  Next step (manual): write the narrative into ${versionFile}'s blurb.\n`);
