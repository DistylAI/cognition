// Single source of truth for site navigation, shared by the desktop Sidebar
// and the mobile drawer menu so the two never drift.

export type NavSection = { id: string; label: string };
// An item is either a page link (href) or a collapsible group of child pages
// (children, no href of its own). sections are in-page anchors for a page.
export type NavItem = {
  href?: string;
  label: string;
  sections?: NavSection[];
  children?: NavItem[];
};
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
      { href: "/components/aspect-ratio", label: "Aspect Ratio" },
      { href: "/components/avatar", label: "Avatar" },
      { href: "/components/badge", label: "Badge" },
      { href: "/components/breadcrumb", label: "Breadcrumb" },
      { href: "/components/button", label: "Button" },
      { href: "/components/card", label: "Card" },
      { href: "/components/carousel", label: "Carousel" },
      {
        label: "Charts",
        children: [
          { href: "/components/area-chart", label: "Area Chart" },
          { href: "/components/bar-chart", label: "Bar Chart" },
          { href: "/components/chart-tooltip", label: "Chart Tooltip" },
          { href: "/components/line-chart", label: "Line Chart" },
          { href: "/components/pie-chart", label: "Pie Chart" },
          { href: "/components/radar-chart", label: "Radar Chart" },
          { href: "/components/radial-chart", label: "Radial Chart" },
        ],
      },
      { href: "/components/checkbox", label: "Checkbox" },
      { href: "/components/collapsible", label: "Collapsible" },
      { href: "/components/conversational-ui", label: "Conversational UI" },
      { href: "/components/data-table", label: "Data Table" },
      { href: "/components/dialog", label: "Dialog" },
      { href: "/components/drawer", label: "Drawer" },
      { href: "/components/dropdown-menu", label: "Dropdown Menu" },
      { href: "/components/empty-state", label: "Empty State" },
      { href: "/components/graph-canvas-node", label: "Graph Canvas Node" },
      { href: "/components/input", label: "Input" },
      { href: "/components/kbd", label: "Keyboard Input" },
      { href: "/components/pagination", label: "Pagination" },
      { href: "/components/popover", label: "Popover" },
      { href: "/components/progress", label: "Progress" },
      { href: "/components/select", label: "Select" },
      { href: "/components/sheet", label: "Sheet" },
      { href: "/components/sidebar", label: "Sidebar" },
      { href: "/components/skeleton", label: "Skeleton" },
      { href: "/components/slider", label: "Slider" },
      { href: "/components/spinner", label: "Spinner" },
      { href: "/components/switch", label: "Switch" },
      { href: "/components/tabs", label: "Tabs" },
      { href: "/components/tag", label: "Tag" },
      { href: "/components/textarea", label: "Textarea" },
      { href: "/components/toggle", label: "Toggle" },
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
          { id: "chart", label: "Chart" },
          { id: "radius", label: "Radius" },
          { id: "spacing", label: "Spacing" },
          { id: "typography", label: "Typography" },
        ],
      },
      {
        href: "/foundations/icons",
        label: "Icons",
        sections: [
          { id: "library", label: "Library" },
          { id: "sizing", label: "Sizing" },
          { id: "color", label: "Color" },
          { id: "usage", label: "Usage" },
          { id: "browse", label: "Browse" },
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
