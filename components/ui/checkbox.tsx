"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/checkbox.tsx (Radix Checkbox, check +
// indeterminate indicators). v4 migration: plain function component + data-slot,
// shadow-xs, the v4 focus ring (ring-[3px] + border), aria-invalid handling, and
// a checked border. Raw primary / ring utilities stay mapped to Cognition v1.2
// tokens, so it themes via [data-theme="dark"] with no dark: classes.
function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer size-4 shrink-0 rounded-sm border border-border-primary shadow-xs transition-shadow outline-none focus-visible:border-border-primary focus-visible:ring-border-primary/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-border-danger aria-invalid:ring-border-danger/20 data-[state=checked]:border-border-primary data-[state=checked]:bg-background-primary data-[state=checked]:text-text-inverse data-[state=indeterminate]:border-border-primary data-[state=indeterminate]:bg-background-primary data-[state=indeterminate]:text-text-inverse",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn("flex items-center justify-center text-current transition-none")}
      >
        {props.checked === "indeterminate" ? (
          <Minus className="size-3.5 pb-0.5" />
        ) : (
          <Check className="size-3.5" />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
Checkbox.displayName = "Checkbox";

export { Checkbox };
