import type { Metadata } from "next";
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupLabeledOption,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Radio Group",
  description:
    "Radio Group component — a single-select control where exactly one option can be chosen from a visible set.",
};

const props = [
  {
    name: "defaultValue",
    type: "string",
    def: "undefined",
    desc: "Value selected on mount when the group is uncontrolled.",
  },
  {
    name: "value",
    type: "string",
    def: "undefined",
    desc: "Selected value when the group is controlled.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    def: "undefined",
    desc: "Called with the new value when the selection changes.",
  },
  {
    name: "disabled",
    type: "boolean",
    def: "false",
    desc: "Disables every option in the group. Single items also take their own disabled prop.",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    def: '"vertical"',
    desc: "Reading and arrow-key direction. Lay items out to match with a flex or grid className.",
  },
] as const;

const doCode = `<RadioGroup defaultValue="weekly">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="weekly" id="weekly" />
    <Label htmlFor="weekly">Weekly</Label>
  </div>
</RadioGroup>`;

const installCode = `import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function Cadence() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="default" />
        <Label htmlFor="default">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="comfortable" />
        <Label htmlFor="comfortable">Comfortable</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="compact" id="compact" />
        <Label htmlFor="compact">Compact</Label>
      </div>
    </RadioGroup>
  );
}`;

export default function RadioGroupPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Radio Group</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A single-select control where exactly one option can be chosen from a
        visible set. Selecting one option clears the others.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <RadioGroup defaultValue="pro" className="w-full max-w-sm gap-3">
            <RadioGroupLabeledOption
              value="starter"
              label="Starter"
              description="For individuals getting started. Up to 3 projects."
            />
            <RadioGroupLabeledOption
              value="pro"
              label="Pro"
              description="For growing teams. Unlimited projects and priority support."
            />
            <RadioGroupLabeledOption
              value="enterprise"
              label="Enterprise"
              description="Custom limits, SSO, and a dedicated success manager."
            />
          </RadioGroup>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens. Toggle the theme and it remaps,
          no <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="default" id="v-default" />
                  <Label htmlFor="v-default">Default</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="comfortable" id="v-comfortable" />
                  <Label htmlFor="v-comfortable">Comfortable</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="compact" id="v-compact" />
                  <Label htmlFor="v-compact">Compact</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<RadioGroup defaultValue="comfortable">
  <RadioGroupItem value="default" id="default" />
  <Label htmlFor="default">Default</Label>
</RadioGroup>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <RadioGroup defaultValue="card" className="gap-3">
                <RadioGroupLabeledOption
                  value="card"
                  label="Card"
                  description="Pay with a credit or debit card."
                />
                <RadioGroupLabeledOption
                  value="invoice"
                  label="Invoice"
                  description="Receive a monthly invoice by email."
                />
              </RadioGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<RadioGroupLabeledOption
  value="card"
  label="Card"
  description="Pay with a credit or debit card."
/>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Pair each item with a <code className="font-mono">Label</code>, or use{" "}
          <code className="font-mono">RadioGroupLabeledOption</code> to add a
          supporting description.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <RadioGroup defaultValue="b">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="a" id="st-a" />
                  <Label htmlFor="st-a">Option A</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="b" id="st-b" />
                  <Label htmlFor="st-b">Option B</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<RadioGroup defaultValue="b">`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <RadioGroup defaultValue="a">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="a" id="di-a" />
                  <Label htmlFor="di-a">Available</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="b" id="di-b" disabled />
                  <Label htmlFor="di-b" disabled>
                    Unavailable
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<RadioGroupItem value="b" disabled />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <RadioGroup defaultValue="a" disabled>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="a" id="dg-a" />
                  <Label htmlFor="dg-a" disabled>
                    Option A
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="b" id="dg-b" />
                  <Label htmlFor="dg-b" disabled>
                    Option B
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<RadioGroup defaultValue="a" disabled>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Selected fills the dot with the brand primary. Disable a single item
          with its <code className="font-mono">disabled</code> prop, or the whole
          group with <code className="font-mono">disabled</code> on{" "}
          <code className="font-mono">RadioGroup</code>.
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
              {props.map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 px-4 py-3"
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
        <p className="mt-2 text-small">
          Props apply to <code className="font-mono">RadioGroup</code>. Each{" "}
          <code className="font-mono">RadioGroupItem</code> takes a{" "}
          <code className="font-mono">value</code> and its own{" "}
          <code className="font-mono">disabled</code>.
        </p>
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
              Don&apos;t use a Radio Group when more than one option can be
              selected at once. A radio group enforces a single choice, so two
              selections cannot coexist. When several options may be on together,
              reach for Checkbox instead.
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
          Use a Radio Group when exactly one option must be chosen from a set
          the reader can see all at once.
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
