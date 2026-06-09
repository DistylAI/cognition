import type { Metadata } from "next";
import { CodeBlock } from "@/components/CodeBlock";
import { SidebarDemo } from "./SidebarDemo";

export const metadata: Metadata = {
  title: "Sidebar",
  description:
    "Sidebar — a composable, collapsible application sidebar. API matches fe-distillery components/ui/sidebar.tsx (canonical pattern).",
};

const anatomyCode = `<SidebarProvider>
  <Sidebar>
    <SidebarHeader>{/* brand */}</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Platform</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive>
              <LayoutDashboard />
              <span>Overview</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>{/* user */}</SidebarFooter>
  </Sidebar>
  <SidebarInset>
    <SidebarTrigger />
    {/* page content */}
  </SidebarInset>
</SidebarProvider>`;

const installCode = `import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";`;

export default function SidebarPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Sidebar</h1>
      <p className="mt-3 max-w-2xl text-body text-text-subtle">
        A composable, collapsible application sidebar — header, grouped menu, and
        footer, paired with the main content via{" "}
        <code className="font-mono">SidebarInset</code>.
      </p>

      <div className="mt-4 rounded-lg border border-border-default bg-background-accent p-4">
        <p className="text-small text-text-default">
          <span className="font-bold">Canonical pattern.</span> The full
          fe-distillery primitive ships 14 variants (mobile sheet, rail,
          floating/inset, skeletons, badges, …). This documents the one primary
          pattern most apps should reach for — the others compose from the same
          parts.
        </p>
      </div>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="rounded-lg border border-border-default bg-background-subtle p-6">
          <SidebarDemo />
        </div>
        <p className="mt-2 text-small">
          Live and interactive — hit the toggle to collapse to an icon rail, then
          switch the theme. Every surface, the active-item highlight, and the
          brand badge remap from Cognition tokens, no{" "}
          <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* API */}
      <section id="anatomy" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>
        <CodeBlock
          code={anatomyCode}
          className="rounded-lg border border-border-default bg-background-subtle"
        />
        <p className="mt-2 text-small">
          <code className="font-mono">SidebarProvider</code> owns the
          expanded/collapsed state (read it with{" "}
          <code className="font-mono">useSidebar</code>);{" "}
          <code className="font-mono">SidebarMenuButton</code> takes{" "}
          <code className="font-mono">isActive</code> and{" "}
          <code className="font-mono">asChild</code> (wrap a{" "}
          <code className="font-mono">Link</code>). Collapsed, button labels and
          sub-menus hide automatically.
        </p>
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
              Don&apos;t hand-roll a fixed{" "}
              <code className="font-mono">aside</code> with{" "}
              <code className="font-mono">bg-gray-50</code> and ad-hoc collapse
              state — you&apos;ll miss the shared active styling, keyboard focus,
              and token theming. Compose the provided parts.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`<SidebarMenuButton asChild isActive={pathname === "/"}>
  <Link href="/"><LayoutDashboard /><span>Overview</span></Link>
</SidebarMenuButton>`}
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
          Wrap the app in <code className="font-mono">SidebarProvider</code>,
          place a <code className="font-mono">SidebarTrigger</code> in your
          header, and put page content in{" "}
          <code className="font-mono">SidebarInset</code>.
        </p>
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        API matches the canonical parts of{" "}
        <code className="font-mono text-text-default">
          fe-distillery/components/ui/sidebar.tsx
        </code>{" "}
        — <code className="font-mono text-text-default">SidebarProvider</code>,{" "}
        <code className="font-mono text-text-default">Sidebar</code>,{" "}
        <code className="font-mono text-text-default">SidebarMenuButton</code>,{" "}
        <code className="font-mono text-text-default">SidebarInset</code>,{" "}
        <code className="font-mono text-text-default">useSidebar</code>, … The
        bespoke <code className="font-mono text-text-default">sidebar-*</code>{" "}
        tokens are mapped to Cognition semantic tokens; the 14 sidebar variants
        are intentionally not all documented here.
      </footer>
    </div>
  );
}
