import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Spinner",
  description:
    "Spinner component -- an indeterminate loading indicator: a brand arc rotating smoothly on a neutral track.",
};

const props = [
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    def: '"default"',
    desc: "Diameter: 16, 24, or 32 pixels.",
  },
  {
    name: "label",
    type: "string",
    def: '"Loading"',
    desc: "Accessible label announced to screen readers via role=status.",
  },
  {
    name: "className",
    type: "string",
    def: "undefined",
    desc: "Layout or size overrides on the wrapper.",
  },
] as const;

const doCode = `<Spinner />
<Spinner size="sm" />   // inline, e.g. in a button
<Spinner size="lg" />`;

const installCode = `import { Spinner } from "@/components/ui/spinner";

export function SavingState() {
  return (
    <div className="flex items-center gap-2 text-description">
      <Spinner size="sm" />
      Saving changes...
    </div>
  );
}`;

export default function SpinnerPage() {
  return (
    <div>
      <p className="mb-2 text-caption">Components</p>
      <h1 className="text-lead text-text-default">Spinner</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        An indeterminate loading indicator for waits of unknown length. A brand
        arc rotates on a neutral track, spinning continuously until the wait
        ends.
      </p>

      <div className="mt-4 rounded-lg border border-border-default bg-background-accent p-4">
        <p className="text-small text-text-default">
          Smooth by construction. The arc spins with a single linear rotation
          from 0 to 360 degrees, so the loop closes on itself with no seam or
          stutter. The arc maps to{" "}
          <code className="font-mono">background-primary</code> and the track to{" "}
          <code className="font-mono">border-default</code>, so both remap in
          dark mode.
        </p>
      </div>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">Preview</h3>
        <div className="flex items-center justify-center gap-3 rounded-lg border border-border-default bg-background-subtle p-10">
          <Spinner />
          <span className="text-description">Processing payment...</span>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens. Toggle the theme and the arc and
          track remap, no <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex h-auto items-center justify-center bg-background-subtle p-8">
              <Spinner size="sm" />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Spinner size="sm" />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex h-auto items-center justify-center bg-background-subtle p-8">
              <Spinner size="default" />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Spinner />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex h-auto items-center justify-center bg-background-subtle p-8">
              <Spinner size="lg" />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Spinner size="lg" />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Three sizes at 16, 24, and 32 pixels. Stroke weight scales with the
          diameter.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex h-auto items-center justify-center bg-background-subtle p-8">
              <Spinner />
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">
                Spinning. The single, perpetual state until the wait resolves.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex h-auto items-center justify-center bg-background-subtle p-8">
              <span className="flex items-center gap-2 text-description">
                <Spinner size="sm" />
                Saving changes...
              </span>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">Inline beside a label.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex h-auto items-center justify-center bg-background-subtle p-8">
              <Button variant="outline" disabled>
                <Spinner size="sm" />
                Loading
              </Button>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">Inside a disabled button.</p>
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          The spinner is indeterminate, so it has one continuous state. Pair it
          with text or a control to signal what is loading.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">API</h3>
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
        <p className="mt-2 text-small">
          Sets <code className="font-mono">role=&quot;status&quot;</code> with an{" "}
          <code className="font-mono">aria-label</code> so the wait is announced.
        </p>
      </section>

      {/* Don't and Do */}
      <section id="do-dont" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">
          Don&apos;t and Do
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t reach for a spinner when the final layout is already
              known. A spinner leaves the reader staring at a blank region and
              then jolts them with a content shift. Where the shape of the result
              is predictable, a Skeleton holds the space and reads as calmer.
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
          Use it for waits of unknown length where there is no layout to preview,
          such as a submit in flight or a background task finishing.
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
