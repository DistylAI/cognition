"use client";

import { Check, ChevronsUpDown, type LucideIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

// A composed pattern: Combobox is a higher-order component built from the
// Command and Popover primitives. API mirrors fe-distillery/components/ui/
// combobox.tsx, extended with optional per-option icon and group so the same
// component covers the default, grouped, and icon variants. Colors are Folio
// tokens; no dark: classes.
export interface ComboboxOption {
  label: string;
  value: string;
  icon?: LucideIcon;
  group?: string;
  disabled?: boolean;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  disabled?: boolean;
  shouldFilter?: boolean;
  triggerClassName?: string;
  contentClassName?: string;
}

export function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Select an option...",
  searchPlaceholder = "Search...",
  emptyText = "No results found.",
  disabled = false,
  shouldFilter = true,
  triggerClassName,
  contentClassName,
}: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState("");

  const currentValue = value !== undefined ? value : internalValue;
  const selectedLabel = options.find(
    (option) => option.value === currentValue,
  )?.label;

  const handleSelect = (selectedValue: string) => {
    const newValue = selectedValue === currentValue ? "" : selectedValue;
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
    setOpen(false);
  };

  const groups = Array.from(
    new Set(options.map((option) => option.group ?? "")),
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            "w-full justify-between",
            !selectedLabel && "text-text-subtle",
            triggerClassName,
          )}
        >
          <span className="truncate">{selectedLabel || placeholder}</span>
          <ChevronsUpDown className="ml-2 size-4 shrink-0 text-text-subtle" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "w-[--radix-popover-trigger-width] p-0",
          contentClassName,
        )}
      >
        <Command shouldFilter={shouldFilter}>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            {groups.map((group) => (
              <CommandGroup key={group || "default"} heading={group || undefined}>
                {options
                  .filter((option) => (option.group ?? "") === group)
                  .map((option) => {
                    const Icon = option.icon;
                    return (
                      <CommandItem
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                        onSelect={handleSelect}
                        className={cn(
                          option.disabled && "cursor-not-allowed opacity-50",
                        )}
                      >
                        {Icon ? <Icon className="text-text-subtle" /> : null}
                        <span className="truncate">{option.label}</span>
                        <Check
                          className={cn(
                            "ml-auto shrink-0",
                            currentValue === option.value
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                      </CommandItem>
                    );
                  })}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
