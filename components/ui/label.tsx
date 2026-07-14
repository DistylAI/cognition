"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/label.tsx (Radix Label), extended per
// the Cognition spec with `required` (a danger-colored asterisk) and `disabled`
// (dims the label). v4 migration: plain function component + data-slot, and the
// v4 base recipe (flex/gap/select-none, group + peer disabled handling). Colors
// are Cognition tokens; no dark: classes.
const labelVariants = cva(
  "flex items-center gap-2 text-sm font-medium leading-none select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
);

interface LabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  required?: boolean;
  disabled?: boolean;
}

function Label({ className, required, disabled, children, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      data-disabled={disabled || undefined}
      className={cn(
        labelVariants(),
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
      {...props}
    >
      {children}
      {required && (
        <span aria-hidden className="ml-0.5 text-text-danger">
          *
        </span>
      )}
    </LabelPrimitive.Root>
  );
}
Label.displayName = "Label";

export { Label };
