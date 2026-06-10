import type { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Input",
  description:
    "Input component — a form input field or a component that looks like an input field. API matches fe-distillery components/ui/input.tsx.",
};

const states = [
  {
    key: "default",
    label: "Default",
    code: `<Input placeholder="Enter text" />`,
    node: <Input placeholder="Enter text" />,
  },
  {
    key: "disabled",
    label: "Disabled",
    code: `<Input disabled placeholder="Enter text" />`,
    node: <Input disabled placeholder="Enter text" />,
  },
  {
    key: "invalid",
    label: "Invalid",
    code: `<Input aria-invalid defaultValue="Not an email" />`,
    node: <Input aria-invalid defaultValue="Not an email" />,
  },
  {
    key: "file",
    label: "File",
    code: `<Input type="file" />`,
    node: <Input type="file" />,
  },
] as const;

const labelCode = `<div className="flex flex-col gap-2">
  <label htmlFor="email" className="text-sm font-medium text-text-default">
    Email
  </label>
  <Input id="email" type="email" placeholder="m@example.com" />
  <p className="text-sm text-text-subtle">We'll never share your email.</p>
</div>`;

const doCode = `// Pair the Input with a <label> tied via htmlFor/id
<label htmlFor="name">Name</label>
<Input id="name" placeholder="Jane Doe" />`;

const installCode = `import { Input } from "@/components/ui/input";

export function EmailField() {
  return <Input type="email" placeholder="m@example.com" />;
}`;

export default function InputPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Input</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        Displays a form input field or a component that looks like an input
        field. Use it for short, single-line text entry.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <Input placeholder="Enter text" className="max-w-sm" />
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens — the surface, border, and focus
          ring remap on theme change, no{" "}
          <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {states.map((s) => (
            <div
              key={s.key}
              className="overflow-hidden rounded-lg border border-border-default"
            >
              <div className="flex items-center justify-center bg-background-subtle p-8">
                <div className="w-full max-w-xs">{s.node}</div>
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
          Invalid styling is driven by the native{" "}
          <code className="font-mono">aria-invalid</code> attribute — no separate
          prop — so it stays in sync with form validation and screen readers.
        </p>
      </section>

      {/* With a label */}
      <section id="with-label" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">With a label</h3>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex items-start justify-center rounded-lg border border-border-default bg-background-subtle p-8">
            <div className="flex w-full max-w-xs flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-text-default"
              >
                Email
              </label>
              <Input id="email" type="email" placeholder="m@example.com" />
              <p className="text-sm text-text-subtle">
                We&apos;ll never share your email.
              </p>
            </div>
          </div>
          <CodeBlock
            code={labelCode}
            className="rounded-lg border border-border-default bg-background-subtle"
          />
        </div>
        <p className="mt-2 text-small">
          Always tie the label to the input with{" "}
          <code className="font-mono">htmlFor</code> /{" "}
          <code className="font-mono">id</code> so clicking the label focuses the
          field.
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
                { name: "type", type: "string", def: "\"text\"", desc: "Native input type — text, email, password, number." },
                { name: "placeholder", type: "string", def: "undefined", desc: "Hint shown while the field is empty." },
                { name: "value / defaultValue", type: "string", def: "undefined", desc: "Controlled / uncontrolled value." },
                { name: "disabled", type: "boolean", def: "false", desc: "Dims and blocks input." },
                { name: "...props", type: "InputHTMLAttributes", def: "—", desc: "All native input attributes pass through." },
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
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Don&apos;t and Do</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t use an Input as a read-only label or hardcode{" "}
              <code className="font-mono">border-gray-300</code> /{" "}
              <code className="font-mono">bg-white</code> on it — that breaks dark
              mode and the rebrand.
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

      {/* Install */}
      <section id="copy-paste" className="mt-12 scroll-mt-8">
        <CodeBlock
          code={installCode}
          className="rounded-lg border border-border-default bg-background-subtle"
        />
        <p className="mt-2 text-small">
          Drop-in ready. The field spreads all native{" "}
          <code className="font-mono">input</code> props (
          <code className="font-mono">type</code>,{" "}
          <code className="font-mono">value</code>,{" "}
          <code className="font-mono">onChange</code>, …) and the Cognition tokens
          are baked in.
        </p>
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        API matches{" "}
        <code className="font-mono text-text-default">
          fe-distillery/components/ui/input.tsx
        </code>{" "}
        — a single <code className="font-mono text-text-default">Input</code> that
        forwards its ref and spreads{" "}
        <code className="font-mono text-text-default">
          React.ComponentProps&lt;&quot;input&quot;&gt;
        </code>
        . The raw Tailwind utilities are replaced with Cognition tokens.
      </footer>
    </div>
  );
}
