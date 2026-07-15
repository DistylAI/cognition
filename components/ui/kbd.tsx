import * as React from "react";

import { cn } from "@/lib/utils";

// Canonical Keyboard Input. fe-distillery has no kbd primitive yet, so this is
// the proposed component, built on the semantic <kbd> element. v4 migration:
// plain function components + data-slot. Visuals use Cognition v1.2 tokens
// (muted surface → background-secondary), so it themes via [data-theme="dark"]
// with no dark: classes. KbdGroup lays out key sequences (e.g. ⌘ K) with
// consistent spacing.
function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "inline-flex h-5 min-w-5 select-none items-center justify-center gap-1 rounded-sm bg-background-secondary px-1 font-sans text-caption font-medium",
        className,
      )}
      {...props}
    />
  );
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  );
}

export { Kbd, KbdGroup };
