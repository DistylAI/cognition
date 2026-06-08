// EXAMPLE taxonomy only — from Context Explorer, not canonical Cognition values.
// Graph Canvas Node has no built-in taxonomy; a consuming app passes its own
// domainColor. These use Cognition token vars so the docs examples remap in
// dark mode, but a product is free to pass any CSS color.
export const exampleDomains = {
  party: {
    background: "var(--color-background-accent)",
    text: "var(--color-text-primary)",
  },
  risk: {
    background: "var(--color-background-danger)",
    text: "var(--color-text-danger)",
  },
  evidence: {
    background: "var(--color-background-success)",
    text: "var(--color-text-success)",
  },
} as const;
