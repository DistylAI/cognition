import type { Metadata } from "next";
import {
  Bold,
  ChevronLeft,
  ChevronRight,
  Italic,
  Underline,
} from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Button Group",
  description:
    "Button Group component -- related buttons joined into one control, with a shared edge and radius only on the outermost corners.",
};

const props = [
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    def: '"default"',
    desc: "Applied to every button in the group. default is the medium size.",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    def: '"horizontal"',
    desc: "Joins buttons left to right or stacked top to bottom.",
  },
  {
    name: "disabled",
    type: "boolean",
    def: "false",
    desc: "Disables every button. Single buttons also take their own disabled prop.",
  },
] as const;

const doCode = `<ButtonGroup>
  <Button variant="outline"><ChevronLeft /> Previous</Button>
  <Button variant="outline">Next <ChevronRight /></Button>
</ButtonGroup>`;

const installCode = `import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";

export function ViewSwitcher() {
  return (
    <ButtonGroup>
      <Button variant="outline">Day</Button>
      <Button variant="outline">Week</Button>
      <Button variant="outline">Month</Button>
    </ButtonGroup>
  );
}`;

export default function ButtonGroupPage() {
  return (
    <div>
      <p className="mb-2 text-caption">Components</p>
      <h1 className="text-lead text-text-default">Button Group</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A set of related buttons rendered as one joined unit, with a shared edge
        and the radius applied only to the outermost corners.
      </p>

      <div className="mt-4 rounded-lg border border-border-default bg-background-accent p-4">
        <p className="text-small text-text-default">
          Button Group is a layout and style wrapper. It does not replace Button.
          It composes multiple Button instances into a joined control.
        </p>
      </div>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <ButtonGroup>
            <Button variant="outline">
              <ChevronLeft />
              Previous
            </Button>
            <Button variant="outline">
              Next
              <ChevronRight />
            </Button>
          </ButtonGroup>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens. The seam is shared; only the outer
          corners round, no <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ButtonGroup>
                <Button variant="outline">Day</Button>
                <Button variant="outline">Week</Button>
                <Button variant="outline">Month</Button>
              </ButtonGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<ButtonGroup>
  <Button variant="outline">…</Button>
</ButtonGroup>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ButtonGroup>
                <Button aria-label="Bold">
                  <Bold />
                </Button>
                <Button aria-label="Italic">
                  <Italic />
                </Button>
                <Button aria-label="Underline">
                  <Underline />
                </Button>
              </ButtonGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<ButtonGroup>
  <Button>…</Button>
</ButtonGroup>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ButtonGroup>
                <Button>Save</Button>
                <Button variant="outline">Cancel</Button>
              </ButtonGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Button>Save</Button>
<Button variant="outline">Cancel</Button>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ButtonGroup orientation="vertical">
                <Button variant="outline">Top</Button>
                <Button variant="outline">Middle</Button>
                <Button variant="outline">Bottom</Button>
              </ButtonGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<ButtonGroup orientation="vertical">`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Default outlined, filled primary, and a mixed set all join the same
          way. Set <code className="font-mono">orientation</code> to stack them.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ButtonGroup>
                <Button variant="outline">Day</Button>
                <Button variant="outline">Week</Button>
                <Button variant="outline">Month</Button>
              </ButtonGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">Default. At rest.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ButtonGroup>
                <Button variant="outline">Day</Button>
                <Button variant="outline" className="bg-background-secondary">
                  Week
                </Button>
                <Button variant="outline">Month</Button>
              </ButtonGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">
                Hover. Per button, on pointer over (shown statically).
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ButtonGroup>
                <Button variant="outline">Day</Button>
                <Button
                  variant="outline"
                  className="bg-background-accent text-text-primary"
                >
                  Week
                </Button>
                <Button variant="outline">Month</Button>
              </ButtonGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <p className="text-caption">
                Active. Press feedback per button (shown statically).
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ButtonGroup disabled>
                <Button variant="outline">Day</Button>
                <Button variant="outline">Week</Button>
                <Button variant="outline">Month</Button>
              </ButtonGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<ButtonGroup disabled>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <ButtonGroup>
                <Button variant="outline">Day</Button>
                <Button variant="outline" disabled>
                  Week
                </Button>
                <Button variant="outline">Month</Button>
              </ButtonGroup>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Button variant="outline" disabled>`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Hover and active respond per button. Disable the whole set with{" "}
          <code className="font-mono">disabled</code> on the group, or one button
          with its own <code className="font-mono">disabled</code>.
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
          Individual buttons accept standard{" "}
          <code className="font-mono">Button</code> props, including{" "}
          <code className="font-mono">variant</code>; group-level{" "}
          <code className="font-mono">size</code> and{" "}
          <code className="font-mono">disabled</code> apply to each unless the
          button sets its own.
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
              Don&apos;t join unrelated actions into one group. The shared edge
              tells the reader these buttons belong together, so grouping a save
              next to an unrelated export reads as a single set when it is not.
              Keep separate concerns as separate buttons.
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
          Use it for tightly related actions such as Bold, Italic, Underline, or
          Previous and Next.
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
