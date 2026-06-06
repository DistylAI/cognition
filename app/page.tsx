import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <p className="mb-2 text-xs font-normal text-text-subtle">
        Cognition v1.2 · Distyl AI
      </p>

      <h1 className="text-h1 tracking-[-0.025em] text-text-default">
        The design system that makes everything <span className="text-text-primary">look and behave like Distyl</span>.
      </h1>

      <p className="mt-4 max-w-2xl text-body text-text-subtle">
        Cognition is the single source of truth for color, spacing, radius,
        typography, and component semantics across every Distyl frontend. Tokens
        carry brand and dark mode automatically — components never reach past the
        system.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/tokens"
          className="rounded-md bg-background-primary px-5 py-2.5 text-sm font-medium text-text-inverse transition-opacity hover:opacity-90"
        >
          Explore tokens
        </Link>
        <Link
          href="/audit"
          className="rounded-md border border-border-default bg-background-default px-5 py-2.5 text-sm font-medium text-text-default transition-colors hover:border-border-strong"
        >
          Read the codebase audit
        </Link>
      </div>

      {/* Principles */}
      <div className="mt-16 grid gap-4 sm:grid-cols-3">
        {[
          {
            title: "Semantic, not literal values",
            body: "Use bg-background-subtle, not bg-gray-100. Names describe intent, so values can change underneath without touching components.",
          },
          {
            title: "Token layer, not dark classes",
            body: "Themes remap [data-theme=\"dark\"] on <html>. No dark: classes anywhere — the token layer does all the work.",
          },
          {
            title: "Right component, every time",
            body: "Button, Tag, Badge, Chip, and Link each have one job. Using the wrong element is a bug, not a style choice.",
          },
        ].map((p) => (
          <div
            key={p.title}
            className="rounded-lg border border-border-default bg-background-subtle p-5"
          >
            <h3 className="text-h4 text-text-default">{p.title}</h3>
            <p className="mt-2 text-small">{p.body}</p>
          </div>
        ))}
      </div>

      {/* Key facts */}
      <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { stat: "32", label: "Canonical tokens" },
          { stat: "#5D4EE7", label: "Brand purple" },
          { stat: "Geist", label: "UI typeface" },
          { stat: "4px", label: "Spacing base unit" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-border-default bg-background-subtle p-5"
          >
            <div className="font-mono text-xl font-bold text-text-default">
              {s.stat}
            </div>
            <div className="mt-1 text-xs font-normal text-text-subtle">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Navigation cards */}
      <div className="mt-12 divide-y divide-border-subtle rounded-lg border border-border-default">
        {[
          {
            href: "/tokens",
            title: "Tokens",
            body: "Every background, text, border, and feedback color with live swatches, plus radius, spacing, and the type scale.",
          },
          {
            href: "/guidelines",
            title: "Guidelines",
            body: "Component semantics, anti-patterns, the legacy migration map, and the dark mode contract.",
          },
          {
            href: "/audit",
            title: "Codebase Audit",
            body: "Where the three Distyl repos stand against Cognition v1.2 today — and what blocks the rebrand.",
          },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-start justify-between gap-4 p-5 transition-colors hover:bg-background-subtle"
          >
            <div>
              <div className="text-h4 text-text-default">{item.title}</div>
              <p className="mt-1 text-small">{item.body}</p>
            </div>
            <span aria-hidden className="mt-1 text-text-subtle">
              →
            </span>
          </Link>
        ))}
      </div>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        Cognition v1.2 · February 2026 · Questions?{" "}
        <a
          href="https://distylai.slack.com/team/U07KY4SEFH7"
          target="_blank"
          rel="noreferrer"
          className="text-text-primary transition-opacity hover:opacity-80"
        >
          Ask Tony Yates
        </a>
      </footer>
    </div>
  );
}
