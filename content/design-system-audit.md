# Cognition v1.2 Design System Audit
## Distyl AI · June 2026

Owner: Tony Yates · Design System lead
Scope: `fe-distillery`, `distillery`, `distillery-platform`
Method: parallel subagent audit against the canonical Cognition v1.2 token set and hard-rule checklist.

---

## 1. Executive Summary

- **Cognition v1.2 is aspirational, not implemented.** `fe-distillery` defines **zero** Cognition v1.2 tokens — no `--color-background-*`, `--color-text-*`, `--color-border-*`, `--color-feedback-*`, or `--radius-{none,sm,md,lg,xl,full}` exist anywhere. The repo is still on the legacy shadcn NewYork HSL-triplet system (`--primary`, `--background`, `--foreground`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--radius`, `--success`, `--warning`).
- **Dark mode is implemented incorrectly across the board.** `fe-distillery` uses Tailwind's `darkMode: ['class']` strategy with a `.dark` selector — not `[data-theme="dark"]` on `<html>`. On top of that, **26 raw `dark:` Tailwind classes** are scattered across impl code, bypassing tokens entirely. This is a structural fix, not a polish job.
- **Color and utility drift is at scale, not at the margins.** `fe-distillery` has **344 hardcoded hex literals** and **2,061 raw Tailwind palette utilities** (`bg-gray-*`, `text-red-*`, etc.) — including inside shadcn primitives themselves (`components/ui/badge.tsx` bakes in 30+ raw palette variants; `components/ui/toast.tsx` uses `text-red-300/50`). The system isn't being bypassed by lazy callers; the system itself bypasses itself.
- **`distillery` is out of scope as briefed.** It is a Python backend monorepo, not a React consumer of `fe-distillery`. The only FE surfaces are a Chrome-extension demo and a Flask eval dashboard, both off-spec but isolated. **The expected "customer-facing React surface" does not live in this repo** — verify where it actually lives before drawing customer-rollout conclusions.
- **`distillery-platform` is irrelevant to the refresh.** Pure Helm/IaC — no FE code, no token files, no overrides. It won't block anything.
- **Bottom line:** the codebase is **not ready** to receive Cognition v1.2 token values. The brand purple `#5D4EE7` is already present in `fe-distillery` (as `--primary` `245.88 76.12% 60.59%`), so a clean rename + dark-mode reshape preserves brand exactly. But the rename is full-stack: `tailwind.config.js`, every file in `components/ui/`, two parallel token blocks, six parallel MUI theme files, and dozens of consumers.

---

## 2. Dark Mode Status

| Repo | Implementation | Status |
|---|---|---|
| `fe-distillery` | `darkMode: ['class']` in `tailwind.config.js:6` + `.dark` selector in `components/ui/base.css:101` and `impls/demos/App.css:48` | **Incorrect** — Cognition v1.2 requires `[data-theme="dark"]` on `<html>` |
| `distillery` | Not implemented anywhere | N/A (Python repo) |
| `distillery-platform` | Not applicable | N/A (no FE) |

**`dark:` Tailwind class violations:**

| Repo | Count | Notable hot-spots |
|---|---|---|
| `fe-distillery` | **26** | `components/ui/alert.tsx`, `components/ui/tabs.tsx`, `impls/platform/components/Chat/FilePreviewModal.tsx` (7 classes), `impls/platform/components/Chat/MessageBubble.tsx`, `impls/eagle/.../ConsistencyAnalysis/`, `impls/tower/.../AgentCredentialsSetup.tsx`, `impls/spear/ExecutionSelector.tsx` |
| `distillery` | 0 | — |
| `distillery-platform` | 0 | — |

**What needs to change before the brand refresh lands:**

1. Switch `tailwind.config.js` from `darkMode: ['class']` to a custom variant matching `[data-theme="dark"]`.
2. Replace `.dark { ... }` blocks in `components/ui/base.css` and `impls/demos/App.css` with `[data-theme="dark"] { ... }`.
3. Update whatever toggles dark mode (theme provider / app shell) to set `document.documentElement.dataset.theme = "dark"` instead of adding a `.dark` class.
4. Remove all 26 raw `dark:` utility classes — they should be unnecessary once tokens carry the dark values.
5. Two of the violations (`components/ui/alert.tsx`, `components/ui/tabs.tsx`) are inside the shadcn primitives themselves — fix these first; they propagate.

---

## 3. Token Inventory

### Cognition v1.2 tokens correctly defined and in use

**None.** Zero canonical tokens (`--color-*-*`, `--radius-{none,sm,md,lg,xl,full}`) are defined in any of the three repos.

### Missing (all of them, in `fe-distillery`)

All 32 canonical tokens are missing: 9 `--color-background-*`, 8 `--color-text-*`, 6 `--color-border-*`, 4 `--color-feedback-*`, 6 `--radius-*`.

### Legacy variables still in active use

**`fe-distillery`** — defined in two places and bridged through Tailwind:

| Variable | Defined at | Notes |
|---|---|---|
| `--background`, `--foreground`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--success`, `--warning`, `--border`, `--input`, `--radius` | `components/ui/base.css:37–72` (light), `components/ui/base.css:102–125` (dark, under `.dark`) | **Canonical legacy set.** HSL-triplet form, brand `--primary` is `245.88 76.12% 60.59%` ≈ `#5D4EE7` — matches Cognition's intended brand. |
| Same set, again | `impls/demos/App.css:21–66` | **Duplicate** purple-themed token block. Diverges slightly from `base.css`. Two sources of truth. |
| `var(--primary)`, `var(--background)`, `var(--foreground)`, `var(--secondary)`, `var(--muted)`, `var(--accent)`, `var(--destructive)`, `var(--success)`, `var(--warning)`, `var(--border)`, `var(--input)`, `var(--radius)` | `tailwind.config.js:39–103` (12 lines) | Composed via `hsl(var(--*))` into `theme.extend.colors` keys. |
| `var(--primary)` with opacity | `impls/eagle/.../summaryConstants.ts:2–4`, `impls/eagle/.../ExecutionFlowChart.tsx:374`, `impls/platform/.../transformData.tsx:153` | Consumers reach past Tailwind to read tokens directly. |

**`distillery`** — independent legacy-style variables (not Cognition's legacy set, but the same naming pattern):

| Variable | File | Line |
|---|---|---|
| `--primary-color: #e20074` (T-Mobile magenta), `--secondary-color`, `--light-color`, `--dark-color`, `--border-color`, `--success-color`, `--error-color`, `--background-color` | `impls/tower/tower/evaluation/web/static/styles.css` | 2–9 |

These are inside a Flask eval dashboard — not React, not Cognition-aware, but worth knowing about because the file name pattern (`--primary-color`) is one rename away from colliding with legacy Cognition migrations.

**`distillery-platform`** — none.

---

## 4. Violations Summary

| Violation type | `fe-distillery` | `distillery` | `distillery-platform` |
|---|---:|---:|---:|
| Hardcoded colors (hex / rgb / hsl) | **344** | 184 | 0 |
| Raw Tailwind color utilities | **2,061** | 0 | 0 |
| `dark:` Tailwind classes | **26** | 0 | 0 |
| Direct `@radix-ui/*` imports outside `components/ui/` | 4 | 0 | 0 |
| Spacing (off-4px-scale inline px) | 15+ | 4+ | 0 |
| Typography (non-Lato / non-Roboto-Mono) | 13 distinct declarations | 7 distinct declarations | 0 |
| Legacy Cognition variables (`--primary`, `--background`, etc.) | 50+ definitions/usages across 3 files | 0 (uses a different legacy family) | 0 |

**Notable per-category callouts:**

- **Hardcoded colors in `fe-distillery`** — concentrated in `impls/eagle/legacySrc/`, `impls/apprentice/`, `impls/pennycai/`, `impls/eagle/EaglePlatform.tsx:738` (a multi-color status palette baked into one line), and `tailwind.config.js:45–47` (three hex values in the Tailwind config itself).
- **Raw Tailwind utilities — inside the primitives.** `components/ui/badge.tsx` has 30+ raw color variants (`bg-gray-700`, `bg-orange-600`, `bg-amber-600`, `bg-red-100`, `bg-green-100`, …) and `components/ui/toast.tsx` uses `group-[.destructive]:text-red-300`. Fixing callers is wasted effort until the primitives stop emitting raw classes.
- **Radix violations (`fe-distillery`):**
  - `@radix-ui/react-collapsible` — `impls/platform/components/Traces/components/SpanCardToggle.tsx`, `impls/platform/components/Traces/SpanCard/SpanCard.tsx`
  - `@radix-ui/react-tabs` — `impls/platform/components/OutlinedTabs/OutlinedTabs.tsx`
  - `@radix-ui/react-context-menu` — `impls/eagle/platformComponents/GenCreate/shared/ActionCard.tsx`
- **Typography** — `fe-distillery` declares Lato (`components/ui/base.css:7–12`, `tailwind.config.js:17`) and Roboto Mono (`tailwind.config.js:18`), **but the `:root` body font is Inter** (`components/ui/base.css:26`). Lato is loaded and never actually applied as the base. Six parallel MUI theme.ts files also use Inter. `AlliancePlatt-Bold` is registered as a Tailwind font family (`tailwind.config.js:16`) and used as a `monospace` fallback in demo files. Other font violations: Fira Code (penny SQLCard, genedit DiffText), Roboto (coffey CallTimeline.css), Consolas/Monaco (prism-scoped-theme.css), Arial (tower EmailPreview email HTML).
- **Spacing** — recurring `margin: '6px 0'` in three `ReactMarkdownOverrides.tsx` files (penny + coffey), `width: '500px'` in `impls/genedit/.../LoginForm.tsx`, `height: '18px'` in `impls/coffey/.../DrawerHyperlink.tsx`. None are catastrophic; many appear to be one engineer's habit across files.
- **`distillery` hardcoded colors** — the customer-relevant one is `#e20074` (T-Mobile magenta) in the tower eval dashboard. The Chrome extension demo also uses a `#667eea → #764ba2` purple gradient that **does not match** Cognition's `#5D4EE7` — if this extension is shown to customers as part of a demo, it presents a different brand purple.

---

## 5. Component Inventory

### `fe-distillery/components/ui/` (shadcn primitives — 52 components)

`accordion`, `alert-dialog`, `alert`, `aspect-ratio`, `avatar`, `badge`, `breadcrumb`, `button-group`, `button`, `calendar`, `card`, `carousel`, `chart`, `checkbox`, `collapsible`, `combobox`, `command`, `context-menu`, `dialog`, `drawer`, `dropdown-menu`, `dynamic-textarea`, `empty-state`, `expanding-textarea`, `form`, `hover-card`, `input-otp`, `input`, `label`, `menubar`, `navigation-menu`, `pagination`, `popover`, `progress`, `radio-group`, `resizable`, `scroll-area`, `select`, `separator`, `sheet`, `sidebar`, `skeleton`, `slider`, `sonner`, `switch`, `table`, `tabs`, `textarea`, `toast`, `toaster`, `toggle-group`, `toggle`, `tooltip`.

Plus Distyl wrappers: `distyl/centered-loading`, `distyl/collapsible-card`, `distyl/copy-content`, `distyl/expandable-text`, `distyl/index-navigator`, `distyl/label-with-info/`, `distyl/multi-select-dropdown`, `distyl/search-input/`, `distyl/status-alert/`, `distyl/warning-banner/`.

And: `shadcn-io/tags/index.tsx` (third-party tags primitive — note no first-class `Tag` in the canonical set).

### `fe-distillery` shared / legacy

No `components/shared/` directory exists. The closest equivalents:

- `components/src/` — non-UI providers and contexts: `EnvironmentBadge`, `Chat/`, `Feature/`, `AgentRunnerShellProvider/`, `Auth0InstanceProvider/`, `MsalInstanceProvider/`, `OktaAuthInstanceProvider/`, `MicrofrontendPropsContext/`, `ToolkitContextProviders/`, `useAuth/`, `useAuthStore/`, `utils/`.
- `components/legacy/` — MUI-era components, parallel system: `AlertSnackbar`, `AvatarMenu`, `ButtonCard`, `CoffeyNavigation`, `CompactPageHeading`, `ContainedIconButton`, `FeedbackButtons`, `InputLabel`, `MarkdownBlock`, `PageHeading`, `SecondaryNavigation`, `SimpleModal`, `StatCard`, `TableEmptyState`, `theme/`, `ThreadList`, `UpperNavBar`, `UserInputField`.

### Duplicates / divergences inside `fe-distillery`

1. **Two token systems coexist** — `components/ui/base.css` (canonical legacy shadcn) AND `impls/demos/App.css` (an independent purple-themed shadcn copy with its own `--primary`/`--background`/`--radius`/`.dark` block). Both are loaded; both fight for the same variables.
2. **Pill/tag patterns spread across four mechanisms** — raw `<span>` with `rounded-full` (e.g. `impls/spear/ExecutionSelector.tsx`), `ActionPill` wrapping `<Button>` (`impls/tower`), `Badge` variants, and `shadcn-io/tags`. **No single Tag/Chip primitive.**
3. **Six parallel MUI theme.ts files** — `components/legacy/theme/theme.ts`, `impls/genedit/src/app/theme/theme.ts`, `impls/tower/src/app/theme/theme.ts`, `impls/penny/src/app/theme/theme.ts`, `impls/eagle/legacySrc/app/theme/theme.ts`, `impls/coffey/src/app/theme/theme.ts`. Each defines its own palette/typography in parallel to shadcn tokens. MUI is effectively a second design system running alongside Cognition.
4. **Multiple `ReactMarkdownOverrides.tsx`** — `impls/penny`, `impls/coffey` re-implement the same markdown styling with inline px styles. Classic copy-paste divergence.

### Local components in `distillery` to reconcile

None of design-system value. The CSS is bootstrap-flavored styling for a Chrome extension and a Flask dashboard. There is no local React component code to lift back into `fe-distillery`.

---

## 6. Component Semantic Violations

**`fe-distillery` import counts:**

| Component | Imports |
|---|---:|
| `Button` | 489 |
| `Badge` | 121 |
| `Chip` | 9 |
| `Tag` | **0** |

**Tag adoption: 0%.** There is no `Tag` primitive — the third-party `shadcn-io/tags` exists but is not imported under that name. The work needed before Cognition Tag semantics can be enforced is to first build/promote a canonical `Tag` component.

**Button-as-label misuse (suspected):**

1. `impls/tower/src/app/components/Pages/Agent/ActionPill.tsx:9` — `<Button variant='outline' size='sm' className='rounded-full'>` used as a decorative pill called `ActionPill`. Should be a Tag.
2. `impls/spear/ExecutionSelector.tsx:129` — pill-shaped `<span>` with `rounded-full bg-[#f7f4c8]` used as status label. Should be a Badge.
3. `components/ui/badge.tsx:8–185` — the Badge primitive itself bakes in 30+ raw Tailwind palette utilities for color variants instead of mapping to semantic tokens. This is the upstream of Badge misuse — every Badge consumer inherits the wrong palette.

`distillery` and `distillery-platform`: no React components, no semantic violations.

---

## 7. Drift Map

**Inside `fe-distillery`** (the only repo with real drift):

- `impls/demos/App.css` defines a **second, divergent token block** — purple-themed, separate `--primary`/`--background`/`--radius` and its own `.dark` selector. This is a fork-within-the-repo and needs to be reconciled or deleted before Cognition v1.2 lands.
- **MUI vs shadcn**: `components/legacy/theme/` and `impls/{penny,tower,coffey,eagle,genedit}/theme/` run a Material-UI-based palette+typography stack in parallel to shadcn. Inter as base font, separate color palettes, separate component overrides. This is the largest invisible drift surface.
- **Eagle's `legacySrc/`** is the worst single offender — multiple `CaseReview` files (`CaseHeader.tsx`, `CaseBody.tsx`, `ToolResultsBody.tsx`, `index.tsx`) carry hardcoded hex literals (`#FAFAF9`, `#6366f1`, `#DFDCF8`, `#f3f2f1`, `#ffffff`) and a parallel theme file (`impls/eagle/legacySrc/app/theme/theme.ts:22` has `#5D4EE7` hardcoded). It's named "legacy"; presumably the plan is to retire it — but it currently contributes a large share of the violation totals.
- **`tailwind.config.js:45–47`** has three hardcoded hex literals (`#cde4f5`, `#3d76a0`, `#205c8d`) directly in `theme.extend.colors`. These are unnamed brand colors injected at config level — they should be tokens.
- **`shadcn-io/tags`** is a third-party tag primitive sitting inside `components/ui/` — it's not authored under Distyl's design-system conventions and not exported as the canonical `Tag`. Either promote it to `Tag` or replace it.

**Inside `distillery`** (not really fe-distillery drift, but useful to know):

- T-Mobile magenta `#e20074` is hardcoded in the tower eval dashboard CSS. If that dashboard is ever shown to a non-T-Mobile customer, the brand colors will be wrong.
- The Chrome-extension demo uses a different brand purple (`#667eea → #764ba2` gradient) than Cognition's `#5D4EE7`.

**Inside `distillery-platform`:** no drift. No FE. Safe.

**Invented locally that should be shared:** nothing reusable was invented in `distillery` — it's all standalone tooling. The big "invented locally" surface is *inside* `fe-distillery`: `ActionPill`, `ReactMarkdownOverrides`, multiple Markdown blocks, and the MUI theme files duplicated per impl. These belong (or belonged) in shared primitives.

---

## 8. Debt Priority

Ranked by **rebrand blocker → reduction in token surface area → developer ergonomics**. Effort is engineer-weeks of focused work.

| # | Item | Repo | Effort | Blocks rebrand? |
|---|---|---|---|---|
| 1 | Switch dark mode from Tailwind `.dark` class strategy to `[data-theme="dark"]` on `<html>` (config + `base.css` selector + theme provider). | `fe-distillery` | **S** (1–2 days) | **Blocks** |
| 2 | Introduce the full Cognition v1.2 token set in `components/ui/base.css` under `:root` and `[data-theme="dark"]`. Keep legacy `--primary`/etc. as aliases that point at the new tokens during the migration window. | `fe-distillery` | **M** (1 week) | **Blocks** |
| 3 | Update `tailwind.config.js` to expose Cognition tokens as semantic Tailwind colors (`bg-background-primary`, `text-text-subtle`, `border-border-default`, etc.). | `fe-distillery` | **S** (2–3 days) | **Blocks** |
| 4 | Delete or merge `impls/demos/App.css`'s duplicate token block. There can only be one source. | `fe-distillery` | **S** (1 day) | **Blocks** |
| 5 | Rewrite `components/ui/badge.tsx` and `components/ui/toast.tsx` to use semantic tokens instead of raw Tailwind palette utilities — fixing the primitives propagates to all 121 Badge consumers. | `fe-distillery` | **M** (3–5 days) | **Blocks** (silently breaks dark mode) |
| 6 | Remove all 26 `dark:` Tailwind classes from impl code — they should be unreachable once tokens carry the dark values. | `fe-distillery` | **M** (3–5 days) | **Blocks** |
| 7 | Introduce a canonical `Tag` primitive (promote `shadcn-io/tags` or author new). Migrate `ActionPill` and the `<span>`+`rounded-full` patterns to it. | `fe-distillery` | **M** (1 week) | Doesn't block |
| 8 | Replace 2,061 raw Tailwind palette utilities (`text-gray-*`, `bg-red-*`, etc.) across impl code with semantic tokens. Codemod-able. | `fe-distillery` | **L** (2–3 weeks) | Doesn't block (but undermines tokens) |
| 9 | Replace 344 hardcoded hex literals with token references. Concentrated in `impls/eagle/legacySrc/`, `impls/apprentice/`, `impls/pennycai/`. | `fe-distillery` | **L** (2 weeks) | Doesn't block |
| 10 | Move 4 direct `@radix-ui/*` imports onto shadcn wrappers. | `fe-distillery` | **S** (1 day) | Doesn't block |
| 11 | Make Lato the actual `:root` body font in `components/ui/base.css:26` (currently Inter). | `fe-distillery` | **S** (hours) | Doesn't block (but brand-typography is silently wrong today) |
| 12 | Decide the fate of the six MUI theme.ts files. Either retire MUI from `impls/{penny,tower,coffey,eagle,genedit}` and `components/legacy/`, or expose Cognition tokens to MUI's theme too. | `fe-distillery` | **L** (multi-quarter) | Doesn't block, but is the largest invisible drift surface |
| 13 | Replace hex literals and brand colors in `impls/tower/.../web/static/styles.css` (T-Mobile magenta) and `demos/peer/chrome-extension/*.css`. | `distillery` | **S** (1 day) | Doesn't block (isolated tooling) |
| 14 | Standardize spacing in `impls/penny` and `impls/coffey` `ReactMarkdownOverrides.tsx` files (`margin: '6px 0'` and friends). | `fe-distillery` | **S** (hours) | Doesn't block |

**Recommended order:** 1 → 4 → 2 → 3 → 5 → 6 ships a working Cognition v1.2 token system with correct dark mode. The rest is cleanup that can happen on a rolling basis after rebrand lands.

---

## 9. Rebrand Readiness

| Repo | Ready? | Blockers |
|---|---|---|
| `fe-distillery` | **No** | 1. No Cognition tokens exist (items #2, #3, #4 in §8). 2. Dark mode uses wrong implementation strategy (#1). 3. Shadcn primitives `badge.tsx` and `toast.tsx` bypass the token system themselves (#5). 4. 26 `dark:` Tailwind classes in impl code will silently break under `[data-theme="dark"]` (#6). |
| `distillery` | **N/A** | Not a React FE consumer of `fe-distillery`. Has its own brand-purple-divergent CSS in two isolated places, but those aren't on the Cognition path. |
| `distillery-platform` | **Yes** (vacuously) | No FE surface. |

**Minimum work before a brand refresh can land correctly** (in `fe-distillery`):

1. Land items **#1–#6** from §8 in that order. Estimated **3–4 engineer-weeks** if done focused, one engineer.
2. Specifically: dark-mode strategy flip + canonical token definition + Tailwind config rewire + token-block dedupe + primitive rewrite (`badge`, `toast`) + dark-class purge.
3. After that, swapping the actual brand color values (`#5D4EE7` → whatever the refresh defines) is a **single-CSS-file change** in `:root` / `[data-theme="dark"]`. The whole refactor is about earning that property.

**Risk surface to flag:**

- The six MUI theme.ts files (#12) will *not* pick up new Cognition values automatically. If any user-visible surfaces still render through MUI when the brand swaps, they will look wrong. **Inventory which impl pages still render via MUI before declaring the refresh "done."**
- The 2,061 raw Tailwind palette utilities (#8) and 344 hardcoded hex literals (#9) will also not pick up new values. Most of these are in `impls/eagle/legacySrc/` and similar legacy paths — if those are user-visible, they need to be in scope of the rebrand.
- `impls/demos/App.css` (#4) currently overrides `base.css` for demos. If demos are part of any external-facing surface, the brand refresh will diverge there until merged.

---

*Audit run: 2026-06-04 · Three-subagent parallel sweep · Raw JSON in `audit-output/agent-{1,2,3}-*.json`*
