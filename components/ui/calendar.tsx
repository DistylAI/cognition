"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayButton, DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/calendar.tsx (DayPicker), targeting
// react-day-picker v9 -- the version this project installs. The documented props
// (mode, selected, onSelect, disabled, numberOfMonths) are identical across
// versions; only the internal classNames structure differs. All raw primary /
// accent / muted colors are mapped to Folio tokens and the day cells are
// fully styled via classNames (no day-picker stylesheet), so it themes via
// [data-theme="dark"] with no dark: classes.
export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        root: "w-fit",
        months: "relative flex flex-col gap-4 sm:flex-row",
        month: "flex w-full flex-col gap-4",
        nav: "absolute inset-x-0 top-0 flex items-center justify-between",
        button_previous:
          "inline-flex size-8 items-center justify-center rounded-lg border border-border bg-transparent text-foreground opacity-60 transition-opacity hover:opacity-100 aria-disabled:opacity-30",
        button_next:
          "inline-flex size-8 items-center justify-center rounded-lg border border-border bg-transparent text-foreground opacity-60 transition-opacity hover:opacity-100 aria-disabled:opacity-30",
        month_caption: "flex h-8 items-center justify-center",
        caption_label: "select-none text-sm font-medium text-foreground",
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday: "w-8 select-none text-caption",
        week: "mt-2 flex w-full",
        day: "relative aspect-square size-8 select-none p-0 text-center",
        disabled: "text-disabled",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ className: chevronClassName, orientation, ...rest }) =>
          orientation === "left" ? (
            <ChevronLeft className={cn("size-4", chevronClassName)} {...rest} />
          ) : (
            <ChevronRight className={cn("size-4", chevronClassName)} {...rest} />
          ),
        DayButton: CalendarDayButton,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  const isSingleSelected =
    modifiers.selected &&
    !modifiers.range_start &&
    !modifiers.range_end &&
    !modifiers.range_middle;

  return (
    <button
      ref={ref}
      type="button"
      data-selected-single={isSingleSelected || undefined}
      data-range-start={modifiers.range_start || undefined}
      data-range-end={modifiers.range_end || undefined}
      data-range-middle={modifiers.range_middle || undefined}
      data-today={(modifiers.today && !modifiers.selected) || undefined}
      data-outside={(modifiers.outside && !modifiers.selected) || undefined}
      className={cn(
        "flex size-8 w-full min-w-8 items-center justify-center rounded-lg text-sm font-normal text-foreground transition-colors",
        "hover:bg-secondary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        "data-[today=true]:bg-primary-subtle data-[today=true]:text-primary",
        "data-[outside=true]:text-muted-foreground",
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-inverse data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-inverse",
        "data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-primary-subtle data-[range-middle=true]:text-foreground",
        "data-[range-start=true]:rounded-r-none data-[range-start=true]:bg-primary data-[range-start=true]:text-inverse data-[range-start=true]:hover:bg-primary",
        "data-[range-end=true]:rounded-l-none data-[range-end=true]:bg-primary data-[range-end=true]:text-inverse data-[range-end=true]:hover:bg-primary",
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
