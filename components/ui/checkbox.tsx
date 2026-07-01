"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/checkbox.tsx (Radix Checkbox, check +
// indeterminate indicators). Raw border-primary / bg-primary /
// text-primary-foreground / ring-ring utilities are mapped to Cognition v1.2
// tokens, so it themes via [data-theme="dark"] with no dark: classes.
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer size-4 shrink-0 rounded-sm border border-border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-primary disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-background-primary data-[state=checked]:text-text-inverse data-[state=indeterminate]:bg-background-primary data-[state=indeterminate]:text-text-inverse",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      {props.checked === "indeterminate" ? (
        <Minus className="size-4 pb-0.5" />
      ) : (
        <Check className="size-4" />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
