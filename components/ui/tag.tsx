import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { cn } from "@/lib/utils";

// NOTE: fe-distillery has no first-class Tag primitive (only the
// shadcn-io/tags multi-select combobox). This is the proposed canonical Tag
// per the Cognition v1.2 spec — a non-interactive label/category/keyword,
// built on the tag.* semantic tokens (background.secondary / text.default /
// border.default). No variants or sizes exist in any source API, so it ships
// a single default style.
export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

function Tag({ className, asChild = false, ...props }: TagProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      className={cn(
        "inline-flex items-center gap-1 rounded-md border border-border-default bg-background-secondary px-2 py-0.5 text-xs font-medium text-text-default [&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
}

export { Tag };
