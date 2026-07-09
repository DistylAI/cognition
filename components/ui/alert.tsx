import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/alert.tsx (Alert / AlertTitle /
// AlertDescription). Every color is a Cognition v1.2 semantic token, so the
// alert themes via [data-theme="dark"] with NO dark: classes.
//
// One color recipe across every feedback variant (danger/warning/success/info):
// icon + title + border take the variant's feedback color; body copy stays
// neutral subtle (via AlertDescription); background stays neutral. Body is never
// recolored, so the feedback color only has to work as icon/title/border.
const alertVariants = cva(
  "relative w-full rounded-lg border bg-background-default px-4 py-3 text-sm [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:size-4 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "border-border-default text-text-default [&>svg]:text-text-default",
        destructive:
          "border-feedback-danger text-feedback-danger [&>svg]:text-feedback-danger",
        warning:
          "border-feedback-warning text-feedback-warning [&>svg]:text-feedback-warning",
        success:
          "border-feedback-success text-feedback-success [&>svg]:text-feedback-success",
        info:
          "border-feedback-info text-feedback-info [&>svg]:text-feedback-info",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="alert-description"
    className={cn(
      "text-sm text-text-subtle [&_p]:leading-relaxed",
      className,
    )}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertTitle };
