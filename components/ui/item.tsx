"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

// A Cognition single-row primitive: a leading element (icon, avatar, checkbox),
// a primary label with an optional secondary label, and a trailing element
// (action, badge, status). It renders as a button when given an onClick,
// otherwise a div. Colors are Cognition tokens, so it themes via
// [data-theme="dark"] with no dark: classes.
interface ItemProps {
  label: string;
  secondaryLabel?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

function Item({
  label,
  secondaryLabel,
  leading,
  trailing,
  selected,
  disabled,
  onClick,
  className,
}: ItemProps) {
  const interactive = Boolean(onClick);

  const classes = cn(
    "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left",
    selected && "bg-background-accent",
    disabled
      ? "opacity-50"
      : interactive &&
          "cursor-pointer transition-colors hover:bg-background-secondary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-primary",
    className,
  );

  const inner = (
    <>
      {leading && (
        <span className="flex shrink-0 items-center text-text-subtle [&>svg]:size-4">
          {leading}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block truncate text-label">
          {label}
        </span>
        {secondaryLabel && (
          <span className="block truncate text-caption">
            {secondaryLabel}
          </span>
        )}
      </span>
      {trailing && (
        <span className="flex shrink-0 items-center">{trailing}</span>
      )}
    </>
  );

  if (interactive) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        aria-current={selected || undefined}
        className={classes}
      >
        {inner}
      </button>
    );
  }

  return (
    <div aria-disabled={disabled || undefined} className={classes}>
      {inner}
    </div>
  );
}

export { Item };
