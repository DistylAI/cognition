"use client";

import { Label } from "@radix-ui/react-label";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/radio-group.tsx (Radix RadioGroup +
// Item + a labeled-option helper) on Radix. The raw primary / ring / muted
// colors are mapped to Cognition tokens — the control uses the brand primary
// (it's an interactive selection) — so it themes via [data-theme="dark"] with
// no dark: classes.
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square size-4 rounded-full border border-border-primary text-text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-border-primary disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="size-3.5 fill-background-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

interface RadioOptionProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupItem> {
  label: string;
  description?: string;
}

const RadioGroupLabeledOption = React.forwardRef<
  React.ElementRef<typeof RadioGroupItem>,
  RadioOptionProps
>(({ label, description, className, ...props }, ref) => {
  const generatedId = React.useId();
  const id = props.id ?? generatedId;

  return (
    <div
      className={cn(
        "grid grid-cols-[fit-content(0)_1fr] gap-x-2 gap-y-1.5",
        className,
      )}
    >
      <RadioGroupItem ref={ref} {...props} id={id} />
      <div className="flex items-center">
        <Label htmlFor={id} className="text-sm font-medium leading-none">
          {label}
        </Label>
      </div>
      <div />
      <p className="text-sm text-text-subtle">{description}</p>
    </div>
  );
});
RadioGroupLabeledOption.displayName = "RadioGroupLabeledOption";

export { RadioGroup, RadioGroupItem, RadioGroupLabeledOption };
