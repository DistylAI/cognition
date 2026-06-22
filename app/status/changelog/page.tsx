import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Cognition version history: what shipped, what changed, and where the system is going.",
};

type ReleaseStatus = "current" | "stable" | "foundation";

type Release = {
  version: string;
  date: string;
  status: ReleaseStatus;
  summary: string;
  changes: string[];
};

const STATUS_BADGE: Record<
  ReleaseStatus,
  { label: string; color?: "warning"; variant: "secondary" }
> = {
  current: { label: "Current", variant: "secondary" },
  stable: { label: "Stable", variant: "secondary" },
  foundation: { label: "Foundation", variant: "secondary" },
};

const releases: Release[] = [
  {
    version: "1.3",
    date: "June 2026",
    status: "current",
    summary:
      "Full component coverage. Codebase audit complete. System and Language distinction established. Skill distributed via ai-tools.",
    changes: [
      "60+ components documented and live: all shadcn primitives plus Conversational UI, Graph Canvas Node, Charts, Field, Item, Spinner, and more",
      "Full sitewide compliance pass: em dashes removed from prose across all 19 component pages, Radix references removed from user-facing copy, ChatShell inline style replaced with utility class",
      "Cognition skill rewritten as an agent briefing: distributed via ai-tools for use in Claude Code, Cursor, Copilot, and Windsurf",
      "System vs Language distinction established: Cognition is the token and component infrastructure; the Language (Pro Blocks, motion, app shells, opinionated patterns) builds on top",
      "Roadmap expanded to 10 epics: Motion Foundations, ApiTable component, API accuracy pass, and Docs site copy sweep added",
      "Governance model defined: token changes versioned, all proposals go through design before landing",
      "New FE architect onboarded: system greenlit as platform infrastructure",
    ],
  },
  {
    version: "1.2",
    date: "Early June 2026",
    status: "stable",
    summary:
      "Conversational UI and Graph Canvas Node shipped. All components verified on production. Token drift guard added.",
    changes: [
      "Conversational UI: ChatShell, MessageBubble, ChatInput, LoadingBubble, EmptyState, Distyl-specific primitives, not standard shadcn",
      "Graph Canvas Node: domain-color system, approved patterns documented (colored header band, sentence-case label)",
      "Token drift guard: scripts/check-tokens.mjs gates production deploys on color token violations",
      "Sessions 1 through 7 complete and committed",
      "All component pages verified on production at design.distyl.ai",
      "Spinner animation rule established: rotate only, no stroke-dashoffset",
      "react-day-picker v9 adopted (v8 deprecated)",
      "Navigation Menu and Toast variant card exceptions documented",
    ],
  },
  {
    version: "1.1",
    date: "May 2026",
    status: "stable",
    summary:
      "Core component library complete. Dark mode infrastructure finalized. Docs site live on Vercel.",
    changes: [
      'Dark mode implementation finalized: [data-theme="dark"] on <html> only, zero dark: classes in any component',
      "Core shadcn primitives documented: Button, Badge, Alert, Input, Tabs, Select, Checkbox, Switch, Textarea, Label, Tooltip, Dialog, Drawer, Sheet, Popover, Dropdown Menu, Command, Combobox, and more",
      "Charts documented: Bar, Line, Area, Pie, Radar, Radial, Tooltip, all using Recharts via shared chart.tsx wrapper",
      "Data Table, Sidebar, Calendar, Date Picker shipped",
      "Foundations pages live: Tokens, Typography, Icons, Guidelines",
      "Codebase Audit page published with full fe-distillery violation inventory",
      "Anthropic API key scoped to Vercel production and preview",
    ],
  },
  {
    version: "1.0",
    date: "April 2026",
    status: "foundation",
    summary:
      "Foundation. Built from scratch in two days: token architecture, component library, and docs site scaffold.",
    changes: [
      "Three-layer token architecture: primitives, semantic, and component tokens, all in globals.css inside @theme {}",
      "Tailwind v4 adopted: no tailwind.config.js, all tokens as CSS custom properties",
      "shadcn/ui as component foundation, Radix UI primitives via components/ui/ wrappers",
      "Brand color established: #5D4EE7 (purple)",
      "Geist (UI) and Geist Mono (code) as system fonts",
      "CLAUDE.md and .cursorrules created for AI tool context",
      "Docs site scaffolded: Next.js App Router, Sidebar, nav.ts, page template established",
      "Prototype migrated from Claude Chat artifact to multi-file local project: 18 files, git initialized",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Status</p>
      <h1 className="text-h1 text-text-default">Changelog</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        Cognition version history. What shipped, what changed, and what the
        system has become.
      </p>

      <div className="mt-4 rounded-lg border border-border-default bg-background-accent p-4">
        <p className="text-small text-text-default">
          Cognition is currently in development. Goal is production
          infrastructure for Distyl AI, distributed as a versioned skill across
          the team&apos;s AI toolchain.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {releases.map((release) => {
          const badge = STATUS_BADGE[release.status];
          return (
            <Card key={release.version}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium uppercase tracking-wide text-text-subtle">
                      v{release.version} · {release.date}
                    </span>
                    <CardTitle className="text-lg">
                      Cognition v{release.version}
                    </CardTitle>
                  </div>
                  <Badge color={badge.color} variant={badge.variant}>
                    {badge.label}
                  </Badge>
                </div>
                <CardDescription>{release.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {release.changes.map((change, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-small text-text-default"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-text-subtle" />
                      {change}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <p className="mt-8 text-small text-text-subtle">
        Cognition v1.3 · June 2026 · Questions? Ask Tony Yates
        #research-and-design
      </p>
    </div>
  );
}
