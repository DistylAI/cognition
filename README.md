# design.distyl

Documentation site for **Cognition** — the Distyl AI design system.

Built with Next.js (App Router) and Tailwind CSS v4. The site dogfoods the
Cognition token system itself: every surface is styled with semantic tokens, and
dark mode is driven entirely by `[data-theme="dark"]` on `<html>` — no `dark:`
classes anywhere.

## Contents

- **Introduction** (`/`) — overview and principles
- **Tokens** (`/tokens`) — live swatches for color, radius, spacing, typography
- **Guidelines** (`/guidelines`) — component semantics + the full Cognition spec
- **Codebase Audit** (`/audit`) — Cognition v1.2 audit of the Distyl repos

## Source content

| File | Source |
|------|--------|
| `content/design-system-audit.md` | `audit-output/design-system-audit.md` |
| `content/cognition-spec.md` | Cognition v1.2 rules document |
| `content/cognition-tokens.css` | Canonical token values |

`lib/tokens.ts` mirrors `cognition-tokens.css` as structured data so the Tokens
page renders directly from the spec.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy

Deployed on Vercel from `DistylAI/design-dot-distyl`. Pushes to the default
branch ship to production; pull requests get preview URLs.

---

Cognition v1.2 · Distyl AI · questions in #design
