import type { Metadata } from "next";
import { GraphCanvasNode } from "@/components/GraphCanvasNode";
import { CodeBlock } from "@/components/CodeBlock";
import { GraphCanvasNodeInteractive } from "./GraphCanvasNodeDemos";
import { exampleDomains } from "./examples";

export const metadata: Metadata = {
  title: "Graph Canvas Node",
  description:
    "A compact card representing a graph entity -- a colored domain header over an entity name and metadata. Generic and reusable; the consuming app supplies its own taxonomy and colors.",
};

const variants = [
  {
    domainLabel: "Party",
    domainColor: exampleDomains.party,
    name: "Distyl",
    attributes: 12,
    nodes: 184200,
    edges: 6,
  },
  {
    domainLabel: "Risk",
    domainColor: exampleDomains.risk,
    name: "Sanctions exposure",
    attributes: 5,
    nodes: 1200000,
    edges: 18,
  },
  {
    domainLabel: "Evidence",
    domainColor: exampleDomains.evidence,
    name: "Filing 10-K (2024)",
    attributes: 9,
    nodes: 412,
    edges: 3,
  },
] as const;

const states = [
  { status: "static", code: `<GraphCanvasNode status="static" … />` },
  { status: "active", code: `<GraphCanvasNode status="active" … />` },
  { status: "disabled", code: `<GraphCanvasNode status="disabled" … />` },
] as const;

const props = [
  {
    name: "domainLabel",
    type: "string",
    def: "required",
    desc: "Category label shown in the header band, rendered in sentence case.",
  },
  {
    name: "domainColor",
    type: "{ background: string; text: string }",
    def: "required",
    desc: "Header band background and text colors. Supplied by the consuming app -- the component has no taxonomy.",
  },
  {
    name: "name",
    type: "string",
    def: "required",
    desc: "Entity name shown in the body.",
  },
  {
    name: "attributes",
    type: "number",
    def: "required",
    desc: "Attribute count, rendered as an integer.",
  },
  {
    name: "nodes",
    type: "number | string",
    def: "required",
    desc: "Node count. Numbers format with K/M shorthand (184.2K, 1.2M); strings render as-is.",
  },
  {
    name: "edges",
    type: "number",
    def: "required",
    desc: "Edge count, shown in the header with an 'edges' suffix.",
  },
  {
    name: "status",
    type: '"static" | "active" | "disabled"',
    def: '"static"',
    desc: "Visual state. active adds a ring; disabled dims it and blocks interaction.",
  },
  {
    name: "onClick",
    type: "() => void",
    def: "undefined",
    desc: "Click handler. When set, the card renders as a button.",
  },
];

const doCode = `// The consuming app owns the taxonomy → color mapping
<GraphCanvasNode
  domainLabel="Risk"
  domainColor={domainColors.risk}
  name={entity.name}
  attributes={entity.attributeCount}
  nodes={entity.nodeCount}
  edges={entity.edgeCount}
  status={selectedId === entity.id ? "active" : "static"}
  onClick={() => select(entity.id)}
/>`;

const installCode = `import { GraphCanvasNode } from "@/components/GraphCanvasNode";

// Each product defines its own domain → color map (example values shown).
const domainColors = {
  party: { background: "var(--color-background-accent)", text: "var(--color-text-primary)" },
  risk: { background: "var(--color-background-danger)", text: "var(--color-text-danger)" },
};

export function EntityNode({ entity, selected, onSelect }) {
  return (
    <GraphCanvasNode
      domainLabel={entity.domain}
      domainColor={domainColors[entity.domain]}
      name={entity.name}
      attributes={entity.attributes}
      nodes={entity.nodes}
      edges={entity.edges}
      status={selected ? "active" : "static"}
      onClick={onSelect}
    />
  );
}`;

