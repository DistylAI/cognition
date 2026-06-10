import type { Metadata } from "next";
import { ArrowRight, Folder, Search } from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Empty State",
  description:
    "Empty State component — a centered placeholder for empty lists, searches, and first-run screens. Proposed canonical component (fe-distillery has none yet).",
};

const anatomyCode = `<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Folder />
    </EmptyMedia>
    <EmptyTitle>No projects yet</EmptyTitle>
    <EmptyDescription>
      Create your first project to get started.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Create project</Button>
  </EmptyContent>
</Empty>`;

const doCode = `// Offer the next action right in the empty state
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon"><Inbox /></EmptyMedia>
    <EmptyTitle>No messages</EmptyTitle>
  </EmptyHeader>
  <EmptyContent>
    <Button>Compose</Button>
  </EmptyContent>
</Empty>`;

const installCode = `import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";

export function NoResults() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Search />
        </EmptyMedia>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>Try a different search term.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}`;

export default function EmptyStatePage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Empty State</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A centered placeholder for empty lists, searches, and first-run screens.
        Use it to explain why there&apos;s nothing here and offer the next
        action.
      </p>

      <div className="mt-4 rounded-lg border border-border-default bg-background-accent p-4">
        <p className="text-small text-text-default">
          <span className="font-bold">Proposed.</span> fe-distillery has no
          first-class empty-state component yet. This documents the canonical{" "}
          <code className="font-mono">Empty</code> the audit recommends — a
          header, media, title, description, and content composition.
        </p>
      </div>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <Empty className="max-w-sm">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Folder />
              </EmptyMedia>
              <EmptyTitle>No projects yet</EmptyTitle>
              <EmptyDescription>
                Create your first project to start collecting traces and
                evaluations.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button>Create project</Button>
              <Button variant="ghost">
                Learn more
                <ArrowRight />
              </Button>
            </EmptyContent>
          </Empty>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens — the muted media well, text, and
          buttons remap on theme change, no{" "}
          <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* API */}
      <section id="anatomy" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex items-start justify-center rounded-lg border border-border-default bg-background-subtle p-8">
            <Empty className="max-w-sm">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <Folder />
                </EmptyMedia>
                <EmptyTitle>No projects yet</EmptyTitle>
                <EmptyDescription>
                  Create your first project to get started.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button>Create project</Button>
              </EmptyContent>
            </Empty>
          </div>
          <CodeBlock
            code={anatomyCode}
            className="rounded-lg border border-border-default bg-background-subtle"
          />
        </div>
        <p className="mt-2 text-small">
          <code className="font-mono">EmptyMedia</code> takes a{" "}
          <code className="font-mono">variant</code> (
          <code className="font-mono">default</code> for a bare icon or
          illustration, <code className="font-mono">icon</code> for the muted
          rounded well). <code className="font-mono">EmptyContent</code> is
          optional — drop it for a purely informational state.
        </p>
      </section>

      {/* Examples */}
      <section id="examples" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Examples</h3>
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          {/* Search — no results, with input action */}
          <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-8">
            <Empty className="max-w-sm">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <Search />
                </EmptyMedia>
                <EmptyTitle>No results found</EmptyTitle>
                <EmptyDescription>
                  No traces match your filters. Try another term.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Input placeholder="Search traces…" className="max-w-xs" />
              </EmptyContent>
            </Empty>
          </div>

          {/* Informational — no actions */}
          <div className="flex items-center justify-center rounded-lg border border-dashed border-border-default bg-background-subtle p-8">
            <Empty className="max-w-sm">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <Folder />
                </EmptyMedia>
                <EmptyTitle>This folder is empty</EmptyTitle>
                <EmptyDescription>
                  Items you add will appear here.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        </div>
        <p className="mt-2 text-small">
          The left state nests an <code className="font-mono">Input</code> in{" "}
          <code className="font-mono">EmptyContent</code>; the right is
          informational only, sitting in a dashed well — a common pattern for
          drop targets.
        </p>
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
              Don&apos;t leave a blank area or a bare “No data” string — and
              don&apos;t hardcode <code className="font-mono">bg-gray-50</code>{" "}
              for the media well. Explain the state and offer a way forward.
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
          Drop-in ready. Compose only the parts you need — every piece is plain
          markup styled with Cognition tokens.
        </p>
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        Proposed canonical component — fe-distillery has no empty-state primitive
        yet. The parts compose as{" "}
        <code className="font-mono text-text-default">Empty</code> (
        <code className="font-mono text-text-default">EmptyHeader</code>,{" "}
        <code className="font-mono text-text-default">EmptyMedia</code>,{" "}
        <code className="font-mono text-text-default">EmptyTitle</code>,{" "}
        <code className="font-mono text-text-default">EmptyDescription</code>,{" "}
        <code className="font-mono text-text-default">EmptyContent</code>), built
        on Cognition tokens.
      </footer>
    </div>
  );
}
