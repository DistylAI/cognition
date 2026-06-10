import type { Metadata } from "next";
import { CodeBlock } from "@/components/CodeBlock";
import {
  AlignPopover,
  DimensionsPopover,
  SimplePopover,
} from "./PopoverDemos";

export const metadata: Metadata = {
  title: "Popover",
  description:
    "Popover component — displays rich content in a portal, triggered by a button. API matches fe-distillery components/ui/popover.tsx.",
};

const props = [
  {
    name: "Popover open",
    type: "boolean",
    def: "undefined",
    desc: "Controlled open state. Pair with onOpenChange; omit for uncontrolled.",
  },
  {
    name: "Popover defaultOpen",
    type: "boolean",
    def: "false",
    desc: "Open on mount when uncontrolled.",
  },
  {
    name: "PopoverTrigger asChild",
    type: "boolean",
    def: "false",
    desc: "Render your own element (e.g. a Button) as the trigger.",
  },
  {
    name: "PopoverContent align",
    type: '"start" | "center" | "end"',
    def: '"center"',
    desc: "Alignment against the trigger along the side axis.",
  },
  {
    name: "PopoverContent side",
    type: '"top" | "right" | "bottom" | "left"',
    def: '"bottom"',
    desc: "Which side of the trigger the content opens on.",
  },
  {
    name: "PopoverContent sideOffset",
    type: "number",
    def: "4",
    desc: "Gap in pixels between the trigger and the content.",
  },
] as const;

const dimensionsCode = `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-1">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-text-subtle">Set the dimensions for the layer.</p>
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
        <label htmlFor="width">Width</label>
        <Input id="width" placeholder="Placeholder" className="col-span-2 h-8" />
      </div>
      {/* …more fields */}
    </div>
  </PopoverContent>
</Popover>`;

const simpleCode = `<PopoverContent>
  <div className="space-y-1">
    <h4 className="font-medium leading-none">Activity log</h4>
    <p className="text-sm text-text-subtle">Rich content lives in a portal…</p>
  </div>
</PopoverContent>`;

const alignCode = `<PopoverContent align="start">…</PopoverContent>
<PopoverContent align="center">…</PopoverContent>
<PopoverContent align="end">…</PopoverContent>`;

const installCode = `import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DimensionsPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-text-subtle">Set the dimensions for the layer.</p>
      </PopoverContent>
    </Popover>
  );
}`;

function Cell({
  children,
  code,
}: {
  children: React.ReactNode;
  code: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border-default">
      <div className="flex items-center justify-center bg-background-subtle p-8">
        {children}
      </div>
      <div className="border-t border-border-default p-3">
        <CodeBlock
          code={code}
          size="sm"
          className="rounded-md border border-border-subtle bg-background-subtle"
        />
      </div>
    </div>
  );
}

export default function PopoverDocsPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Popover</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        Displays rich content in a portal, triggered by a button. Use it for
        secondary controls — a form, a detail panel, a set of options — that
        should float above the page and dismiss on outside click or Escape.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <DimensionsPopover />
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens — the panel surface, border, and
          text remap on theme change, no{" "}
          <code className="font-mono">dark:</code> classes. Trigger it to float
          the content over the page.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Cell code={dimensionsCode}>
            <DimensionsPopover />
          </Cell>
          <Cell code={simpleCode}>
            <SimplePopover />
          </Cell>
        </div>
        <p className="mt-2 text-small">
          The popover frames whatever you put in it — a compact form like
          Dimensions, or a short block of detail. Set an explicit width on{" "}
          <code className="font-mono">PopoverContent</code> (it defaults to{" "}
          <code className="font-mono">w-72</code>).
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Alignment</h3>
        <div className="grid grid-cols-1 gap-4">
          <Cell code={alignCode}>
            <div className="flex w-full max-w-2xl flex-wrap items-center justify-between gap-6">
              <AlignPopover align="start" />
              <AlignPopover align="center" />
              <AlignPopover align="end" />
            </div>
          </Cell>
        </div>
        <p className="mt-2 text-small">
          <code className="font-mono">align</code> positions the content against
          the trigger; pair it with <code className="font-mono">side</code> and{" "}
          <code className="font-mono">sideOffset</code> to control placement.
          Radix flips the side automatically when there isn&apos;t room.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.6fr_1.8fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-xs font-medium text-text-subtle">
              <div>Prop</div>
              <div>Type</div>
              <div>Default</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {props.map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.6fr_1.8fr_1fr_3fr] gap-4 px-4 py-3"
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
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Don&apos;t and Do</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t use a popover for a simple menu of actions — that&apos;s{" "}
              <code className="font-mono">Dropdown Menu</code> — or for a flat
              text hint, which is a <code className="font-mono">Tooltip</code>.
              And don&apos;t put critical, must-act-on content in one; it
              dismisses on any outside click.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open</Button>
  </PopoverTrigger>
  <PopoverContent>…</PopoverContent>
</Popover>`}
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
          fe-distillery/components/ui/popover.tsx
        </code>{" "}
        — <code className="font-mono text-text-default">Popover</code>,{" "}
        <code className="font-mono text-text-default">PopoverTrigger</code>,{" "}
        <code className="font-mono text-text-default">PopoverAnchor</code>,{" "}
        <code className="font-mono text-text-default">PopoverContent</code>. The
        raw popover surface and foreground are replaced with Cognition tokens,
        matching the Dropdown Menu and Dialog content.
      </footer>
    </div>
  );
}
