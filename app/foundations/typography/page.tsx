import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typography",
  description:
    "Geist for all UI and body copy. Geist Mono for code and technical values only — the Cognition v1.2 type scale and weights.",
};

// Live specimen rows. Sample text is drawn from the Building Cognition write-up.
const scale = [
  { label: "H1", px: 36, weight: 700, weightLabel: "Bold", sample: "Building Cognition" },
  { label: "H2", px: 30, weight: 600, weightLabel: "Semibold", sample: "Why a system" },
  { label: "H3", px: 24, weight: 600, weightLabel: "Semibold", sample: "Three layers" },
  { label: "H4", px: 20, weight: 600, weightLabel: "Semibold", sample: "Token swap, skin swap" },
  { label: "Lead", px: 18, weight: 600, weightLabel: "Semibold", sample: "The shared foundation every product sits on" },
  { label: "Body", px: 16, weight: 400, weightLabel: "Regular", sample: "A design system is not a deliverable. It is infrastructure." },
  { label: "Small", px: 14, weight: 500, weightLabel: "Medium", sample: "Primitives, semantic, component — never crossed." },
  { label: "Caption", px: 12, weight: 400, weightLabel: "Regular", sample: "Cognition v1.2 · maintained by Research & Design" },
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
      <p className="mt-3 max-w-2xl text-body text-text-subtle">
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
      </section>

      {/* Weights */}
      <section id="weights" className="scroll-mt-8">
        <h3 className="mt-14 mb-1 border-b border-border-default pb-2 text-h3 text-text-default">
          Weights
        </h3>
        <p className="mb-6 text-small">
          Geist is variable; these four weights cover the system.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {weights.map((w) => (
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
          <code className="font-mono text-sm text-text-inverse">
            font-family: Geist Mono — 0123456789 {`{ }`} =&gt; const x = 42;
          </code>
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
