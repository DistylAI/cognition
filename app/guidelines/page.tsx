import type { Metadata } from "next";
import { Markdown } from "@/components/Markdown";
import { loadContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Guidelines",
  description:
    "Cognition component semantics, anti-patterns, the legacy migration map, and the dark mode contract.",
};

const componentRules = [
  { c: "Button", interactive: "Yes", action: "Yes", use: "Submit, save, open dialog, trigger mutation" },
  { c: "Tag", interactive: "No", action: "No", use: "Non-interactive label, category, keyword" },
  { c: "Badge", interactive: "No", action: "No", use: "Status indicator, count, state" },
  { c: "Chip", interactive: "Yes", action: "No", use: "Selectable filter or toggle option" },
  { c: "Link", interactive: "Yes", action: "Navigates", use: "Navigation to a route or URL" },
];

export default async function GuidelinesPage() {
  const spec = await loadContent("cognition-spec.md");

  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">
        Foundations
      </p>
      <h1 className="text-h1 text-text-default">
        Guidelines
      </h1>
      <p className="mt-3 max-w-2xl text-body text-text-subtle">
        The rules every Distyl frontend follows. Use the semantic token for
        intent, the correct component for the job, and let the token layer handle
        dark mode.
      </p>

      {/* Component quick-reference */}
      <h2
        id="component-semantics"
        className="mt-12 mb-4 scroll-mt-8 border-b border-border-default pb-2 text-h2 text-text-default"
      >
        Component semantics
      </h2>
      <p className="mb-5 text-small">
        Every interactive element must be the semantically correct component.
        Using the wrong element is a bug, not a style choice.
      </p>
      <div className="overflow-x-auto rounded-lg border border-border-default">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-background-secondary">
            <tr>
              {["Component", "Interactive", "Triggers action", "Use for"].map(
                (h) => (
                  <th
                    key={h}
                    className="border-b border-border-default px-4 py-2.5 text-left text-xs font-semibold text-text-default"
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {componentRules.map((r) => (
              <tr key={r.c}>
                <td className="border-b border-border-subtle px-4 py-2.5 text-xs">
                  <span className="font-mono text-xs font-semibold text-text-default">
                    {r.c}
                  </span>
                </td>
                <td className="border-b border-border-subtle px-4 py-2.5 text-xs font-normal text-text-default">
                  {r.interactive}
                </td>
                <td className="border-b border-border-subtle px-4 py-2.5 text-xs font-normal text-text-default">
                  {r.action}
                </td>
                <td className="border-b border-border-subtle px-4 py-2.5 text-xs font-normal text-text-subtle">
                  {r.use}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Do / Don't */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-border-danger bg-background-danger p-5">
          <div className="mb-2 text-sm font-bold text-text-danger">
            Don't — bypass the system
          </div>
          <pre className="overflow-x-auto font-mono text-xs leading-6 text-text-default">
{`className="bg-[#f5f5f5] text-gray-500"
<button className="rounded-full px-2">Eng</button>
style={{ padding: '13px' }}
className="bg-white dark:bg-gray-950"`}
          </pre>
        </div>
        <div className="rounded-lg border border-border-success bg-background-success p-5">
          <div className="mb-2 text-sm font-bold text-text-success">
            Do — semantic tokens & components
          </div>
          <pre className="overflow-x-auto font-mono text-xs leading-6 text-text-default">
{`className="bg-background-subtle text-text-subtle"
<Tag>Engineering</Tag>
className="p-3"
className="bg-background-default text-text-default"`}
          </pre>
        </div>
      </div>

      {/* Full spec */}
      <h2
        id="full-specification"
        className="mt-14 mb-4 scroll-mt-8 border-b border-border-default pb-2 text-h2 text-text-default"
      >
        Full specification
      </h2>
      <p className="mb-2 text-small">
        The complete Cognition rules document, verbatim. Drop it in as{" "}
        <code className="rounded-sm border border-border-subtle bg-background-secondary px-1.5 py-0.5 font-mono text-xs text-text-default">
          CLAUDE.md
        </code>{" "}
        to make any AI coding tool generate Cognition-compliant code.
      </p>
      <Markdown content={spec} />
    </div>
  );
}
