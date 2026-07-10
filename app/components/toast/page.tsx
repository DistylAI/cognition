import type { Metadata } from "next";
import {
  CircleCheck,
  CircleX,
  Info,
  type LucideIcon,
  TriangleAlert,
} from "lucide-react";
import { CodeBlock } from "@/components/CodeBlock";
import { ToastButton } from "./toast-demos";

export const metadata: Metadata = {
  title: "Toast",
  description:
    "Toast component: a transient notification that appears briefly and dismisses on its own. For confirmations, errors, and status feedback.",
};

const api = [
  {
    name: "toast(message)",
    type: "(message, options?) => id",
    def: "—",
    desc: "Default neutral toast. Returns the toast id.",
  },
  {
    name: "toast.success(message)",
    type: "(message, options?) => id",
    def: "—",
    desc: "Confirmation toast with success styling.",
  },
  {
    name: "toast.error(message)",
    type: "(message, options?) => id",
    def: "—",
    desc: "Error toast with danger styling.",
  },
  {
    name: "toast.warning(message)",
    type: "(message, options?) => id",
    def: "—",
    desc: "Warning toast with warning styling.",
  },
  {
    name: "toast.info(message)",
    type: "(message, options?) => id",
    def: "—",
    desc: "Informational toast with info styling.",
  },
  {
    name: "options.description",
    type: "ReactNode",
    def: "undefined",
    desc: "A secondary line shown under the message.",
  },
  {
    name: "options.action",
    type: "{ label, onClick }",
    def: "undefined",
    desc: "A single action button rendered in the toast.",
  },
  {
    name: "options.duration",
    type: "number",
    def: "4000",
    desc: "Milliseconds the toast stays before auto-dismiss.",
  },
] as const;

const doCode = `// Confirm a completed, non-blocking action
toast.success("Changes saved");

toast("Workspace archived", {
  action: { label: "Undo", onClick: restore },
});`;

const installCode = `// 1. Mount the Toaster once at the app root
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }) {
  return (
    <body>
      {children}
      <Toaster />
    </body>
  );
}

// 2. Fire toasts imperatively from anywhere
import { toast } from "sonner";

toast.success("Changes saved");`;

function ToastMock({
  className,
  caption,
}: {
  className?: string;
  caption: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`flex w-full items-start gap-3 rounded-lg border border-border-default bg-background-default p-4 shadow-lg ${className ?? ""}`}
      >
        <CircleCheck className="mt-0.5 size-5 shrink-0 text-text-success" />
        <div className="flex-1">
          <p className="text-label">Changes saved</p>
          <p className="text-caption">Your workspace is up to date.</p>
        </div>
      </div>
      <p className="text-caption">{caption}</p>
    </div>
  );
}

// Static, frozen visual of each toast type for the Variants section, matching
// the token styling the Toaster applies per type. The live trigger lives only
// in the Preview.
type ToastKind =
  | "default"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "action"
  | "description";

const toastVariants: Record<
  string,
  { surface: string; tone: string; title: string; icon?: LucideIcon }
> = {
  default: {
    surface: "border-border-default bg-background-default",
    tone: "text-text-default",
    title: "Event scheduled",
  },
  success: {
    surface: "border-feedback-success/30 bg-background-success",
    tone: "text-text-success",
    title: "Changes saved",
    icon: CircleCheck,
  },
  error: {
    surface: "border-feedback-danger/30 bg-background-danger",
    tone: "text-text-danger",
    title: "Could not save changes",
    icon: CircleX,
  },
  warning: {
    surface: "border-feedback-warning/30 bg-background-warning",
    tone: "text-text-warning",
    title: "Your trial ends in 3 days",
    icon: TriangleAlert,
  },
  info: {
    surface: "border-feedback-info/30 bg-background-info",
    tone: "text-text-info",
    title: "A new version is available",
    icon: Info,
  },
};

