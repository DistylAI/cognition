import type { Metadata } from "next";
import { CodeBlock } from "@/components/CodeBlock";
import {
  DismissibleDrawer,
  FormDrawer,
  NonDismissibleDrawer,
  StatisticDrawer,
  TextDrawer,
} from "./DrawerDemos";

export const metadata: Metadata = {
  title: "Drawer",
  description:
    "Drawer component — a panel that slides up from the bottom of the screen for focused, touch-friendly tasks. API matches fe-distillery components/ui/drawer.tsx.",
};

const parts = [
  {
    name: "Drawer",
    desc: "Root. Holds open / onOpenChange, shouldScaleBackground (scales the page behind it), dismissible, and direction.",
  },
  {
    name: "DrawerTrigger",
    desc: "Opens the drawer. Use asChild to render your own button.",
  },
  {
    name: "DrawerContent",
    desc: "The sliding panel — portals over an overlay and renders the drag handle, then your content.",
  },
  {
    name: "DrawerHeader",
    desc: "Title + description block at the top. Centers on mobile, left-aligns from sm.",
  },
  {
    name: "DrawerFooter",
    desc: "Actions pinned to the bottom — stacks the primary action over a close.",
  },
  {
    name: "DrawerTitle / DrawerDescription",
    desc: "Accessible title and supporting text, wired to the dialog for screen readers.",
  },
  {
    name: "DrawerClose",
    desc: "Closes the drawer. Wrap a button with asChild.",
  },
] as const;

const statisticCode = `<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Move Goal</DrawerTitle>
        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
      </DrawerHeader>
      {/* stepper + chart */}
      <DrawerFooter>
        <Button>Set Goal</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`;

const formCode = `<DrawerContent>
  <div className="mx-auto w-full max-w-sm">
    <DrawerHeader>
      <DrawerTitle>Edit profile</DrawerTitle>
      <DrawerDescription>Make changes to your profile here.</DrawerDescription>
    </DrawerHeader>
    <div className="grid gap-4 p-4">
      <Input id="name" defaultValue="Tony Yates" />
      <Input id="username" defaultValue="@tony" />
    </div>
    <DrawerFooter>…</DrawerFooter>
  </div>
</DrawerContent>`;

const textCode = `<DrawerContent>
  <div className="mx-auto w-full max-w-sm">
    <DrawerHeader>
      <DrawerTitle>Title Text</DrawerTitle>
      <DrawerDescription>This is a drawer description.</DrawerDescription>
    </DrawerHeader>
    <div className="max-h-[50vh] overflow-y-auto px-4 text-sm text-text-subtle">
      <p>…</p>
    </div>
    <DrawerFooter>…</DrawerFooter>
  </div>
</DrawerContent>`;

const dismissibleCode = `<Drawer>…</Drawer>            {/* drag or tap overlay closes */}`;
const nonDismissibleCode = `<Drawer dismissible={false}>…</Drawer>  {/* only a button closes */}`;

const installCode = `import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function GoalDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Set Goal</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}`;

function VariantCell({
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

export default function DrawerDocsPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Drawer</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A panel that slides up from the bottom of the screen, keeping the page
        behind it in view. Built for focused, touch-friendly tasks — quick edits,
        confirmations, or a short read — and dismissed by dragging the handle or
        tapping outside.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <StatisticDrawer />
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens — the panel surface, overlay scrim,
          and text remap on theme change, no{" "}
          <code className="font-mono">dark:</code> classes. Trigger it to slide
          the panel up.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <VariantCell code={statisticCode}>
            <StatisticDrawer />
          </VariantCell>
          <VariantCell code={formCode}>
            <FormDrawer />
          </VariantCell>
          <VariantCell code={textCode}>
            <TextDrawer />
          </VariantCell>
        </div>
        <p className="mt-2 text-small">
          The same primitive frames a statistic with steppers, a short form, or a
          block of text. Constrain the body with{" "}
          <code className="font-mono">mx-auto w-full max-w-sm</code> so it stays
          readable on wide screens.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <VariantCell code={dismissibleCode}>
            <DismissibleDrawer />
          </VariantCell>
          <VariantCell code={nonDismissibleCode}>
            <NonDismissibleDrawer />
          </VariantCell>
        </div>
        <p className="mt-2 text-small">
          By default a drawer is dismissible — drag the handle down or tap the
          overlay. Set <code className="font-mono">dismissible={`{false}`}</code>{" "}
          to require an explicit action, for steps the user must acknowledge.
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
              Don&apos;t use a drawer for a desktop-first dialog — reach for{" "}
              <code className="font-mono">Dialog</code> there. And don&apos;t stack
              drawers or nest one inside another; a drawer is a single focused
              surface, not a navigation layer.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open</Button>
  </DrawerTrigger>
  <DrawerContent>…</DrawerContent>
</Drawer>`}
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
          fe-distillery/components/ui/drawer.tsx
        </code>{" "}
        — <code className="font-mono text-text-default">Drawer</code> and its
        Trigger / Content / Header / Footer / Title / Description / Close parts,
        built on <code className="font-mono text-text-default">vaul</code>. The
        raw surface, scrim, handle, and muted text are replaced with Cognition
        tokens.
      </footer>
    </div>
  );
}
