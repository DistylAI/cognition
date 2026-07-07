import type { Metadata } from "next";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Resizable",
  description:
    "Resizable component -- panels with drag handles for split-pane layouts, editors, and any surface where the user controls panel sizing.",
};

const api = [
  { name: "ResizablePanelGroup", type: "component", def: "—", desc: "Wraps the panels. Set direction to horizontal or vertical." },
  { name: "ResizablePanelGroup.direction", type: '"horizontal" | "vertical"', def: "required", desc: "Axis the panels are laid out and resized along." },
  { name: "ResizablePanel", type: "component", def: "—", desc: "A single panel within the group." },
  { name: "ResizablePanel.defaultSize", type: "number", def: "—", desc: "Initial size as a percent of the group." },
  { name: "ResizablePanel.minSize", type: "number", def: "—", desc: "Smallest size the panel can be dragged to, in percent." },
  { name: "ResizablePanel.maxSize", type: "number", def: "—", desc: "Largest size the panel can be dragged to, in percent." },
  { name: "ResizablePanel.collapsible", type: "boolean", def: "false", desc: "Allows the panel to collapse past its minSize." },
  { name: "ResizablePanel.collapsedSize", type: "number", def: "0", desc: "Size the panel snaps to when collapsed, in percent." },
  { name: "ResizableHandle.withHandle", type: "boolean", def: "false", desc: "Shows a visible grip on the drag handle." },
] as const;

const doCode = `<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={30} minSize={20}>
    Sidebar
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={70}>Editor</ResizablePanel>
</ResizablePanelGroup>`;

const installCode = `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export function SplitView() {
  return (
    <ResizablePanelGroup direction="horizontal" className="h-full">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">One</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">Two</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`;

function Pane({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full items-center justify-center p-6 text-sm font-medium text-text-default">
      {children}
    </div>
  );
}

export default function ResizablePage() {
  return (
    <div>
      <p className="mb-2 text-caption">Components</p>
      <h1 className="text-lead text-text-default">Resizable</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        Panels joined by drag handles that let the reader resize them. Use it for
        split-pane layouts, editors, and any surface where controlling the
        proportions is useful.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">Preview</h3>
        <div className="rounded-lg border border-border-default bg-background-subtle p-10">
          <div className="mx-auto h-52 max-w-xl overflow-hidden rounded-lg border border-border-default bg-background-default">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={50}>
                <Pane>One</Pane>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50}>
                <Pane>Two</Pane>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens. Drag the handle to resize, no{" "}
          <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="bg-background-subtle p-8">
              <div className="h-44 overflow-hidden rounded-lg border border-border-default bg-background-default">
                <ResizablePanelGroup direction="horizontal">
                  <ResizablePanel defaultSize={50}>
                    <Pane>One</Pane>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={50}>
                    <Pane>Two</Pane>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<ResizablePanelGroup direction="horizontal">`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="bg-background-subtle p-8">
              <div className="h-44 overflow-hidden rounded-lg border border-border-default bg-background-default">
                <ResizablePanelGroup direction="vertical">
                  <ResizablePanel defaultSize={50}>
                    <Pane>One</Pane>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={50}>
                    <Pane>Two</Pane>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<ResizablePanelGroup direction="vertical">`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default lg:col-span-2">
            <div className="bg-background-subtle p-8">
              <div className="h-52 overflow-hidden rounded-lg border border-border-default bg-background-default">
                <ResizablePanelGroup direction="horizontal">
                  <ResizablePanel defaultSize={40}>
                    <Pane>One</Pane>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={60}>
                    <ResizablePanelGroup direction="vertical">
                      <ResizablePanel defaultSize={50}>
                        <Pane>Two</Pane>
                      </ResizablePanel>
                      <ResizableHandle withHandle />
                      <ResizablePanel defaultSize={50}>
                        <Pane>Three</Pane>
                      </ResizablePanel>
                    </ResizablePanelGroup>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<ResizablePanel defaultSize={60}>
  <ResizablePanelGroup direction="vertical">…</ResizablePanelGroup>
</ResizablePanel>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          A horizontal split, a vertical split, and panels nested inside a panel
          for more complex layouts.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="bg-background-subtle p-8">
              <div className="h-40 overflow-hidden rounded-lg border border-border-default bg-background-default">
                <ResizablePanelGroup direction="horizontal">
                  <ResizablePanel defaultSize={50}>
                    <Pane>One</Pane>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={50}>
                    <Pane>Two</Pane>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">
                Default. A plain handle, no grip.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="bg-background-subtle p-8">
              <div className="h-40 overflow-hidden rounded-lg border border-border-default bg-background-default">
                <ResizablePanelGroup direction="horizontal">
                  <ResizablePanel defaultSize={50}>
                    <Pane>One</Pane>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={50}>
                    <Pane>Two</Pane>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">
                Dragging. Grab the grip to resize.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="bg-background-subtle p-8">
              <div className="h-40 overflow-hidden rounded-lg border border-border-default bg-background-default">
                <ResizablePanelGroup direction="horizontal">
                  <ResizablePanel
                    defaultSize={12}
                    minSize={12}
                    collapsible
                    collapsedSize={12}
                  >
                    <Pane>Rail</Pane>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={88}>
                    <Pane>Editor</Pane>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">
                Collapsed. A collapsible panel at its collapsedSize.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          The handle activates while dragging. A panel marked{" "}
          <code className="font-mono">collapsible</code> can snap to its{" "}
          <code className="font-mono">collapsedSize</code>.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.8fr_1.6fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-caption font-medium">
              <div>Prop</div>
              <div>Type</div>
              <div>Default</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {api.map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.8fr_1.6fr_1fr_3fr] gap-4 px-4 py-3"
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
          Sizes are percentages of the group. Give the{" "}
          <code className="font-mono">ResizablePanelGroup</code> a sized parent so
          it has room to lay the panels out.
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
              Don&apos;t use Resizable for a layout that should stay fixed. The
              drag handles tell the reader the proportions are theirs to change,
              so applying them to a structure you want to hold steady invites
              edits you did not intend. Use plain layout utilities there.
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
          Use it for editor layouts, split views, and any surface where the
          reader benefits from controlling the proportion of visible content.
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
