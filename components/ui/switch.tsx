"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/switch.tsx (Radix Switch). v4
// migration: plain function component + data-slot, v4 track sizing
// (h-[1.15rem] w-8, single border), shadow-xs, the v4 focus ring, and the
// calc-based thumb travel. bg-primary / bg-input / bg-background / ring stay
// mapped to Cognition v1.2 tokens, so track and thumb theme via
// [data-theme="dark"] with no dark: classes.
function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitives.Root>) {
  return (
    <SwitchPrimitives.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-[1.15rem] w-8 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:border-border-primary focus-visible:ring-border-primary/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-background-primary data-[state=unchecked]:bg-border-default",
        className,
      )}
      {...props}
    >
      <SwitchPrimitives.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-4 rounded-full bg-background-default ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
        )}
      />
    </SwitchPrimitives.Root>
  );
}
Switch.displayName = "Switch";

export { Switch };
