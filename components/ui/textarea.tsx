import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/textarea.tsx. v4 migration: plain
// function component + data-slot, rounded-md (matches Input/Button), field-sizing
// content, shadow-xs, the v4 focus ring and aria-invalid handling. Raw
// border-input / bg-transparent / placeholder / ring utilities stay mapped to
// Cognition v1.2 tokens. No dark: classes.
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-md border border-border-default bg-background-default px-3 py-2 text-sm text-text-default shadow-xs transition-colors outline-none",
        "placeholder:text-text-subtle",
        // Focus is a stroke-color change only -- no ring (matches Input).
        "focus-visible:border-border-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-border-danger",
        className,
      )}
      {...props}
    />
  );
}
Textarea.displayName = "Textarea";

export { Textarea };
