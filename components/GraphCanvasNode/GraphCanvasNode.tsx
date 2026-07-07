import { cva } from "class-variance-authority";

// Generic graph-entity card. It owns NO taxonomy: the consuming app passes
// domainLabel + domainColor (header band background/text), so any product can
// map its own categories and colors. Structure: a full-width colored header
// band (label + edge count) over a neutral body (entity name + metadata).
// Cognition tokens drive the body, border, and focus ring; the header colors
// are caller-supplied and applied inline.

interface DomainColor {
  background: string;
  text: string;
}

export interface GraphCanvasNodeProps {
  domainLabel: string;
  domainColor: DomainColor;
  name: string;
  attributes: number;
  nodes: number | string;
  edges: number;
  status?: "static" | "active" | "disabled";
  onClick?: () => void;
}

const cardVariants = cva(
  "relative flex w-full flex-col overflow-hidden rounded-lg bg-background-default text-left font-sans transition-shadow",
  {
    variants: {
      status: {
        static: "border-[0.5px] border-border-default",
        active:
          "border-[1.5px] border-border-primary shadow-[0_0_0_3px_var(--color-background-accent)]",
        disabled:
          "cursor-not-allowed border-[0.5px] border-border-default opacity-[0.45] [pointer-events:none]",
      },
    },
    defaultVariants: { status: "static" },
  },
);

// Sentence case: first letter up, rest down ("RISK SIGNAL" → "Risk signal").
function sentenceCase(value: string): string {
  return value
    ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    : value;
}

// Compact count: 412 → "412", 184200 → "184.2K", 1200000 → "1.2M".
// Strings pass through unchanged (pre-formatted by the caller).
function formatCount(value: number | string): string {
  if (typeof value === "string") return value;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return String(value);
}

export function GraphCanvasNode({
  domainLabel,
  domainColor,
  name,
  attributes,
  nodes,
  edges,
  status = "static",
  onClick,
}: GraphCanvasNodeProps) {
  const inner = (
    <>
      <div
        className="flex items-center justify-between gap-2 px-3 py-2"
        style={{
          backgroundColor: domainColor.background,
          color: domainColor.text,
        }}
      >
        <span className="text-[11px] font-medium leading-none">
          {sentenceCase(domainLabel)}
        </span>
        <span className="text-[11px] font-normal leading-none opacity-70">
          {edges} edges
        </span>
      </div>
      <div className="flex flex-col gap-1 p-3">
        <p className="text-base font-medium leading-tight text-text-default">
          {name}
        </p>
        <p className="text-caption">
          {attributes} attributes · {formatCount(nodes)} nodes
        </p>
      </div>
    </>
  );

  if (onClick && status !== "disabled") {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cardVariants({ status })}
      >
        {inner}
      </button>
    );
  }

  return (
    <div
      className={cardVariants({ status })}
      aria-disabled={status === "disabled" || undefined}
    >
      {inner}
    </div>
  );
}
