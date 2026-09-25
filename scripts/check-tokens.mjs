// Build-time guard: fail if the hand-authored Tokens page data (lib/tokens.ts)
// or the Tailwind config drifts from the source of truth
// (content/folio-tokens.css). The Tokens page swatches render live from CSS
// vars, but the printed light/dark hex values and the set of documented tokens
// are hand-maintained — this keeps them honest.
//
// Checks color tokens only (the --color-* vars with hex values): value drift in
// either theme, stale tokens documented but absent from the token file, tokens
// that aren't documented on the page, and tokens with no Tailwind utility.
// Runs in `npm run build`.
import { readFileSync } from "node:fs";

const cssPath = process.argv[2] || "content/folio-tokens.css";
const tokensPath = process.argv[3] || "lib/tokens.ts";
const configPath = process.argv[4] || "tailwind.config.ts";

const css = readFileSync(cssPath, "utf-8");
const toks = readFileSync(tokensPath, "utf-8");
const config = readFileSync(configPath, "utf-8");

const COLOR_RE = /(--color-[a-z0-9-]+):\s*(#[0-9A-Fa-f]{3,6})/g;

function block(re, label) {
  const m = css.match(re);
  if (!m) {
    console.error(`✗ check-tokens: could not find the ${label} block in ${cssPath}`);
    process.exit(1);
  }
  return Object.fromEntries([...m[1].matchAll(COLOR_RE)].map((x) => [x[1], x[2].toLowerCase()]));
}

const light = block(/^:root\s*\{([^}]*)\}/m, ":root");
// Tokens the dark block does not remap (chart) keep their light value.
const dark = { ...light, ...block(/^\[data-theme="dark"\]\s*\{([^}]*)\}/m, '[data-theme="dark"]') };

const entries = [
  ...toks.matchAll(
    /cssVar:\s*"(--color-[a-z0-9-]+)"[\s\S]*?light:\s*"(#[0-9A-Fa-f]{3,6})"[\s\S]*?dark:\s*"(#[0-9A-Fa-f]{3,6})"/g,
  ),
].map((m) => ({ cssVar: m[1], light: m[2].toLowerCase(), dark: m[3].toLowerCase() }));

const configured = new Set(
  [...config.matchAll(/tokens\("([a-z]+)",\s*\[([^\]]*)\]\)/g)].flatMap((m) =>
    [...m[2].matchAll(/"([a-z0-9-]+)"/g)].map((n) => `--color-${m[1]}-${n[1]}`),
  ),
);

const errors = [];
const documented = new Set(entries.map((e) => e.cssVar));

for (const e of entries) {
  if (!(e.cssVar in light)) {
    errors.push(`${e.cssVar}: documented in ${tokensPath} but missing from :root in ${cssPath}`);
    continue;
  }
  if (light[e.cssVar] !== e.light) {
    errors.push(`${e.cssVar} light: page=${e.light} tokens=${light[e.cssVar]}`);
  }
  if (dark[e.cssVar] !== e.dark) {
    errors.push(`${e.cssVar} dark: page=${e.dark} tokens=${dark[e.cssVar]}`);
  }
}
for (const k of Object.keys(light)) {
  if (!documented.has(k)) {
    errors.push(`${k}: in ${cssPath} but NOT documented on the Tokens page (${tokensPath})`);
  }
  if (!configured.has(k)) {
    errors.push(`${k}: in ${cssPath} but has no utility in ${configPath}`);
  }
}
for (const k of configured) {
  if (!(k in light)) {
    errors.push(`${k}: in ${configPath} but missing from ${cssPath}`);
  }
}

if (errors.length) {
  console.error(
    `\n✗ check-tokens: ${errors.length} drift issue(s) between ${cssPath}, ${tokensPath}, and ${configPath}:\n` +
      errors.map((e) => `  • ${e}`).join("\n") +
      `\n\nUpdate the files so they match, then rebuild.\n`,
  );
  process.exit(1);
}

console.log(
  `✓ check-tokens: ${entries.length} color tokens match across ${cssPath}, ${tokensPath}, and ${configPath} (light + dark).`,
);
