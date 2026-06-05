# Cognition Design System
**Distyl AI · v1.0 · February 2026**

This file defines the design and component conventions for all Distyl frontend work. It applies to new implementations, new features, and any surface where AI tooling (Claude Code, Cursor, Copilot) is generating or modifying UI code. Follow these rules exactly. No exceptions without a proposal.

---

## 1. Token Rules

### Colors
Never use hardcoded hex, rgb(), hsl(), or Tailwind color utilities directly in components. Always use semantic tokens via CSS custom properties.

**Backgrounds**
```css
color.background.default      /* --color-background-default    Main page/app background */
color.background.subtle       /* --color-background-subtle     Sidebars, off-white surfaces */
color.background.secondary    /* --color-background-secondary  Secondary surfaces, hover states */
color.background.accent       /* --color-background-accent     Brand-tinted surfaces */
color.background.primary      /* --color-background-primary    Primary brand fills, buttons */
color.background.inverse      /* --color-background-inverse    Dark surfaces */
color.background.danger       /* --color-background-danger     Error background tints */
color.background.success      /* --color-background-success    Success background tints */
color.background.warning      /* --color-background-warning    Warning background tints */
```

**Text**
```css
color.text.default            /* --color-text-default          Body text, primary content */
color.text.subtle             /* --color-text-subtle           Secondary text, placeholders */
color.text.disabled           /* --color-text-disabled         Disabled text only */
color.text.inverse            /* --color-text-inverse          Text on dark/filled backgrounds */
color.text.primary            /* --color-text-primary          Brand text, links, active labels */
color.text.danger             /* --color-text-danger           Error messages */
color.text.success            /* --color-text-success          Success messages */
color.text.warning            /* --color-text-warning          Warning messages */
```

**Borders**
```css
color.border.default          /* --color-border-default        Standard borders, input outlines */
color.border.subtle           /* --color-border-subtle         Light separators */
color.border.strong           /* --color-border-strong         Emphasized borders */
color.border.primary          /* --color-border-primary        Focused/active inputs */
color.border.danger           /* --color-border-danger         Error state borders */
color.border.success          /* --color-border-success        Valid/success borders */
```

**Feedback (canonical — use these for all status states)**
```css
color.feedback.danger         /* --color-feedback-danger       All error/destructive states */
color.feedback.success        /* --color-feedback-success      All success states */
color.feedback.warning        /* --color-feedback-warning      All warning states */
color.feedback.info           /* --color-feedback-info         All info states */
```

### Spacing
Use the 4px base unit scale. Never use arbitrary px values in inline styles.
```
space.1 = 4px    space.2 = 8px    space.3 = 12px   space.4 = 16px
space.6 = 24px   space.8 = 32px   space.12 = 48px  space.16 = 64px
```

### Radius
```
radius.none = 0px    radius.sm = 4px     radius.md = 8px
radius.lg = 12px     radius.xl = 16px    radius.full = 9999px
```

### Typography
```
font-family: Lato (all body copy, UI labels, inputs)
font-family: Roboto Mono (code blocks, technical values only)

sizes: 12px / 14px / 16px / 18px / 20px / 24px / 30px / 36px
weights: 400 / 500 / 600 / 700
```

---

## 2. Component Rules

### The Golden Rule
Every interactive element must be the semantically correct component. Using the wrong element is a bug, not a style choice.

### Component Definitions

| Component | Interactive | Triggers Action | Use For | Never Use For |
|-----------|-------------|-----------------|---------|---------------|
| **Button** | ✅ | ✅ | Submit, save, open dialog, trigger mutation | Labels, tags, status, categories |
| **Tag** | ❌ | ❌ | Non-interactive label, category, keyword | Actions, navigation, status |
| **Badge** | ❌ | ❌ | Status indicator, count, state | Actions, categories |
| **Chip** | ✅ | ❌ | Selectable filter or toggle option | Submission actions |
| **Link** | ✅ | ❌ (navigates) | Navigation to a route or URL | Actions that mutate state |

### Button Variants
```tsx
// Primary — default filled action
<Button variant="default">Save Changes</Button>

// Secondary — outlined/ghost
<Button variant="outline">Cancel</Button>

// Destructive — irreversible actions only
<Button variant="destructive">Delete System</Button>
```

### Component Tokens (use these, not semantic tokens directly in components)
```css
/* Button */
button.background.primary       /* Filled button background */
button.background.primary.hover /* Filled button hover */
button.text.primary             /* Filled button label */
button.background.secondary     /* Outlined button background */
button.border.secondary         /* Outlined button border */
button.text.secondary           /* Outlined button label */
button.background.danger        /* Destructive button fill */
button.text.danger              /* Destructive button label */

/* Input */
input.background.default        /* Input field background */
input.border.default            /* Input border at rest */
input.border.focus              /* Input border focused */
input.border.error              /* Input border invalid */
input.text.default              /* Input typed text */
input.text.placeholder          /* Input placeholder */
input.text.disabled             /* Input text disabled */

/* Tag / Badge */
tag.background.default          /* Tag background */
tag.text.default                /* Tag label */
tag.border.default              /* Tag border */
badge.background.default        /* Neutral badge */
badge.background.success        /* Success badge */
badge.background.danger         /* Error/danger badge */
badge.background.warning        /* Warning badge */
```

