import type { Metadata } from "next";
import { CalendarDays, Users } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Hover Card",
  description:
    "Hover Card component — supplementary, read-only content that appears on hover over a trigger, without navigation or a click.",
};

const api = [
  { name: "HoverCard", type: "component", def: "—", desc: "Root that wires the trigger to the card." },
  { name: "HoverCardTrigger", type: "component", def: "—", desc: "The element that opens the card on hover or focus." },
  { name: "HoverCardContent", type: "component", def: "—", desc: "The floating card surface." },
  { name: "openDelay", type: "number", def: "700", desc: "Milliseconds to wait on hover before opening." },
  { name: "closeDelay", type: "number", def: "300", desc: "Milliseconds to wait after leaving before closing." },
  { name: "side", type: '"top" | "right" | "bottom" | "left"', def: '"bottom"', desc: "Preferred side of the trigger to place the card." },
  { name: "align", type: '"start" | "center" | "end"', def: '"center"', desc: "Alignment of the card along that side." },
] as const;

const doCode = `<HoverCard>
  <HoverCardTrigger asChild>
    <a href="/team/cognition">@cognition</a>
  </HoverCardTrigger>
  <HoverCardContent>Profile preview...</HoverCardContent>
</HoverCard>`;

const installCode = `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function HandlePreview() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button className="text-text-primary hover:underline">
          @cognition
        </button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <p className="text-sm font-semibold">Cognition</p>
        <p className="text-sm text-text-subtle">
          The Distyl design system.
        </p>
      </HoverCardContent>
    </HoverCard>
  );
}`;

function Avatar() {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background-accent text-sm font-semibold text-text-primary">
      Co
    </span>
  );
}

// Static, inline replica of HoverCardContent for the variants and states, since
// a hover-triggered card cannot be shown open at rest.
function MockCard({
  avatar,
  metadata,
}: {
  avatar?: boolean;
  metadata?: boolean;
}) {
  return (
    <div className="w-full max-w-72 rounded-md border border-border-default bg-background-default p-4 text-text-default shadow-md">
      <div className="flex gap-3">
        {avatar && <Avatar />}
        <div className="space-y-1">
          <p className="text-sm font-semibold text-text-default">Cognition</p>
          <p className="text-sm text-text-subtle">
            The Distyl design system. Tokens, components, and guidelines in one
            place.
          </p>
        </div>
      </div>
      {metadata && (
        <div className="mt-3 flex items-center gap-4 text-xs text-text-subtle">
          <span className="flex items-center gap-1 whitespace-nowrap">
            <CalendarDays className="size-3.5" />
            Shipped June 2026
          </span>
          <span className="flex items-center gap-1 whitespace-nowrap">
            <Users className="size-3.5" />
            240 components
          </span>
        </div>
      )}
    </div>
  );
}

export default function HoverCardPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Hover Card</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A card that appears on hover over a trigger, showing supplementary
        information without a click or navigation away from the current surface.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <HoverCard>
            <HoverCardTrigger asChild>
              <button
                type="button"
                className="rounded-sm text-sm font-medium text-text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-primary"
              >
                @cognition
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <div className="flex gap-3">
                <Avatar />
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-text-default">
                    Cognition
                  </p>
                  <p className="text-sm text-text-subtle">
                    The Distyl design system. Tokens, components, and guidelines
                    in one place.
                  </p>
                  <div className="flex items-center gap-1 pt-1 text-xs text-text-subtle">
                    <CalendarDays className="size-3.5" />
                    Shipped June 2026
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens. Hover the handle to open the real
          card, no <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col items-center gap-3 rounded-lg border border-border-default bg-background-subtle p-6">
            <MockCard />
            <p className="text-xs text-text-subtle">Default</p>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-lg border border-border-default bg-background-subtle p-6">
            <MockCard avatar />
            <p className="text-xs text-text-subtle">With avatar</p>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-lg border border-border-default bg-background-subtle p-6">
            <MockCard avatar metadata />
            <p className="text-xs text-text-subtle">With metadata</p>
          </div>
        </div>
        <p className="mt-2 text-small">
          A plain text preview, the same with an avatar, or enriched with a row
          of metadata. The panels above are shown open for reference.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col items-center gap-3 rounded-lg border border-border-default bg-background-subtle p-6">
            <span className="text-sm font-medium text-text-primary underline-offset-4">
              @cognition
            </span>
            <p className="text-xs text-text-subtle">
              Closed. Only the trigger shows.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-lg border border-border-default bg-background-subtle p-6">
            <MockCard avatar />
            <p className="text-xs text-text-subtle">
              Open. Appears after the hover delay.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-lg border border-border-default bg-background-subtle p-6">
            <MockCard avatar metadata />
            <p className="text-xs text-text-subtle">
              Open with delay. Tune via openDelay.
            </p>
          </div>
        </div>
        <p className="mt-2 text-small">
          Hover cannot be shown at rest, so the open states render the card
          statically. The preview opens the real card on hover.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-xs font-medium text-text-subtle">
              <div>Prop</div>
              <div>Type</div>
              <div>Default</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {api.map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 px-4 py-3"
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
        <p className="mt-2 text-small">
          <code className="font-mono">openDelay</code> and{" "}
          <code className="font-mono">closeDelay</code> are set on{" "}
          <code className="font-mono">HoverCard</code>;{" "}
          <code className="font-mono">side</code> and{" "}
          <code className="font-mono">align</code> on{" "}
          <code className="font-mono">HoverCardContent</code>.
        </p>
      </section>

      {/* Don't and Do */}
      <section id="do-dont" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">
          Don&apos;t and Do
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t put actions inside a Hover Card. It is read-only
              supplementary content, and it dismisses as soon as the pointer
              leaves, so buttons and inputs are hard to reach. When the reader
              needs to interact with the content, use a Popover instead.
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
        <p className="mt-2 text-small">
          Use it to preview profile information, link previews, or contextual
          metadata on hover without leaving the current surface.
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
