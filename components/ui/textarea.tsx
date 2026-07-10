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
        "flex field-sizing-content min-h-16 w-full rounded-md border border-border-default bg-background-default px-3 py-2 text-sm text-text-default shadow-xs transition-[color,box-shadow] outline-none",
        "placeholder:text-text-subtle",
        "focus-visible:border-border-primary focus-visible:ring-border-primary/50 focus-visible:ring-[3px]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-border-danger aria-invalid:ring-border-danger/20",
        className,
      )}
      {...props}
    />
  );
}
Textarea.displayName = "Textarea";

export { Textarea };
