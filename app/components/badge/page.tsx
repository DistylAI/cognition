import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Tag } from "@/components/ui/tag";
import { CodeBlock } from "@/components/CodeBlock";
import { FilterChips } from "./filter-chips";

export const metadata: Metadata = {
  title: "Badge & Tag",
  description:
    "Badge (status) and Tag (label) -- one implementation split by a kind axis, on Cognition tokens. Tag adds removable filter chips.",
};

const colors = [
  { color: "default", label: "Default", code: `<Badge>Default</Badge>` },
  {
    color: "success",
    label: "Success",
    code: `<Badge color="success">Success</Badge>`,
  },
  {
    color: "destructive",
    label: "Destructive",
    code: `<Badge color="destructive">Destructive</Badge>`,
  },
  {
    color: "warning",
    label: "Warning",
    code: `<Badge color="warning">Warning</Badge>`,
  },
  { color: "info", label: "Info", code: `<Badge color="info">Info</Badge>` },
] as const;

const doCode = `// Status = colored Badge; label/category = Tag
<Badge color="success">Active</Badge>
<Tag>Engineering</Tag>`;

const installCode = `import { Badge } from "@/components/ui/badge";
import { Tag } from "@/components/ui/tag";

// Live status (color/count/state)
<Badge color="success">Active</Badge>

// Neutral label / category / keyword
<Tag>Engineering</Tag>

// Removable filter chip
<Tag removable onRemove={() => remove("react")}>React</Tag>`;

export default function BadgePage() {
  return (
    <div>
      <p className="mb-2 text-caption">Components</p>
      <h1 className="text-lead text-text-default">Badge &amp; Tag</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        One component, two jobs, split by <code className="font-mono">kind</code>
        . <strong className="font-semibold">Badge</strong> (
        <code className="font-mono">kind=&quot;status&quot;</code>) is a colored
        status pill -- counts, states, severity.{" "}
        <strong className="font-semibold">Tag</strong> (a wrapper locking{" "}
        <code className="font-mono">kind=&quot;label&quot;</code>) is a neutral
        label / category / keyword, and the only one that can be{" "}
        <code className="font-mono">removable</code>.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">Preview</h3>
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-lg border border-border-default bg-background-subtle p-10">
          <Badge color="success">Active</Badge>
          <Tag>Engineering</Tag>
        </div>
        <p className="mt-2 text-small">
          Every color maps to a Cognition feedback token -- no raw Tailwind
          palette utilities.
        </p>
      </section>

      {/* Status (Badge) */}
      <section id="status" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">
          Status <span className="text-text-subtle">(Badge)</span>
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {colors.map((c) => (
            <div
              key={c.color}
              className="overflow-hidden rounded-lg border border-border-default"
            >
              <div className="flex items-center justify-center bg-background-subtle p-8">
                <Badge color={c.color}>{c.label}</Badge>
              </div>
              <div className="border-t border-border-default p-3">
                <CodeBlock
                  code={c.code}
                  size="sm"
                  className="rounded-md border border-border-subtle bg-background-subtle"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-small">
          Semantic intent is the <code className="font-mono">color</code> prop,
          combined with <code className="font-mono">variant</code> (solid /
          soft / outline). The error value is{" "}
          <code className="font-mono">destructive</code>.
        </p>
      </section>

      {/* Label (Tag) */}
      <section id="label" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">
          Label <span className="text-text-subtle">(Tag)</span>
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center gap-2 bg-background-subtle p-8">
              <Tag>Engineering</Tag>
              <Tag>Design</Tag>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Tag>Engineering</Tag>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <Badge kind="label">Neutral label</Badge>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Badge kind="label">Neutral label</Badge>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          A Tag is just <code className="font-mono">Badge kind=&quot;label&quot;</code>{" "}
          -- neutral, no color axis. Use it for taxonomy, not state.
        </p>
      </section>

      {/* Removable filter chips */}
      <section id="removable" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">
          Removable <span className="text-text-subtle">(filter chips)</span>
        </h3>
        <div className="rounded-lg border border-border-default bg-background-subtle p-8">
          <FilterChips />
        </div>
        <p className="mt-2 text-small">
          <code className="font-mono">removable</code> lives on{" "}
          <code className="font-mono">Tag</code> only -- it renders a ✕ button and
          fires <code className="font-mono">onRemove</code>. This is the canonical
          filter-chip pattern. Badges are never removable (status isn&apos;t
          dismissable).
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">API</h3>
        <div className="mb-2 text-small font-medium text-text-default">Badge</div>
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
                { name: "kind", type: "\"status\" | \"label\"", def: "\"status\"", desc: "Colored status pill, or neutral label chip." },
                { name: "variant", type: "\"default\" | \"secondary\" | \"outline\"", def: "\"default\"", desc: "Fill style (status only) -- solid, tonal, or bordered." },
                { name: "color", type: "\"default\" | \"primary\" | \"destructive\" | \"success\" | \"warning\" | \"info\"", def: "\"default\"", desc: "Semantic color (status only)." },
                { name: "size", type: "\"default\" | \"sm\"", def: "\"default\"", desc: "Standard or compact." },
                { name: "asChild", type: "boolean", def: "false", desc: "Render the child element as the badge." },
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
        <div className="mt-6 mb-2 text-small font-medium text-text-default">
          Tag <span className="text-text-subtle">(wrapper, kind=&quot;label&quot;)</span>
        </div>
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
                { name: "removable", type: "boolean", def: "false", desc: "Render a trailing ✕ button (interactive chip)." },
                { name: "onRemove", type: "() => void", def: "—", desc: "Fired when the ✕ is clicked." },
                { name: "size", type: "\"default\" | \"sm\"", def: "\"default\"", desc: "Standard or compact." },
                { name: "asChild", type: "boolean", def: "false", desc: "Render the child element as the tag (non-removable only)." },
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
              Don&apos;t color a category (that&apos;s a neutral{" "}
              <code className="font-mono">Tag</code>), and don&apos;t make a
              status removable (status isn&apos;t dismissable). Never fake either
              with a pill-shaped Button.
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
        One implementation:{" "}
        <code className="font-mono text-text-default">Badge</code> with a{" "}
        <code className="font-mono text-text-default">kind</code> axis;{" "}
        <code className="font-mono text-text-default">Tag</code> is the{" "}
        <code className="font-mono text-text-default">kind=&quot;label&quot;</code>{" "}
        wrapper that adds <code className="font-mono text-text-default">removable</code>.
        Colors are Cognition tokens.
      </footer>
    </div>
  );
}
