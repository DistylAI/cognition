import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/textarea.tsx. v4 migration: plain
// function component + data-slot, rounded-lg (matches Input/Button), field-sizing
// content, shadow-sm, the v4 focus ring and aria-invalid handling. Raw
// border-input / bg-transparent / placeholder / ring utilities stay mapped to
// Folio v1.2 tokens. No dark: classes.
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex [field-sizing:content] min-h-16 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm transition-colors outline-none",
        "placeholder:text-muted-foreground",
        // Focus is a stroke-color change only -- no ring (matches Input).
        "focus-visible:border-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-[invalid=true]:border-destructive",
        className,
      )}
      {...props}
    />
  );
}
Textarea.displayName = "Textarea";

export { Textarea };
