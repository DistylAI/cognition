import type { Metadata } from "next";
import { ChevronDown, ChevronsUpDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Collapsible",
  description:
    "Collapsible component — an interactive element that expands and collapses a panel. API matches fe-distillery components/ui/collapsible.tsx.",
};

const parts = [
  {
    name: "Collapsible",
    desc: "Root. Holds open / defaultOpen / onOpenChange and disabled. Uncontrolled by default.",
  },
  {
    name: "CollapsibleTrigger",
    desc: "Toggles the panel. Use asChild to render your own button.",
  },
  {
    name: "CollapsibleContent",
    desc: "The panel that shows when open and is removed when closed.",
  },
] as const;

const iconCode = `<Collapsible defaultOpen className="w-full max-w-sm space-y-2">
  <div className="flex items-center justify-between">
    <h4 className="text-sm font-semibold">Order #4189</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="icon-sm" aria-label="Toggle order details">
        <ChevronsUpDown />
      </Button>
    </CollapsibleTrigger>
  </div>
  <CollapsibleContent>
    <div className="rounded-md border border-border-default px-4 py-3 font-mono text-sm">
      Status: Shipped
    </div>
  </CollapsibleContent>
</Collapsible>`;

const labeledCode = `<Collapsible className="w-full max-w-sm space-y-2">
  <CollapsibleTrigger asChild>
    <Button
      variant="outline"
      className="w-full justify-between [&[data-state=open]>svg]:rotate-180"
    >
      View details
      <ChevronDown className="size-4 transition-transform" />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent>…</CollapsibleContent>
</Collapsible>`;

const disabledCode = `<Collapsible disabled defaultOpen>…</Collapsible>`;

const installCode = `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function OrderPanel() {
  return (
    <Collapsible defaultOpen className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-text-default">Order #4189</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon-sm" aria-label="Toggle">
            <ChevronsUpDown />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className="rounded-md border border-border-default px-4 py-3 font-mono text-sm text-text-default">
          Status: Shipped
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}`;

function OrderCollapsible({
  defaultOpen = true,
  disabled = false,
}: {
  defaultOpen?: boolean;
  disabled?: boolean;
}) {
  return (
    <Collapsible
      defaultOpen={defaultOpen}
      disabled={disabled}
      className="w-full max-w-sm space-y-2"
    >
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-sm font-semibold text-text-default">Order #4189</h4>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Toggle order details"
          >
            <ChevronsUpDown />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className="rounded-md border border-border-default px-4 py-3 font-mono text-sm text-text-default">
          Status: Shipped
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function LabeledCollapsible() {
  return (
    <Collapsible className="w-full max-w-sm space-y-2">
      <CollapsibleTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between [&[data-state=open]>svg]:rotate-180"
        >
          View details
          <ChevronDown className="size-4 transition-transform" aria-hidden />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="rounded-md border border-border-default px-4 py-3 text-sm text-text-subtle">
          Ships in 2–3 business days. Free returns within 30 days.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function Cell({
  children,
  code,
}: {
  children: React.ReactNode;
  code: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border-default">
      <div className="flex items-start justify-center bg-background-subtle p-8">
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

export default function CollapsibleDocsPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Collapsible</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        An interactive element that expands and collapses a panel. Use it to hide
        secondary detail behind a trigger — order status, advanced options, a
        longer description — without leaving the page.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-start justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <OrderCollapsible />
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens — the trigger, border, and text
          remap on theme change, no{" "}
          <code className="font-mono">dark:</code> classes. Toggle the control to
          collapse the panel.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Triggers</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Cell code={iconCode}>
            <OrderCollapsible />
          </Cell>
          <Cell code={labeledCode}>
            <LabeledCollapsible />
          </Cell>
        </div>
        <p className="mt-2 text-small">
          The trigger is yours to compose with{" "}
          <code className="font-mono">asChild</code> — an icon-only toggle beside
          a heading, or a full-width labeled button whose chevron rotates on{" "}
          <code className="font-mono">data-[state=open]</code>.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Cell code={`<Collapsible>…</Collapsible>`}>
            <OrderCollapsible defaultOpen={false} />
          </Cell>
          <Cell code={`<Collapsible defaultOpen>…</Collapsible>`}>
            <OrderCollapsible defaultOpen />
          </Cell>
          <Cell code={disabledCode}>
            <OrderCollapsible defaultOpen disabled />
          </Cell>
        </div>
        <p className="mt-2 text-small">
          Starts closed by default; pass{" "}
          <code className="font-mono">defaultOpen</code> to render it expanded, or{" "}
          <code className="font-mono">disabled</code> to lock the panel and dim
          its trigger.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[560px]">
            <div className="grid grid-cols-[1.6fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-xs font-medium text-text-subtle">
              <div>Part</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {parts.map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.6fr_3fr] gap-4 px-4 py-3"
                >
                  <div className="font-mono text-sm text-text-default">
                    {p.name}
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
              Don&apos;t use a Collapsible for a set of stacked sections — that&apos;s{" "}
              <code className="font-mono">Accordion</code>. And don&apos;t hide
              essential content or primary actions behind one; reach for it only
              for secondary, skippable detail.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="ghost" size="icon-sm">
      <ChevronsUpDown />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent>…</CollapsibleContent>
</Collapsible>`}
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
          fe-distillery/components/ui/collapsible.tsx
        </code>{" "}
        — <code className="font-mono text-text-default">Collapsible</code>,{" "}
        <code className="font-mono text-text-default">CollapsibleTrigger</code>,{" "}
        <code className="font-mono text-text-default">CollapsibleContent</code> on
        Radix. A re-export with no styling of its own; the trigger and content
        use Cognition tokens. For stacked sections, use{" "}
        <code className="font-mono text-text-default">Accordion</code>.
      </footer>
    </div>
  );
}
