import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typography",
  description:
    "Geist for all UI and body copy. Geist Mono for code and technical values only — the Cognition v1.2 type scale and weights.",
};

// Live specimen rows. `sample` is the scale comparison line (drawn from the
// Building Cognition write-up); `prose` is a representative line in running copy.
const scale = [
  { label: "H1", px: 36, weight: 700, weightLabel: "Bold", sample: "Building Cognition", prose: "Cognition" },
  { label: "H2", px: 30, weight: 600, weightLabel: "Semibold", sample: "Why a system", prose: "Design system" },
  { label: "H3", px: 24, weight: 600, weightLabel: "Semibold", sample: "Three layers", prose: "Tokens and components" },
  { label: "H4", px: 20, weight: 600, weightLabel: "Semibold", sample: "Token swap, skin swap", prose: "Semantic colors" },
  { label: "Lead", px: 18, weight: 600, weightLabel: "Semibold", sample: "The shared foundation every product sits on", prose: "One source of truth." },
  { label: "Body", px: 16, weight: 400, weightLabel: "Regular", sample: "A design system is not a deliverable. It is infrastructure.", prose: "The quick brown fox jumps over the lazy dog." },
  { label: "Small", px: 14, weight: 500, weightLabel: "Medium", sample: "Primitives, semantic, component — never crossed.", prose: "Secondary copy and helper text." },
  { label: "Caption", px: 12, weight: 400, weightLabel: "Regular", sample: "Cognition v1.2 · maintained by Research & Design", prose: "Captions, labels, metadata." },
];

const weights = [
  { weight: 400, label: "Regular" },
  { weight: 500, label: "Medium" },
  { weight: 600, label: "Semibold" },
  { weight: 700, label: "Bold" },
];

