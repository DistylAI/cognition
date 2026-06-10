import type { Metadata } from "next";
import { CircleAlert, CircleCheck, TriangleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Alert",
  description:
    "Alert component — a callout for user attention. API matches fe-distillery components/ui/alert.tsx.",
};

const variants = [
  {
    key: "default",
    code: `<Alert>
  <CircleAlert />
  <AlertTitle>Changes saved</AlertTitle>
  <AlertDescription>Your edits are live.</AlertDescription>
</Alert>`,
  },
  {
    key: "destructive",
    code: `<Alert variant="destructive">
  <CircleAlert />
  <AlertTitle>Something went wrong</AlertTitle>
  <AlertDescription>Your session has expired.</AlertDescription>
</Alert>`,
  },
  {
    key: "warning",
    code: `<Alert variant="warning">
  <TriangleAlert />
  <AlertTitle>Subscription expiring</AlertTitle>
  <AlertDescription>Renew within 3 days.</AlertDescription>
</Alert>`,
  },
] as const;

const installCode = `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";

export function SavedAlert() {
  return (
    <Alert>
      <CircleAlert />
      <AlertTitle>Changes saved</AlertTitle>
      <AlertDescription>Your edits are live.</AlertDescription>
    </Alert>
  );
}`;

export default function AlertPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Alert</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        Displays a callout for user attention. Use it for inline, persistent
        messages — not for transient toasts or blocking dialogs.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <Alert className="max-w-xl">
            <CircleCheck />
            <AlertTitle>Success! Your changes have been saved.</AlertTitle>
            <AlertDescription>
              This is an alert with an icon, title, and description.
            </AlertDescription>
          </Alert>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens — surface, border, and every
          variant color remap on theme change, no{" "}
          <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Variants</h3>
        <div className="space-y-4">
          {variants.map((v) => (
            <div
              key={v.key}
              className="overflow-hidden rounded-lg border border-border-default"
            >
              <div className="bg-background-subtle p-8">
                {v.key === "default" && (
                  <Alert>
                    <CircleAlert />
                    <AlertTitle>Heads up</AlertTitle>
                    <AlertDescription>
                      This is the default alert — neutral surface and text.
                    </AlertDescription>
                  </Alert>
                )}
                {v.key === "destructive" && (
                  <Alert variant="destructive">
                    <CircleAlert />
                    <AlertTitle>Something went wrong!</AlertTitle>
                    <AlertDescription>
                      Your session has expired. Please log in again.
                    </AlertDescription>
                  </Alert>
                )}
                {v.key === "warning" && (
                  <Alert variant="warning">
                    <TriangleAlert />
                    <AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
                    <AlertDescription>
                      Renew now to avoid any service interruption.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
              <div className="border-t border-border-default p-3">
                <CodeBlock
                  code={v.code}
                  size="sm"
                  className="rounded-md border border-border-subtle bg-background-subtle"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-small">
          <code className="font-mono">destructive</code> recolors the title,
          description, and icon to the danger token;{" "}
          <code className="font-mono">warning</code> tints the surface amber —
          both via tokens, so dark mode is automatic.
        </p>
      </section>

      {/* Composition */}
      <section id="composition" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Composition</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-center rounded-lg border border-border-default bg-background-subtle p-8">
            <Alert>
              <AlertTitle>Title only</AlertTitle>
              <AlertDescription>
                No icon — the title and description sit flush left.
              </AlertDescription>
            </Alert>
          </div>
          <div className="flex items-center rounded-lg border border-border-default bg-background-subtle p-8">
            <Alert>
              <CircleAlert />
              <AlertDescription>
                A description only. No title. Useful for terse, single-line
                notices.
              </AlertDescription>
            </Alert>
          </div>
        </div>
        <p className="mt-2 text-small">
          <code className="font-mono">AlertTitle</code> and{" "}
          <code className="font-mono">AlertDescription</code> are both optional —
          drop the icon, the title, or both. With no icon the text fills the
          full width.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[560px]">
            <div className="grid grid-cols-[1.6fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-xs font-medium text-text-subtle">
              <div>Part</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {[
                { name: "Alert", desc: "Root container. The variant prop (\"default\" | \"destructive\") sets the color." },
                { name: "AlertTitle", desc: "The bold heading line." },
                { name: "AlertDescription", desc: "Supporting body text beneath the title." },
              ].map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.6fr_3fr] gap-4 px-4 py-3"
                >
                  <div className="font-mono text-sm text-text-default">{p.name}</div>
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
              Don&apos;t color the destructive alert with{" "}
              <code className="font-mono">
                border-destructive dark:border-destructive
              </code>{" "}
              — the legacy alert.tsx does exactly this. Hardcoded{" "}
              <code className="font-mono">dark:</code> classes drift the moment
              the brand changes.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`// One variant prop, token-driven, theme-agnostic
<Alert variant="destructive">…</Alert>`}
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
          Drop the icon in as the first child — the{" "}
          <code className="font-mono">[&amp;&gt;svg]</code> rules position it and
          pad the text. Cognition tokens are baked in.
        </p>
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        API matches{" "}
        <code className="font-mono text-text-default">
          fe-distillery/components/ui/alert.tsx
        </code>{" "}
        — <code className="font-mono text-text-default">Alert</code>,{" "}
        <code className="font-mono text-text-default">AlertTitle</code>,{" "}
        <code className="font-mono text-text-default">AlertDescription</code>{" "}
        with the <code className="font-mono text-text-default">variant</code>{" "}
        axis. The source file&apos;s <code className="font-mono text-text-default">dark:</code>{" "}
        class violations are replaced with Cognition tokens.
      </footer>
    </div>
  );
}
