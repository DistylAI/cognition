"use client";

import {
  Label,
  LabelList,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import {
  ChartContainer,
  type ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Each bar carries its own fill, pointing at a --color-<name> var the config
// defines. Colors are Cognition feedback / semantic tokens — never hardcoded
// hex, and never the brand primary (purple).
const catData = [
  { source: "organic", visitors: 275, fill: "var(--color-organic)" },
  { source: "referral", visitors: 200, fill: "var(--color-referral)" },
  { source: "social", visitors: 187, fill: "var(--color-social)" },
  { source: "email", visitors: 173, fill: "var(--color-email)" },
  { source: "direct", visitors: 90, fill: "var(--color-direct)" },
];

const catConfig = {
  visitors: { label: "Visitors" },
  organic: { label: "Organic", color: "var(--color-feedback-success)" },
  referral: { label: "Referral", color: "var(--color-feedback-warning)" },
  social: { label: "Social", color: "var(--color-feedback-danger)" },
  email: { label: "Email", color: "var(--color-feedback-info)" },
  direct: { label: "Direct", color: "var(--color-border-strong)" },
} satisfies ChartConfig;

const stackData = [{ period: "H1", desktop: 1260, mobile: 570 }];
const stackConfig = {
  desktop: { label: "Desktop", color: "var(--color-feedback-success)" },
  mobile: { label: "Mobile", color: "var(--color-feedback-warning)" },
} satisfies ChartConfig;
const stackTotal = stackData[0].desktop + stackData[0].mobile;

export function BasicRadial() {
  return (
    <ChartContainer config={catConfig} className="mx-auto aspect-square max-h-[260px]">
      <RadialBarChart data={catData} innerRadius={30} outerRadius={110}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel nameKey="source" />}
        />
        <RadialBar dataKey="visitors" background />
      </RadialBarChart>
    </ChartContainer>
  );
}

export function LabelRadial() {
  return (
    <ChartContainer config={catConfig} className="mx-auto aspect-square max-h-[260px]">
      <RadialBarChart
        data={catData}
        startAngle={-90}
        endAngle={270}
        innerRadius={30}
        outerRadius={110}
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel nameKey="source" />}
        />
        <RadialBar dataKey="visitors" background>
          <LabelList
            position="insideStart"
            dataKey="source"
            className="fill-text-inverse capitalize"
            fontSize={11}
          />
        </RadialBar>
      </RadialBarChart>
    </ChartContainer>
  );
}

export function GridRadial() {
  return (
    <ChartContainer config={catConfig} className="mx-auto aspect-square max-h-[260px]">
      <RadialBarChart data={catData} innerRadius={30} outerRadius={110}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel nameKey="source" />}
        />
        <PolarGrid gridType="circle" />
        <RadialBar dataKey="visitors" background />
      </RadialBarChart>
    </ChartContainer>
  );
}

export function StackedRadial() {
  return (
    <ChartContainer config={stackConfig} className="mx-auto aspect-square max-h-[260px]">
      <RadialBarChart
        data={stackData}
        endAngle={180}
        innerRadius={80}
        outerRadius={130}
      >
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 12}
                      className="fill-text-default text-2xl font-bold"
                    >
                      {stackTotal.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 8}
                      className="fill-text-subtle text-xs"
                    >
                      Visitors
                    </tspan>
                  </text>
                );
              }
              return null;
            }}
          />
        </PolarRadiusAxis>
        <RadialBar
          dataKey="desktop"
          stackId="a"
          cornerRadius={5}
          fill="var(--color-desktop)"
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey="mobile"
          stackId="a"
          cornerRadius={5}
          fill="var(--color-mobile)"
          className="stroke-transparent stroke-2"
        />
      </RadialBarChart>
    </ChartContainer>
  );
}
