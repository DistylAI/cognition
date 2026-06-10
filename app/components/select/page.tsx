import type { Metadata } from "next";
import { CodeBlock } from "@/components/CodeBlock";
import { FruitSelect, GroupedSelect } from "./SelectDemos";

export const metadata: Metadata = {
  title: "Select",
  description:
    "Select component — a control for choosing one option from a list. API matches fe-distillery components/ui/select.tsx.",
};

const anatomyCode = `<Select>
  <SelectTrigger className="w-[220px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
  </SelectContent>
</Select>`;

const installCode = `import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "@/components/ui/select";`;

export default function SelectPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Select</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        Displays a control for choosing a single option from a list. Use it when
        options exceed a handful and a Radio Group would be too tall.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex min-h-[18rem] items-start justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <FruitSelect />
        </div>
        <p className="mt-2 text-small">
          Live and interactive — open it, then toggle the theme. The trigger,
          panel, and selected-item check remap from Cognition tokens, no{" "}
          <code className="font-mono">dark:</code> classes. The trigger matches
          the Input field.
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
          <code className="font-mono">SelectValue</code> renders the chosen
          label (or the <code className="font-mono">placeholder</code>);{" "}
          <code className="font-mono">SelectGroup</code> +{" "}
          <code className="font-mono">SelectLabel</code> +{" "}
          <code className="font-mono">SelectSeparator</code> organize long lists.
        </p>
      </section>

      {/* Grouped */}
      <section id="grouped" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Grouped options</h3>
        <div className="flex min-h-[18rem] items-start justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <GroupedSelect />
        </div>
        <p className="mt-2 text-small">
          Labels and separators group related options without making them
          selectable.
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
              Don&apos;t reach for a native{" "}
              <code className="font-mono">&lt;select&gt;</code> when you need
              token styling, groups, or icons — it can&apos;t theme with
              Cognition. And don&apos;t use Select for 2–3 options; a Radio Group
              is clearer.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`<Select value={tz} onValueChange={setTz}>
  <SelectTrigger><SelectValue /></SelectTrigger>
  <SelectContent>…</SelectContent>
</Select>`}
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
          Built on Radix Select — typeahead, keyboard navigation, and collision
          handling come for free. Use{" "}
          <code className="font-mono">value</code> /{" "}
          <code className="font-mono">onValueChange</code> for controlled state.
        </p>
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        API matches{" "}
        <code className="font-mono text-text-default">
          fe-distillery/components/ui/select.tsx
        </code>{" "}
        — <code className="font-mono text-text-default">Select</code>,{" "}
        <code className="font-mono text-text-default">SelectTrigger</code>,{" "}
        <code className="font-mono text-text-default">SelectValue</code>,{" "}
        <code className="font-mono text-text-default">SelectContent</code>,{" "}
        <code className="font-mono text-text-default">SelectItem</code>,{" "}
        <code className="font-mono text-text-default">SelectGroup</code>,{" "}
        <code className="font-mono text-text-default">SelectLabel</code>,{" "}
        <code className="font-mono text-text-default">SelectSeparator</code>. The
        raw <code className="font-mono text-text-default">bg-popover</code> /{" "}
        <code className="font-mono text-text-default">border-input</code>{" "}
        utilities are replaced with Cognition tokens.
      </footer>
    </div>
  );
}
