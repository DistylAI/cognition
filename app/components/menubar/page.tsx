import type { Metadata } from "next";
import { Check, ChevronRight, Circle } from "lucide-react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Menubar",
  description:
    "Menubar component: a persistent horizontal command bar for desktop applications, where each item opens a dropdown of commands.",
};

const composition = [
  { name: "Menubar", desc: "The persistent horizontal bar." },
  { name: "MenubarMenu", desc: "One top-level menu within the bar." },
  { name: "MenubarTrigger", desc: "The label that opens a menu." },
  { name: "MenubarContent", desc: "The dropdown surface for a menu." },
  { name: "MenubarItem", desc: "A command item." },
  { name: "MenubarSeparator", desc: "A divider between groups." },
  { name: "MenubarLabel", desc: "A non-interactive group heading." },
  { name: "MenubarCheckboxItem", desc: "An item with a toggle checkmark." },
  { name: "MenubarRadioGroup", desc: "Wraps radio items to share one value." },
  { name: "MenubarRadioItem", desc: "A single-select item within a radio group." },
  { name: "MenubarShortcut", desc: "Right-aligned keyboard hint on an item." },
  { name: "MenubarSub", desc: "Root for a nested sub-menu." },
  { name: "MenubarSubTrigger", desc: "Item that opens the sub-menu." },
  { name: "MenubarSubContent", desc: "The nested sub-menu surface." },
] as const;

const doCode = `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`;

const installCode = `import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function AppMenubar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`;

const itemClass =
  "relative flex select-none items-center gap-2 rounded-sm py-1.5 pr-2 text-sm";

function MenuBarMock({ open }: { open?: string }) {
  return (
    <div className="flex h-9 items-center gap-1 rounded-md border border-border-default bg-background-default p-1 shadow-sm">
      {["File", "Edit", "View"].map((label) => (
        <span
          key={label}
          className={`rounded-sm px-3 py-1 text-sm font-medium text-text-default ${open === label ? "bg-background-secondary" : ""}`}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function MenuPanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-56 rounded-md border border-border-default bg-background-default p-1 text-text-default shadow-md ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

function MItem({
  children,
  shortcut,
  chevron,
  checked,
  radio,
  highlighted,
  disabled,
}: {
  children: React.ReactNode;
  shortcut?: string;
  chevron?: boolean;
  checked?: boolean;
  radio?: boolean;
  highlighted?: boolean;
  disabled?: boolean;
}) {
  const usesIndicator = checked !== undefined || radio !== undefined;
  return (
    <div
      className={`${itemClass} ${usesIndicator ? "pl-8" : "px-2"} ${highlighted ? "bg-background-secondary" : ""} ${disabled ? "opacity-50" : ""}`}
    >
      {checked && (
        <Check className="absolute left-2 top-1/2 size-4 -translate-y-1/2" />
      )}
      {radio && (
        <Circle className="absolute left-2 top-1/2 size-2 -translate-y-1/2 fill-current" />
      )}
      <span>{children}</span>
      {shortcut && (
        <span className="ml-auto text-caption tracking-widest">
          {shortcut}
        </span>
      )}
      {chevron && <ChevronRight className="ml-auto size-4" />}
    </div>
  );
}

function MSeparator() {
  return <div className="-mx-1 my-1 h-px bg-border-default" />;
}

export default function MenubarPage() {
  return (
    <div>
      <p className="mb-2 text-caption">Components</p>
      <h1 className="text-lead text-text-default">Menubar</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A persistent horizontal command bar, the kind that sits at the top of a
        desktop application. Each item opens a dropdown of grouped commands.
      </p>

      <div className="mt-4 rounded-lg border border-border-default bg-background-accent p-4">
        <p className="text-small text-text-default">
          Menubar is for application commands, not navigation. For moving around
          a site or app, use Navigation Menu or Sidebar.
        </p>
      </div>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">Preview</h3>
        <div className="flex min-h-[160px] items-start justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Window <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Messages</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                  Print <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem checked>
                  Always Show Bookmarks
                </MenubarCheckboxItem>
                <MenubarCheckboxItem>Always Show Full URLs</MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarRadioGroup value="derek">
                  <MenubarRadioItem value="derek">Derek Ho</MenubarRadioItem>
                  <MenubarRadioItem value="arjun">Arjun Prakash</MenubarRadioItem>
                </MenubarRadioGroup>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens. Open a menu and arrow across the
          bar, no <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex h-auto flex-col items-center gap-3 overflow-hidden rounded-lg border border-border-default bg-background-subtle p-6">
            <MenuPanel>
              <MItem>New Tab</MItem>
              <MItem>New Window</MItem>
              <MItem>Open recent</MItem>
            </MenuPanel>
            <p className="text-caption">Default</p>
          </div>
          <div className="flex h-auto flex-col items-center gap-3 overflow-hidden rounded-lg border border-border-default bg-background-subtle p-6">
            <MenuPanel>
              <MItem shortcut="⌘T">New Tab</MItem>
              <MItem shortcut="⌘N">New Window</MItem>
              <MItem shortcut="⌘P">Print</MItem>
            </MenuPanel>
            <p className="text-caption">With keyboard shortcuts</p>
          </div>
          <div className="flex h-auto flex-col items-center gap-3 overflow-hidden rounded-lg border border-border-default bg-background-subtle p-6">
            <MenuPanel>
              <MItem>Open</MItem>
              <MItem chevron>Share</MItem>
              <MItem>Save as</MItem>
            </MenuPanel>
            <p className="text-caption">With submenus</p>
          </div>
          <div className="flex h-auto flex-col items-center gap-3 overflow-hidden rounded-lg border border-border-default bg-background-subtle p-6">
            <MenuPanel>
              <MItem>Cut</MItem>
              <MItem>Copy</MItem>
              <MSeparator />
              <MItem>Select all</MItem>
            </MenuPanel>
            <p className="text-caption">With separators</p>
          </div>
          <div className="flex h-auto flex-col items-center gap-3 overflow-hidden rounded-lg border border-border-default bg-background-subtle p-6">
            <MenuPanel>
              <MItem checked>Always Show Bookmarks</MItem>
              <MItem checked={false}>Always Show Full URLs</MItem>
            </MenuPanel>
            <p className="text-caption">With checkboxes</p>
          </div>
          <div className="flex h-auto flex-col items-center gap-3 overflow-hidden rounded-lg border border-border-default bg-background-subtle p-6">
            <MenuPanel>
              <MItem radio>Derek Ho</MItem>
              <MItem radio={false}>Arjun Prakash</MItem>
            </MenuPanel>
            <p className="text-caption">With radio groups</p>
          </div>
        </div>
        <p className="mt-2 text-small">
          Menus compose shortcuts, submenus, separators, checkboxes, and radio
          groups. The panels are shown open for reference.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex h-auto flex-col items-center gap-3 overflow-hidden rounded-lg border border-border-default bg-background-subtle p-6">
            <MenuBarMock />
            <p className="text-caption">Closed. The resting bar.</p>
          </div>
          <div className="flex h-auto flex-col items-center gap-3 overflow-hidden rounded-lg border border-border-default bg-background-subtle p-6">
            <div className="flex flex-col items-center gap-1">
              <MenuBarMock open="File" />
              <MenuPanel>
                <MItem shortcut="⌘T">New Tab</MItem>
                <MItem shortcut="⌘N">New Window</MItem>
              </MenuPanel>
            </div>
            <p className="text-caption">Item open.</p>
          </div>
          <div className="flex h-auto flex-col items-center gap-3 overflow-hidden rounded-lg border border-border-default bg-background-subtle p-6 sm:col-span-2">
            <div className="flex items-start">
              <MenuPanel>
                <MItem>Open</MItem>
                <MItem chevron highlighted>
                  Share
                </MItem>
                <MItem>Save as</MItem>
              </MenuPanel>
              <MenuPanel className="-ml-1 mt-7">
                <MItem>Email link</MItem>
                <MItem>Messages</MItem>
              </MenuPanel>
            </div>
            <p className="text-caption">Nested item hover.</p>
          </div>
          <div className="flex h-auto flex-col items-center gap-3 overflow-hidden rounded-lg border border-border-default bg-background-subtle p-6">
            <MenuPanel>
              <MItem>Cut</MItem>
              <MItem disabled>Paste</MItem>
              <MItem>Copy</MItem>
            </MenuPanel>
            <p className="text-caption">Item disabled.</p>
          </div>
          <div className="flex h-auto flex-col items-center gap-3 overflow-hidden rounded-lg border border-border-default bg-background-subtle p-6">
            <MenuPanel>
              <MItem checked>Always Show Bookmarks</MItem>
              <MItem checked={false}>Always Show Full URLs</MItem>
            </MenuPanel>
            <p className="text-caption">Checkbox checked.</p>
          </div>
          <div className="flex h-auto flex-col items-center gap-3 overflow-hidden rounded-lg border border-border-default bg-background-subtle p-6">
            <MenuPanel>
              <MItem radio>Derek Ho</MItem>
              <MItem radio={false}>Arjun Prakash</MItem>
            </MenuPanel>
            <p className="text-caption">Radio selected.</p>
          </div>
        </div>
        <p className="mt-2 text-small">
          A menu opens on click, so the open, hover, and nested states render
          statically. The preview opens the real menus.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[560px]">
            <div className="grid grid-cols-[1.8fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-caption font-medium">
              <div>Component</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {composition.map((c) => (
                <div
                  key={c.name}
                  className="grid grid-cols-[1.8fr_3fr] gap-4 px-4 py-3"
                >
                  <div className="font-mono text-sm text-text-default">
                    {c.name}
                  </div>
                  <div className="text-sm text-text-subtle">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
              Don&apos;t use a Menubar to move between pages or sections. It reads
              as an application command surface, so filling it with destinations
              confuses commands with navigation. Use Navigation Menu or Sidebar
              for getting around.
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
          Use it for desktop application command surfaces, the File, Edit, View,
          Help pattern, where persistent access to grouped commands is expected.
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
