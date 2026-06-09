import type { Metadata } from "next";
import { Progress } from "@/components/ui/progress";
import { CodeBlock } from "@/components/CodeBlock";
import { AnimatedProgress, LoadingProgress } from "./ProgressDemos";

export const metadata: Metadata = {
  title: "Progress",
  description:
    "Progress component — displays an indicator showing the completion progress of a task, typically as a progress bar. API matches fe-distillery components/ui/progress.tsx.",
};

const values = [0, 25, 50, 75, 100];

const props = [
  {
    name: "value",
    type: "number | null",
    def: "null",
    desc: "Completion from 0 to max. null leaves the bar empty (use for an unknown-duration task).",
  },
  {
    name: "max",
    type: "number",
    def: "100",
    desc: "The value that represents 100% complete.",
  },
  {
    name: "getValueLabel",
    type: "(value, max) => string",
    def: "undefined",
    desc: "Builds the accessible label announced to screen readers.",
  },
  {
    name: "className",
    type: "string",
    def: "undefined",
    desc: "Override the track — width, height (h-2 default), or radius.",
  },
] as const;

const valuesCode = `<Progress value={0} />
<Progress value={25} />
<Progress value={50} />
<Progress value={75} />
<Progress value={100} />`;

const animatedCode = `const [value, setValue] = useState(0);
useEffect(() => {
  const t = setTimeout(() => setValue(66), 400);
  return () => clearTimeout(t);
}, []);

return <Progress value={value} />;`;

const loadingCode = `// Loop the value for an ongoing, unknown-duration task
const [value, setValue] = useState(0);
useEffect(() => {
  const id = setInterval(() => setValue((v) => (v >= 100 ? 0 : v + 4)), 150);
  return () => clearInterval(id);
}, []);

return <Progress value={value} />;`;

const installCode = `import { Progress } from "@/components/ui/progress";

export function UploadProgress({ percent }: { percent: number }) {
  return <Progress value={percent} className="w-full" />;
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

export default function ProgressDocsPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Progress</h1>
      <p className="mt-3 max-w-2xl text-body text-text-subtle">
        Displays an indicator showing the completion progress of a task,
        typically as a progress bar. Drive it with a{" "}
        <code className="font-mono">value</code> from 0 to 100 — uploads,
        multi-step flows, or any measurable task.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <AnimatedProgress />
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens — the track and indicator remap on
          theme change, no <code className="font-mono">dark:</code> classes. The
          indicator slides via <code className="font-mono">transition-all</code>{" "}
          as the value changes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Values</h3>
        <div className="overflow-hidden rounded-lg border border-border-default">
          <div className="flex items-center justify-center bg-background-subtle p-8">
            <div className="w-full max-w-md space-y-4">
              {values.map((v) => (
                <div key={v} className="flex items-center gap-4">
                  <Progress value={v} />
                  <span className="w-10 shrink-0 text-right text-sm tabular-nums text-text-subtle">
                    {v}%
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-border-default p-3">
            <CodeBlock
              code={valuesCode}
              size="sm"
              className="rounded-md border border-border-subtle bg-background-subtle"
            />
          </div>
        </div>
        <p className="mt-2 text-small">
          The bar is a single track that fills left to right. At{" "}
          <code className="font-mono">0</code> it&apos;s empty; at{" "}
          <code className="font-mono">100</code> it&apos;s full.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Cell code={animatedCode}>
            <AnimatedProgress />
          </Cell>
          <Cell code={loadingCode}>
            <LoadingProgress />
          </Cell>
        </div>
        <p className="mt-2 text-small">
          A <span className="font-medium text-text-default">determinate</span> bar
          reflects a known percentage. For an ongoing task with no known
          duration, loop the value to keep it moving — or set{" "}
          <code className="font-mono">value={`{null}`}</code> for an empty,
          indeterminate track.
        </p>
      </section>

      {/* Props */}
      <section id="props" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Props</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.2fr_2fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-xs font-medium text-text-subtle">
              <div>Prop</div>
              <div>Type</div>
              <div>Default</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {props.map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.2fr_2fr_1fr_3fr] gap-4 px-4 py-3"
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
              Don&apos;t freeze the bar at a fixed value while work is still
              happening, and don&apos;t use it for a brief, instant action — a{" "}
              <code className="font-mono">Spinner</code> fits better there. Keep{" "}
              <code className="font-mono">value</code> in step with real progress.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`<Progress value={percent} className="w-full" />`}
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
          fe-distillery/components/ui/progress.tsx
        </code>{" "}
        — a single <code className="font-mono text-text-default">Progress</code>{" "}
        built on Radix. The raw{" "}
        <code className="font-mono text-text-default">bg-primary</code> track and
        indicator are replaced with the Cognition background-primary token.
      </footer>
    </div>
  );
}
