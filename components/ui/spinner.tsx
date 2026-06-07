import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// Canonical Spinner. fe-distillery has no spinner primitive yet, so this is the
// proposed component. The graphic is the Distyl logo mark drawn as an animated
// stroke chase (see the .chase rules in globals.css) — the two paths are
// staggered 0.4s so they chase rather than sync. Stroke is currentColor; the
// default color is the Cognition background-primary token, so it remaps in dark
// mode. Drop it inside a Button etc. and it inherits that context's text color.
const spinnerVariants = cva("inline-block shrink-0 text-background-primary", {
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
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string;
}

const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size, label = "Loading", ...props }, ref) => (
    <span
      ref={ref}
      role="status"
      aria-label={label}
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    >
      <svg
        viewBox="0 0 236 236"
        fill="none"
        className="size-full"
        aria-hidden="true"
      >
        <path
          className="chase chase-1"
          d="M102.681 92.2672H148.326L125.503 130.727L138.749 153.073L188.062 70.0625H89.4723L102.681 92.2672Z"
        />
        <path
          className="chase chase-2"
          d="M47.9375 70.0625L117.982 188.063L131.264 165.716L74.4655 70.0625H47.9375Z"
        />
      </svg>
    </span>
  ),
);
Spinner.displayName = "Spinner";

export { Spinner };
