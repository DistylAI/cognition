---
date: 2026-07-24
type: minor
category: docs
component: system
summary: "Added changelog version roll-up and release-notes page"
rationale: "Built the manual version-cut script (scripts/cut-changelog-version.mjs, dry-run by default), a filesystem reader (lib/changelog.ts), and rebuilt /status/changelog to render legacy v1.0-v1.3 hardcoded plus generated v1.4.0+ from changelog/versions/ with Current/Stable status computed from sort order; documented the versioning/cut lifecycle in CONVENTIONS.md and added version-format validation to check-changelog.mjs."
pr: "#31"
---
