import type { Config } from "tailwindcss";

// Tailwind v3 adapter for the Folio tokens in content/folio-tokens.css.
// Each utility reads a --color-* token. color-mix keeps opacity modifiers
// (bg-background-inverse/50) working on hex tokens.
function token(name: string) {
  return `color-mix(in srgb, var(--color-${name}) calc(<alpha-value> * 100%), transparent)`;
}

function tokens(group: string, names: string[]) {
  return Object.fromEntries(names.map((name) => [name, token(`${group}-${name}`)]));
}

const colors = {
  transparent: "transparent",
  current: "currentColor",
  background: tokens("background", [
    "default",
    "subtle",
    "secondary",
    "accent",
    "primary",
    "primary-subtle",
    "inverse",
    "danger",
    "success",
    "warning",
    "info",
  ]),
  text: tokens("text", [
    "default",
    "subtle",
    "primary",
    "inverse",
    "disabled",
    "danger",
    "success",
    "warning",
    "info",
  ]),
  border: tokens("border", [
    "default",
    "subtle",
    "strong",
    "primary",
    "danger",
    "success",
    "warning",
    "info",
  ]),
  feedback: tokens("feedback", ["danger", "success", "warning", "info"]),
  chart: tokens("chart", ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]),
};

const space = Object.fromEntries(
  ["1", "2", "3", "4", "6", "8", "12", "16"].map((step) => [step, `var(--space-${step})`]),
);

export default {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./lib/**/*.ts"],
  // The feedback family is built from strings at runtime, so the scanner
  // cannot see every class.
  safelist: [
    {
      pattern: /^(bg|text|border)-feedback-(danger|success|warning|info)$/,
    },
  ],
  theme: {
    // Replace the Tailwind palette so raw palette classes (text-gray-500) do
    // not exist.
    colors,
    extend: {
      borderColor: { DEFAULT: token("border-default") },
      ringColor: { DEFAULT: token("border-primary") },
      spacing: space,
      borderRadius: {
        none: "var(--radius-none)",
        DEFAULT: "var(--radius-sm)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
} satisfies Config;
