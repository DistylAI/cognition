import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/input.tsx exactly: a single Input that
// spreads React.ComponentProps<'input'>. v4 migration: plain function component
// + data-slot, rounded-lg (matches Button), shadow-sm, the v4 focus ring
// (ring-[3px] + border), and aria-invalid handling. The raw border-input /
// bg-transparent / placeholder / ring utilities stay mapped to Folio v1.2
// tokens, so the field themes via [data-theme="dark"] with no dark: classes.
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-9 w-full min-w-0 rounded-lg border border-border bg-background px-3 py-1 text-sm text-foreground shadow-sm transition-colors outline-none",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        "placeholder:text-muted-foreground",
        // Focus is a stroke-color change only -- no ring. The border shift is the
        // indicator; a 3px ring reads as a barely-visible shadow here.
        "focus-visible:border-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-[invalid=true]:border-destructive",
        className,
      )}
      {...props}
    />
  );
}
Input.displayName = "Input";

export { Input };
