import type { Metadata } from "next";
import { CodeBlock } from "@/components/CodeBlock";
import { IconTabs, VariantTabs } from "./TabsDemos";

export const metadata: Metadata = {
  title: "Tabs",
  description:
    "Tabs component — layered sections of content shown one at a time. API matches fe-distillery components/ui/tabs.tsx.",
};

const variants = [
  {
    key: "secondary" as const,
    label: "secondary",
    note: "Segmented pill — the Cognition default.",
    code: `<Tabs defaultValue="overview">
  <TabsList variant="secondary">
    <TabsTrigger variant="secondary" value="overview">Overview</TabsTrigger>
    <TabsTrigger variant="secondary" value="analytics">Analytics</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">…</TabsContent>
</Tabs>`,
  },
  {
    key: "underline" as const,
    label: "underline",
    note: "Bottom-border line, for in-page section switching.",
    code: `<TabsList variant="underline">
  <TabsTrigger variant="underline" value="overview">Overview</TabsTrigger>
</TabsList>`,
  },
  {
    key: "default" as const,
    label: "default",
    note: "Borderless pills with an accent active state.",
    code: `<TabsList variant="default">
  <TabsTrigger variant="default" value="overview">Overview</TabsTrigger>
</TabsList>`,
  },
];

const installCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function ProjectTabs() {
  return (
    <Tabs defaultValue="overview">
      <TabsList variant="secondary">
        <TabsTrigger variant="secondary" value="overview">Overview</TabsTrigger>
        <TabsTrigger variant="secondary" value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">…</TabsContent>
      <TabsContent value="settings">…</TabsContent>
    </Tabs>
  );
}`;

export default function TabsPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Tabs</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A set of layered sections of content — known as tab panels — displayed
        one at a time. Use for switching views within a single context.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <VariantTabs variant="secondary" />
        </div>
        <p className="mt-2 text-small">
          Live and interactive — switch tabs, then toggle the theme. The track,
          active pill, and text all remap from Cognition tokens, no{" "}
          <code className="font-mono">dark:</code> classes (the fix for the
          source file&apos;s <code className="font-mono">dark:</code> violations).
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Variants</h3>
        <div className="space-y-4">
          {variants.map((v) => (
            <div
              key={v.key}
              className="overflow-hidden rounded-lg border border-border-default"
            >
              <div className="flex items-center justify-center bg-background-subtle p-8">
                <VariantTabs variant={v.key} />
              </div>
              <div className="border-t border-border-default p-3">
                <CodeBlock
                  code={v.code}
                  size="sm"
                  className="rounded-md border border-border-subtle bg-background-subtle"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-small">
          The <code className="font-mono">variant</code> goes on both{" "}
          <code className="font-mono">TabsList</code> and{" "}
          <code className="font-mono">TabsTrigger</code>:{" "}
          <code className="font-mono">secondary</code> (segmented),{" "}
          <code className="font-mono">underline</code> (line), and{" "}
          <code className="font-mono">default</code> (accent pills).
        </p>
      </section>

      {/* With icons */}
      <section id="with-icons" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">With icons</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <IconTabs />
        </div>
        <p className="mt-2 text-small">
          Drop a Lucide icon in as the first child of a trigger — the{" "}
          <code className="font-mono">[&amp;_svg]</code> rules size and align it.
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
              {[
                { name: "Tabs", desc: "Root. Holds value / defaultValue / onValueChange." },
                { name: "TabsList", desc: "The row of triggers. variant: \"default\" | \"underline\" | \"secondary\"." },
                { name: "TabsTrigger", desc: "A tab button; its value links it to a panel." },
                { name: "TabsContent", desc: "The panel shown when its value is the active one." },
              ].map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.6fr_3fr] gap-4 px-4 py-3"
                >
                  <div className="font-mono text-sm text-text-default">{p.name}</div>
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
              Don&apos;t style the active tab with{" "}
              <code className="font-mono">
                dark:data-[state=active]:bg-input/30
              </code>{" "}
              — the legacy tabs.tsx does. And don&apos;t use Tabs for navigation
              between routes; that&apos;s a nav, not a tab set.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`// Token-driven active state, theme-agnostic
<TabsTrigger variant="secondary" value="overview">
  Overview
</TabsTrigger>`}
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
          Built on Radix Tabs — keyboard navigation and roving focus come for
          free. Set <code className="font-mono">defaultValue</code> (uncontrolled)
          or <code className="font-mono">value</code> /{" "}
          <code className="font-mono">onValueChange</code> (controlled).
        </p>
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        API matches{" "}
        <code className="font-mono text-text-default">
          fe-distillery/components/ui/tabs.tsx
        </code>{" "}
        — <code className="font-mono text-text-default">Tabs</code>,{" "}
        <code className="font-mono text-text-default">TabsList</code>,{" "}
        <code className="font-mono text-text-default">TabsTrigger</code>,{" "}
        <code className="font-mono text-text-default">TabsContent</code> with the{" "}
        <code className="font-mono text-text-default">variant</code> axis. The{" "}
        <code className="font-mono text-text-default">dark:</code> class
        violations and raw palette colors are replaced with Cognition tokens.
      </footer>
    </div>
  );
}