export default function TypographyPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Foundations</p>
      <h1 className="text-h1 text-text-default">Typography</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        <strong className="font-bold text-text-default">Geist</strong> for all UI
        and body copy.{" "}
        <strong className="font-bold text-text-default">Geist Mono</strong> for
        code and technical values only.
      </p>

      {/* On-this-page — desktop uses the sidebar subnav, so this is mobile-only */}
      <nav className="mt-6 flex flex-wrap gap-2 md:hidden">
        {[
          { id: "scale", title: "Type scale" },
          { id: "weights", title: "Weights" },
          { id: "context", title: "In context" },
          { id: "mono", title: "Monospace" },
        ].map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-border-default px-3 py-1 text-sm font-medium text-text-subtle transition-colors hover:border-border-strong hover:text-text-default"
          >
            {s.title}
          </a>
        ))}
      </nav>

      {/* Type scale */}
      <section id="scale" className="scroll-mt-8">
        <h3 className="mt-14 mb-1 border-b border-border-default pb-2 text-h3 text-text-default">
          Type scale
        </h3>
        <p className="mb-6 text-small">
          Eight steps, Geist throughout. Each row renders at its live size and
          weight.
        </p>

        <div className="space-y-4 rounded-lg border border-border-default bg-background-subtle p-6">
          {scale.map((t) => (
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

        <p className="mt-8 mb-3 text-small">Each style set in running copy:</p>
        <div className="space-y-4 rounded-lg border border-border-default bg-background-subtle p-6">
          {scale.map((t) => (
            <div
              key={t.label}
              className="flex items-baseline justify-between gap-4 border-b border-border-subtle pb-3 last:border-0 last:pb-0"
            >
              <span
                className="min-w-0 text-text-default"
                style={{
                  fontSize: `${t.px}px`,
                  fontWeight: t.weight,
                  fontVariationSettings: `"wght" ${t.weight}`,
                }}
              >
                {t.prose}
              </span>
              <span className="shrink-0 font-mono text-xs text-text-subtle">
                {t.label} · {t.px}px · {t.weightLabel}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Weights */}
      <section id="weights" className="scroll-mt-8">
        <h3 className="mt-14 mb-1 border-b border-border-default pb-2 text-h3 text-text-default">
          Weights
        </h3>
        <p className="mb-6 text-small">
          Geist is variable; these four weights cover the system.
        </p>

        <div className="space-y-3">
          {weights.map((w) => (
            <div
              key={w.weight}
              className="flex items-baseline justify-between gap-4 rounded-lg border border-border-default p-4"
            >
              <span
                className="min-w-0 text-lg text-text-default"
                style={{
                  fontWeight: w.weight,
                  fontVariationSettings: `"wght" ${w.weight}`,
                }}
              >
                The quick brown fox jumps over the lazy dog.
              </span>
              <span className="shrink-0 font-mono text-xs text-text-subtle">
                {w.weight} · {w.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* In context */}
      <section id="context" className="scroll-mt-8">
        <h3 className="mt-14 mb-1 border-b border-border-default pb-2 text-h3 text-text-default">
          In context
        </h3>
        <p className="mb-6 text-small">The styles working together as a document.</p>

        <div className="rounded-lg border border-border-default bg-background-subtle p-8">
          <article className="mx-auto max-w-2xl">
            <h1 className="text-h1 text-text-default">Building Cognition</h1>
            <p className="text-body mt-4">
              Cognition is Distyl AI&apos;s design system — the shared foundation
              every product implementation sits on. It exists so engineers ship
              faster, interfaces stay consistent, and the cost of a rebrand is one
              token file, not a codebase.
            </p>

            <h2 className="text-h2 mt-10 text-text-default">Why a system</h2>
            <p className="text-body mt-4">
              Ad hoc UI compounds. Every hardcoded hex value, every one-off
              spacing decision, every parallel component is debt that slows the
              next build and the one after that.
            </p>
            <blockquote className="text-blockquote mt-6 border-l-2 border-border-default pl-4 text-text-subtle">
              A design system is not a deliverable. It is infrastructure. It earns
              its place the same way a database does — by making everything built
              on top of it faster and more reliable.
            </blockquote>

            <h2 className="text-h2 mt-10 text-text-default">Three layers</h2>
            <ol className="text-list mt-4 list-decimal pl-6 text-text-default">
              <li>Primitives — raw values, never used directly</li>
              <li>Semantic — purpose-named aliases, where dark mode lives</li>
              <li>
                Component — scoped tokens referencing semantic, never primitives
              </li>
            </ol>

            <h2 className="text-h2 mt-10 text-text-default">
              Token swap, skin swap
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border-default">
                    <th className="py-2 pr-4 font-semibold text-text-default">
                      Surface
                    </th>
                    <th className="py-2 pr-4 font-semibold text-text-default">
                      Token layer
                    </th>
                    <th className="py-2 font-semibold text-text-default">
                      Result
                    </th>
                  </tr>
                </thead>
                <tbody className="text-text-subtle">
                  <tr className="border-b border-border-default">
                    <td className="py-2 pr-4">Distyl platform</td>
                    <td className="py-2 pr-4">Default semantic</td>
                    <td className="py-2">Purple, dark mode</td>
                  </tr>
                  <tr className="border-b border-border-default">
                    <td className="py-2 pr-4">Hoover impl</td>
                    <td className="py-2 pr-4">Remapped semantic</td>
                    <td className="py-2">Custom brand</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Toolkit app</td>
                    <td className="py-2 pr-4">Remapped semantic</td>
                    <td className="py-2">Neutral theme</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-body mt-4">
              Use <code className="font-mono">font-mono</code> for inline
              technical values like{" "}
              <code className="text-inline-code rounded-sm bg-background-secondary px-1.5 py-0.5 text-text-default">
                --color-background-primary
              </code>{" "}
              and{" "}
              <code className="text-inline-code rounded-sm bg-background-secondary px-1.5 py-0.5 text-text-default">
                var(--color-chart-1)
              </code>
              .
            </p>

            <h2 className="text-h2 mt-10 text-text-default">The moral</h2>
            <blockquote className="text-blockquote mt-4 border-l-2 border-border-default pl-4 text-text-subtle">
              Never underestimate the cost of building the same thing twice.
            </blockquote>
          </article>
        </div>
      </section>

      {/* Monospace */}
      <section id="mono" className="scroll-mt-8">
        <h3 className="mt-14 mb-1 border-b border-border-default pb-2 text-h3 text-text-default">
          Monospace
        </h3>
        <p className="mb-6 text-small">
          <strong className="font-bold text-text-default">Geist Mono</strong> for
          code and technical values only — never for prose.
        </p>

        <div className="rounded-lg border border-border-default bg-background-inverse p-5">
          <pre className="overflow-x-auto">
            <code className="font-mono text-sm leading-6 text-text-inverse">
              {`const system = "Cognition";
const tokens = { primary: "var(--color-background-primary)" };
const theme = (key: string) => \`var(--color-\${key})\`;
export default { system, tokens, theme };`}
            </code>
          </pre>
        </div>

        <p className="mt-4 text-small">
          Geist is self-hosted via the{" "}
          <code className="font-mono text-text-default">geist</code> package
          (Vercel&apos;s official build), not the Google font.{" "}
          <a
            href="https://vercel.com/font"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-text-primary underline-offset-4 hover:underline"
          >
            Download Geist →
          </a>
        </p>
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-sm text-text-subtle">
        Type styles are the Cognition v1.2 named text styles in{" "}
        <code className="font-mono text-text-default">globals.css</code> — set the
        type with the <code className="font-mono text-text-default">text-*</code>{" "}
        class, the color with a token. The full token scale lives under{" "}
        <a
          href="/tokens#typescale"
          className="font-medium text-text-primary underline-offset-4 hover:underline"
        >
          Tokens → Type Scale
        </a>
        .
      </footer>
    </div>
  );
}
