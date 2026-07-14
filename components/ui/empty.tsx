import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// Canonical Empty State. fe-distillery has no empty-state primitive yet, so this
// documents the component the audit recommends -- the standard Empty composition
// (Empty / EmptyHeader / EmptyMedia / EmptyTitle / EmptyDescription /
// EmptyContent). v4 migration: plain function components + data-slot, and v4
// sizing (gap-6, responsive padding, text-balance, size-6 media, larger title).
// All visual classes are Cognition v1.2 tokens/named styles, so it themes via
// [data-theme="dark"] with no dark: classes.

function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex w-full flex-col items-center justify-center gap-6 rounded-lg p-6 text-center text-balance md:p-12",
        className,
      )}
      {...props}
    />
  );
}

function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        className,
      )}
      {...props}
    />
  );
}

const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center mb-2 text-text-subtle [&_svg:not([class*='size-'])]:size-6",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-10 rounded-lg bg-background-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface EmptyMediaProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof emptyMediaVariants> {}

function EmptyMedia({ className, variant, ...props }: EmptyMediaProps) {
  return (
    <div
      data-slot="empty-media"
      className={cn(emptyMediaVariants({ variant }), className)}
      {...props}
    />
  );
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn("text-title text-text-default", className)}
      {...props}
    />
  );
}

function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="empty-description"
      className={cn("text-sm leading-relaxed text-text-subtle", className)}
      {...props}
    />
  );
}

function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center justify-center gap-4 text-sm text-balance",
        className,
      )}
      {...props}
    />
  );
}

export {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
};
