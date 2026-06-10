import type { Metadata } from "next";
import { CodeBlock } from "@/components/CodeBlock";
import {
  BasicRadar,
  DotsRadar,
  GridCircleRadar,
  MultipleRadar,
} from "./RadarChartDemos";

export const metadata: Metadata = {
  title: "Radar Chart",
  description:
    "Radar Chart — a Recharts radar chart wrapped in the Cognition Chart primitives, with token-driven series colors and tooltips.",
};

const parts = [
  {
    name: "ChartContainer",
    desc: "Wraps a Recharts chart. Takes a config and injects each series color as a --color-<key> CSS var.",
  },
  {
    name: "ChartConfig",
    desc: "Per-series label and color. Use a Cognition token var for color (e.g. var(--color-chart-1)).",
  },
  {
    name: "ChartTooltip / ChartTooltipContent",
    desc: "Recharts tooltip + the styled content. hideLabel, indicator (dot | line | dashed), and formatters supported.",
  },
  {
    name: "ChartLegend / ChartLegendContent",
    desc: "Recharts legend + styled content, driven by the same config.",
  },
] as const;

const setupCode = `const chartConfig = {
  a: { label: "Model A", color: "var(--color-chart-1)" },
  b: { label: "Model B", color: "var(--color-chart-2)" },
} satisfies ChartConfig;`;

const basicCode = `<ChartContainer config={chartConfig} className="mx-auto aspect-square w-full max-w-[260px]">
  <RadarChart data={data}>
    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
    <PolarAngleAxis dataKey="metric" />
    <PolarGrid />
    <Radar dataKey="a" stroke="var(--color-a)" fill="var(--color-a)" fillOpacity={0.6} />
  </RadarChart>
</ChartContainer>`;

const multipleCode = `<Radar dataKey="a" stroke="var(--color-a)" fill="var(--color-a)" fillOpacity={0.5} />
<Radar dataKey="b" stroke="var(--color-b)" fill="var(--color-b)" fillOpacity={0.5} />
<ChartLegend content={<ChartLegendContent />} />`;

const dotsCode = `<Radar
  dataKey="a"
  stroke="var(--color-a)"
  fill="var(--color-a)"
  fillOpacity={0.6}
  dot={{ r: 4, fillOpacity: 1 }}
/>`;

const gridCircleCode = `<PolarGrid gridType="circle" />
<PolarAngleAxis dataKey="metric" />`;

const installCode = `import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  ChartContainer,
  type ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  a: { label: "Model A", color: "var(--color-chart-1)" },
} satisfies ChartConfig;

export function ProfileRadar({ data }) {
  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full max-w-[260px]">
      <RadarChart data={data}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarAngleAxis dataKey="metric" />
        <PolarGrid />
        <Radar dataKey="a" stroke="var(--color-a)" fill="var(--color-a)" fillOpacity={0.6} />
      </RadarChart>
    </ChartContainer>
  );
}`;

function Cell({
  children,
  code,
}: {
  children: React.ReactNode;
  code: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border-default">
      <div className="flex justify-center bg-background-subtle p-6">
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

export default function RadarChartDocsPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Radar Chart</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A radar chart built on Recharts and wrapped in the Cognition Chart
        primitives. Good for comparing a handful of metrics across one or two
        series; colors come from the config.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex justify-center rounded-lg border border-border-default bg-background-subtle p-6">
          <BasicRadar />
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens — the web, grid, and fill remap on
          theme change, no <code className="font-mono">dark:</code> classes.
          Series colors are injected from the config as{" "}
          <code className="font-mono">--color-*</code> CSS vars.
        </p>
      </section>

      {/* Config */}
      <section id="config" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Config</h3>
        <p className="mb-4 text-small">
          Every chart starts with a <code className="font-mono">ChartConfig</code>{" "}
          — one entry per series, each pointing at a Cognition token. The
          container turns those into <code className="font-mono">--color-*</code>{" "}
          variables the radars reference.
        </p>
        <CodeBlock
          code={setupCode}
          className="rounded-lg border border-border-default bg-background-subtle"
        />
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Cell code={basicCode}>
            <BasicRadar />
          </Cell>
          <Cell code={multipleCode}>
            <MultipleRadar />
          </Cell>
          <Cell code={dotsCode}>
            <DotsRadar />
          </Cell>
          <Cell code={gridCircleCode}>
            <GridCircleRadar />
          </Cell>
        </div>
        <p className="mt-2 text-small">
          One series or two, with optional dots, and a polygon or circular grid
          via <code className="font-mono">gridType</code>. Keep{" "}
          <code className="font-mono">fillOpacity</code> low enough that
          overlapping series stay legible.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.8fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-xs font-medium text-text-subtle">
              <div>Part</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {parts.map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.8fr_3fr] gap-4 px-4 py-3"
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
        <p className="mt-2 text-small">
          The Recharts pieces — <code className="font-mono">RadarChart</code>,{" "}
          <code className="font-mono">Radar</code>,{" "}
          <code className="font-mono">PolarAngleAxis</code>,{" "}
          <code className="font-mono">PolarGrid</code> — are used directly inside{" "}
          <code className="font-mono">ChartContainer</code>.
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
              Don&apos;t hardcode radar colors with a hex or raw palette utility —
              drive them from the config with token vars so they theme. Don&apos;t
              use the brand primary or feedback tokens for a data series — those carry
              meaning (brand, status); use the chart-1…chart-5 tokens, in
              order. And don&apos;t plot more than two or three series; the web
              gets unreadable.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`const config = {
  a: {
    label: "Model A",
    color: "var(--color-chart-1)",
  },
} satisfies ChartConfig;

<Radar dataKey="a" stroke="var(--color-a)" fill="var(--color-a)" />`}
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
          fe-distillery/components/ui/chart.tsx
        </code>{" "}
        — <code className="font-mono text-text-default">ChartContainer</code>,{" "}
        <code className="font-mono text-text-default">ChartTooltip</code>/
        <code className="font-mono text-text-default">Content</code>,{" "}
        <code className="font-mono text-text-default">ChartLegend</code>/
        <code className="font-mono text-text-default">Content</code> on Recharts.
        Series colors are chart-token vars from the config.
      </footer>
    </div>
  );
}
