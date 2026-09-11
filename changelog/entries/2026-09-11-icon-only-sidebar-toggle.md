---
date: 2026-09-11
type: patch
category: pattern
component: Sidebar
summary: "Document icon-only sidebar visibility controls and accessible integration requirements"
rationale: "MLR review prototype feedback showed that persistent Show/Hide labels and bordered button chrome competed with the title and asset; reuse the existing sidebar icon control with accessible naming, tooltips, and state instead."
pr: ""
---

Cognition guidance only. Documents reuse of `SidebarTrigger` and the existing
ghost icon `Button` for independently controlled panels. Includes the reasoning,
keyboard and focus behavior, state semantics, and the limits of icon-only labels.

No component API, token, or Toolkit UI implementation changes. The existing
Guidelines page renders this pattern from `content/cognition-spec.md`.
