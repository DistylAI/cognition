"use client";

import type { ReactElement } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  type ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 173, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 264, mobile: 140 },
];

// Series colors come from Cognition feedback tokens — never hardcoded hex, and
// never the brand primary (purple), which is reserved for brand / interactive.
const config = {
  desktop: { label: "Desktop", color: "var(--color-feedback-success)" },
  mobile: { label: "Mobile", color: "var(--color-feedback-warning)" },
} satisfies ChartConfig;

// Shared base chart — each demo swaps in a differently configured tooltip.
function BaseBar({ tooltip }: { tooltip: ReactElement }) {
  return (
    <ChartContainer config={config} className="h-[220px] w-full">
      <BarChart accessibilityLayer data={data} margin={{ top: 8 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip cursor={false} content={tooltip} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

export function DotTooltip() {
  return <BaseBar tooltip={<ChartTooltipContent indicator="dot" />} />;
}

export function LineTooltip() {
  return <BaseBar tooltip={<ChartTooltipContent indicator="line" />} />;
}

export function DashedTooltip() {
  return <BaseBar tooltip={<ChartTooltipContent indicator="dashed" />} />;
}

export function NoIndicatorTooltip() {
  return <BaseBar tooltip={<ChartTooltipContent hideIndicator />} />;
}

export function CustomLabelTooltip() {
  return (
    <BaseBar
      tooltip={
        <ChartTooltipContent labelFormatter={(value) => `Month: ${value}`} />
      }
    />
  );
}
