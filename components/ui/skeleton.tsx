import * as React from "react";

import { cn } from "@/lib/utils";

// Mirrors fe-distillery/components/ui/skeleton.tsx (a pulsing placeholder div).
// The raw bg-primary/10 is mapped to the Folio background-secondary token,
// so it themes via [data-theme="dark"] with no dark: classes.
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-background-secondary", className)}
      {...props}
    />
  );
}

export { Skeleton };
