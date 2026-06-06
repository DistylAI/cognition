import type { Metadata } from "next";
import {
  colorGroups,
  radiusTokens,
  spacingTokens,
  typeScale,
  fontWeights,
} from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Tokens",
  description:
    "Cognition v1.2 tokens — backgrounds, text, borders, feedback, radius, spacing, and typography.",
};

export default function TokensPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-bold tracking-wide text-text-subtle">
        Foundations
      </p>
      <h1 className="text-h1 text-text-default">
        Tokens
      </h1>
      <p className="mt-3 max-w-2xl text-body text-text-subtle">
        The canonical Cognition v1.2 token set. Swatches below render from the
        live CSS variables — toggle the theme and they remap automatically.
        Never hardcode a hex value; always reference the token utility.
      </p>

      {/* On-this-page — desktop uses the sidebar subnav, so this is mobile-only */}
      <nav className="mt-6 flex flex-wrap gap-2 md:hidden">
        {[...colorGroups.map((g) => ({ id: g.id, title: g.title })),
          { id: "radius", title: "Radius" },
          { id: "spacing", title: "Spacing" },
          { id: "typography", title: "Typography" }].map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-border-default px-3 py-1 text-sm font-medium text-text-subtle transition-colors hover:border-border-strong hover:text-text-default"
          >
            {s.title}
          </a>
        ))}
      </nav>

      {/* Color groups */}
      {colorGroups.map((group) => (
        <section key={group.id} id={group.id} className="scroll-mt-8">
          <h2 className="mt-14 mb-1 border-b border-border-default pb-2 text-h2 text-text-default">
            {group.title}
          </h2>
          <p className="mb-6 text-small">{group.description}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            {group.tokens.map((t) => (
              <div
                key={t.cssVar}
                className="flex gap-4 rounded-lg border border-border-default bg-background-subtle p-4"
              >
                <div
                  className="h-14 w-14 shrink-0 rounded-md border border-border-default"
                  style={{ background: `var(${t.cssVar})` }}
                  aria-hidden
                />
                <div className="min-w-0">
                  <div className="truncate font-mono text-xs font-semibold text-text-default">
                    {t.name}
                  </div>
                  <div className="mt-0.5 truncate font-mono text-xs font-normal text-text-subtle">
                    {t.utility}
                  </div>
                  <p className="mt-1 text-xs font-normal leading-5 text-text-subtle">
                    {t.usage}
                  </p>
                  <div className="mt-2 flex gap-3 font-mono text-xs font-normal text-text-subtle">
                    <span>
                      <span className="text-text-disabled">light</span>{" "}
                      {t.light}
                    </span>
                    <span>
                      <span className="text-text-disabled">dark</span> {t.dark}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Radius */}
      <section id="radius" className="scroll-mt-8">
        <h2 className="mt-14 mb-1 border-b border-border-default pb-2 text-h2 text-text-default">
          Radius
        </h2>
        <p className="mb-6 text-small">
          Six steps. <code className="font-mono text-text-default">rounded-md</code>{" "}
          (8px) is the default.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {radiusTokens.map((r) => (
            <div
              key={r.name}
              className="flex flex-col items-center gap-3 rounded-lg border border-border-default bg-background-subtle p-5"
            >
              <div
                className="h-16 w-16 border-2 border-border-primary bg-background-accent"
                style={{ borderRadius: r.value }}
                aria-hidden
              />
              <div className="text-center">
                <div className="font-mono text-sm font-bold text-text-default">
                  {r.utility}
                </div>
                <div className="font-mono text-xs text-text-subtle">
                  {r.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacing */}
      <section id="spacing" className="scroll-mt-8">
        <h2 className="mt-14 mb-1 border-b border-border-default pb-2 text-h2 text-text-default">
          Spacing
        </h2>
        <p className="mb-6 text-small">
          4px base unit. Never use arbitrary px values in inline styles.
        </p>
        <div className="space-y-2 rounded-lg border border-border-default bg-background-subtle p-5">
          {spacingTokens.map((s) => (
            <div key={s.name} className="flex items-center gap-4">
              <div className="w-16 font-mono text-sm font-bold text-text-default">
                {s.utility}
              </div>
              <div className="w-12 font-mono text-xs text-text-subtle">
                {s.px}px
              </div>
              <div
                className="h-4 rounded-sm bg-background-primary"
                style={{ width: `${s.px}px` }}
                aria-hidden
              />
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section id="typography" className="scroll-mt-8">
        <h2 className="mt-14 mb-1 border-b border-border-default pb-2 text-h2 text-text-default">
          Typography
        </h2>
        <p className="mb-6 text-small">
          <strong className="font-bold text-text-default">Geist</strong> for all
          UI and body copy.{" "}
          <strong className="font-bold text-text-default">Geist Mono</strong>{" "}
          for code and technical values only.
        </p>

        <div className="space-y-4 rounded-lg border border-border-default bg-background-subtle p-6">
          {typeScale.map((t) => (
            <div
              key={t.label}
              className="flex items-baseline justify-between gap-4 border-b border-border-subtle pb-3 last:border-0 last:pb-0"
            >
              <span
                className="truncate text-text-default"
                style={{
                  fontSize: `${t.px}px`,
                  fontWeight: t.weight,
                  fontVariationSettings: `"wght" ${t.weight}`,
                }}
              >
                {t.sample}
              </span>
              <span className="shrink-0 font-mono text-xs text-text-subtle">
                {t.label} · {t.px}px · {t.weightLabel}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {fontWeights.map((w) => (
            <div
              key={w.weight}
              className="rounded-lg border border-border-default p-4 text-center"
            >
              <div
                className="text-2xl text-text-default"
                style={{
                  fontWeight: w.weight,
                  fontVariationSettings: `"wght" ${w.weight}`,
                }}
              >
                Aa
              </div>
              <div className="mt-1 font-mono text-xs text-text-subtle">
                {w.weight} · {w.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-border-default bg-background-inverse p-5">
          <code className="font-mono text-sm text-text-inverse">
            font-family: Geist Mono — 0123456789 {`{ }`} =&gt; const x = 42;
          </code>
        </div>
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-sm text-text-subtle">
        Values mirror{" "}
        <code className="font-mono text-text-default">cognition-tokens.css</code>
        . Adding a token is a MINOR bump; changing a value is a PATCH or MINOR.
      </footer>
    </div>
  );
}
