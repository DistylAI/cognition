import type { Metadata } from "next";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Label",
  description:
    "Label component — an accessible label associated with a form control via htmlFor. A form primitive that composes inside Input, Checkbox, and other controls.",
};

const props = [
  {
    name: "htmlFor",
    type: "string",
    def: "undefined",
    desc: "id of the control this label names. Required to wire label to control.",
  },
  {
    name: "required",
    type: "boolean",
    def: "false",
    desc: "Appends a danger-colored asterisk to mark the field as required.",
  },
  {
    name: "disabled",
    type: "boolean",
    def: "false",
    desc: "Dims the label and sets cursor-not-allowed, for a disabled control.",
  },
  {
    name: "children",
    type: "ReactNode",
    def: "required",
    desc: "The label text.",
  },
] as const;

const doCode = `<div className="space-y-1.5">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
</div>`;

const installCode = `import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function EmailField() {
  return (
    <div className="space-y-1.5">
      <Label htmlFor="email" required>Email</Label>
      <Input id="email" type="email" />
    </div>
  );
}`;

export default function LabelPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Label</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        An accessible label associated with a form control via{" "}
        <code className="font-mono">htmlFor</code>. Clicking the label focuses
        its control, and assistive tech reads them together.
      </p>

      <div className="mt-4 rounded-lg border border-border-default bg-background-accent p-4">
        <p className="text-small text-text-default">
          Label is a form primitive. It appears composed inside Input, Checkbox,
          and other form components. This page documents it as a standalone
          building block.
        </p>
      </div>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <div className="w-full max-w-xs space-y-1.5">
            <Label htmlFor="preview-email">Email</Label>
            <Input id="preview-email" type="email" placeholder="you@distyl.ai" />
            <p className="text-xs text-text-subtle">
              We never share your email.
            </p>
          </div>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens. Toggle the theme and it remaps,
          no <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <Label htmlFor="v-default">Email</Label>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Label htmlFor="email">Email</Label>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <Label htmlFor="v-required" required>
                Email
              </Label>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Label htmlFor="email" required>Email</Label>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <Label htmlFor="v-disabled" disabled>
                Email
              </Label>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Label htmlFor="email" disabled>Email</Label>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          The required variant appends a{" "}
          <code className="font-mono">text-danger</code> asterisk; disabled dims
          the label.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <div className="w-full max-w-[220px] space-y-1.5">
                <Label htmlFor="s-default">Username</Label>
                <Input id="s-default" placeholder="distyl" />
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Label htmlFor="username">Username</Label>
<Input id="username" />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <div className="w-full max-w-[220px] space-y-1.5">
                <Label htmlFor="s-disabled" disabled>
                  Username
                </Label>
                <Input id="s-disabled" placeholder="distyl" disabled />
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Label htmlFor="username" disabled>Username</Label>
<Input id="username" disabled />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          A disabled label dims to match its disabled control. The label has no
          hover or active state of its own.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.4fr_1.4fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-xs font-medium text-text-subtle">
              <div>Prop</div>
              <div>Type</div>
              <div>Default</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {props.map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.4fr_1.4fr_1fr_3fr] gap-4 px-4 py-3"
                >
                  <div className="font-mono text-sm text-text-default">
                    {p.name}
                  </div>
                  <div className="font-mono text-xs text-text-subtle">
                    {p.type}
                  </div>
                  <div className="font-mono text-xs text-text-subtle">
                    {p.def}
                  </div>
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
              Don&apos;t use a Label as a heading or section title. It names a
              single form control, not a region of the page. For titles, use the
              heading styles instead.
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
        <p className="mt-2 text-small">
          Always pair a Label with a control via{" "}
          <code className="font-mono">htmlFor</code> — Input, Checkbox, Radio, or
          Select.
        </p>
      </section>

      {/* Copy-paste */}
      <section id="copy-paste" className="mt-12 scroll-mt-8">
        <CodeBlock
          code={installCode}
          className="rounded-lg border border-border-default bg-background-subtle"
        />
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
