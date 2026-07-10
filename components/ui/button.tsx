"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

// API mirrors fe-distillery/components/ui/button.tsx exactly (variants, sizes,
// props, behavior). Visual classes are mapped to Cognition v1.2 semantic tokens
// so the component themes via [data-theme="dark"] with no dark: classes.
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all outline-none focus-visible:border-border-primary focus-visible:ring-border-primary/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-border-danger aria-invalid:ring-border-danger/20 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-background-primary text-text-inverse shadow hover:opacity-90",
        destructive:
          "bg-feedback-danger text-text-inverse shadow-sm hover:opacity-90",
        outline:
          "border border-border-default bg-background-default text-text-default shadow-sm hover:bg-background-secondary",
        secondary:
          "bg-background-secondary text-text-default shadow-sm hover:bg-background-accent",
        ghost: "text-text-default hover:bg-background-secondary",
        link: "text-text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        "icon-sm": "size-8 [&_svg]:size-3.5",
        "icon-xs": "size-7 [&_svg]:size-3.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  loadingText?: string;
  tooltipText?: string;
  disabledTooltipText?: string;
}

// v4: plain function component (ref is a regular prop in React 19) + data-slot.
function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  loadingText,
  tooltipText,
  disabledTooltipText,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const isDisabled = loading || props.disabled;

  const buttonElement = (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      aria-busy={loading}
      aria-disabled={isDisabled}
      {...props}
      disabled={isDisabled}
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Comp>
  );

  const activeTooltipText =
    isDisabled && disabledTooltipText ? disabledTooltipText : tooltipText;

  if (activeTooltipText) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex">{buttonElement}</span>
        </TooltipTrigger>
        <TooltipContent>{activeTooltipText}</TooltipContent>
      </Tooltip>
    );
  }

  return buttonElement;
}
Button.displayName = "Button";

export { Button, buttonVariants };
