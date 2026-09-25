# Folio — engineering standards

Standards for building on the Folio design system. These are non-negotiable.

## Color & tokens

- **Class names are the same as in `@distylai/toolkit-ui`.** `tailwind.config.ts`
  uses the semantic names from the toolkit-ui tokens preset (`bg-background`,
  `text-foreground`, `text-muted-foreground`, `border-border`). Never add a
  utility name that toolkit-ui does not have.
- **Use Folio semantic token classes only.** Never hardcode a hex, `rgb()`,
  or `hsl()`, and never use raw Tailwind palette utilities (`text-gray-500`,
  `bg-blue-200`).
- **Dark mode lives at the semantic layer**, remapped via `[data-theme="dark"]`
  on `<html>`. Never use `dark:` classes.
- **Data-series colors use the `chart-1`…`chart-10` tokens**, in order. Never use
  the brand primary (purple) or `feedback-*` tokens for neutral data series —
  primary is reserved for brand/interactive, feedback for status.
- **Brand-tinted surfaces use `bg-primary-subtle`.** `bg-accent`
  is a neutral hover and highlight surface, not a brand tint.

## Typography

- **Body copy uses `text-foreground`, not `text-muted-foreground`.** Primary body
  paragraphs (including page lead/intro paragraphs) must pair `text-body` with
  `text-foreground` — or just `text-body`, since `.text-body` already resolves
  to `--color-text-default`.
- **`text-muted-foreground` is for secondary copy only** — labels, captions,
  metadata, helper text, table descriptions, and section eyebrows. **Never use
  `text-muted-foreground` for primary body paragraphs.**
- Apply named text styles (`text-h1`…`text-h4`, `text-lead`, `text-body`,
  `text-small`, `text-blockquote`, `text-list`) to the matching semantic
  element. Never hardcode font sizes or weights.

## Components

- Use the shadcn wrappers in `components/ui/`; never import Radix directly.
- Button, Tag, Badge, Link are semantically distinct — never interchangeable.
- Icons: `lucide-react` only.
