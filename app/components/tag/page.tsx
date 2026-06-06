import type { Metadata } from "next";
import { Tag } from "@/components/ui/tag";
import { CodeBlock, CopyButton } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Tag",
  description:
    "Tag component — non-interactive label / category / keyword. Proposed canonical Tag (fe-distillery has none yet).",
};

const doCode = `<Tag>Engineering</Tag>`;

const dontButtonCode = `// impls/tower/.../Agent/ActionPill.tsx — a category as a button
<Button variant="outline" size="sm" className="rounded-full">
  Engineering
</Button>`;

const dontSpanCode = `// impls/spear/ExecutionSelector.tsx — status as a styled span (raw hex)
<span className="rounded-full bg-[#f7f4c8]">Status</span>`;

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

      {/* Do / Don't */}
      <section id="do-dont" className="scroll-mt-8">
        <h2 className="mt-12 mb-4 text-h2 text-text-default">
          Do &amp; Don&apos;t
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative rounded-lg border border-border-success bg-background-success p-5">
            <CopyButton value={doCode} className="absolute right-2 top-2" />
            <div className="mb-2 text-sm font-bold text-text-success">
              Do — a category
            </div>
            <pre className="overflow-x-auto pr-10">
              <code className="font-mono text-xs leading-6 text-text-default">
                {doCode}
              </code>
            </pre>
          </div>
          <div className="relative rounded-lg border border-border-danger bg-background-danger p-5">
            <CopyButton
              value={dontButtonCode}
              className="absolute right-2 top-2"
            />
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t — a button as a label
            </div>
            <pre className="overflow-x-auto pr-10">
              <code className="font-mono text-xs leading-6 text-text-default">
                {dontButtonCode}
              </code>
            </pre>
          </div>
        </div>

        <div className="relative mt-4 rounded-lg border border-border-danger bg-background-danger p-5">
          <CopyButton value={dontSpanCode} className="absolute right-2 top-2" />
          <div className="mb-2 text-sm font-bold text-text-danger">
            Also don&apos;t — a raw styled span (and it&apos;s a status — use
            Badge)
          </div>
          <pre className="overflow-x-auto pr-10">
            <code className="font-mono text-xs leading-6 text-text-default">
              {dontSpanCode}
            </code>
          </pre>
        </div>
      </section>

      {/* Copy-paste */}
      <section id="copy-paste" className="scroll-mt-8">
        <h2 className="mt-12 mb-4 text-h2 text-text-default">Copy-paste</h2>
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
