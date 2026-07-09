import type { Metadata } from "next";
import { Box } from "@/components/ui/box";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Box",
  description:
    "Box component: a layout primitive for controlled padding, background, and border composition using Cognition tokens.",
};

const installCode = `import { Box } from "@/components/ui/box";

export function Example() {
  return (
    <Box p="md" bg="subtle" border radius="md">
      Content
    </Box>
  );
}`;

const doCode = `// Box with Cognition tokens
<Box p="md" bg="subtle" border radius="md">
  Content
</Box>`;

export default function BoxPage() {
  return (
    <div>
      <p className="mb-2 text-caption">Components</p>
      <h1 className="text-lead text-text-default">Box</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A layout primitive for controlled padding, background, and border
        composition. Replaces raw divs with inconsistent inline utilities.
      </p>

      {/* Preview */}
      <section className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <Box p="md" bg="default" border radius="md">
            <p className="text-body text-text-default">Box with p="md" bg="default" border radius="md"</p>
          </Box>
        </div>
      </section>

      {/* Variants */}
      <section className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">Backgrounds</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(["default", "subtle", "secondary", "accent", "danger", "success", "warning"] as const).map((bg) => (
            <div key={bg} className="overflow-hidden rounded-lg border border-border-default">
              <div className="flex items-center justify-center p-8">
                <Box p="md" bg={bg} border radius="md">
                  <p className="text-small text-text-default">{bg}</p>
                </Box>
              </div>
              <div className="border-t border-border-default p-3">
                <CodeBlock
                  code={`<Box bg="${bg}" p="md" border radius="md" />`}
                  size="sm"
                  className="rounded-md border border-border-subtle bg-background-subtle"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Padding scale */}
      <section className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">Padding scale</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((p) => (
            <div key={p} className="overflow-hidden rounded-lg border border-border-default">
              <div className="flex items-center justify-center bg-background-subtle p-6">
                <Box p={p} bg="accent" border radius="md">
                  <p className="text-small text-text-primary">p="{p}"</p>
                </Box>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API */}
      <section className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-title text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-caption font-medium">
              <div>Prop</div><div>Type</div><div>Default</div><div>Description</div>
            </div>
            {[
              { prop: "p", type: `"none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"`, def: "—", desc: "Padding on all sides." },
              { prop: "px", type: `"none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"`, def: "—", desc: "Horizontal padding. Overrides p on the x axis." },
              { prop: "py", type: `"none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"`, def: "—", desc: "Vertical padding. Overrides p on the y axis." },
              { prop: "bg", type: `"default" | "subtle" | "secondary" | "accent" | "inverse" | "danger" | "success" | "warning"`, def: "—", desc: "Background token. Maps to bg-background-* utilities." },
              { prop: "border", type: "boolean", def: "false", desc: "Adds a border using border-border-default." },
              { prop: "radius", type: `"none" | "sm" | "md" | "lg" | "xl" | "full"`, def: "—", desc: "Border radius. Maps to the Cognition radius scale." },
              { prop: "as", type: "React.ElementType", def: `"div"`, desc: "Render as a different HTML element." },
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
        <h3 className="mt-12 mb-4 text-title text-text-default">
          Don&apos;t and Do
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t reach for a raw div with hardcoded palette utilities and
              inline spacing. Background and padding written that way are invisible
              to the token system and break on rebrand.
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
        <h3 className="mt-12 mb-4 text-title text-text-default">Usage</h3>
        <CodeBlock code={installCode} />
      </section>

      <p className="mt-12 text-small text-text-subtle">
        Cognition v1.3 · June 2026 · Questions? Ask Tony Yates #research-and-design
      </p>
    </div>
  );
}
