import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Sheet",
  description:
    "Sheet component — a panel that slides in from an edge of the screen, built on Dialog. API matches fe-distillery components/ui/sheet.tsx.",
};

const sides = ["top", "right", "bottom", "left"] as const;

const parts = [
  {
    name: "Sheet",
    desc: "Root (Dialog). Holds open / onOpenChange; uncontrolled by default.",
  },
  {
    name: "SheetTrigger",
    desc: "Opens the sheet. Use asChild to render your own button.",
  },
  {
    name: "SheetContent",
    desc: "The sliding panel. side picks the edge (top / right / bottom / left); portals over an overlay with a built-in close button.",
  },
  {
    name: "SheetHeader / SheetFooter",
    desc: "Title/description block at the top; actions row (right-aligned from sm) at the bottom.",
  },
  {
    name: "SheetTitle / SheetDescription",
    desc: "Accessible title and supporting text, wired to the dialog for screen readers.",
  },
  {
    name: "SheetClose",
    desc: "Closes the sheet. Wrap a button with asChild for a footer action.",
  },
] as const;

const previewCode = `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Edit profile</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Save when you're done.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <Input id="name" defaultValue="Tony Yates" />
      <Input id="username" defaultValue="@tony" />
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button>Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`;

const sideCode = `<SheetContent side="left">…</SheetContent>
<SheetContent side="right">…</SheetContent>  {/* default */}
<SheetContent side="top">…</SheetContent>
<SheetContent side="bottom">…</SheetContent>`;

const installCode = `import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function ProfileSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes here.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}`;

function ProfileSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-6">
          <div className="grid gap-2">
            <label
              htmlFor="sheet-name"
              className="text-sm font-medium text-text-default"
            >
              Name
            </label>
            <Input id="sheet-name" defaultValue="Tony Yates" />
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="sheet-username"
              className="text-sm font-medium text-text-default"
            >
              Username
            </label>
            <Input id="sheet-username" defaultValue="@tony" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default function SheetDocsPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Sheet</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A panel that slides in from an edge of the screen — built on Dialog, so
        it traps focus and dismisses on overlay click or Escape. Use it for
        secondary tasks like editing a record or filtering a list.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <ProfileSheet />
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens — the panel surface, overlay scrim,
          and text remap on theme change, no{" "}
          <code className="font-mono">dark:</code> classes. Trigger it to open the
          panel from the right.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Sides</h3>
        <div className="overflow-hidden rounded-lg border border-border-default">
          <div className="flex flex-wrap items-center justify-center gap-3 bg-background-subtle p-8">
            {sides.map((side) => (
              <Sheet key={side}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="capitalize">
                    {side}
                  </Button>
                </SheetTrigger>
                <SheetContent side={side}>
                  <SheetHeader>
                    <SheetTitle className="capitalize">{side} sheet</SheetTitle>
                    <SheetDescription>
                      Opens from the {side} edge of the screen.
                    </SheetDescription>
                  </SheetHeader>
                  <SheetFooter className="mt-6">
                    <SheetClose asChild>
                      <Button variant="outline">Close</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            ))}
          </div>
          <div className="border-t border-border-default p-3">
            <CodeBlock
              code={sideCode}
              size="sm"
              className="rounded-md border border-border-subtle bg-background-subtle"
            />
          </div>
        </div>
        <p className="mt-2 text-small">
          <code className="font-mono">side</code> picks the edge the panel docks
          to. <code className="font-mono">left</code> /{" "}
          <code className="font-mono">right</code> take three-quarters of the
          width (max <code className="font-mono">sm</code>);{" "}
          <code className="font-mono">top</code> /{" "}
          <code className="font-mono">bottom</code> span the full width.
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
              {parts.map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.6fr_3fr] gap-4 px-4 py-3"
                >
                  <div className="font-mono text-sm text-text-default">
                    {p.name}
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
              Don&apos;t use a Sheet for a short confirmation — that&apos;s a{" "}
              <code className="font-mono">Dialog</code> — or for a bottom,
              touch-first panel, which is a{" "}
              <code className="font-mono">Drawer</code>. And don&apos;t stack
              sheets; keep one focused panel open at a time.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open</Button>
  </SheetTrigger>
  <SheetContent side="right">…</SheetContent>
</Sheet>`}
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
          fe-distillery/components/ui/sheet.tsx
        </code>{" "}
        — <code className="font-mono text-text-default">Sheet</code> and its
        Trigger / Content / Header / Footer / Title / Description / Close parts,
        built on Radix Dialog. The raw surface, scrim, border, and muted text are
        replaced with Cognition tokens; the entrance animation is omitted to match
        the site&apos;s other overlays.
      </footer>
    </div>
  );
}
