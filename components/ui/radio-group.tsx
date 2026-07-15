"use client";

import { Label } from "@radix-ui/react-label";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/radio-group.tsx (Radix RadioGroup +
// Item + a labeled-option helper). v4 migration: plain function components +
// data-slot, shadow-xs, and the v4 focus ring (matching Checkbox). The raw
// primary / ring / muted colors stay mapped to Cognition tokens -- the control
// uses the brand primary (interactive selection) -- so it themes via
// [data-theme="dark"] with no dark: classes.
function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-2", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "aspect-square size-4 shrink-0 rounded-full border border-border-primary text-text-primary shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-border-primary focus-visible:ring-border-primary/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-border-danger aria-invalid:ring-border-danger/20",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="size-3.5 fill-background-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

interface RadioOptionProps
  extends React.ComponentProps<typeof RadioGroupItem> {
  label: string;
  description?: string;
}

function RadioGroupLabeledOption({
  label,
  description,
  className,
  id: idProp,
  ...props
}: RadioOptionProps) {
  const generatedId = React.useId();
  const id = idProp ?? generatedId;

  return (
    <div
      className={cn(
        "grid grid-cols-[fit-content(0)_1fr] gap-x-2 gap-y-1.5",
        className,
      )}
    >
      <RadioGroupItem {...props} id={id} />
      <div className="flex items-center">
        <Label htmlFor={id} className="text-label leading-none">
          {label}
        </Label>
      </div>
      <div />
      <p className="text-description">{description}</p>
    </div>
  );
}

export { RadioGroup, RadioGroupItem, RadioGroupLabeledOption };
