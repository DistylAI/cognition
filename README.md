# Cognition: Distyl's design foundation.

Cognition is Distyl's Product Experience Platform. It captures the reusable decisions that define how every product surface looks, behaves, and evolves.
Built with Next.js (App Router) and Tailwind CSS v4. The site dogfoods the Cognition token system itself: every surface is styled with semantic tokens, and dark mode is driven entirely by `[data-theme="dark"]` on `<html>`. No `dark:` classes anywhere.

## Dark mode as compliance test

Every surface on the docs site uses Cognition semantic tokens exclusively. When you toggle dark mode, the token layer remaps automatically. If any element fails to adapt — wrong background, hardcoded color, broken contrast — it is a token violation, not a dark mode bug. The toggle is a live audit tool.

If it reads correctly in dark mode, the system is working. If it doesn't, something bypassed the tokens.

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
cp .env.example .env.local   # add ANTHROPIC_API_KEY for Conversational UI
npm run dev                  # http://localhost:3000
npm run build                # production build
```

## Deploy

Deployed on Vercel from `tonydistyl/design-dot-distyl`. Pushes to main ship to
production; pull requests get preview URLs.

Public url: https://cognition.distyl.net/

---

Cognition v1.2 · June 2026 · Questions? [Ask Tony Yates](https://distylai.slack.com/team/U07KY4SEFH7) [#research-and-design](https://distylai.slack.com/archives/C0A22RR2N6P)
