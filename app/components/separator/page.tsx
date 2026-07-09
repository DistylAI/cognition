import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Separator",
  description:
    "Separator component -- a thin rule that visually or semantically divides sections of content or items.",
};

const props = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    def: '"horizontal"',
    desc: "Axis of the rule. Vertical needs a parent with a set height.",
  },
  {
    name: "decorative",
    type: "boolean",
    def: "true",
    desc: "When true, hidden from assistive tech (role=none). Set false to expose it as a semantic separator.",
  },
] as const;

const horizontalCode = `<div>
  <p>Section one</p>
  <Separator className="my-4" />
  <p>Section two</p>
</div>`;

const doCode = `<nav className="flex h-5 items-center gap-3 text-sm">
  <a href="/blog">Blog</a>
  <Separator orientation="vertical" />
  <a href="/docs">Docs</a>
</nav>`;

const installCode = `import { Separator } from "@/components/ui/separator";

export function Section() {
  return (
    <div>
      <p>Account</p>
      <Separator className="my-4" />
      <p>Billing</p>
    </div>
  );
}`;

export default function SeparatorPage() {
  return (
    <div>
      <p className="mb-2 text-caption">Components</p>
      <h1 className="text-lead text-text-default">Separator</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A thin rule that visually or semantically divides content. Use it
        between distinct sections or between items in a row.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">Preview</h3>
        <div className="rounded-lg border border-border-default bg-background-subtle p-10">
          <div className="mx-auto max-w-xs">
            <p className="text-label">
              Cognition
            </p>
            <p className="text-description">
              The foundation every product sits on.
            </p>
            <Separator className="my-4" />
            <div className="flex h-5 items-center gap-3 text-description">
              <span>Blog</span>
              <Separator orientation="vertical" />
              <span>Docs</span>
              <Separator orientation="vertical" />
              <span>Source</span>
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens. Toggle the theme and it remaps,
          no <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <div className="w-full max-w-[200px] text-center text-description">
                <span>Above</span>
                <Separator className="my-3" />
                <span>Below</span>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Separator />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <div className="flex h-5 items-center gap-3 text-description">
                <span>Left</span>
                <Separator orientation="vertical" />
                <span>Right</span>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Separator orientation="vertical" />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Horizontal is the default. Vertical needs a parent with a set height
          (here a <code className="font-mono">flex</code> row).
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">States</h3>
        <div className="overflow-hidden rounded-lg border border-border-default">
          <div className="flex items-center justify-center bg-background-subtle p-8">
            <div className="w-full max-w-[240px]">
              <Separator />
            </div>
          </div>
          <div className="border-t border-border-default p-3">
            <CodeBlock
              code={`<Separator />`}
              size="sm"
              className="rounded-md border border-border-subtle bg-background-subtle"
            />
          </div>
        </div>
        <p className="mt-2 text-small">
          Separator is static by design. It has no interactive states. The only
          behavioral axis is <code className="font-mono">decorative</code>, which
          controls whether assistive tech announces it.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-caption font-medium">
              <div>Prop</div>
              <div>Type</div>
              <div>Default</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {props.map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 px-4 py-3"
                >
                  <div className="font-mono text-sm text-text-default">
                    {p.name}
                  </div>
                  <div className="font-mono text-caption">
                    {p.type}
                  </div>
                  <div className="font-mono text-caption">
                    {p.def}
                  </div>
                  <div className="text-description">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Don't and Do */}
      <section id="do-dont" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">
          Don&apos;t and Do
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t use a Separator as a substitute for spacing. If two
              sections only need breathing room, use margin or padding. A
              Separator earns its place when a visible division clarifies that
              content belongs to distinct groups.
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
        <p className="mt-2 text-small">
          Two layouts, one component:{" "}
          <code className="font-mono">{horizontalCode.split("\n")[0]}…</code> for
          stacked sections, <code className="font-mono">orientation=&quot;vertical&quot;</code>{" "}
          for rows.
        </p>
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        Cognition v1.2 · June 2026 · Questions? Ask{" "}
        <a
          href="https://distylai.slack.com/team/U07KY4SEFH7"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-text-primary underline-offset-4 hover:underline"
        >
          Tony Yates
        </a>{" "}
        <a
          href="https://distylai.slack.com/archives/C0A22RR2N6P"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-text-primary underline-offset-4 hover:underline"
        >
          #research-and-design
        </a>
      </footer>
    </div>
  );
}
