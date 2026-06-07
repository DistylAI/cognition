import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Spinner",
  description:
    "Spinner component — an indeterminate loading indicator drawn as the Distyl mark. Proposed canonical component.",
};

const installCode = `import { Spinner } from "@/components/ui/spinner";

export function SavingButton() {
  return (
    <Button disabled>
      <Spinner size="sm" className="text-text-inverse" />
      Saving…
    </Button>
  );
}`;

export default function SpinnerPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Spinner</h1>
      <p className="mt-3 max-w-2xl text-body text-text-subtle">
        An indeterminate loading indicator for waits of unknown length. The
        graphic is the Distyl mark, animated as a chasing stroke.
      </p>

      <div className="mt-4 rounded-lg border border-border-default bg-background-accent p-4">
        <p className="text-small text-text-default">
          <span className="font-bold">Custom graphic.</span> Instead of a generic
          ring, the spinner traces the Distyl logo mark — two paths chasing on a
          0.4s stagger. Stroke is <code className="font-mono">currentColor</code>{" "}
          (default token <code className="font-mono">background-primary</code>),
          so it remaps in dark mode and inherits its container&apos;s color.
        </p>
      </div>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center gap-3 rounded-lg border border-border-default bg-background-subtle p-10">
          <Spinner />
          <span className="text-sm text-text-subtle">Processing payment…</span>
        </div>
        <p className="mt-2 text-small">
          Toggle the theme — the stroke remaps with the brand token, no{" "}
          <code className="font-mono">dark:</code> classes and no hardcoded hex.
        </p>
      </section>

      {/* Sizes */}
      <section id="sizes" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Sizes</h3>
        <div className="flex items-end justify-center gap-8 rounded-lg border border-border-default bg-background-subtle p-10">
          <div className="flex flex-col items-center gap-3">
            <Spinner size="sm" />
            <code className="font-mono text-xs text-text-subtle">sm</code>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Spinner size="default" />
            <code className="font-mono text-xs text-text-subtle">default</code>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Spinner size="lg" />
            <code className="font-mono text-xs text-text-subtle">lg</code>
          </div>
        </div>
      </section>

      {/* In context */}
      <section id="in-context" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">In context</h3>
        <div className="flex flex-wrap items-center justify-center gap-4 rounded-lg border border-border-default bg-background-subtle p-10">
          <Button disabled>
            <Spinner size="sm" className="text-text-inverse" />
            Saving…
          </Button>
          <Button variant="outline" disabled>
            <Spinner size="sm" className="text-text-default" />
            Loading
          </Button>
        </div>
        <p className="mt-2 text-small">
          Inside a button the spinner inherits the label color — pass{" "}
          <code className="font-mono">text-text-inverse</code> on a primary
          button, <code className="font-mono">text-text-default</code> on an
          outline one.
        </p>
      </section>

      {/* Don't and Do */}
      <section id="do-dont" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Don&apos;t and Do</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t hardcode the stroke to{" "}
              <code className="font-mono">#5D4EE7</code> — it won&apos;t remap in
              dark mode. And don&apos;t use a Spinner where the layout is known;
              a Skeleton avoids the content jump.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`<Spinner />                         // brand token
<Spinner className="text-text-inverse" />  // inherits context`}
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
          Pair it with an accessible label — the component sets{" "}
          <code className="font-mono">role=&quot;status&quot;</code> and{" "}
          <code className="font-mono">aria-label</code> (default{" "}
          &ldquo;Loading&rdquo;).
        </p>
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        Proposed canonical component — fe-distillery has no spinner primitive
        yet. The standard ring graphic is replaced with the Distyl mark as an
        animated stroke chase; stroke is{" "}
        <code className="font-mono text-text-default">currentColor</code>{" "}
        referencing{" "}
        <code className="font-mono text-text-default">
          --color-background-primary
        </code>{" "}
        — no hardcoded hex.
      </footer>
    </div>
  );
}
