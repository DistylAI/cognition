import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// Canonical Spinner: a brand-purple arc rotating on a neutral track. v4
// migration: plain function component + data-slot. The whole SVG spins via a
// single CSS rotate animation about its center, so the loop is seamless. The arc
// is a static stroke-dasharray -- the path geometry is never animated. The track
// maps to border-default and the arc to background-primary, so both remap in dark
// mode with no dark: classes.
const spinnerVariants = cva("inline-block shrink-0", {
  variants: {
    size: {
      sm: "size-4",
      default: "size-6",
      lg: "size-8",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface SpinnerProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof spinnerVariants> {
  label?: string;
}

function Spinner({ className, size, label = "Loading", ...props }: SpinnerProps) {
  return (
    <span
      data-slot="spinner"
      role="status"
      aria-label={label}
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="size-full origin-center animate-spin"
      >
        {/* Full track -- rotationally symmetric, so its spin is invisible. */}
        <circle
          cx="12"
          cy="12"
          r="9"
          strokeWidth="2.5"
          className="stroke-border-default"
        />
        {/* Rotating arc -- static dasharray draws the sweep; only the SVG rotates. */}
        <circle
          cx="12"
          cy="12"
          r="9"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="42 100"
          className="stroke-background-primary"
        />
      </svg>
    </span>
  );
}
Spinner.displayName = "Spinner";

export { Spinner };