---

## 3. Higher-Order Components (Use These First)

Before building any page-level UI from scratch, check the Cognition Component Library for existing patterns. The library includes production-ready blocks for:

- **App shells** — sidebar + topnav + content area layouts
- **Headers** — page headers with actions, breadcrumbs, titles
- **Navigation** — sidebar nav, top nav, secondary nav patterns
- **Data displays** — tables, stat cards, metric layouts
- **Forms** — complete form layouts with validation states

These are the highest-value components in the system. Rebuilding them from scratch creates the inconsistency problems we are actively fixing. If a pattern exists in the library, use it. If it needs modification, extend it — never replace it.

**The test:** Before writing a new header, nav, or page shell, ask: "Does this exist in the Cognition Component Library?" It almost certainly does.

## 4. Radix UI / shadcn Rules

All Radix UI usage must go through shadcn wrappers in `components/ui/`. Never import directly from `@radix-ui/*` in feature files.

```tsx
// ✅ Correct
import { Collapsible } from '@/components/ui/collapsible'

// ❌ Wrong
import * as Collapsible from '@radix-ui/react-collapsible'
```

---

## 4. Anti-Patterns (pulled from codebase audit)

These patterns exist in the current codebase. Do not replicate them in new work.

```tsx
// ❌ Hardcoded colors
className="bg-[#f5f5f5] text-gray-500 border-gray-300"

// ✅ Correct
className="bg-background-subtle text-text-subtle border-border-default"
```

```tsx
// ❌ Button used as a tag/label
<button className="rounded-full px-2 py-1">Engineering</button>

// ✅ Correct
<Tag>Engineering</Tag>
```

```tsx
// ❌ Direct Tailwind gray scale
className="text-gray-500 border-gray-200 bg-gray-100"

// ✅ Correct — semantic tokens only
className="text-text-subtle border-border-default bg-background-secondary"
```

```tsx
// ❌ Hardcoded spacing
style={{ padding: '13px', margin: '7px' }}

// ✅ Correct — 4px scale
className="p-3 m-2"  // 12px, 8px
```

```tsx
// ❌ --secondary, --muted, --accent all resolve to the same value (legacy bug)
// These are now properly differentiated — use the correct semantic token
color.background.subtle      // was --muted
color.background.secondary   // was --secondary  
color.background.accent      // was --accent (now purple.50, not gray.100)
```

---

## 5. CSS Variable Migration Map

When updating existing components, use this map to migrate legacy variables.

| Legacy Variable | New Canonical Token |
|----------------|---------------------|
| `--primary` | `color.background.primary` |
| `--background` | `color.background.default` |
| `--foreground` | `color.text.default` |
| `--secondary` | `color.background.secondary` |
| `--muted` | `color.background.subtle` |
| `--accent` | `color.background.accent` |
| `--destructive` | `color.feedback.danger` |
| `--border` | `color.border.default` |
| `--input` | `color.border.default` |
| `--radius` | `radius.md` |
| `--success` | `color.feedback.success` |
| `--warning` | `color.feedback.warning` |

---

## 6. Dark Mode

Dark mode is implemented entirely at the semantic token layer. Never add `dark:` classes to individual components. Semantic tokens remap automatically.

```tsx
// ❌ Never do this
className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50"

// ✅ Correct — tokens handle dark mode automatically
className="bg-background-default text-text-default"
```

---

## 7. Rollout Plan

### Segment 1 — AI Tools (This Week)
Drop this file as `CLAUDE.md` in the root of `fe-distillery`. Also add as `.cursorrules` for Cursor users. Any AI coding tool will now generate Cognition-compliant code automatically on new work.

**Who this helps immediately:** Anyone using Claude Code, Cursor, Copilot, or vibe coding tools to build new surfaces.

### Segment 2 — Figma → Repo (Next Sprint)
Set up Code Connect to map Figma components to their React equivalents. When an engineer inspects a component in Figma they see the exact import and props — no interpretation required.

**Who this helps:** Rachel, Brian, and any FE engineer working from Figma specs.

### Segment 3 — Anywhere (Ongoing)
Portable system prompt version of this doc for use in Lovable, v0, Bolt, or any Claude conversation outside the repo. Anyone building anything that needs to BE Distyl can seed it before they start.

**Who this helps:** New impls, POCs, hackathons, external contractors.

### Testing Ask
Before full rollout, ask 2-3 engineers to build a small surface using only this doc and the Cognition library. The test: does the output look like and behave like Distyl without any design intervention? Collect feedback, iterate, then ship to the full team.

---

## 8. Governance

- **Adding a token** → MINOR version bump
- **Renaming or deleting a token** → MAJOR version bump + 2 week deprecation period
- **Changing a token value** → PATCH (small visual delta) or MINOR (significant change)
- **New component** → MINOR version bump

All token changes proposed via Figma branch first. No direct edits to the main library.

Questions? Find Tony in #design or #frontend.
