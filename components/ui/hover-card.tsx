"use client";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/hover-card.tsx (Radix HoverCard). v4
// migration: HoverCardContent is a plain function component + data-slot. The raw
// bg-popover / text-popover-foreground / border stay mapped to Cognition tokens,
// matching this project's Popover, so it themes via [data-theme="dark"] with no
// dark: classes and no animation plugin.
const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Content
      data-slot="hover-card-content"
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-64 rounded-md border border-border-default bg-background-default p-4 text-text-default shadow-md outline-none",
        className,
      )}
      {...props}
    />
  );
}
HoverCardContent.displayName = "HoverCardContent";

export { HoverCard, HoverCardContent, HoverCardTrigger };
