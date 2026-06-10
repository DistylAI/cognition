import type { Metadata } from "next";
import { Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Toggle",
  description:
    "Toggle component — a two-state button that can be either on or off. API matches fe-distillery components/ui/toggle.tsx.",
};

const props = [
  {
    name: "pressed",
    type: "boolean",
    def: "undefined",
    desc: "Controlled on/off state. Pair with onPressedChange.",
  },
  {
    name: "defaultPressed",
    type: "boolean",
    def: "false",
    desc: "Initial state when uncontrolled.",
  },
  {
    name: "onPressedChange",
    type: "(pressed: boolean) => void",
    def: "undefined",
    desc: "Fires when the user toggles it.",
  },
  {
    name: "variant",
    type: '"default" | "outline"',
    def: '"default"',
    desc: "default is borderless; outline adds a border for standalone use.",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    def: '"default"',
    desc: "Control height and padding (h-8 / h-9 / h-10).",
  },
  {
    name: "disabled",
    type: "boolean",
    def: "false",
    desc: "Dims to 50% and blocks interaction.",
  },
] as const;

const defaultCode = `<Toggle aria-label="Toggle bold">
  <Bold />
</Toggle>`;

const outlineCode = `<Toggle variant="outline" aria-label="Toggle italic">
  <Italic />
</Toggle>`;

const textCode = `<Toggle aria-label="Toggle bold">
  <Bold />
  Bold
</Toggle>`;

const sizesCode = `<Toggle size="sm" aria-label="Bold"><Bold /></Toggle>
<Toggle size="default" aria-label="Bold"><Bold /></Toggle>
<Toggle size="lg" aria-label="Bold"><Bold /></Toggle>`;

const onCode = `<Toggle defaultPressed aria-label="Toggle bold">
  <Bold />
</Toggle>`;

const disabledCode = `<Toggle disabled aria-label="Toggle bold">
  <Bold />
</Toggle>`;

const installCode = `import { Toggle } from "@/components/ui/toggle";
import { Bold } from "lucide-react";

export function BoldToggle() {
  const [pressed, setPressed] = useState(false);
  return (
    <Toggle
      pressed={pressed}
      onPressedChange={setPressed}
      aria-label="Toggle bold"
    >
      <Bold />
    </Toggle>
  );
}`;

function Cell({
  children,
  code,
}: {
  children: React.ReactNode;
  code: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border-default">
      <div className="flex items-center justify-center bg-background-subtle p-8">
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

export default function ToggleDocsPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Toggle</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A two-state button that can be either on or off. Use it for a single
        formatting control — bold, italic, mute — where the pressed state holds
        until the user toggles it back.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center gap-1 rounded-lg border border-border-default bg-background-subtle p-10">
          <Toggle aria-label="Toggle bold">
            <Bold />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic />
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline />
          </Toggle>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens — hover and the pressed state (an
          accent surface with primary text) remap on theme change, no{" "}
          <code className="font-mono">dark:</code> classes. Click a control to
          toggle it.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Cell code={defaultCode}>
            <Toggle aria-label="Toggle bold">
              <Bold />
            </Toggle>
          </Cell>
          <Cell code={outlineCode}>
            <Toggle variant="outline" aria-label="Toggle italic">
              <Italic />
            </Toggle>
          </Cell>
          <Cell code={textCode}>
            <Toggle aria-label="Toggle bold">
              <Bold />
              Bold
            </Toggle>
          </Cell>
          <Cell code={sizesCode}>
            <div className="flex items-center gap-2">
              <Toggle size="sm" aria-label="Bold small">
                <Bold />
              </Toggle>
              <Toggle size="default" aria-label="Bold default">
                <Bold />
              </Toggle>
              <Toggle size="lg" aria-label="Bold large">
                <Bold />
              </Toggle>
            </div>
          </Cell>
        </div>
        <p className="mt-2 text-small">
          <code className="font-mono">default</code> is borderless for toolbars;{" "}
          <code className="font-mono">outline</code> adds a border when it stands
          alone. Pair an icon with a label for clarity, and use{" "}
          <code className="font-mono">size</code> for{" "}
          <code className="font-mono">sm</code> /{" "}
          <code className="font-mono">default</code> /{" "}
          <code className="font-mono">lg</code>.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Cell code={defaultCode}>
            <Toggle aria-label="Toggle bold">
              <Bold />
            </Toggle>
          </Cell>
          <Cell code={onCode}>
            <Toggle defaultPressed aria-label="Toggle bold">
              <Bold />
            </Toggle>
          </Cell>
          <Cell code={disabledCode}>
            <Toggle disabled aria-label="Toggle bold">
              <Bold />
            </Toggle>
          </Cell>
        </div>
        <p className="mt-2 text-small">
          Off is transparent; <span className="font-medium text-text-default">on</span>{" "}
          fills with the accent surface and primary text (
          <code className="font-mono">data-[state=on]</code>); a{" "}
          <code className="font-mono">disabled</code> toggle dims to 50% and stops
          responding.
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
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Don&apos;t and Do</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t use a Toggle for a setting that needs an explicit on/off
              label — that&apos;s a <code className="font-mono">Switch</code>. And
              don&apos;t group mutually exclusive options with separate Toggles;
              reach for a toggle group or{" "}
              <code className="font-mono">Tabs</code> so only one stays pressed.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`<Toggle aria-label="Toggle bold">
  <Bold />
</Toggle>`}
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
          fe-distillery/components/ui/toggle.tsx
        </code>{" "}
        — <code className="font-mono text-text-default">Toggle</code> and{" "}
        <code className="font-mono text-text-default">toggleVariants</code> on
        Radix. The raw muted / accent / ring / primary-50 colors are replaced
        with Cognition tokens.
      </footer>
    </div>
  );
}
