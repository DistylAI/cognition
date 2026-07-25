// Manual guard (NOT yet wired into CI): validate that every changelog entry under
// changelog/entries/ conforms to changelog/CONVENTIONS.md. Checks per entry: a valid
// `type` (patch|minor|major), a valid `category` (component|token|pattern|docs), a
// flat single-line `rationale` (folded / multi-line YAML is banned — it's fragile
// under strict parsing), and — if present — a `version` matching vX.X.X.
//
// Run manually: `node scripts/check-changelog.mjs`. The automated CI gate is still
// deferred; see the "Automated validation" section of changelog/CONVENTIONS.md.
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const dir = process.argv[2] || "changelog/entries";

const TYPES = ["patch", "minor", "major"];
const CATEGORIES = ["component", "token", "pattern", "docs"];

const files = readdirSync(dir)
  .filter((f) => f.endsWith(".md"))
  .sort();

// Pull a top-level frontmatter field's raw value (the text after `<name>:` on
// its line, e.g. field(lines, "type")). Returns null if the field is absent.
function field(lines, name) {
  const line = lines.find((l) => l.startsWith(`${name}:`));
  return line ? line.slice(name.length + 1).trim() : null;
}

const errors = [];

for (const f of files) {
  const lines = readFileSync(join(dir, f), "utf-8").split("\n");

  const type = field(lines, "type");
  if (type === null) errors.push(`${f}: missing \`type\``);
  else if (!TYPES.includes(type))
    errors.push(`${f}: invalid type "${type}" (expected ${TYPES.join("|")})`);

  const category = field(lines, "category");
  if (category === null) errors.push(`${f}: missing \`category\``);
  else if (!CATEGORIES.includes(category))
    errors.push(`${f}: invalid category "${category}" (expected ${CATEGORIES.join("|")})`);

  // A flat rationale opens and closes its quote on the same line. A folded /
  // multi-line value (or a `>`/`|` block scalar) won't, so it fails this test.
  const rationale = field(lines, "rationale");
  if (rationale === null) errors.push(`${f}: missing \`rationale\``);
  else if (!/^".*"$/.test(rationale))
    errors.push(`${f}: rationale must be a flat single-line quoted string (folded/multi-line YAML is banned)`);

  // `version` is optional (added by the cut script, not authored). When present it
  // must be three-part semver vX.X.X.
  const version = field(lines, "version");
  if (version !== null && !/^v\d+\.\d+\.\d+$/.test(version))
    errors.push(`${f}: invalid version "${version}" (expected vX.X.X)`);
}

if (errors.length) {
  console.error(
    `\n✗ check-changelog: ${errors.length} issue(s) in ${dir}:\n` +
      errors.map((e) => `  • ${e}`).join("\n") +
      `\n\nSee changelog/CONVENTIONS.md for the schema.\n`,
  );
  process.exit(1);
}

console.log(
  `✓ check-changelog: ${files.length} entries in ${dir} conform (type, category, flat rationale).`,
);
