import type { Metadata } from "next";
import {
  ItemDefault,
  ItemListPreview,
  ItemStateDefault,
  ItemStateDisabled,
  ItemStateHover,
  ItemStateSelected,
  ItemWithAction,
  ItemWithAvatar,
  ItemWithBadge,
  ItemWithCheckbox,
  ItemWithIcon,
  ItemWithSecondary,
} from "./item-demos";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Item",
  description:
    "Item component -- a single structured row with a leading element, a primary and optional secondary label, and a trailing element.",
};

const props = [
  {
    name: "label",
    type: "string",
    def: "required",
    desc: "The primary text of the row.",
  },
  {
    name: "secondaryLabel",
    type: "string",
    def: "undefined",
    desc: "A secondary line below the label.",
  },
  {
    name: "leading",
    type: "ReactNode",
    def: "undefined",
    desc: "Leading element: an icon, avatar, or checkbox.",
  },
  {
    name: "trailing",
    type: "ReactNode",
    def: "undefined",
    desc: "Trailing element: an action, badge, or status.",
  },
  {
    name: "selected",
    type: "boolean",
    def: "false",
    desc: "Marks the row as selected with the accent surface.",
  },
  {
    name: "disabled",
    type: "boolean",
    def: "false",
    desc: "Dims the row and blocks interaction.",
  },
  {
    name: "onClick",
    type: "() => void",
    def: "undefined",
    desc: "When set, the row renders as a button with hover and focus.",
  },
] as const;

const doCode = `<Item
  label="Derek Ho"
  secondaryLabel="derek@distyl.ai"
  leading={<Avatar>…</Avatar>}
  trailing={<Badge>Owner</Badge>}
  onClick={open}
/>`;

const installCode = `import { Item } from "@/components/ui/item";
import { Folder } from "lucide-react";

export function ProjectRow() {
  return (
    <Item
      label="Projects"
      secondaryLabel="14 active"
      leading={<Folder />}
      onClick={openProjects}
    />
  );
}`;

export default function ItemPage() {
  return (
    <div>
      <p className="mb-2 text-caption">Components</p>
      <h1 className="text-lead text-text-default">Item</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A single structured row: a leading element, a primary label with an
        optional secondary line, and a trailing element. It gives lists and rows
        a consistent shape.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <ItemListPreview />
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens. Hover and click the rows, no{" "}
          <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ItemDefault />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Item label="Overview" />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ItemWithIcon />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Item leading={<Folder />} trailing={<ChevronRight />} />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ItemWithAvatar />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Item leading={<Avatar />} secondaryLabel="…" />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ItemWithCheckbox />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Item leading={<Checkbox />} />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ItemWithBadge />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Item trailing={<Badge>Pro</Badge>} />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ItemWithAction />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Item trailing={<Button size="icon-sm">…</Button>} />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default lg:col-span-2">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ItemWithSecondary />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Item label="Billing" secondaryLabel="Invoices, payment method, and plan" />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Leading icons, avatars, or checkboxes; trailing badges or actions; and
          an optional secondary label all compose into the same row.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ItemStateDefault />
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">Default. Resting row.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ItemStateHover />
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">
                Hover. The secondary surface fills in (shown statically).
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ItemStateSelected />
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">
                Selected. Accent surface; click to toggle.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ItemStateDisabled />
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">Disabled. Dimmed, inert.</p>
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Hover and focus apply only when the row is interactive (has an{" "}
          <code className="font-mono">onClick</code>). Selected and disabled read
          on the row itself.
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
                  <div className="text-description">{p.desc}</div>
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
              Don&apos;t use an Item as a navigation link. Moving between pages or
              sections is the job of a Sidebar nav item or a Navigation Menu link,
              which carry the right semantics and active states. An Item is a row
              of content or actions, not a destination.
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
          Use Item to build lists, command palettes, settings rows, and any
          single-row layout that needs consistent leading and trailing
          composition.
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
