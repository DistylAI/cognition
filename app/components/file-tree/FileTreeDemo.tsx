"use client";

import { useState, type ReactNode } from "react";
import { ChevronRight, File, Folder, SquareTerminal } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export type FileNode = {
  /** Display label for the node. */
  name: string;
  /** Node type. Picks the icon and the row height. */
  kind: "folder" | "file" | "route";
  /** Optional right-aligned status marker, e.g. M, U, or a count. */
  badge?: string | number;
  /** Whether a folder starts open. */
  expanded?: boolean;
  /** Child nodes. Folders only. */
  children?: FileNode[];
};

// Placeholder project shape for documentation only -- not a real file layout.
const changes: FileNode[] = [
  { name: "README.md", kind: "file", badge: "M" },
  { name: "api/hello/route.ts", kind: "file", badge: "U" },
  { name: "app/layout.tsx", kind: "file", badge: "M" },
];

const files: FileNode[] = [
  {
    name: "app",
    kind: "folder",
    expanded: true,
    children: [
      {
        name: "api",
        kind: "folder",
        expanded: true,
        children: [
          {
            name: "hello",
            kind: "folder",
            expanded: true,
            children: [{ name: "route.ts", kind: "route" }],
          },
        ],
      },
      { name: "page.tsx", kind: "file" },
      { name: "layout.tsx", kind: "file" },
      { name: "blog", kind: "folder", children: [] },
    ],
  },
  {
    name: "components",
    kind: "folder",
    expanded: true,
    children: [
      {
        name: "ui",
        kind: "folder",
        expanded: true,
        children: [
          { name: "button.tsx", kind: "file" },
          { name: "card.tsx", kind: "file" },
        ],
      },
      { name: "header.tsx", kind: "file" },
      { name: "footer.tsx", kind: "file" },
    ],
  },
  { name: "lib", kind: "folder", children: [] },
  {
    name: "public",
    kind: "folder",
    expanded: true,
    children: [
      { name: "favicon.ico", kind: "file" },
      { name: "vercel.svg", kind: "file" },
    ],
  },
  { name: ".eslintrc.json", kind: "file" },
  { name: ".gitignore", kind: "file" },
  { name: "next.config.js", kind: "file" },
  { name: "README.md", kind: "file" },
];

function seedOpen(
  nodes: FileNode[],
  parent = "",
  acc: Record<string, boolean> = {},
): Record<string, boolean> {
  for (const node of nodes) {
    const path = parent ? `${parent}/${node.name}` : node.name;
    if (node.kind === "folder") {
      if (node.expanded) acc[path] = true;
      if (node.children) seedOpen(node.children, path, acc);
    }
  }
  return acc;
}

function StatusBadge({ children }: { children: ReactNode }) {
  return (
    <span className="ml-auto shrink-0 text-xs text-text-subtle">{children}</span>
  );
}

export function FileTreeDemo({ showIcons = true }: { showIcons?: boolean }) {
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    seedOpen(files),
  );
  const [selected, setSelected] = useState<string | null>(null);
  const toggle = (path: string) =>
    setOpen((prev) => ({ ...prev, [path]: !prev[path] }));

  const fileIcon = (kind: FileNode["kind"]) =>
    kind === "route" ? SquareTerminal : File;

  function renderFolder(node: FileNode, path: string): ReactNode {
    const isOpen = open[path] ?? false;
    const kids = node.children ?? [];
    return (
      <SidebarMenuItem key={path}>
        <SidebarMenuButton
          className="h-8"
          aria-expanded={isOpen}
          onClick={() => toggle(path)}
        >
          {showIcons && (
            <ChevronRight
              className={cn(
                "size-4 text-text-subtle transition-transform",
                isOpen && "rotate-90",
              )}
            />
          )}
          {showIcons && <Folder className="size-4 text-text-subtle" />}
          <span className="min-w-0 flex-1 truncate text-left">{node.name}</span>
        </SidebarMenuButton>
        {isOpen && kids.length > 0 && (
          <SidebarMenuSub>
            {kids.map((child) => renderEntry(child, `${path}/${child.name}`))}
          </SidebarMenuSub>
        )}
      </SidebarMenuItem>
    );
  }

  function renderSubFile(node: FileNode, path: string): ReactNode {
    const Icon = fileIcon(node.kind);
    return (
      <SidebarMenuSubItem key={path}>
        <SidebarMenuSubButton
          isActive={selected === path}
          onClick={() => setSelected(path)}
        >
          {showIcons && <Icon className="size-4 text-text-subtle" />}
          <span className="min-w-0 flex-1 truncate">{node.name}</span>
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    );
  }

  function renderEntry(node: FileNode, path: string): ReactNode {
    return node.kind === "folder"
      ? renderFolder(node, path)
      : renderSubFile(node, path);
  }

  function renderTop(node: FileNode): ReactNode {
    if (node.kind === "folder") return renderFolder(node, node.name);
    const Icon = fileIcon(node.kind);
    return (
      <SidebarMenuItem key={node.name}>
        <SidebarMenuButton
          className="h-8"
          isActive={selected === node.name}
          onClick={() => setSelected(node.name)}
        >
          {showIcons && <Icon className="size-4 text-text-subtle" />}
          <span className="min-w-0 flex-1 truncate text-left">{node.name}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  function renderChange(node: FileNode): ReactNode {
    const path = `changes/${node.name}`;
    return (
      <SidebarMenuItem key={path}>
        <SidebarMenuButton
          className="h-8"
          isActive={selected === path}
          onClick={() => setSelected(path)}
        >
          {showIcons && <File className="size-4 text-text-subtle" />}
          <span className="min-w-0 flex-1 truncate text-left">{node.name}</span>
          {node.badge != null && <StatusBadge>{node.badge}</StatusBadge>}
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <div className="w-64 shrink-0 rounded-lg border border-border-default bg-background-subtle p-2">
      <div className="flex flex-col gap-4">
        <SidebarGroup>
          <SidebarGroupLabel>Changes</SidebarGroupLabel>
          <SidebarMenu>{changes.map(renderChange)}</SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Files</SidebarGroupLabel>
          <SidebarMenu>{files.map(renderTop)}</SidebarMenu>
        </SidebarGroup>
      </div>
    </div>
  );
}
