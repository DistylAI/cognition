import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// Single impl for both status and label chips (Folio pass-2 merge). The
// `kind` axis splits the two jobs Badge used to conflate:
//   kind="status" (default) → colored semantic pill: variant × color matrix.
//   kind="label"            → neutral taxonomy chip (the old Tag look).
// Tag (./tag) is a thin wrapper that locks kind="label" and adds `removable`.
// Every color is a Folio v1.2 token -- no raw palette utilities.
const badgeBase =
  "inline-flex items-center gap-1 rounded-lg border font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0";

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
const badgeLabel = "border-border bg-secondary text-foreground";

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
    { variant: "default", color: "default", class: "bg-inverse text-inverse" },
    { variant: "default", color: "primary", class: "bg-primary text-inverse" },
    { variant: "default", color: "destructive", class: "bg-destructive text-inverse" },
    { variant: "default", color: "success", class: "bg-success text-inverse" },
    { variant: "default", color: "warning", class: "bg-warning text-inverse" },
    { variant: "default", color: "info", class: "bg-info text-inverse" },
    // secondary -- soft tint
    { variant: "secondary", color: "default", class: "bg-secondary text-foreground" },
    { variant: "secondary", color: "primary", class: "bg-primary-subtle text-primary" },
    { variant: "secondary", color: "destructive", class: "bg-destructive-subtle text-destructive" },
    { variant: "secondary", color: "success", class: "bg-success-subtle text-success" },
    { variant: "secondary", color: "warning", class: "bg-warning-subtle text-warning" },
    { variant: "secondary", color: "info", class: "bg-primary-subtle text-primary" },
    // outline -- bordered
    { variant: "outline", color: "default", class: "border-border text-foreground" },
    { variant: "outline", color: "primary", class: "border-primary text-primary" },
    { variant: "outline", color: "destructive", class: "border-destructive text-destructive" },
    { variant: "outline", color: "success", class: "border-success text-success" },
    { variant: "outline", color: "warning", class: "border-border text-warning" },
    { variant: "outline", color: "info", class: "border-primary text-primary" },
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
