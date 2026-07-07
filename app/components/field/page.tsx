import type { Metadata } from "next";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Field",
  description:
    "Field component -- a form field wrapper that composes a label, a control, and optional helper or error text into one accessible unit.",
};

const props = [
  {
    name: "label",
    type: "string",
    def: "undefined",
    desc: "The field label, wired to the control via htmlFor.",
  },
  {
    name: "helperText",
    type: "string",
    def: "undefined",
    desc: "Supporting text shown below the control.",
  },
  {
    name: "error",
    type: "string",
    def: "undefined",
    desc: "Validation message. Replaces helper text and marks the control invalid.",
  },
  {
    name: "required",
    type: "boolean",
    def: "false",
    desc: "Adds the required indicator to the label.",
  },
  {
    name: "disabled",
    type: "boolean",
    def: "false",
    desc: "Dims the field and disables the control.",
  },
  {
    name: "id",
    type: "string",
    def: "auto",
    desc: "Wires the label htmlFor to the control id. Generated if omitted.",
  },
] as const;

const doCode = `<Field label="Email" helperText="We never share it." id="email">
  <Input type="email" />
</Field>`;

const installCode = `import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function EmailField() {
  return (
    <Field
      label="Email"
      helperText="We only use this for account recovery."
      id="email"
    >
      <Input type="email" placeholder="you@distyl.ai" />
    </Field>
  );
}`;

export default function FieldPage() {
  return (
    <div>
      <p className="mb-2 text-caption">Components</p>
      <h1 className="text-lead text-text-default">Field</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A form field wrapper that pairs a label and a control with optional
        helper text or a validation message, all wired together for
        accessibility.
      </p>

      <div className="mt-4 rounded-lg border border-border-default bg-background-accent p-4">
        <p className="text-small text-text-default">
          Field is a higher-order component. It composes a Label with a control
          (Input, Select, Textarea, and the like) and does not replace them. It
          links the label, the control id, and the message for assistive tech.
        </p>
      </div>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <div className="w-full max-w-sm">
            <Field
              label="Email"
              helperText="We only use this for account recovery."
              id="preview-email"
            >
              <Input type="email" placeholder="derek@distyl.ai" />
            </Field>
          </div>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens. Type in the field, no{" "}
          <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <div className="w-full max-w-xs">
                <Field label="Full name">
                  <Input placeholder="Derek Ho" />
                </Field>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Field label="Full name"><Input /></Field>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <div className="w-full max-w-xs">
                <Field
                  label="Email"
                  helperText="We only use this for account recovery."
                >
                  <Input type="email" placeholder="derek@distyl.ai" />
                </Field>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Field label="Email" helperText="…">`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <div className="w-full max-w-xs">
                <Field label="Email" error="Enter a valid email address.">
                  <Input type="email" defaultValue="derek@distyl" />
                </Field>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Field label="Email" error="…">`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <div className="w-full max-w-xs">
                <Field label="Workspace name" required>
                  <Input placeholder="Distyl HQ" />
                </Field>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Field label="Workspace name" required>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default lg:col-span-2">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <div className="w-full max-w-md">
                <Field label="Bio" helperText="24 / 160 characters">
                  <Textarea defaultValue="Co-founder at Distyl. Building the Cognition design system." />
                </Field>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Field label="Bio" helperText="24 / 160 characters">
  <Textarea />
</Field>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Helper text, an error message, a required marker, and a character count
          shown in the helper slot. The error variant also marks the control
          invalid for assistive tech.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <div className="w-full max-w-[220px]">
                <Field label="Email">
                  <Input type="email" placeholder="derek@distyl.ai" />
                </Field>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">Default. Empty and at rest.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <div className="w-full max-w-[220px]">
                <Field label="Email">
                  <Input
                    type="email"
                    placeholder="derek@distyl.ai"
                    className="border-border-primary ring-1 ring-border-primary"
                  />
                </Field>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">
                Focused. The control rings (shown statically).
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <div className="w-full max-w-[220px]">
                <Field label="Email">
                  <Input type="email" defaultValue="derek@distyl.ai" />
                </Field>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">Filled. Holds a value.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <div className="w-full max-w-[220px]">
                <Field label="Email" error="That email is already in use.">
                  <Input type="email" defaultValue="derek@distyl.ai" />
                </Field>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">
                Error. Danger border and message.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <div className="w-full max-w-[220px]">
                <Field label="Email" disabled>
                  <Input type="email" defaultValue="derek@distyl.ai" />
                </Field>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">
                Disabled. Dimmed, not editable.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Focus and validation read on the control; disabled dims the whole
          field and its label.
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
                  <div className="text-sm text-text-subtle">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          The control is passed as <code className="font-mono">children</code>.
          Field clones it to set the id,{" "}
          <code className="font-mono">aria-invalid</code>, and{" "}
          <code className="font-mono">aria-describedby</code>.
        </p>
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
              Don&apos;t drop a raw Input into a form without a Field around it.
              An input with no associated label is invisible to screen readers
              and gives sighted readers nothing to scan. Wrap form controls in a
              Field so every one carries its label and messaging.
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
        <p className="mt-2 text-small">
          Use Field any time a control needs a label, helper text, or a
          validation message. It is the standard wrapper for form inputs in
          Cognition.
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
