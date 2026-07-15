import { X } from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Tag is the label entry point: a wrapper over Badge that locks kind="label"
// (the neutral taxonomy chip) and is the ONLY place `removable` lives -- a
// removable Tag is the canonical filter chip. Non-removable Tags stay
// non-interactive (and support asChild); a removable Tag renders a trailing ✕
// button and is therefore interactive. Styling comes from Badge's tokens.
export interface TagProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color"> {
  size?: "default" | "sm";
  removable?: boolean;
  onRemove?: () => void;
  asChild?: boolean;
}

function Tag({
  className,
  size,
  removable = false,
  onRemove,
  asChild = false,
  children,
  ...props
}: TagProps) {
  if (removable) {
    return (
      <Badge kind="label" size={size} className={cn("pr-1", className)} {...props}>
        {children}
        <button
          type="button"
          aria-label="Remove"
          onClick={onRemove}
          className="-mr-0.5 ml-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-sm text-text-subtle transition-colors hover:text-text-default focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-primary [&_svg]:size-3"
        >
          <X />
        </button>
      </Badge>
    );
  }

  // Non-removable: a plain label. asChild is forwarded to Badge (which owns the
  // Slot merge), so <Tag asChild><a href>…</a></Tag> works.
  return (
    <Badge
      kind="label"
      size={size}
      asChild={asChild}
      className={className}
      {...props}
    >
      {children}
    </Badge>
  );
}

export { Tag };
