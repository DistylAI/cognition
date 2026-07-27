---
date: 2026-07-24
type: patch
category: docs
component: Alert
summary: "Corrected stale date reference in Alert icon comment"
rationale: "The inline comment in alert.tsx pointed to 'changelog 2026-07-21' but its entry is dated 2026-07-22; the review fix from #27 was never committed, so the two shipped out of sync on main. Updated the comment to 2026-07-22 — a case of the same cross-reference drift that motivates grepping every copy of a shared value before calling a correction done."
pr: "#28"
version: v1.4.0
---
