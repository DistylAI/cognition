import type { Metadata } from "next";
import { Markdown } from "@/components/Markdown";
import { loadContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Codebase Audit",
  description:
    "Cognition v1.2 design system audit across fe-distillery, distillery, and distillery-platform.",
};

const headline = [
  { stat: "344", label: "Hardcoded hex in fe-distillery", tone: "danger" as const },
  { stat: "2,061", label: "Raw Tailwind color utilities", tone: "danger" as const },
  { stat: "0", label: "Cognition tokens defined", tone: "warning" as const },
  { stat: "26", label: "Rogue dark: classes", tone: "warning" as const },
];

const toneClass: Record<"danger" | "warning", string> = {
  danger: "text-text-danger",
  warning: "text-text-warning",
};

export default async function AuditPage() {
  const audit = await loadContent("design-system-audit.md");

  return (
    <div>
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-text-subtle">
        Status
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-text-default">
        Codebase Audit
      </h1>
      <p className="mt-3 max-w-2xl text-lg leading-8 text-text-subtle">
        Where the three Distyl repos stand against Cognition v1.2 today. Run as a
        three-subagent parallel sweep against the canonical token set and
        hard-rule checklist.
      </p>

      {/* Headline metrics */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {headline.map((h) => (
          <div
            key={h.label}
            className="rounded-lg border border-border-default bg-background-subtle p-4"
          >
            <div className={`font-mono text-2xl font-bold ${toneClass[h.tone]}`}>
              {h.stat}
            </div>
            <div className="mt-1 text-xs leading-4 text-text-subtle">
              {h.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-border-primary bg-background-accent p-5">
        <p className="text-sm leading-6 text-text-default">
          <strong className="font-bold">Bottom line:</strong> the codebase is not
          yet ready to receive Cognition v1.2 values. The brand purple{" "}
          <code className="font-mono text-text-primary">#5D4EE7</code> is already
          present, so a clean rename plus a dark-mode reshape preserves brand
          exactly — but the rename is full-stack.
        </p>
      </div>

      <div className="mt-10 border-t border-border-default pt-2" />
      <Markdown content={audit} />
    </div>
  );
}
