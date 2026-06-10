// Build-time guard: fail if the hand-authored Tokens page data (lib/tokens.ts)
// drifts from the source of truth (app/globals.css). The Tokens page swatches
// render live from CSS vars, but the printed light/dark hex values and the set
// of documented tokens are hand-maintained — this keeps them honest.
//
// Checks color tokens only (the --color-* vars with hex values): value drift in
// either theme, stale tokens documented but absent from globals, and tokens in
// @theme that aren't documented on the page. Runs in `npm run build`.
import { readFileSync } from "node:fs";

const cssPath = process.argv[2] || "app/globals.css";
const tokensPath = process.argv[3] || "lib/tokens.ts";

const css = readFileSync(cssPath, "utf-8");
const toks = readFileSync(tokensPath, "utf-8");

const COLOR_RE = /(--color-[a-z0-9-]+):\s*(#[0-9A-Fa-f]{3,6})/g;

function block(re, label) {
  const m = css.match(re);
  if (!m) {
    console.error(`✗ check-tokens: could not find the ${label} block in ${cssPath}`);
    process.exit(1);
  }
  return Object.fromEntries([...m[1].matchAll(COLOR_RE)].map((x) => [x[1], x[2].toLowerCase()]));
}

const light = block(/@theme\s*\{([^}]*)\}/, "@theme");
const dark = {};
for (const m of css.matchAll(/\[data-theme="dark"\]\s*\{([^}]*)\}/g)) {
  for (const x of m[1].matchAll(COLOR_RE)) dark[x[1]] = x[2].toLowerCase();
}

const entries = [
  ...toks.matchAll(
    /cssVar:\s*"(--color-[a-z0-9-]+)"[\s\S]*?light:\s*"(#[0-9A-Fa-f]{3,6})"[\s\S]*?dark:\s*"(#[0-9A-Fa-f]{3,6})"/g,
  ),
].map((m) => ({ cssVar: m[1], light: m[2].toLowerCase(), dark: m[3].toLowerCase() }));

const errors = [];
const documented = new Set(entries.map((e) => e.cssVar));

for (const e of entries) {
  if (!(e.cssVar in light)) {
    errors.push(`${e.cssVar}: documented in ${tokensPath} but missing from @theme in ${cssPath}`);
    continue;
  }
  if (light[e.cssVar] !== e.light) {
    errors.push(`${e.cssVar} light: page=${e.light} globals=${light[e.cssVar]}`);
  }
  const gd = dark[e.cssVar];
  if (gd && gd !== e.dark) {
    errors.push(`${e.cssVar} dark: page=${e.dark} globals=${gd}`);
  }
}
for (const k of Object.keys(light)) {
  if (!documented.has(k)) {
    errors.push(`${k}: in @theme but NOT documented on the Tokens page (lib/tokens.ts)`);
  }
}

if (errors.length) {
  console.error(
    `\n✗ check-tokens: ${errors.length} drift issue(s) between ${tokensPath} and ${cssPath}:\n` +
      errors.map((e) => `  • ${e}`).join("\n") +
      `\n\nUpdate lib/tokens.ts (or globals.css) so they match, then rebuild.\n`,
  );
  process.exit(1);
}

console.log(
  `✓ check-tokens: ${entries.length} color tokens in lib/tokens.ts match app/globals.css (light + dark).`,
);
