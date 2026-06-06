import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/input.tsx exactly: a single Input that
// spreads React.ComponentProps<'input'>. The fix: the raw border-input /
// bg-transparent / placeholder:text-muted-foreground / focus-visible:ring-ring
// utilities are mapped to Cognition v1.2 semantic tokens, so the field themes
// via [data-theme="dark"] with no dark: classes. States (focus, disabled,
// invalid, file) match the Cognition Input in Figma.
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-9 w-full rounded-lg border border-border-default bg-background-default px-3 py-1 text-sm text-text-default shadow-sm transition-colors",
          "placeholder:text-text-subtle",
          "focus-visible:border-border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-primary",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "aria-invalid:border-border-danger aria-invalid:ring-1 aria-invalid:ring-border-danger",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-text-default",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
