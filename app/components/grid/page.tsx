import type { Metadata } from "next";
import { Grid } from "@/components/ui/grid";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Grid",
  description:
    "Grid component: a CSS grid layout primitive with named column counts and Cognition spacing tokens.",
};

const installCode = `import { Grid } from "@/components/ui/grid";

export function Example() {
  return (
    <Grid cols={3} gap="md">
      <div>Cell one</div>
      <div>Cell two</div>
      <div>Cell three</div>
    </Grid>
  );
}`;

const doCode = `// Grid with Cognition tokens
<Grid cols={3} gap="lg">
  <div>Cell one</div>
  <div>Cell two</div>
  <div>Cell three</div>
</Grid>`;

export default function GridPage() {
  return (
    <div>
      <p className="mb-2 text-caption">Components</p>
      <h1 className="text-lead text-text-default">Grid</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A CSS grid layout primitive with named column counts and Cognition
        spacing tokens. Replaces inline grid utilities across the codebase.
      </p>

      {/* Preview */}
      <section className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">Preview</h3>
        <div className="rounded-lg border border-border-default bg-background-subtle p-10">
          <Grid cols={3} gap="md">
            {["Cell one", "Cell two", "Cell three", "Cell four", "Cell five", "Cell six"].map((label) => (
              <div key={label} className="rounded-md border border-border-default bg-background-default p-4">
                <p className="text-small text-text-default">{label}</p>
              </div>
            ))}
          </Grid>
        </div>
      </section>

      {/* Column variants */}
      <section className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">Column counts</h3>
        <div className="space-y-4">
          {([1, 2, 3, 4] as const).map((cols) => (
            <div key={cols} className="overflow-hidden rounded-lg border border-border-default">
              <div className="bg-background-subtle p-6">
                <Grid cols={cols} gap="sm">
                  {Array.from({ length: cols }).map((_, i) => (
                    <div key={i} className="rounded border border-border-default bg-background-default p-3">
                      <p className="text-small text-text-subtle">col</p>
                    </div>
                  ))}
                </Grid>
              </div>
              <div className="border-t border-border-default p-3">
                <CodeBlock
                  code={`<Grid cols={${cols}} gap="sm">`}
                  size="sm"
                  className="rounded-md border border-border-subtle bg-background-subtle"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API */}
      <section className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-caption font-medium">
              <div>Prop</div><div>Type</div><div>Default</div><div>Description</div>
            </div>
            {[
              { prop: "cols", type: "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12", def: "1", desc: "Number of grid columns." },
              { prop: "gap", type: `"none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"`, def: "—", desc: "Gap between all cells. Maps to the Cognition spacing scale." },
              { prop: "gapX", type: `"none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"`, def: "—", desc: "Column gap only. Overrides gap on the x axis." },
              { prop: "gapY", type: `"none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"`, def: "—", desc: "Row gap only. Overrides gap on the y axis." },
            ].map((row) => (
              <div key={row.prop} className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 border-b border-border-default px-4 py-3 text-small last:border-0">
                <code className="font-mono text-text-primary">{row.prop}</code>
                <code className="font-mono text-text-subtle">{row.type}</code>
                <span className="text-text-subtle">{row.def}</span>
                <span className="text-text-default">{row.desc}</span>
              </div>
            ))}
          </div>
        </div>
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
              Don&apos;t hand-write grid utilities inline. Column counts and gap
              values set that way sit outside the token system and accumulate as
              drift across the codebase.
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
      </section>

      {/* Code */}
      <section className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-lead text-text-default">Usage</h3>
        <CodeBlock code={installCode} />
      </section>

      <p className="mt-12 text-small text-text-subtle">
        Cognition v1.3 · June 2026 · Questions? Ask Tony Yates #research-and-design
      </p>
    </div>
  );
}
