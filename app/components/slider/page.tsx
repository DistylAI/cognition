import type { Metadata } from "next";
import { Slider } from "@/components/ui/slider";
import { CodeBlock } from "@/components/CodeBlock";
import { SliderDemo } from "./SliderDemos";

export const metadata: Metadata = {
  title: "Slider",
  description:
    "Slider component — an input where the user selects a value from within a given range. API matches fe-distillery components/ui/slider.tsx.",
};

const props = [
  {
    name: "defaultValue / value",
    type: "number[]",
    def: "[min, max]",
    desc: "Thumb positions. One entry = one thumb; two = a range. value makes it controlled (pair with onValueChange).",
  },
  {
    name: "min",
    type: "number",
    def: "0",
    desc: "Lowest selectable value.",
  },
  {
    name: "max",
    type: "number",
    def: "100",
    desc: "Highest selectable value.",
  },
  {
    name: "step",
    type: "number",
    def: "1",
    desc: "Increment between stops as the thumb moves.",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    def: '"horizontal"',
    desc: "Axis. Vertical needs a height on the root (e.g. h-44).",
  },
  {
    name: "disabled",
    type: "boolean",
    def: "false",
    desc: "Dims the slider to 50% and blocks interaction.",
  },
  {
    name: "onValueChange",
    type: "(value: number[]) => void",
    def: "undefined",
    desc: "Fires as the thumb moves — use it to drive a controlled value.",
  },
] as const;

const singleCode = `<Slider defaultValue={[50]} max={100} step={1} />`;

const rangeCode = `<Slider defaultValue={[25, 75]} max={100} step={1} />`;

const verticalCode = `<Slider
  defaultValue={[50]}
  orientation="vertical"
  className="h-44"
/>`;

const steppedCode = `<Slider defaultValue={[40]} max={100} step={10} />`;

const disabledCode = `<Slider defaultValue={[40]} disabled />`;

const installCode = `import { Slider } from "@/components/ui/slider";

export function VolumeSlider() {
  const [value, setValue] = useState([50]);
  return (
    <Slider value={value} onValueChange={setValue} max={100} step={1} />
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

export default function SliderDocsPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Slider</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        An input where the user selects a value from within a given range. Drag a
        thumb along the track — use one thumb for a single value or two for a
        range, on either axis.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <SliderDemo />
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens — the track, range fill, and thumb
          remap on theme change, no <code className="font-mono">dark:</code>{" "}
          classes. Drag the thumb to update the value.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Cell code={singleCode}>
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              className="w-full max-w-xs"
            />
          </Cell>
          <Cell code={rangeCode}>
            <Slider
              defaultValue={[25, 75]}
              max={100}
              step={1}
              className="w-full max-w-xs"
            />
          </Cell>
          <Cell code={verticalCode}>
            <div className="flex h-44 gap-8">
              <Slider defaultValue={[50]} orientation="vertical" />
              <Slider defaultValue={[25, 75]} orientation="vertical" />
            </div>
          </Cell>
          <Cell code={steppedCode}>
            <Slider
              defaultValue={[40]}
              max={100}
              step={10}
              className="w-full max-w-xs"
            />
          </Cell>
        </div>
        <p className="mt-2 text-small">
          One thumb selects a value; two select a range. Set{" "}
          <code className="font-mono">orientation=&quot;vertical&quot;</code>{" "}
          (with a height) to stand it up, and{" "}
          <code className="font-mono">step</code> to snap to coarser increments.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Cell code={singleCode}>
            <Slider
              defaultValue={[60]}
              max={100}
              step={1}
              className="w-full max-w-xs"
            />
          </Cell>
          <Cell code={disabledCode}>
            <Slider
              defaultValue={[40]}
              disabled
              className="w-full max-w-xs"
            />
          </Cell>
        </div>
        <p className="mt-2 text-small">
          The default slider is draggable and keyboard accessible (arrow keys
          move by <code className="font-mono">step</code>). A{" "}
          <code className="font-mono">disabled</code> slider dims to 50% and stops
          responding.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.6fr_1.8fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-xs font-medium text-text-subtle">
              <div>Prop</div>
              <div>Type</div>
              <div>Default</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {props.map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.6fr_1.8fr_1fr_3fr] gap-4 px-4 py-3"
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
              Don&apos;t use a slider when the exact value matters — a precise
              number is better typed into an <code className="font-mono">Input</code>.
              And don&apos;t hide the selected value; show it nearby so the user
              knows where they&apos;ve landed.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`<Slider
  value={value}
  onValueChange={setValue}
  max={100}
  step={1}
/>`}
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
          fe-distillery/components/ui/slider.tsx
        </code>{" "}
        — a single <code className="font-mono text-text-default">Slider</code>{" "}
        built on Radix. The raw{" "}
        <code className="font-mono text-text-default">bg-primary</code> track and
        thumb are replaced with Cognition tokens, and thumb rendering is extended
        to support range and vertical orientation.
      </footer>
    </div>
  );
}
