import type { Metadata } from "next";
import { ChevronRight, File, Folder } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FileTreeDemo } from "./FileTreeDemo";

export const metadata: Metadata = {
  title: "File Tree",
  description:
    "File Tree -- an interactive, collapsible hierarchy of folders and files, composed from the Sidebar primitives and themed with Cognition tokens.",
};

const doCode = `<SidebarMenu>
  <SidebarMenuItem>
    <SidebarMenuButton className="h-8">
      <Folder className="size-4 text-text-subtle" />
      <span>app</span>
    </SidebarMenuButton>
    <SidebarMenuSub>
      <SidebarMenuSubItem>
        <SidebarMenuSubButton>
          <File className="size-4 text-text-subtle" />
          <span>page.tsx</span>
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    </SidebarMenuSub>
  </SidebarMenuItem>
</SidebarMenu>`;

export default function FileTreePage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">File Tree</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A file tree presents nested folders and files as an interactive,
        collapsible hierarchy -- the pattern behind source-control panels and
        project explorers. It composes from the Sidebar primitives, so every row
        shares the same hover, selected, and focus styling.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex justify-center rounded-lg border border-border-default bg-background-subtle p-6">
          <FileTreeDemo />
        </div>
        <p className="mt-2 text-small">
          Click a folder to expand or collapse it, and a file to select it. Switch
          the theme -- every surface and the selected-row highlight remap from
          Cognition tokens, no <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-medium text-text-subtle">
              With icons (default)
            </p>
            <div className="flex justify-center rounded-lg border border-border-default bg-background-subtle p-6">
              <FileTreeDemo />
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium text-text-subtle">
              Without icons
            </p>
            <div className="flex justify-center rounded-lg border border-border-default bg-background-subtle p-6">
              <FileTreeDemo showIcons={false} />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Set <code className="font-mono">showIcons={"{false}"}</code> to drop the
          chevron, folder, and file glyphs. Indentation and the guide rail alone
          carry the hierarchy.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-medium text-text-subtle">Default</p>
            <div className="rounded-lg border border-border-default bg-background-subtle p-2">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="h-8">
                    <File className="size-4 text-text-subtle" />
                    <span>page.tsx</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium text-text-subtle">Selected</p>
            <div className="rounded-lg border border-border-default bg-background-subtle p-2">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="h-8" isActive>
                    <File className="size-4 text-text-subtle" />
                    <span>page.tsx</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium text-text-subtle">
              Folder -- collapsed
            </p>
            <div className="rounded-lg border border-border-default bg-background-subtle p-2">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="h-8">
                    <ChevronRight className="size-4 text-text-subtle" />
                    <Folder className="size-4 text-text-subtle" />
                    <span>app</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium text-text-subtle">
              Folder -- expanded
            </p>
            <div className="rounded-lg border border-border-default bg-background-subtle p-2">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="h-8">
                    <ChevronRight className="size-4 rotate-90 text-text-subtle" />
                    <Folder className="size-4 text-text-subtle" />
                    <span>app</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Rows tint on hover and when selected (<code className="font-mono">
            isActive
          </code>
          ), both drawn from <code className="font-mono">background-secondary</code>.
          Folders rotate the chevron 90&deg; when expanded.
        </p>
      </section>

      {/* Props */}
      <section id="props" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Props</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-xs font-medium text-text-subtle">
              <div>Prop</div>
              <div>Type</div>
              <div>Default</div>
              <div>Description</div>
            </div>
            {[
              {
                prop: "showIcons",
                type: "boolean",
                def: "true",
                desc: "Show the leading chevron, folder, and file icons. When false, indentation alone conveys the hierarchy.",
              },
              {
                prop: "name",
                type: "string",
                def: "—",
                desc: "Display label for a node.",
              },
              {
                prop: "kind",
                type: `"folder" | "file" | "route"`,
                def: "—",
                desc: "Node type. Picks the icon (Folder, File, or SquareTerminal) and the row height.",
              },
              {
                prop: "badge",
                type: "string | number",
                def: "—",
                desc: "Optional right-aligned status marker, e.g. M, U, or a count.",
              },
              {
                prop: "expanded",
                type: "boolean",
                def: "false",
                desc: "Whether a folder starts open.",
              },
              {
                prop: "children",
                type: "FileNode[]",
                def: "—",
                desc: "Child nodes. Folders only.",
              },
            ].map((row) => (
              <div
                key={row.prop}
                className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 border-b border-border-default px-4 py-3 text-small last:border-0"
              >
                <code className="font-mono text-text-primary">{row.prop}</code>
                <code className="font-mono text-text-subtle">{row.type}</code>
                <span className="text-text-subtle">{row.def}</span>
                <span className="text-text-default">{row.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-2 text-small">
          <code className="font-mono">showIcons</code> is the only component prop;
          the remaining fields describe the <code className="font-mono">FileNode</code>{" "}
          data shape the tree renders.
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
              Don&apos;t rebuild the tree from raw{" "}
              <code className="font-mono">div</code>s with hardcoded indentation
              and palette colors. Hand-rolled rows drift from the menu styling,
              lose their hover and selected states, and break on rebrand.
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
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        Composed entirely from the Sidebar primitives and{" "}
        <code className="font-mono text-text-default">lucide-react</code> icons,
        themed with Cognition tokens -- no hardcoded colors and no{" "}
        <code className="font-mono text-text-default">dark:</code> classes. The
        file names shown are placeholders for documentation only.
      </footer>
    </div>
  );
}
