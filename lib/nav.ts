// Single source of truth for site navigation, shared by the desktop Sidebar
// and the mobile drawer menu so the two never drift.

export type NavSection = { id: string; label: string };
export type NavItem = { href: string; label: string; sections?: NavSection[] };
export type NavGroup = { section: string; items: NavItem[] };

export const nav: NavGroup[] = [
  {
    section: "Overview",
    items: [{ href: "/", label: "Introduction" }],
  },
  {
    section: "Components",
    items: [
      { href: "/components/accordion", label: "Accordion" },
      { href: "/components/alert", label: "Alert" },
      { href: "/components/avatar", label: "Avatar" },
      { href: "/components/badge", label: "Badge" },
      { href: "/components/breadcrumb", label: "Breadcrumb" },
      { href: "/components/button", label: "Button" },
      { href: "/components/card", label: "Card" },
      { href: "/components/checkbox", label: "Checkbox" },
      { href: "/components/conversational-ui", label: "Conversational UI" },
      { href: "/components/data-table", label: "Data Table" },
      { href: "/components/dialog", label: "Dialog" },
      { href: "/components/drawer", label: "Drawer" },
      { href: "/components/dropdown-menu", label: "Dropdown Menu" },
      { href: "/components/empty-state", label: "Empty State" },
      { href: "/components/graph-canvas-node", label: "Graph Canvas Node" },
      { href: "/components/input", label: "Input" },
      { href: "/components/kbd", label: "Keyboard Input" },
      { href: "/components/popover", label: "Popover" },
      { href: "/components/select", label: "Select" },
      { href: "/components/sidebar", label: "Sidebar" },
      { href: "/components/skeleton", label: "Skeleton" },
      { href: "/components/spinner", label: "Spinner" },
      { href: "/components/switch", label: "Switch" },
      { href: "/components/tabs", label: "Tabs" },
      { href: "/components/tag", label: "Tag" },
      { href: "/components/textarea", label: "Textarea" },
      { href: "/components/tooltip", label: "Tooltip" },
    ],
  },
  {
    section: "Foundations",
    items: [
      {
        href: "/tokens",
        label: "Tokens",
        sections: [
          { id: "background", label: "Backgrounds" },
          { id: "text", label: "Text" },
          { id: "border", label: "Borders" },
          { id: "feedback", label: "Feedback" },
          { id: "radius", label: "Radius" },
          { id: "spacing", label: "Spacing" },
          { id: "typography", label: "Typography" },
        ],
      },
      {
        href: "/guidelines",
        label: "Guidelines",
        sections: [
          { id: "component-semantics", label: "Component semantics" },
          { id: "full-specification", label: "Full specification" },
        ],
      },
    ],
  },
  {
    section: "Status",
    items: [
      { href: "/status/roadmap", label: "Roadmap" },
      {
        href: "/audit",
        label: "Codebase Audit",
        sections: [
          { id: "executive-summary", label: "Executive Summary" },
          { id: "dark-mode-status", label: "Dark Mode Status" },
          { id: "token-inventory", label: "Token Inventory" },
          { id: "violations-summary", label: "Violations Summary" },
          { id: "component-inventory", label: "Component Inventory" },
          { id: "component-semantic-violations", label: "Semantic Violations" },
          { id: "drift-map", label: "Drift Map" },
          { id: "debt-priority", label: "Debt Priority" },
          { id: "rebrand-readiness", label: "Rebrand Readiness" },
        ],
      },
    ],
  },
];
