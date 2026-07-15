"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/tabs.tsx (Tabs / TabsList /
// TabsTrigger / TabsContent, variant axis default|underline|secondary). v4
// migration: plain function components + data-slot. Every color is a Cognition
// v1.2 token, so the tabs theme via [data-theme="dark"] with no dark: classes.
//   secondary = segmented pill
//   underline = bottom-border line

function Tabs(props: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot="tabs" {...props} />;
}

const tabsListVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-text-subtle transition-colors",
  {
    variants: {
      variant: {
        default: "gap-1",
        underline: "gap-1",
        secondary: "h-9 w-fit gap-1 bg-background-secondary p-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface TabsListProps
  extends React.ComponentProps<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

function TabsList({ className, variant, ...props }: TabsListProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-default disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "rounded-md hover:bg-background-secondary hover:text-text-default data-[state=active]:bg-background-secondary data-[state=active]:text-text-default",
        underline:
          "rounded-none border-b-2 border-transparent bg-transparent data-[state=active]:border-text-default data-[state=active]:bg-transparent data-[state=active]:text-text-default",
        secondary:
          "h-full flex-1 gap-1.5 rounded-md border border-transparent px-2 py-1 data-[state=active]:bg-background-default data-[state=active]:text-text-default data-[state=active]:shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface TabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

function TabsTrigger({ className, variant, ...props }: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-default",
        className,
      )}
      {...props}
    />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
