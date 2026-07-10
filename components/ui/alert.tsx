import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/alert.tsx (Alert / AlertTitle /
// AlertDescription). Every color is a Cognition v1.2 semantic token, so the
// alert themes via [data-theme="dark"] with NO dark: classes.
//
// One color recipe across every feedback variant (danger/warning/success/info),
// shared verbatim with the Toast/Sonner surface so the two read as one system:
// tinted surface (bg-background-<type>) + a SOFT in-hue stroke (feedback color at
// 30% — quiet, like the neutral default's gray border but hued) + icon and title
// in the contrast-tuned text-<type> token (every title clears 4.5:1 on its own
// tint). Body copy stays default (via AlertDescription) for readability on the
// tint. The stroke stays feedback-<type> (canonical status hue) at low alpha.
const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:size-4 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default:
          "border-border-default bg-background-default text-text-default [&>svg]:text-text-default",
        destructive:
          "border-feedback-danger/30 bg-background-danger text-text-danger [&>svg]:text-text-danger",
        warning:
          "border-feedback-warning/30 bg-background-warning text-text-warning [&>svg]:text-text-warning",
        success:
          "border-feedback-success/30 bg-background-success text-text-success [&>svg]:text-text-success",
        info:
          "border-feedback-info/30 bg-background-info text-text-info [&>svg]:text-text-info",
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
      "text-sm text-text-default [&_p]:leading-relaxed",
      className,
    )}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertTitle };
