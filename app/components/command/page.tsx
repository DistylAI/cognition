import type { Metadata } from "next";
import {
  Calculator,
  Calendar,
  CreditCard,
  Loader2,
  Settings,
  Smile,
  User,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Command",
  description:
    "Command component — a keyboard-first command palette with search, grouped results, icons, keyboard navigation, and empty states.",
};

// cmdk auto-selects its first item on mount and scrolls it into view. With
// several inline Command demos sitting below the fold, that scroll jumps the
// page on load, so these static demos pass a sentinel value that matches no
// item to suppress the auto-selection.
const NO_AUTOSELECT = "__no_selection__";

const props = [
  {
    name: "value",
    type: "string",
    def: "undefined",
    desc: "The currently selected item value when controlled.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    def: "undefined",
    desc: "Called when the highlighted value changes.",
  },
  {
    name: "filter",
    type: "(value, search) => number",
    def: "built-in",
    desc: "Custom scoring function. Return 0 to hide an item, higher to rank it sooner.",
  },
  {
    name: "shouldFilter",
    type: "boolean",
    def: "true",
    desc: "Set false to filter the list yourself, for example against a server.",
  },
  {
    name: "loop",
    type: "boolean",
    def: "false",
    desc: "Wrap keyboard navigation from the last item back to the first.",
  },
] as const;

const doCode = `<Command>
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem onSelect={runDeploy}>Deploy</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`;

const installCode = `import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export function Palette() {
  return (
    <Command className="rounded-lg border border-border-default">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`;

export default function CommandPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Command</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A keyboard-first command palette. It supports search, grouped results,
        icons, full keyboard navigation, and empty states. Command is the
        primitive that Combobox is built on. Combobox wraps this list in a
        Popover and a trigger; here it stands alone.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <Command
            defaultValue={NO_AUTOSELECT}
            className="w-full max-w-md rounded-lg border border-border-default shadow-md"
          >
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Smile />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <Calculator />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens. Type to filter and use the arrow
          keys, no <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Default */}
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="bg-background-subtle p-8">
              <Command defaultValue={NO_AUTOSELECT} className="rounded-md border border-border-default">
                <CommandInput placeholder="Search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem>New file</CommandItem>
                    <CommandItem>New folder</CommandItem>
                    <CommandItem>Open recent</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<CommandGroup>
  <CommandItem>New file</CommandItem>
</CommandGroup>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          {/* With groups */}
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="bg-background-subtle p-8">
              <Command defaultValue={NO_AUTOSELECT} className="rounded-md border border-border-default">
                <CommandInput placeholder="Search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Pages">
                    <CommandItem>Dashboard</CommandItem>
                    <CommandItem>Projects</CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Help">
                    <CommandItem>Documentation</CommandItem>
                    <CommandItem>Keyboard shortcuts</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<CommandGroup heading="Pages">...</CommandGroup>
<CommandSeparator />
<CommandGroup heading="Help">...</CommandGroup>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          {/* With icons */}
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="bg-background-subtle p-8">
              <Command defaultValue={NO_AUTOSELECT} className="rounded-md border border-border-default">
                <CommandInput placeholder="Search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Account">
                    <CommandItem>
                      <User />
                      <span>Profile</span>
                    </CommandItem>
                    <CommandItem>
                      <CreditCard />
                      <span>Billing</span>
                    </CommandItem>
                    <CommandItem>
                      <Settings />
                      <span>Settings</span>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<CommandItem>
  <User />
  <span>Profile</span>
</CommandItem>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          {/* Inline */}
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="bg-background-subtle p-8">
              <Command defaultValue={NO_AUTOSELECT} className="rounded-md border border-border-default">
                <CommandInput placeholder="Filter results..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem>
                      <Calendar />
                      <span>Schedule a review</span>
                    </CommandItem>
                    <CommandItem>
                      <Calculator />
                      <span>Estimate cost</span>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-xs text-text-subtle">
                Inline. Rendered in place rather than inside a dialog. Wrap it in
                a Dialog for a modal palette.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Group items with <code className="font-mono">CommandGroup</code>,
          divide groups with <code className="font-mono">CommandSeparator</code>,
          and add a leading icon inside any{" "}
          <code className="font-mono">CommandItem</code>.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Default */}
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="bg-background-subtle p-8">
              <Command defaultValue={NO_AUTOSELECT} className="rounded-md border border-border-default">
                <CommandInput placeholder="Search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem>Deploy to staging</CommandItem>
                    <CommandItem>Roll back release</CommandItem>
                    <CommandItem>View logs</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-xs text-text-subtle">
                Default. The full list, first item highlighted.
              </p>
            </div>
          </div>
          {/* Searching */}
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="bg-background-subtle p-8">
              <Command defaultValue={NO_AUTOSELECT} className="rounded-md border border-border-default">
                <CommandInput placeholder="deploy" />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem>Deploy to staging</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-xs text-text-subtle">
                Searching. The list narrows to matches as you type.
              </p>
            </div>
          </div>
          {/* Empty */}
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="bg-background-subtle p-8">
              <Command defaultValue={NO_AUTOSELECT} className="rounded-md border border-border-default">
                <CommandInput placeholder="xyz" />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                </CommandList>
              </Command>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-xs text-text-subtle">
                Empty. No command matches the query.
              </p>
            </div>
          </div>
          {/* Loading */}
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="bg-background-subtle p-8">
              <Command defaultValue={NO_AUTOSELECT} className="rounded-md border border-border-default">
                <CommandInput placeholder="Search..." />
                <CommandList>
                  <div className="flex items-center justify-center gap-2 py-6 text-sm text-text-subtle">
                    <Loader2 className="size-4 animate-spin" />
                    <span>Loading results...</span>
                  </div>
                </CommandList>
              </Command>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-xs text-text-subtle">
                Loading. Results are being fetched, often with{" "}
                <code className="font-mono">shouldFilter=false</code>.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          For server-driven results set{" "}
          <code className="font-mono">shouldFilter=&#123;false&#125;</code> and
          render your own list, including the loading row.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-xs font-medium text-text-subtle">
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
        <p className="mt-2 text-small">
          Props apply to <code className="font-mono">Command</code>. The list is
          assembled from <code className="font-mono">CommandInput</code>,{" "}
          <code className="font-mono">CommandList</code>,{" "}
          <code className="font-mono">CommandGroup</code>,{" "}
          <code className="font-mono">CommandItem</code>, and{" "}
          <code className="font-mono">CommandEmpty</code>.
        </p>
      </section>

      {/* Don't and Do */}
      <section id="do-dont" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">
          Don&apos;t and Do
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t use Command for plain option selection. Picking one value
              from a field is the job of a Select, or a Combobox when the list is
              long. Command carries the weight of a full palette, which is more
              than a single choice needs.
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
        <p className="mt-2 text-small">
          Use it for power-user surfaces, global search, and action launchers
          where keyboard-first interaction is expected.
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
