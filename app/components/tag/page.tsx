import type { Metadata } from "next";
import { Tag } from "@/components/ui/tag";
import { CodeBlock, CopyButton } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Tag",
  description:
    "Tag component — non-interactive label / category / keyword. Proposed canonical Tag (fe-distillery has none yet).",
};

const doCode = `<Tag>Engineering</Tag>`;

const installCode = `import { Tag } from "@/components/ui/tag";

export function Category() {
  return <Tag>Engineering</Tag>;
}`;

export default function TagPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Tag</h1>
      <p className="mt-3 max-w-2xl text-body text-text-subtle">
        Use for non-interactive labels, categories, and keywords. Not for
        actions, navigation, or status.
      </p>

      <div className="mt-4 rounded-lg border border-border-primary bg-background-accent p-4">
        <p className="text-small text-text-default">
          <span className="font-bold">Proposed.</span> fe-distillery has no
          first-class <code className="font-mono">Tag</code> yet — only the
          <code className="font-mono"> shadcn-io/tags</code> multi-select
          combobox. This documents the canonical Tag the audit recommends
          building.
        </p>
      </div>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h2 className="mt-12 mb-4 text-h2 text-text-default">Preview</h2>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <Tag>Engineering</Tag>
        </div>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h2 className="mt-12 mb-4 text-h2 text-text-default">Variants</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <Tag>Default</Tag>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Tag>Default</Tag>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          A single default style — no variants or size axes exist in any source
          API, so none are invented.
        </p>
      </section>

      {/* Don't / Do */}
      <section id="do-dont" className="scroll-mt-8">
        <h2 className="mt-12 mb-4 text-h2 text-text-default">
          Don&apos;t &amp; Do
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t render a category with an outline button (tower&apos;s
              ActionPill) or a raw styled span (spear&apos;s status pill) — and a
              status belongs in a Badge, not a Tag.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-bold text-text-success">Do</span>
              <CopyButton value={doCode} />
            </div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {doCode}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Copy-paste */}
      <section id="copy-paste" className="mt-12 scroll-mt-8">
        <CodeBlock
          code={installCode}
          className="rounded-lg border border-border-default bg-background-subtle"
        />
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        Non-interactive (<code className="font-mono text-text-default">span</code>{" "}
        by default, <code className="font-mono text-text-default">asChild</code>{" "}
        supported). Built on the Cognition{" "}
        <code className="font-mono text-text-default">tag.*</code> tokens
        (background.secondary / text.default / border.default).
      </footer>
    </div>
  );
}
