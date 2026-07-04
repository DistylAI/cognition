"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, X } from "lucide-react";
import { type DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// A composed higher-order pattern: Date Picker is built from Calendar + Popover
// + Button. It opens the Calendar primitive in a Popover on click. Colors come
// from the tokenized parts, so it themes via [data-theme="dark"] with no dark:
// classes.
interface DatePickerProps {
  placeholder?: string;
  disabled?: boolean;
  align?: "start" | "center" | "end";
  clearable?: boolean;
}

function DatePicker({
  placeholder = "Pick a date",
  disabled,
  align = "start",
  clearable,
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="relative inline-block">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            disabled={disabled}
            className={cn(
              "w-[240px] justify-start text-left font-normal",
              clearable && date && "pr-9",
              !date && "text-text-subtle",
            )}
          >
            <CalendarIcon className="mr-2 size-4 shrink-0" />
            {date ? format(date, "PPP") : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align={align}>
          <Calendar mode="single" selected={date} onSelect={setDate} autoFocus />
        </PopoverContent>
      </Popover>
      {clearable && date && !disabled && (
        <button
          type="button"
          onClick={() => setDate(undefined)}
          aria-label="Clear date"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-1 text-text-subtle transition-colors hover:text-text-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  );
}

function DateRangePicker({
  placeholder = "Pick a date range",
  disabled,
  align = "start",
}: DatePickerProps) {
  const [range, setRange] = React.useState<DateRange>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !range?.from && "text-text-subtle",
          )}
        >
          <CalendarIcon className="mr-2 size-4 shrink-0" />
          {range?.from ? (
            range.to ? (
              <>
                {format(range.from, "LLL dd, y")} -{" "}
                {format(range.to, "LLL dd, y")}
              </>
            ) : (
              format(range.from, "LLL dd, y")
            )
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align={align}>
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export { DatePicker, DateRangePicker };
