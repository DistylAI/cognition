import * as React from "react";

import { cn } from "@/lib/utils";

// A Folio composed pattern built on the Input primitive: a single field with
// optional leading or trailing affordances (icon, prefix/suffix text, or an
// action) attached inside one visual boundary. It does not replace Input, it
// extends it for cases that need attached context. v4 migration: plain function
// component, rounded-lg to match the migrated Input/Button, the v4 focus ring
// (ring-[3px]), and shadow-sm. Colors are Folio tokens; the field shows
// focus via focus-within, so no dark: classes.
interface InputGroupProps extends Omit<React.ComponentProps<"input">, "size"> {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  leadingText?: string;
  trailingText?: string;
  trailingAction?: React.ReactNode;
  error?: boolean;
}

function InputGroup({
  className,
  leadingIcon,
  trailingIcon,
  leadingText,
  trailingText,
  trailingAction,
  error,
  disabled,
  ref,
  ...props
}: InputGroupProps) {
  // Enforce flush, concentric nesting for the trailing action regardless of its
  // content (icon or text): the button fills a consistent 4px inset on the top,
  // right, and bottom (h-7 centered in the h-9 group plus pr-1), and a 4px
  // radius (rounded-sm) nests concentrically inside the group's rounded-lg (8px)
  // corner. twMerge lets these win over the Button size variant's h-8 / rounded.
  const renderedTrailingAction = React.isValidElement<{ className?: string }>(
    trailingAction,
  )
    ? React.cloneElement(trailingAction, {
        className: cn(trailingAction.props.className, "h-7 rounded-sm"),
      })
    : trailingAction;

  return (
    <div
      data-slot="input-group"
      aria-disabled={disabled || undefined}
      className={cn(
        "flex h-9 w-full items-center gap-2 rounded-lg border border-border bg-background pl-3 text-sm shadow-sm transition-colors",
        // Focus is a stroke-color change only -- no ring (matches Input).
        "focus-within:border-primary",
        trailingAction ? "pr-1" : "pr-3",
        error && "border-destructive focus-within:border-destructive",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      {leadingIcon && (
        <span className="flex shrink-0 items-center text-muted-foreground [&_svg]:size-4">
          {leadingIcon}
        </span>
      )}
      {leadingText && (
        <span className="shrink-0 text-muted-foreground">{leadingText}</span>
      )}
      <input
        ref={ref}
        disabled={disabled}
        aria-invalid={error || undefined}
        className="h-full w-full flex-1 bg-transparent py-1 text-foreground placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed"
        {...props}
      />
      {trailingText && (
        <span className="shrink-0 text-muted-foreground">{trailingText}</span>
      )}
      {trailingIcon && (
        <span className="flex shrink-0 items-center text-muted-foreground [&_svg]:size-4">
          {trailingIcon}
        </span>
      )}
      {trailingAction && (
        <span className="flex shrink-0 items-center">
          {renderedTrailingAction}
        </span>
      )}
    </div>
  );
}
InputGroup.displayName = "InputGroup";

export { InputGroup };
