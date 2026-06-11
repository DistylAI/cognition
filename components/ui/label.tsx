import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/label.tsx (Radix Label), extended per
// the Cognition spec with `required` (renders a danger-colored asterisk) and
// `disabled` (dims the label). Colors are Cognition tokens; no dark: classes.
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  required?: boolean;
  disabled?: boolean;
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, required, disabled, children, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    data-disabled={disabled || undefined}
    className={cn(
      labelVariants(),
      disabled && "cursor-not-allowed opacity-70",
      className,
    )}
    {...props}
  >
    {children}
    {required && (
      <span aria-hidden className="ml-0.5 text-text-danger">
        *
      </span>
    )}
  </LabelPrimitive.Root>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
