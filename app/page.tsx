import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <p className="mb-2 text-caption">
        Cognition v1.2 · Distyl AI
      </p>

      <h1 className="text-lead tracking-[-0.025em] text-text-default">
        Distyl&apos;s design <span className="text-text-primary">foundation</span>.
      </h1>

      <p className="mt-4 max-w-2xl text-lead text-text-default">
        Cognition is Distyl&apos;s Product Experience Platform. It captures the
        reusable decisions that define how every product surface looks, behaves,
        and evolves.
      </p>

      <p className="mt-4 max-w-2xl text-body text-text-default">
        Product Experience is built on systems, not one-off decisions. Cognition
        transforms validated design and engineering decisions into shared
        infrastructure that every product, implementation, and team can build
        upon. Every token, component, pattern, and interaction exists for one
        reason: to make good decisions reusable. As the platform evolves,
        improvements become part of the system instead of being rebuilt across
        products and customer implementations.
      </p>

      <p className="mt-6 max-w-2xl text-lead text-text-default">
        The result is coherence.
      </p>

      <p className="mt-4 max-w-2xl text-body text-text-default">
        A coherent product is easier to build, easier to learn, and easier to
        trust. Engineering spends less time rebuilding. Designers spend less time
        redefining patterns. Customers spend less time learning new behaviors.
        Create systems that scale by making good decisions reusable.
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
          className="rounded-md border border-border-default bg-background-default px-5 py-2.5 text-label transition-colors hover:border-border-strong"
        >
          Read the codebase audit
        </Link>
      </div>

      {/* Design principles */}
      <h2 className="mt-16 text-lead text-text-default">
        Momentum. Durability. Elevation.
      </h2>
      <p className="mt-2 max-w-2xl text-body text-text-default">
        Distyl&apos;s three design principles.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          {
            title: "Momentum",
            body: "Ideas and inspiration turn vision into reality. Powered by creativity and curiosity, we push boundaries, adapt, and evolve.",
            note: "Move quickly with intention.",
          },
          {
            title: "Durability",
            body: "Building a practice of craft for a future that endures. Each choice reflects a commitment to lasting quality, sustainability, and purpose.",
            note: "Design for interoperability.",
          },
          {
            title: "Elevation",
            body: "Relentlessly pursue optimal solutions and outcomes. By learning, adapting, and fine-tuning, we expand the limits of functionality and usability.",
            note: "Pursue delightful solutions.",
          },
        ].map((p) => (
          <div
            key={p.title}
            className="rounded-lg border border-border-default bg-background-subtle p-5"
          >
            <h3 className="text-title text-text-default">{p.title}</h3>
            <p className="mt-1 text-small font-medium text-text-subtle">{p.note}</p>
            <p className="mt-3 text-small text-text-default">{p.body}</p>
          </div>
        ))}
      </div>

      {/* Stages of Cognition */}
      <h2 className="mt-16 text-lead text-text-default">
        Belief. Truth. Coherence.
      </h2>
      <p className="mt-2 max-w-2xl text-body text-text-default">
        Three phases carry every decision from hypothesis to shared system.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          {
            title: "Belief",
            body: "Inspiration and ideation: concepts, sketches, and early briefs. Individual-level work, generally not yet seen by users.",
            note: "Something I understand.",
          },
          {
            title: "Truth",
            body: "Validation through prototypes, requirements, scoping, and specification, tested with research and QA. Team-level work, generally seen by pre- or alpha users.",
            note: "Something we understand.",
          },
          {
            title: "Coherence",
            body: "Versioning and publishing with polish, quality, and accessibility, verified by testing and research. Org-level, repeatable, and generally publicly available.",
            note: "Something they understand.",
          },
        ].map((p) => (
          <div
            key={p.title}
            className="rounded-lg border border-border-default bg-background-subtle p-5"
          >
            <h3 className="text-title text-text-default">{p.title}</h3>
            <p className="mt-1 text-small font-medium text-text-subtle">{p.note}</p>
            <p className="mt-3 text-small text-text-default">{p.body}</p>
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
            body: "Where the three Distyl repos stand against Cognition v1.2 today -- and what blocks the rebrand.",
          },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-start justify-between gap-4 p-5 transition-colors hover:bg-background-subtle"
          >
            <div>
              <div className="text-title text-text-default">{item.title}</div>
              <p className="mt-1 text-small">{item.body}</p>
            </div>
            <span aria-hidden className="mt-1 text-text-subtle">
              →
            </span>
          </Link>
        ))}
      </div>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        Cognition v1.2 · June 2026 · Questions?{" "}
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
