import type { Metadata } from "next";
import { AtSign, Check, Globe, Search, Send } from "lucide-react";
import { InputGroup } from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Input Group",
  description:
    "Input Group component -- an Input with attached leading or trailing context: icons, prefixes, suffixes, or an action, inside one visual boundary.",
};

const props = [
  {
    name: "leadingIcon",
    type: "ReactNode",
    def: "undefined",
    desc: "Icon rendered before the field, for context such as search or email.",
  },
  {
    name: "trailingIcon",
    type: "ReactNode",
    def: "undefined",
    desc: "Icon rendered after the field, for status such as a validation check.",
  },
  {
    name: "leadingText",
    type: "string",
    def: "undefined",
    desc: "Static prefix shown before the value, for example a protocol or currency.",
  },
  {
    name: "trailingText",
    type: "string",
    def: "undefined",
    desc: "Static suffix shown after the value, for example a unit or domain.",
  },
  {
    name: "trailingAction",
    type: "ReactNode",
    def: "undefined",
    desc: "A single action attached to the trailing edge, usually a small Button.",
  },
  {
    name: "error",
    type: "boolean",
    def: "false",
    desc: "Applies the danger border and ring to signal an invalid value.",
  },
  {
    name: "disabled",
    type: "boolean",
    def: "false",
    desc: "Dims the group and blocks input.",
  },
] as const;

const doCode = `<InputGroup
  leadingIcon={<Search />}
  placeholder="Search the workspace..."
  trailingAction={<Button size="sm">Search</Button>}
/>`;

const installCode = `import { InputGroup } from "@/components/ui/input-group";
import { Globe } from "lucide-react";

export function SiteField() {
  return (
    <InputGroup
      leadingIcon={<Globe />}
      leadingText="https://"
      trailingText=".distyl.ai"
      placeholder="workspace"
    />
  );
}`;

export default function InputGroupPage() {
  return (
    <div>
      <p className="mb-2 text-caption">Components</p>
      <h1 className="text-lead text-text-default">Input Group</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        An Input with attached context: a leading or trailing icon, a prefix or
        suffix, or a single action, all inside one visual boundary so the field
        still reads as a single control.
      </p>

      <div className="mt-4 rounded-lg border border-border-default bg-background-accent p-4">
        <p className="text-small text-text-default">
          Input Group is a composed pattern built on the Input primitive. It does
          not replace Input. It extends it for the cases where attached context
          is required.
        </p>
      </div>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <div className="w-full max-w-sm">
            <InputGroup
              leadingIcon={<Search />}
              placeholder="Search the workspace..."
              trailingAction={
                <Button size="sm" variant="secondary">
                  Search
                </Button>
              }
            />
          </div>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens. Focus it and the whole group rings,
          no <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <InputGroup leadingIcon={<Search />} placeholder="Search..." />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<InputGroup leadingIcon={<Search />} />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <InputGroup
                trailingIcon={<Check className="text-text-success" />}
                defaultValue="alex@distyl.ai"
              />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<InputGroup trailingIcon={<Check />} />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <InputGroup leadingText="https://" placeholder="workspace" />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<InputGroup leadingText="https://" />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <InputGroup trailingText="USD" placeholder="0.00" />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<InputGroup trailingText="USD" />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <InputGroup
                placeholder="Invite by email"
                trailingAction={
                  <Button size="sm" variant="secondary">
                    <Send />
                  </Button>
                }
              />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<InputGroup trailingAction={<Button size="sm">…</Button>} />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <InputGroup
                leadingIcon={<AtSign />}
                placeholder="username"
                trailingAction={
                  <Button size="sm" variant="secondary">
                    Add
                  </Button>
                }
              />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<InputGroup leadingIcon={<AtSign />} trailingAction={…} />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Leading and trailing slots compose: an icon, a prefix or suffix, an
          action, or an icon paired with an action.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <InputGroup leadingIcon={<Globe />} placeholder="workspace" />
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">Default. Empty and at rest.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <InputGroup
                leadingIcon={<Globe />}
                placeholder="workspace"
                className="border-border-primary ring-1 ring-border-primary"
              />
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">
                Focused. The whole group rings (shown statically here).
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <InputGroup leadingIcon={<Globe />} defaultValue="cognition" />
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">Filled. Holds a value.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <InputGroup
                leadingIcon={<Globe />}
                defaultValue="not a domain"
                error
              />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<InputGroup error />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <InputGroup
                leadingIcon={<Globe />}
                defaultValue="cognition"
                disabled
              />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<InputGroup disabled />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Focus rings the entire boundary, not just the inner field. Error swaps
          the border and ring to the danger token.
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
        <p className="mt-2 text-small">
          All standard <code className="font-mono">input</code> props pass
          through to the inner field.
        </p>
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
              Don&apos;t stack multiple trailing actions in one group. Two or
              more competing buttons crowd the field and blur which one the value
              belongs to. When more than one action is needed, move them out of
              the field into a different pattern.
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
          Use it to add contextual affordance to an input without breaking the
          field&apos;s visual boundary.
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
