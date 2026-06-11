import type { Metadata } from "next";
import { Combobox } from "@/components/ui/combobox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { CodeBlock } from "@/components/CodeBlock";
import { IconCombobox } from "./icon-combobox";

export const metadata: Metadata = {
  title: "Combobox",
  description:
    "Combobox component — a searchable select that combines a text input with a filterable dropdown list. A higher-order component built from Command and Popover.",
};

// cmdk auto-selects its first item on mount and scrolls it into view. With
// several inline Command demos sitting below the fold, that scroll jumps the
// page on load, so these static demos pass a sentinel value that matches no
// item to suppress the auto-selection. The live Combobox keeps the default.
const NO_AUTOSELECT = "__no_selection__";

const regions = [
  { value: "us-east", label: "US East (Virginia)" },
  { value: "us-west", label: "US West (Oregon)" },
  { value: "eu-west", label: "EU West (Ireland)" },
  { value: "eu-central", label: "EU Central (Frankfurt)" },
  { value: "ap-south", label: "Asia Pacific (Mumbai)" },
  { value: "ap-northeast", label: "Asia Pacific (Tokyo)" },
  { value: "sa-east", label: "South America (Sao Paulo)" },
];

const environments = [
  { value: "prod-us", label: "Production US", group: "Production" },
  { value: "prod-eu", label: "Production EU", group: "Production" },
  { value: "staging", label: "Staging", group: "Non-production" },
  { value: "dev", label: "Development", group: "Non-production" },
  { value: "sandbox", label: "Sandbox", group: "Non-production" },
];

const props = [
  {
    name: "options",
    type: "{ value, label, icon?, group? }[]",
    def: "required",
    desc: "The selectable options. Add icon for a leading glyph, group to bucket under a heading.",
  },
  {
    name: "value",
    type: "string",
    def: "undefined",
    desc: "Selected value when the combobox is controlled.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    def: "undefined",
    desc: "Called with the new value when the selection changes.",
  },
  {
    name: "placeholder",
    type: "string",
    def: '"Select an option..."',
    desc: "Trigger text shown when nothing is selected.",
  },
  {
    name: "disabled",
    type: "boolean",
    def: "false",
    desc: "Disables the trigger and blocks opening the list.",
  },
] as const;

const doCode = `<Combobox
  options={timezones}
  placeholder="Select a timezone..."
  onValueChange={setZone}
/>`;

const installCode = `import { Combobox } from "@/components/ui/combobox";

const regions = [
  { value: "us-east", label: "US East (Virginia)" },
  { value: "eu-west", label: "EU West (Ireland)" },
  // ...a long list worth filtering
];

export function RegionPicker() {
  return (
    <Combobox
      options={regions}
      placeholder="Select a region..."
      searchPlaceholder="Search regions..."
    />
  );
}`;

export default function ComboboxPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Combobox</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A searchable select. It pairs a text input with a dropdown list so the
        reader can filter by typing, which keeps long option sets manageable.
      </p>

      <div className="mt-4 rounded-lg border border-border-default bg-background-accent p-4">
        <p className="text-small text-text-default">
          Combobox is a higher-order component, composed from the Command and
          Popover primitives. The Popover positions the list; Command supplies
          the search input, filtering, and keyboard navigation.
        </p>
      </div>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <div className="w-full max-w-xs">
            <Combobox
              options={regions}
              placeholder="Select a region..."
              searchPlaceholder="Search regions..."
            />
          </div>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens. Open it and type to filter, no{" "}
          <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-start justify-center bg-background-subtle p-8">
              <div className="w-full max-w-[220px]">
                <Combobox options={regions} placeholder="Region..." />
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Combobox options={regions} />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-start justify-center bg-background-subtle p-8">
              <div className="w-full max-w-[220px]">
                <Combobox options={environments} placeholder="Environment..." />
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`// options have a group field
<Combobox options={environments} />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-start justify-center bg-background-subtle p-8">
              <div className="w-full max-w-[220px]">
                <IconCombobox />
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`// options have an icon field
<Combobox options={resources} />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Default, grouped, and with icons all use one component. Add{" "}
          <code className="font-mono">group</code> or{" "}
          <code className="font-mono">icon</code> to the options.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Default */}
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-start justify-center bg-background-subtle p-8">
              <div className="w-full max-w-[220px]">
                <Combobox options={regions} placeholder="Region..." />
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-xs text-text-subtle">
                Default. Resting trigger, nothing selected.
              </p>
            </div>
          </div>
          {/* Selected */}
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-start justify-center bg-background-subtle p-8">
              <div className="w-full max-w-[220px]">
                <Combobox
                  options={regions}
                  value="eu-west"
                  placeholder="Region..."
                />
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-xs text-text-subtle">
                Selected. The trigger shows the chosen label.
              </p>
            </div>
          </div>
          {/* Disabled */}
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-start justify-center bg-background-subtle p-8">
              <div className="w-full max-w-[220px]">
                <Combobox options={regions} placeholder="Region..." disabled />
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-xs text-text-subtle">
                Disabled. Dimmed; the list cannot open.
              </p>
            </div>
          </div>
          {/* Open */}
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-start justify-center bg-background-subtle p-8">
              <div className="w-full max-w-[220px] rounded-md border border-border-default bg-background-default">
                <Command defaultValue={NO_AUTOSELECT}>
                  <CommandInput placeholder="Search regions..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                      {regions.slice(0, 4).map((r) => (
                        <CommandItem key={r.value} value={r.value}>
                          {r.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-xs text-text-subtle">
                Open. The list drops with the search input focused.
              </p>
            </div>
          </div>
          {/* Searching */}
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-start justify-center bg-background-subtle p-8">
              <div className="w-full max-w-[220px] rounded-md border border-border-default bg-background-default">
                <Command defaultValue={NO_AUTOSELECT}>
                  <CommandInput placeholder="eu" />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                      {regions
                        .filter((r) => r.label.toLowerCase().includes("eu"))
                        .map((r) => (
                          <CommandItem key={r.value} value={r.value}>
                            {r.label}
                          </CommandItem>
                        ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-xs text-text-subtle">
                Searching. Typing narrows the list to matches.
              </p>
            </div>
          </div>
          {/* Empty */}
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-start justify-center bg-background-subtle p-8">
              <div className="w-full max-w-[220px] rounded-md border border-border-default bg-background-default">
                <Command defaultValue={NO_AUTOSELECT}>
                  <CommandInput placeholder="xyz" />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                  </CommandList>
                </Command>
              </div>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-xs text-text-subtle">
                Empty. No option matches the query.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Open, searching, and empty are interaction states. The open, searching,
          and empty cells render the underlying Command list inline so each is
          visible at rest.
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
              Don&apos;t reach for a Combobox when the option list is short and
              fixed. A handful of choices the reader can scan at a glance does not
              benefit from a search field, and the extra step to type slows them
              down. Use a Select instead.
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
          Use it once the list is long enough that filtering meaningfully reduces
          the work of finding the right option.
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
