import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Button",
  description:
    "Button component — variants, states, usage, and a drop-in snippet. API matches fe-distillery components/ui/button.tsx.",
};

const variants = [
  { variant: "default", label: "Button", code: `<Button>Button</Button>` },
  {
    variant: "secondary",
    label: "Secondary",
    code: `<Button variant="secondary">Secondary</Button>`,
  },
  {
    variant: "outline",
    label: "Outline",
    code: `<Button variant="outline">Outline</Button>`,
  },
  {
    variant: "destructive",
    label: "Delete",
    code: `<Button variant="destructive">Delete</Button>`,
  },
  {
    variant: "ghost",
    label: "Ghost",
    code: `<Button variant="ghost">Ghost</Button>`,
  },
  {
    variant: "link",
    label: "Link",
    code: `<Button variant="link">Link</Button>`,
  },
] as const;

function Snippet({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-md border border-border-subtle bg-background-subtle px-3 py-2">
      <code className="font-mono text-xs text-text-default">{children}</code>
    </pre>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-border-default bg-background-subtle p-4">
      <code className="text-code text-text-default">{children}</code>
    </pre>
  );
}

export default function ButtonPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Button</h1>
      <p className="mt-3 max-w-2xl text-body text-text-subtle">
        Use for actions that trigger a mutation or event. Not for labels,
        navigation, or status.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h2 className="mt-12 mb-4 text-h2 text-text-default">Preview</h2>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <Button>Button</Button>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens — toggle the theme and it remaps,
          no <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h2 className="mt-12 mb-4 text-h2 text-text-default">Variants</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {variants.map((v) => (
            <div
              key={v.variant}
              className="overflow-hidden rounded-lg border border-border-default"
            >
              <div className="flex items-center justify-center bg-background-subtle p-8">
                <Button variant={v.variant}>{v.label}</Button>
              </div>
              <div className="border-t border-border-default p-3">
                <Snippet>{v.code}</Snippet>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h2 className="mt-12 mb-4 text-h2 text-text-default">States</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <Button disabled>Disabled</Button>
            </div>
            <div className="border-t border-border-default p-3">
              <Snippet>{`<Button disabled>Disabled</Button>`}</Snippet>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <Button loading loadingText="Saving…">
                Save
              </Button>
            </div>
            <div className="border-t border-border-default p-3">
              <Snippet>{`<Button loading loadingText="Saving…">Save</Button>`}</Snippet>
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          <code className="font-mono">loading</code> is a built-in prop — it
          shows a spinner and disables the button. Don&apos;t add an external
          spinner.
        </p>
      </section>

      {/* Do / Don't */}
      <section id="do-dont" className="scroll-mt-8">
        <h2 className="mt-12 mb-4 text-h2 text-text-default">Do &amp; Don&apos;t</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">
              Do — an action
            </div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">{`// Triggers a mutation or event
<Button onClick={save}>Save changes</Button>
<Button variant="destructive" onClick={remove}>
  Delete
</Button>`}</code>
            </pre>
          </div>
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t — a label
            </div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">{`// Button used as a category label (audit: ActionPill)
<Button variant="outline" size="sm" className="rounded-full">
  Engineering
</Button>
// → use <Tag> for categories, <Badge> for status`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Copy-paste */}
      <section id="copy-paste" className="scroll-mt-8">
        <h2 className="mt-12 mb-4 text-h2 text-text-default">Copy-paste</h2>
        <CodeBlock>{`import { Button } from "@/components/ui/button";

export function SaveChanges() {
  return <Button onClick={handleSave}>Save changes</Button>;
}`}</CodeBlock>
        <p className="mt-2 text-small">
          Drop-in ready. Variants and Cognition tokens are baked into the
          component — no <code className="font-mono">className</code> needed for
          standard usage.
        </p>
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        API matches{" "}
        <code className="font-mono text-text-default">
          fe-distillery/components/ui/button.tsx
        </code>{" "}
        — variants, sizes, and props (
        <code className="font-mono text-text-default">asChild</code>,{" "}
        <code className="font-mono text-text-default">loading</code>,{" "}
        <code className="font-mono text-text-default">loadingText</code>,{" "}
        <code className="font-mono text-text-default">tooltipText</code>,{" "}
        <code className="font-mono text-text-default">disabledTooltipText</code>
        ).
      </footer>
    </div>
  );
}
