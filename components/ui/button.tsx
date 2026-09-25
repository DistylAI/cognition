"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

// API mirrors fe-distillery/components/ui/button.tsx exactly (variants, sizes,
// props, behavior). Visual classes are mapped to Folio v1.2 semantic tokens
// so the component themes via [data-theme="dark"] with no dark: classes.
// Pass 2 (Folio opinions): `secondary` is retired -- `outline` is the one
// canonical bordered button. The size scale is shifted down a notch (default is
// now 32px, was 36px; `lg` retired) and each size owns its icon size, so icons
// (and the loading spinner) scale with the button. Consumers can still override
// a glyph with an explicit `size-*` class (the :not([class*='size-']) guard).
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all outline-none focus-visible:border-primary focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-inverse shadow hover:opacity-90",
        destructive:
          "bg-destructive text-inverse shadow hover:opacity-90",
        outline:
          "border border-border bg-background text-foreground shadow hover:bg-secondary",
        ghost: "text-foreground hover:bg-secondary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 px-3 [&_svg:not([class*='size-'])]:size-4",
        sm: "h-7 rounded-lg px-2.5 text-xs [&_svg:not([class*='size-'])]:size-3.5",
        icon: "size-8 [&_svg:not([class*='size-'])]:size-4",
        "icon-sm": "size-7 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
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
