import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// Single impl for both status and label chips (Cognition pass-2 merge). The
// `kind` axis splits the two jobs Badge used to conflate:
//   kind="status" (default) → colored semantic pill: variant × color matrix.
//   kind="label"            → neutral taxonomy chip (the old Tag look).
// Tag (./tag) is a thin wrapper that locks kind="label" and adds `removable`.
// Every color is a Cognition v1.2 token -- no raw palette utilities.
const badgeBase =
  "inline-flex items-center gap-1 rounded-md border font-medium focus:outline-none focus:ring-2 focus:ring-border-primary focus:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0";

// Shared size axis (used by both the status matrix and the neutral label style).
const badgeSize = cva("", {
  variants: {
    size: {
      default: "px-2 py-0.5 text-xs",
      sm: "px-1.5 py-0.5 text-xs leading-none rounded-sm [&_svg]:size-2 gap-1",
    },
  },
  defaultVariants: { size: "default" },
});

// The neutral label chip -- today's Tag look.
const badgeLabel = "border-border-default bg-background-secondary text-text-default";

// Status matrix (variant × color). Exported for parity with other cva consumers.
const badgeVariants = cva(badgeBase, {
  variants: {
    variant: {
      default: "border-transparent",
      secondary: "border-transparent",
      outline: "",
    },
    size: {
      default: "px-2 py-0.5 text-xs",
      sm: "px-1.5 py-0.5 text-xs leading-none rounded-sm [&_svg]:size-2 gap-1",
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
    // default -- solid fill
    { variant: "default", color: "default", class: "bg-background-inverse text-text-inverse" },
    { variant: "default", color: "primary", class: "bg-background-primary text-text-inverse" },
    { variant: "default", color: "destructive", class: "bg-feedback-danger text-text-inverse" },
    { variant: "default", color: "success", class: "bg-feedback-success text-text-inverse" },
    { variant: "default", color: "warning", class: "bg-feedback-warning text-text-inverse" },
    { variant: "default", color: "info", class: "bg-feedback-info text-text-inverse" },
    // secondary -- soft tint
    { variant: "secondary", color: "default", class: "bg-background-secondary text-text-default" },
    { variant: "secondary", color: "primary", class: "bg-background-accent text-text-primary" },
    { variant: "secondary", color: "destructive", class: "bg-background-danger text-text-danger" },
    { variant: "secondary", color: "success", class: "bg-background-success text-text-success" },
    { variant: "secondary", color: "warning", class: "bg-background-warning text-text-warning" },
    { variant: "secondary", color: "info", class: "bg-background-accent text-text-primary" },
    // outline -- bordered
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
});

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof badgeVariants> {
  kind?: "status" | "label";
  asChild?: boolean;
}

function Badge({
  className,
  kind = "status",
  variant,
  size,
  color,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "div";
  const classes =
    kind === "label"
      ? cn(badgeBase, badgeSize({ size }), badgeLabel)
      : badgeVariants({ variant, size, color });
  return (
    <Comp data-slot="badge" className={cn(classes, className)} {...props} />
  );
}

export { Badge, badgeVariants };
