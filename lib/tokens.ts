// Cognition v1.2 — canonical token data.
// Values mirror content/cognition-tokens.css. The Tokens page renders swatches
// from this single source so the docs cannot drift from the spec.

export type ColorToken = {
  name: string;
  cssVar: string;
  utility: string;
  // Optional full utility set (bg/text/border). Feedback tokens are used in all
  // three contexts, so the swatch lists each; other groups fall back to `utility`.
  utilities?: string[];
  light: string;
  dark: string;
  usage: string;
};

export type ColorGroup = {
  id: string;
  title: string;
  description: string;
  tokens: ColorToken[];
};

// Parent heading the color groups render under on the Tokens page.
export const colorParentTitle = "Color";

export const colorGroups: ColorGroup[] = [
  {
    id: "background",
    title: "Backgrounds",
    description: "Surface fills, from the main canvas to brand and feedback tints.",
    tokens: [
      { name: "background.default", cssVar: "--color-background-default", utility: "bg-background-default", light: "#FFFFFF", dark: "#0F1117", usage: "Main page / app background" },
      { name: "background.subtle", cssVar: "--color-background-subtle", utility: "bg-background-subtle", light: "#F9FAFB", dark: "#141820", usage: "Sidebars, off-white surfaces" },
      { name: "background.secondary", cssVar: "--color-background-secondary", utility: "bg-background-secondary", light: "#F3F4F6", dark: "#1F2937", usage: "Secondary surfaces, hover states" },
      { name: "background.accent", cssVar: "--color-background-accent", utility: "bg-background-accent", light: "#EFEDFD", dark: "#06041B", usage: "Brand-tinted surfaces" },
      { name: "background.primary", cssVar: "--color-background-primary", utility: "bg-background-primary", light: "#5D4EE7", dark: "#7C6FF7", usage: "Primary brand fills, buttons" },
      { name: "background.inverse", cssVar: "--color-background-inverse", utility: "bg-background-inverse", light: "#0F1117", dark: "#F9FAFB", usage: "Dark surfaces" },
      { name: "background.danger", cssVar: "--color-background-danger", utility: "bg-background-danger", light: "#FEF2F2", dark: "#450A0A", usage: "Error background tints" },
      { name: "background.success", cssVar: "--color-background-success", utility: "bg-background-success", light: "#F0FDF4", dark: "#052E16", usage: "Success background tints" },
      { name: "background.warning", cssVar: "--color-background-warning", utility: "bg-background-warning", light: "#FFFBEB", dark: "#431407", usage: "Warning background tints" },
    ],
  },
  {
    id: "text",
    title: "Text",
    description: "Foreground colors for copy, labels, and states.",
    tokens: [
      { name: "text.default", cssVar: "--color-text-default", utility: "text-text-default", light: "#0F1117", dark: "#F9FAFB", usage: "Body text, primary content" },
      { name: "text.subtle", cssVar: "--color-text-subtle", utility: "text-text-subtle", light: "#6B7280", dark: "#9CA3AF", usage: "Secondary text, placeholders" },
      { name: "text.primary", cssVar: "--color-text-primary", utility: "text-text-primary", light: "#5D4EE7", dark: "#7C6FF7", usage: "Brand text, links, active labels" },
      { name: "text.inverse", cssVar: "--color-text-inverse", utility: "text-text-inverse", light: "#FFFFFF", dark: "#0F1117", usage: "Text on dark / filled backgrounds" },
      { name: "text.disabled", cssVar: "--color-text-disabled", utility: "text-text-disabled", light: "#D1D5DB", dark: "#4B5563", usage: "Disabled text only" },
      { name: "text.danger", cssVar: "--color-text-danger", utility: "text-text-danger", light: "#DC2626", dark: "#F87171", usage: "Error messages" },
      { name: "text.success", cssVar: "--color-text-success", utility: "text-text-success", light: "#15803D", dark: "#4ADE80", usage: "Success messages" },
      { name: "text.warning", cssVar: "--color-text-warning", utility: "text-text-warning", light: "#B45309", dark: "#FBBF24", usage: "Warning messages" },
    ],
  },
  {
    id: "border",
    title: "Borders",
    description: "Outlines, separators, and focus rings.",
    tokens: [
      { name: "border.default", cssVar: "--color-border-default", utility: "border-border-default", light: "#E5E7EB", dark: "#374151", usage: "Standard borders, input outlines" },
      { name: "border.subtle", cssVar: "--color-border-subtle", utility: "border-border-subtle", light: "#F3F4F6", dark: "#1F2937", usage: "Light separators" },
      { name: "border.strong", cssVar: "--color-border-strong", utility: "border-border-strong", light: "#9CA3AF", dark: "#6B7280", usage: "Emphasized borders" },
      { name: "border.primary", cssVar: "--color-border-primary", utility: "border-border-primary", light: "#5D4EE7", dark: "#7C6FF7", usage: "Focused / active inputs" },
      { name: "border.danger", cssVar: "--color-border-danger", utility: "border-border-danger", light: "#EF4444", dark: "#F87171", usage: "Error state borders" },
      { name: "border.success", cssVar: "--color-border-success", utility: "border-border-success", light: "#16A34A", dark: "#4ADE80", usage: "Valid / success borders" },
    ],
  },
  {
    id: "feedback",
    title: "Feedback",
    description: "Canonical status colors — use these for every status state.",
    tokens: [
      { name: "feedback.info", cssVar: "--color-feedback-info", utility: "bg-feedback-info", utilities: ["bg-feedback-info", "text-feedback-info", "border-feedback-info"], light: "#5D4EE7", dark: "#7C6FF7", usage: "All info states" },
      { name: "feedback.success", cssVar: "--color-feedback-success", utility: "bg-feedback-success", utilities: ["bg-feedback-success", "text-feedback-success", "border-feedback-success"], light: "#15803D", dark: "#4ADE80", usage: "All success states" },
      { name: "feedback.warning", cssVar: "--color-feedback-warning", utility: "bg-feedback-warning", utilities: ["bg-feedback-warning", "text-feedback-warning", "border-feedback-warning"], light: "#F59E0B", dark: "#FBBF24", usage: "All warning states" },
      { name: "feedback.danger", cssVar: "--color-feedback-danger", utility: "bg-feedback-danger", utilities: ["bg-feedback-danger", "text-feedback-danger", "border-feedback-danger"], light: "#EF4444", dark: "#F87171", usage: "All error / destructive states" },
    ],
  },
  {
    id: "chart",
    title: "Chart",
    description:
      "Data series colors for charts. Use in order — chart-1 first, chart-5 last. Never use feedback or primary tokens for neutral data series.",
    tokens: [
      { name: "chart.1", cssVar: "--color-chart-1", utility: "var(--color-chart-1)", light: "#7C6FF7", dark: "#9089F9", usage: "First data series" },
      { name: "chart.2", cssVar: "--color-chart-2", utility: "var(--color-chart-2)", light: "#38BDF8", dark: "#7DD3FC", usage: "Second data series" },
      { name: "chart.3", cssVar: "--color-chart-3", utility: "var(--color-chart-3)", light: "#34D399", dark: "#6EE7B7", usage: "Third data series" },
      { name: "chart.4", cssVar: "--color-chart-4", utility: "var(--color-chart-4)", light: "#FB923C", dark: "#FDBA74", usage: "Fourth data series" },
      { name: "chart.5", cssVar: "--color-chart-5", utility: "var(--color-chart-5)", light: "#A78BFA", dark: "#C4B5FD", usage: "Fifth data series" },
    ],
  },
];

