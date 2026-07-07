import type { Metadata } from "next";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Toggle Group",
  description:
    "Toggle Group component -- a set of toggle buttons in single-select or multi-select mode for modes, view toggles, and filter sets.",
};

const props = [
  {
    name: "type",
    type: '"single" | "multiple"',
    def: "required",
    desc: "single allows one selection at a time; multiple allows zero or more.",
  },
  {
    name: "value",
    type: "string | string[]",
    def: "undefined",
    desc: "Selected value(s) when controlled. A string for single, an array for multiple.",
  },
  {
    name: "onValueChange",
    type: "(value) => void",
    def: "undefined",
    desc: "Called with the new selection. Receives a string for single, an array for multiple.",
  },
  {
    name: "disabled",
    type: "boolean",
    def: "false",
    desc: "Disables every item in the group. Single items also take their own disabled prop.",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    def: '"default"',
    desc: "Item height and padding. default is the medium size.",
  },
  {
    name: "variant",
    type: '"default" | "outline"',
    def: '"default"',
    desc: "default is borderless; outline adds a border to each item.",
  },
] as const;

const doCode = `<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter />
  </ToggleGroupItem>
</ToggleGroup>`;

const installCode = `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";

export function Formatting() {
  return (
    <ToggleGroup type="multiple" defaultValue={["bold"]}>
      <ToggleGroupItem value="bold" aria-label="Bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}`;

export default function ToggleGroupPage() {
  return (
    <div>
      <p className="mb-2 text-caption">Components</p>
      <h1 className="text-lead text-text-default">Toggle Group</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A set of two or more toggle buttons that share one selection. Use it for
        modes, view toggles, and filter sets where the choice stays visible.
      </p>

      <div className="mt-4 rounded-lg border border-border-default bg-background-accent p-4">
        <p className="text-small text-text-default">
          Toggle Group is built on the Toggle primitive. Single mode enforces
          exactly one selection; multiple mode allows zero or more.
        </p>
      </div>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <ToggleGroup type="multiple" defaultValue={["bold"]}>
            <ToggleGroupItem value="bold" aria-label="Bold">
              <Bold />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <Italic />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <Underline />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens. Toggle items on and off, no{" "}
          <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ToggleGroup type="single" variant="outline" defaultValue="left">
                <ToggleGroupItem value="left" aria-label="Align left">
                  <AlignLeft />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  <AlignCenter />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  <AlignRight />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<ToggleGroup type="single" variant="outline">`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <Bold />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <Italic />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <Underline />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<ToggleGroup type="multiple">`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Single keeps exactly one item active. Multiple lets several be active
          at once. Both take a <code className="font-mono">variant</code> and a{" "}
          <code className="font-mono">size</code>.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ToggleGroup type="single">
                <ToggleGroupItem value="left" aria-label="Align left">
                  <AlignLeft />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  <AlignCenter />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  <AlignRight />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">Default. Nothing pressed.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ToggleGroup type="single" defaultValue="center">
                <ToggleGroupItem value="left" aria-label="Align left">
                  <AlignLeft />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  <AlignCenter />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  <AlignRight />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">
                Pressed. One item active in single mode.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ToggleGroup type="multiple" defaultValue={["bold", "underline"]}>
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <Bold />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <Italic />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <Underline />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">
                Multiple pressed. Several active at once.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ToggleGroup type="single" defaultValue="center" disabled>
                <ToggleGroupItem value="left" aria-label="Align left">
                  <AlignLeft />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  <AlignCenter />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  <AlignRight />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<ToggleGroup disabled>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ToggleGroup type="single" defaultValue="left">
                <ToggleGroupItem value="left" aria-label="Align left">
                  <AlignLeft />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center" disabled>
                  <AlignCenter />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  <AlignRight />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<ToggleGroupItem value="center" disabled>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Disable the whole set with <code className="font-mono">disabled</code>{" "}
          on the group, or a single item with its own{" "}
          <code className="font-mono">disabled</code>.
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
          Props apply to <code className="font-mono">ToggleGroup</code>. Each{" "}
          <code className="font-mono">ToggleGroupItem</code> takes a{" "}
          <code className="font-mono">value</code> and its own{" "}
          <code className="font-mono">disabled</code>.
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
              Don&apos;t use a Toggle Group to move between pages or views of
              content. Switching what is shown on screen is navigation, and that
              is the job of Tabs. A Toggle Group sets state on the current view,
              it does not change which view you are on.
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
          Use it for mode selection, view toggles, or filter sets where the
          selection is persistent and visible.
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