function VariantToast({ kind }: { kind: ToastKind }) {
  const base =
    "flex w-full items-start gap-3 rounded-lg border p-4 text-sm shadow-md";

  if (kind === "action") {
    return (
      <div className={`${base} border-border-default bg-background-default`}>
        <p className="flex-1 font-medium text-text-default">Workspace archived</p>
        <span className="shrink-0 rounded-md bg-background-secondary px-2 py-1 text-caption font-medium text-text-default">
          Undo
        </span>
      </div>
    );
  }

  if (kind === "description") {
    return (
      <div className={`${base} border-border-default bg-background-default`}>
        <div className="flex-1">
          <p className="font-medium text-text-default">Changes saved</p>
          <p className="mt-1 text-caption">
            Your workspace is up to date as of a moment ago.
          </p>
        </div>
      </div>
    );
  }

  const cfg = toastVariants[kind];
  const Icon = cfg.icon;
  return (
    <div className={`${base} ${cfg.surface}`}>
      {Icon && <Icon className={`mt-0.5 size-5 shrink-0 ${cfg.tone}`} />}
      <p className={`flex-1 font-medium ${cfg.tone}`}>{cfg.title}</p>
    </div>
  );
}

export default function ToastPage() {
  return (
    <div>
      <p className="mb-2 text-caption">Components</p>
      <h1 className="text-lead text-text-default">Toast</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A transient notification that appears briefly and dismisses on its own.
        Use it for confirmations, errors, and status feedback that does not block
        the task at hand.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">Preview</h3>
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-lg border border-border-default bg-background-subtle p-10">
          {(
            [
              { kind: "default", label: "Default" },
              { kind: "success", label: "Success" },
              { kind: "error", label: "Error" },
              { kind: "warning", label: "Warning" },
              { kind: "info", label: "Info" },
              { kind: "action", label: "With action" },
              { kind: "description", label: "With description" },
            ] as const
          ).map((t) => (
            <ToastButton key={t.kind} kind={t.kind}>
              {t.label}
            </ToastButton>
          ))}
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens. Fire any type to see it in the
          bottom-right, no <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <VariantToast kind="default" />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`toast("Event scheduled")`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <VariantToast kind="success" />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`toast.success("Changes saved")`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <VariantToast kind="error" />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`toast.error("Could not save")`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <VariantToast kind="warning" />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`toast.warning("Trial ends soon")`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <VariantToast kind="info" />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`toast.info("Update available")`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <VariantToast kind="action" />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`toast("Archived", {
  action: { label: "Undo", onClick },
})`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-8">
              <VariantToast kind="description" />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`toast("Saved", {
  description: "Up to date.",
})`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Each type is shown as it appears. Success, error, warning, and info take the matching Cognition feedback tokens. Fire a live one from the preview above.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">States</h3>
        <div className="rounded-lg border border-border-default bg-background-subtle p-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <ToastMock
              className="translate-y-2 opacity-60"
              caption="Entering. Slides up and fades in."
            />
            <ToastMock className="" caption="Visible. Resting on screen." />
            <ToastMock
              className="scale-95 opacity-40"
              caption="Dismissing. Fades and shrinks out."
            />
          </div>
        </div>
        <p className="mt-2 text-small">
          Toasts are transient, so these three phases are shown statically. Fire
          the live toast in the preview to see the real motion.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.6fr_1.6fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-caption font-medium">
              <div>Call</div>
              <div>Signature</div>
              <div>Default</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {api.map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.6fr_1.6fr_1fr_3fr] gap-4 px-4 py-3"
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
          Toast is powered by Sonner. The{" "}
          <code className="font-mono">&lt;Toaster&gt;</code> component must be
          mounted once at the app root; individual toasts are fired imperatively
          through the <code className="font-mono">toast()</code> function.
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
              Don&apos;t use a toast for an error that needs the reader to act. A
              toast dismisses itself, so anything that requires a decision or a
              fix will vanish before it is handled. Put those in inline validation
              next to the field, or in a Dialog that holds focus.
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
          Use it for confirmations, background task completions, and
          non-blocking status updates.
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
