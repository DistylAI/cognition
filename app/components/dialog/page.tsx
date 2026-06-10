import type { Metadata } from "next";
import { CodeBlock } from "@/components/CodeBlock";
import { FormDialog, ShareLinkDialog, TextDialog } from "./DialogDemos";

export const metadata: Metadata = {
  title: "Dialog",
  description:
    "Dialog component — a modal window overlaid on the page, rendering the content underneath inert. API matches fe-distillery components/ui/dialog.tsx.",
};

const anatomyCode = `<Dialog>
  <DialogTrigger asChild>
    <Button>Edit profile</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes here.</DialogDescription>
    </DialogHeader>

    {/* Body — wrap in px-4 pb-4 */}
    <div className="px-4 pb-4">{/* fields */}</div>

    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`;

const doCode = `// Close from inside with DialogClose — no manual open state
<DialogFooter>
  <DialogClose asChild>
    <Button variant="outline">Cancel</Button>
  </DialogClose>
  <Button onClick={save}>Save</Button>
</DialogFooter>`;

const installCode = `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ConfirmDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This can't be undone.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`;

export default function DialogPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Dialog</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A window overlaid on the primary window or another dialog, rendering the
        content underneath inert. Use it for focused tasks and confirmations.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <ShareLinkDialog />
        </div>
        <p className="mt-2 text-small">
          Live and interactive — open it, then toggle the theme. The surface,
          border, footer tint, and overlay all remap from Cognition tokens, no{" "}
          <code className="font-mono">dark:</code> classes. Focus is trapped and{" "}
          <code className="font-mono">Esc</code> closes it (Radix).
        </p>
      </section>

      {/* API */}
      <section id="anatomy" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-8">
            <FormDialog />
          </div>
          <CodeBlock
            code={anatomyCode}
            className="rounded-lg border border-border-default bg-background-subtle"
          />
        </div>
        <p className="mt-2 text-small">
          <code className="font-mono">DialogHeader</code> and{" "}
          <code className="font-mono">DialogFooter</code> own their padding — the
          footer is full-bleed with a top border and subtle tint. Body content
          sits between them, wrapped in{" "}
          <code className="font-mono">px-4 pb-4</code>.
        </p>
      </section>

      {/* Examples */}
      <section id="examples" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Examples</h3>
        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2">
          <div className="flex flex-col items-center gap-3 rounded-lg border border-border-default bg-background-subtle p-8">
            <FormDialog />
            <p className="text-small">Form — inputs with a Cancel / Save footer.</p>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-lg border border-border-default bg-background-subtle p-8">
            <TextDialog />
            <p className="text-small">
              Long content — the body scrolls, header and footer stay pinned.
            </p>
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
              Don&apos;t build a modal from a raw fixed{" "}
              <code className="font-mono">div</code> with a{" "}
              <code className="font-mono">bg-black/50</code> overlay and manual
              state — you&apos;ll lose focus trapping, scroll lock, and{" "}
              <code className="font-mono">Esc</code> handling.
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
      </section>

      {/* Install */}
      <section id="copy-paste" className="mt-12 scroll-mt-8">
        <CodeBlock
          code={installCode}
          className="rounded-lg border border-border-default bg-background-subtle"
        />
        <p className="mt-2 text-small">
          Built on Radix Dialog — focus management, scroll lock, and the{" "}
          <code className="font-mono">Esc</code> / overlay-click dismissal come
          for free. Cognition tokens are baked in.
        </p>
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        API matches{" "}
        <code className="font-mono text-text-default">
          fe-distillery/components/ui/dialog.tsx
        </code>{" "}
        — <code className="font-mono text-text-default">Dialog</code>,{" "}
        <code className="font-mono text-text-default">DialogTrigger</code>,{" "}
        <code className="font-mono text-text-default">DialogContent</code>,{" "}
        <code className="font-mono text-text-default">DialogHeader</code>,{" "}
        <code className="font-mono text-text-default">DialogTitle</code>,{" "}
        <code className="font-mono text-text-default">DialogDescription</code>,{" "}
        <code className="font-mono text-text-default">DialogFooter</code>,{" "}
        <code className="font-mono text-text-default">DialogClose</code>. The raw
        utilities are replaced with Cognition tokens and the sectioned layout.
      </footer>
    </div>
  );
}
