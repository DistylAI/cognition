"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// A Folio higher-order form component. Field composes a Label, a control
// (passed as children -- Input, Select, Textarea, etc.), and optional helper or
// error text into one labelled, accessible unit. It does not replace those
// primitives; it wires them together: the label's htmlFor, the control's id,
// aria-invalid, and aria-describedby are all linked. Colors are Folio
// tokens, so it themes via [data-theme="dark"] with no dark: classes.
type ControlProps = {
  id?: string;
  disabled?: boolean;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};

interface FieldProps {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

function Field({
  label,
  helperText,
  error,
  required,
  disabled,
  id,
  className,
  children,
}: FieldProps) {
  const generatedId = React.useId();
  const fieldId = id ?? generatedId;
  const messageId = `${fieldId}-message`;
  const hasError = Boolean(error);
  const message = error ?? helperText;

  const control = React.isValidElement(children)
    ? React.cloneElement(children as React.ReactElement<ControlProps>, {
        id: (children.props as ControlProps).id ?? fieldId,
        disabled: (children.props as ControlProps).disabled ?? disabled,
        "aria-invalid": hasError || undefined,
        "aria-describedby": message ? messageId : undefined,
      })
    : children;

  return (
    <div
      data-disabled={disabled || undefined}
      className={cn("flex flex-col gap-1.5", className)}
    >
      {label && (
        <Label htmlFor={fieldId} required={required} disabled={disabled}>
          {label}
        </Label>
      )}
      {control}
      {message && (
        <p
          id={messageId}
          className={cn(
            "text-xs",
            hasError ? "text-destructive" : "text-muted-foreground",
          )}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export { Field };