export type RadiusToken = { name: string; utility: string; value: string };

export const radiusTokens: RadiusToken[] = [
  { name: "radius.none", utility: "rounded-none", value: "0px" },
  { name: "radius.sm", utility: "rounded-sm", value: "4px" },
  { name: "radius.md", utility: "rounded-md", value: "8px" },
  { name: "radius.lg", utility: "rounded-lg", value: "12px" },
  { name: "radius.xl", utility: "rounded-xl", value: "16px" },
  { name: "radius.full", utility: "rounded-full", value: "9999px" },
];

export type SpacingToken = { name: string; utility: string; px: number };

export const spacingTokens: SpacingToken[] = [
  { name: "space.1", utility: "p-1", px: 4 },
  { name: "space.2", utility: "p-2", px: 8 },
  { name: "space.3", utility: "p-3", px: 12 },
  { name: "space.4", utility: "p-4", px: 16 },
  { name: "space.6", utility: "p-6", px: 24 },
  { name: "space.8", utility: "p-8", px: 32 },
  { name: "space.12", utility: "p-12", px: 48 },
  { name: "space.16", utility: "p-16", px: 64 },
];

export type TypeScaleToken = {
  px: number;
  label: string;
  weight: number;
  weightLabel: string;
  sample: string;
};

// Cognition has no "Display" style — the scale starts at H1. Each row renders
// at its real weight (driven via font-variation-settings on the specimen).
export const typeScale: TypeScaleToken[] = [
  { px: 36, label: "H1", weight: 700, weightLabel: "Bold", sample: "Cognition" },
  { px: 30, label: "H2", weight: 600, weightLabel: "Semibold", sample: "Design system" },
  { px: 24, label: "H3", weight: 600, weightLabel: "Semibold", sample: "Tokens & components" },
  { px: 20, label: "H4", weight: 600, weightLabel: "Semibold", sample: "Semantic colors" },
  { px: 18, label: "Lead", weight: 600, weightLabel: "Semibold", sample: "One source of truth." },
  { px: 16, label: "Body", weight: 400, weightLabel: "Regular", sample: "The quick brown fox jumps over the lazy dog." },
  { px: 14, label: "Small", weight: 500, weightLabel: "Medium", sample: "Secondary copy and helper text." },
  { px: 12, label: "Caption", weight: 400, weightLabel: "Regular", sample: "Captions, labels, metadata." },
];

export const fontWeights = [
  { weight: 400, label: "Regular" },
  { weight: 500, label: "Medium" },
  { weight: 600, label: "Semibold" },
  { weight: 700, label: "Bold" },
];
