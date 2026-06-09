import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Badge",
  description:
    "Badge component — semantic status colors on Cognition tokens. API matches fe-distillery components/ui/badge.tsx.",
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

const doCode = `// Status indicator
<Badge color="success">Active</Badge>`;

const installCode = `import { Badge } from "@/components/ui/badge";

export function Status() {
  return <Badge color="success">Active</Badge>;
}`;

export default function BadgePage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Badge</h1>
      <p className="mt-3 max-w-2xl text-body text-text-subtle">
        Use for status indicators, counts, and states. Not for actions or
        categories.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <Badge color="success">Active</Badge>
        </div>
        <p className="mt-2 text-small">
          Every color maps to a Cognition feedback token — no raw Tailwind
          palette utilities (the fix for badge.tsx&apos;s 30+ baked-in variants).
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Variants</h3>
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
          Semantic intent is the <code className="font-mono">color</code> prop —
          the error value is <code className="font-mono">destructive</code>{" "}
          (Cognition&apos;s danger feedback token).
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-xs font-medium text-text-subtle">
              <div>Prop</div>
              <div>Type</div>
              <div>Default</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {[
                { name: "variant", type: "\"default\" | \"secondary\" | \"outline\"", def: "\"default\"", desc: "Fill style — solid, tonal, or bordered." },
                { name: "color", type: "\"default\" | \"primary\" | \"destructive\" | \"success\" | \"warning\" | \"info\"", def: "\"default\"", desc: "Semantic color, combined with the variant." },
                { name: "size", type: "\"default\" | \"sm\"", def: "\"default\"", desc: "Standard or compact." },
                { name: "children", type: "ReactNode", def: "required", desc: "Label text; a leading icon is sized automatically." },
              ].map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 px-4 py-3"
                >
                  <div className="font-mono text-sm text-text-default">{p.name}</div>
                  <div className="font-mono text-xs text-text-subtle">{p.type}</div>
                  <div className="font-mono text-xs text-text-subtle">{p.def}</div>
                  <div className="text-sm text-text-subtle">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Don't and Do */}
      <section id="do-dont" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">
          Don&apos;t and Do
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t fake a status with a pill-shaped Button or a raw styled
              span — that&apos;s what a Badge is for.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
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
        API matches{" "}
        <code className="font-mono text-text-default">
          fe-distillery/components/ui/badge.tsx
        </code>{" "}
        — <code className="font-mono text-text-default">variant</code>,{" "}
        <code className="font-mono text-text-default">size</code>,{" "}
        <code className="font-mono text-text-default">color</code>,{" "}
        <code className="font-mono text-text-default">asChild</code>. The raw
        Tailwind palette colors are replaced with Cognition tokens.
      </footer>
    </div>
  );
}
