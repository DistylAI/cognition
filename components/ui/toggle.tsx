"use client";

import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/toggle.tsx (Toggle + toggleVariants) on
// Radix. v4 migration: plain function component + data-slot, the v4 focus ring,
// and svg size escape-hatch. The raw muted / accent / ring / primary-50 colors
// stay mapped to Cognition tokens -- the pressed (data-[state=on]) state uses the
// secondary surface -- so it themes via [data-theme="dark"] with no dark: classes.
const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-[color,box-shadow] hover:bg-background-secondary hover:text-text-default outline-none focus-visible:border-border-primary focus-visible:ring-border-primary/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-border-danger aria-invalid:ring-border-danger/20 data-[state=on]:bg-background-secondary data-[state=on]:text-text-default [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-border-default bg-transparent hover:bg-background-secondary hover:text-text-default",
      },
      size: {
        default: "h-9 min-w-9 px-2",
        sm: "h-8 min-w-8 px-1.5",
        lg: "h-10 min-w-10 px-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
