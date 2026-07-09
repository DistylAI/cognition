"use client";

import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/toggle.tsx (Toggle + toggleVariants) on
// Radix. The raw muted / accent / ring / primary-50 colors are mapped to Cognition
// tokens -- the pressed (data-[state=on]) state uses the accent surface + primary
// text, matching fe-distillery's purple-tinted intent -- so it themes via
// [data-theme="dark"] with no dark: classes.
const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-background-secondary hover:text-text-default focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-primary disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-background-secondary data-[state=on]:text-text-default [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
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

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
