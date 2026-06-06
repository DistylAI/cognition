import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { CodeBlock, CopyButton } from "@/components/CodeBlock";

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

const dontCode = `// A status faked as a pill-shaped button
<Button variant="outline" className="rounded-full">
  Active
</Button>`;

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
        <h2 className="mt-12 mb-4 text-h2 text-text-default">Preview</h2>
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
        <h2 className="mt-12 mb-4 text-h2 text-text-default">Variants</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Do / Don't */}
      <section id="do-dont" className="scroll-mt-8">
        <h2 className="mt-12 mb-4 text-h2 text-text-default">
          Do &amp; Don&apos;t
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative rounded-lg border border-border-success bg-background-success p-5">
            <CopyButton value={doCode} className="absolute right-2 top-2" />
            <div className="mb-2 text-sm font-bold text-text-success">
              Do — a status
            </div>
            <pre className="overflow-x-auto pr-10">
              <code className="font-mono text-xs leading-6 text-text-default">
                {doCode}
              </code>
            </pre>
          </div>
          <div className="relative rounded-lg border border-border-danger bg-background-danger p-5">
            <CopyButton value={dontCode} className="absolute right-2 top-2" />
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t — a button
            </div>
            <pre className="overflow-x-auto pr-10">
              <code className="font-mono text-xs leading-6 text-text-default">
                {dontCode}
              </code>
            </pre>
          </div>
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
