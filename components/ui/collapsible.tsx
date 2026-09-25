"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

// API mirrors fe-distillery/components/ui/collapsible.tsx -- a re-export of the
// Radix Collapsible primitives. It has no color or layout of its own; style the
// trigger and content you compose inside it with Folio tokens.
const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
