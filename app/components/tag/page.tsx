import type { Metadata } from "next";
import { Tag } from "@/components/ui/tag";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Tag",
  description:
    "Tag component: non-interactive label / category / keyword. Proposed canonical Tag (fe-distillery has none yet).",
};

const doCode = `<Tag>Engineering</Tag>`;

const installCode = `import { Tag } from "@/components/ui/tag";

export function Category() {
  return <Tag>Engineering</Tag>;
}`;

export default function TagPage() {
  return (
    <div>
      <p className="mb-2 text-caption">Components</p>
      <h1 className="text-lead text-text-default">Tag</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        Use for non-interactive labels, categories, and keywords. Not for
        actions, navigation, or status.
      </p>

      <div className="mt-4 rounded-lg border border-border-default bg-background-accent p-4">
        <p className="text-small text-text-default">
          <span className="font-bold">Proposed.</span> fe-distillery has no
          first-class <code className="font-mono">Tag</code> yet: only a
          third-party tags multi-select combobox. This documents the canonical
          Tag the audit recommends building.
        </p>
      </div>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <Tag>Engineering</Tag>
        </div>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          A single default style: no variants or size axes exist in any source
          API, so none are invented.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-caption font-medium">
              <div>Prop</div>
              <div>Type</div>
              <div>Default</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {[
                { name: "children", type: "ReactNode", def: "required", desc: "Label text; a leading icon is sized automatically." },
                { name: "asChild", type: "boolean", def: "false", desc: "Render the child element as the tag, keeping the styles." },
                { name: "...props", type: "HTMLAttributes", def: "—", desc: "Native attributes pass through." },
              ].map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 px-4 py-3"
                >
                  <div className="font-mono text-sm text-text-default">{p.name}</div>
                  <div className="font-mono text-caption">{p.type}</div>
                  <div className="font-mono text-caption">{p.def}</div>
                  <div className="text-description">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Don't and Do */}
      <section id="do-dont" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">
          Don&apos;t and Do
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t render a category with an outline button (tower&apos;s
              ActionPill) or a raw styled span (spear&apos;s status pill) and a
              status belongs in a Badge, not a Tag.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-caption leading-6 text-text-default">
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