function PropsTable({
  rows,
}: {
  rows: { name: string; type: string; def: string; desc: string }[];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border-default">
      <div className="min-w-[640px]">
        <div className="grid grid-cols-[1.2fr_2fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-caption font-medium">
          <div>Prop</div>
          <div>Type</div>
          <div>Default</div>
          <div>Description</div>
        </div>
        <div className="divide-y divide-border-default">
          {rows.map((r) => (
            <div
              key={r.name}
              className="grid grid-cols-[1.2fr_2fr_1fr_3fr] gap-4 px-4 py-3"
            >
              <div className="font-mono text-sm text-text-default">
                {r.name}
              </div>
              <div className="font-mono text-caption">{r.type}</div>
              <div className="font-mono text-caption">{r.def}</div>
              <div className="text-sm text-text-subtle">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GraphCanvasNodePage() {
  return (
    <div>
      <p className="mb-2 text-caption">Components</p>
      <h1 className="text-lead text-text-default">Graph Canvas Node</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A compact card representing a graph entity -- a colored domain header over
        an entity name with attribute and edge metadata. Used in canvas and
        explorer views to display categorized nodes.
      </p>

      <div className="mt-4 rounded-lg border border-border-default bg-background-accent p-4">
        <p className="text-small text-text-default">
          <span className="font-semibold">Generic &amp; reusable.</span> The
          component has no built-in taxonomy -- the consuming app passes{" "}
          <code className="font-mono">domainLabel</code> and{" "}
          <code className="font-mono">domainColor</code> directly. The Party /
          Risk / Evidence colors below are example values from Context Explorer,
          not canonical Cognition tokens.
        </p>
      </div>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <GraphCanvasNodeInteractive />
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens -- the body, border, and active ring
          remap on theme change, no <code className="font-mono">dark:</code>{" "}
          classes. The header color is caller-supplied.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">Domains</h3>
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-3">
          {variants.map((v) => (
            <div
              key={v.domainLabel}
              className="flex items-start justify-center rounded-lg border border-border-default bg-background-subtle p-6"
            >
              <div className="w-full max-w-[260px]">
                <GraphCanvasNode {...v} />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-small">
          One component, three example domains -- the header band is driven
          entirely by <code className="font-mono">domainColor</code>. Node counts
          show the K/M formatting: <code className="font-mono">184.2K</code>,{" "}
          <code className="font-mono">1.2M</code>,{" "}
          <code className="font-mono">412</code>.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {states.map((s) => (
            <div
              key={s.status}
              className="overflow-hidden rounded-lg border border-border-default"
            >
              <div className="flex items-center justify-center bg-background-subtle p-8">
                <div className="w-full max-w-[240px]">
                  <GraphCanvasNode
                    domainLabel="Party"
                    domainColor={exampleDomains.party}
                    name="Distyl"
                    attributes={12}
                    nodes={184200}
                    edges={6}
                    status={s.status}
                  />
                </div>
              </div>
              <div className="border-t border-border-default p-3">
                <CodeBlock
                  code={s.code}
                  size="sm"
                  className="rounded-md border border-border-subtle bg-background-subtle"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-small">
          <code className="font-mono">active</code> adds a primary border and an
          accent ring (use for the selected node);{" "}
          <code className="font-mono">disabled</code> dims to 45% and blocks
          pointer events.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">API</h3>
        <PropsTable rows={props} />
      </section>

      {/* Don't and Do */}
      <section id="do-dont" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">Don&apos;t and Do</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t bake a domain taxonomy or color map into the component --
              pass <code className="font-mono">domainColor</code> from the
              consuming app so each product owns its own categories. And
              don&apos;t use it for non-entity content; it&apos;s a graph node,
              not a generic card.
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
        Distyl-specific -- a generic graph-entity card with no built-in taxonomy.
        Domain colors are caller-supplied via{" "}
        <code className="font-mono text-text-default">domainColor</code>; the
        example Party / Risk / Evidence values are illustrative, not canonical.
      </footer>
    </div>
  );
}
