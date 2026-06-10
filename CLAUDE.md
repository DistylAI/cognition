# Cognition — engineering standards

Standards for building on the Cognition design system. These are non-negotiable.

## Color & tokens

- **Use Cognition semantic token classes only.** Never hardcode a hex, `rgb()`,
  or `hsl()`, and never use raw Tailwind palette utilities (`text-gray-500`,
  `bg-blue-200`).
- **Dark mode lives at the semantic layer**, remapped via `[data-theme="dark"]`
  on `<html>`. Never use `dark:` classes.
- **Data-series colors use the `chart-1`…`chart-5` tokens**, in order. Never use
  the brand primary (purple) or `feedback-*` tokens for neutral data series —
  primary is reserved for brand/interactive, feedback for status.

## Typography

- **Body copy uses `text-text-default`, not `text-text-subtle`.** Primary body
  paragraphs (including page lead/intro paragraphs) must pair `text-body` with
  `text-text-default` — or just `text-body`, since `.text-body` already resolves
  to `--color-text-default`.
- **`text-text-subtle` is for secondary copy only** — labels, captions,
  metadata, helper text, table descriptions, and section eyebrows. **Never use
  `text-text-subtle` for primary body paragraphs.**
- Apply named text styles (`text-h1`…`text-h4`, `text-lead`, `text-body`,
  `text-small`, `text-blockquote`, `text-list`) to the matching semantic
  element. Never hardcode font sizes or weights.

## Components

- Use the shadcn wrappers in `components/ui/`; never import Radix directly.
- Button, Tag, Badge, Link are semantically distinct — never interchangeable.
- Icons: `lucide-react` only.
