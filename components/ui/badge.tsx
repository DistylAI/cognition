import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/badge.tsx exactly: variant/size/color
// axes, asChild, and the Badge + badgeVariants exports. The fix: the 16 raw
// Tailwind palette colors are dropped, and the semantic color set is mapped to
// Cognition v1.2 tokens — no raw palette utilities.
const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-md border font-medium focus:outline-none focus:ring-2 focus:ring-border-primary focus:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border-transparent",
        secondary: "border-transparent",
        outline: "",
      },
      size: {
        default: "px-2 py-0.5 text-xs",
        sm: "px-[5px] py-0.5 text-[10px] leading-none rounded-[5px] [&_svg]:size-2 gap-[3px]",
      },
      color: {
        default: "",
        primary: "",
        destructive: "",
        success: "",
        warning: "",
        info: "",
      },
    },
    compoundVariants: [
      // default — solid fill
      { variant: "default", color: "default", class: "bg-background-inverse text-text-inverse" },
      { variant: "default", color: "primary", class: "bg-background-primary text-text-inverse" },
      { variant: "default", color: "destructive", class: "bg-feedback-danger text-text-inverse" },
      { variant: "default", color: "success", class: "bg-feedback-success text-text-inverse" },
      { variant: "default", color: "warning", class: "bg-feedback-warning text-text-inverse" },
      { variant: "default", color: "info", class: "bg-feedback-info text-text-inverse" },
      // secondary — soft tint
      { variant: "secondary", color: "default", class: "bg-background-secondary text-text-default" },
      { variant: "secondary", color: "primary", class: "bg-background-accent text-text-primary" },
      { variant: "secondary", color: "destructive", class: "bg-background-danger text-text-danger" },
      { variant: "secondary", color: "success", class: "bg-background-success text-text-success" },
      { variant: "secondary", color: "warning", class: "bg-background-warning text-text-warning" },
      { variant: "secondary", color: "info", class: "bg-background-accent text-text-primary" },
      // outline — bordered
      { variant: "outline", color: "default", class: "border-border-default text-text-default" },
      { variant: "outline", color: "primary", class: "border-border-primary text-text-primary" },
      { variant: "outline", color: "destructive", class: "border-border-danger text-text-danger" },
      { variant: "outline", color: "success", class: "border-border-success text-text-success" },
      { variant: "outline", color: "warning", class: "border-border-default text-text-warning" },
      { variant: "outline", color: "info", class: "border-border-primary text-text-primary" },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      color: "default",
    },
  },
);

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({
  className,
  variant,
  size,
  color,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      className={cn(badgeVariants({ variant, size, color }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
