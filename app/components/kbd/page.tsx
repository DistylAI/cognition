import type { Metadata } from "next";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Keyboard Input",
  description:
    "Keyboard Input (Kbd) -- displays textual user input from the keyboard. Proposed canonical component built on the <kbd> element.",
};

const installCode = `import { Kbd, KbdGroup } from "@/components/ui/kbd";

export function CommandHint() {
  return (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  );
}`;

export default function KbdPage() {
  return (
    <div>
      <p className="mb-2 text-caption">Components</p>
      <h1 className="text-lead text-text-default">Keyboard Input</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        Used to display textual user input from the keyboard. Use it for
        shortcut hints and key references -- not for general inline code.
      </p>

      <div className="mt-4 rounded-lg border border-border-default bg-background-accent p-4">
        <p className="text-small text-text-default">
          <span className="font-bold">Proposed.</span> fe-distillery has no{" "}
          <code className="font-mono">Kbd</code> primitive yet. This documents the
          canonical one, built on the semantic{" "}
          <code className="font-mono">&lt;kbd&gt;</code> element.
        </p>
      </div>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens -- the muted surface and text remap
          on theme change, no <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Examples */}
      <section id="examples" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">Examples</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-3 rounded-lg border border-border-default bg-background-subtle p-8">
            <div className="flex items-center gap-1">
              <Kbd>⇧</Kbd>
              <Kbd>⌘</Kbd>
              <Kbd>P</Kbd>
            </div>
            <span className="text-small">Single keys</span>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-lg border border-border-default bg-background-subtle p-8">
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span className="text-caption">+</span>
              <Kbd>B</Kbd>
            </KbdGroup>
            <span className="text-small">Combo</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-border-default bg-background-subtle p-8">
            <p className="text-center text-sm text-text-default">
              Press <Kbd>Esc</Kbd> to close
            </p>
            <span className="text-small">In a sentence</span>
          </div>
        </div>
        <p className="mt-2 text-small">
          A single key uses <code className="font-mono">Kbd</code>; a sequence
          wraps them in <code className="font-mono">KbdGroup</code> for even
          spacing. Each key is at least square (
          <code className="font-mono">min-w-5</code>) so{" "}
          <Kbd>K</Kbd> and <Kbd>Esc</Kbd> sit consistently.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[560px]">
            <div className="grid grid-cols-[1.6fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-caption font-medium">
              <div>Part</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {[
                { name: "Kbd", desc: "A single key cap -- wrap a key name or symbol (⌘, Shift, Enter)." },
                { name: "KbdGroup", desc: "Groups multiple Kbd keys into one shortcut, with consistent spacing." },
              ].map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.6fr_3fr] gap-4 px-4 py-3"
                >
                  <div className="font-mono text-sm text-text-default">{p.name}</div>
                  <div className="text-description">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Don't and Do */}
      <section id="do-dont" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">Don&apos;t and Do</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t use <code className="font-mono">Kbd</code> for inline
              code, file names, or values -- that&apos;s a{" "}
              <code className="font-mono">&lt;code&gt;</code>. Reserve it for
              actual keystrokes.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-caption leading-6 text-text-default">
                {`<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>`}
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
          Drop-in ready. Renders a real{" "}
          <code className="font-mono">&lt;kbd&gt;</code> element, so it&apos;s
          semantic and screen-reader friendly.
        </p>
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        Proposed canonical component -- fe-distillery has no{" "}
        <code className="font-mono text-text-default">kbd</code> primitive yet.
        Built on the semantic{" "}
        <code className="font-mono text-text-default">&lt;kbd&gt;</code> element
        with the muted surface mapped to the Cognition{" "}
        <code className="font-mono text-text-default">background-secondary</code>{" "}
        token.
      </footer>
    </div>
  );
}
