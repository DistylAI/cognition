import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/alert.tsx (Alert / AlertTitle /
// AlertDescription). Every color is a Folio v1.2 semantic token, so the
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
  // intentional: 10px optically balances the first line; see changelog 2026-07-22
  "relative w-full rounded-xl border px-4 py-3 text-sm [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-2.5 [&>svg]:size-4 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default:
          "border-border bg-background text-foreground [&>svg]:text-foreground",
        destructive:
          "border-destructive/30 bg-destructive-subtle text-destructive [&>svg]:text-destructive",
        warning:
          "border-warning/30 bg-warning-subtle text-warning [&>svg]:text-warning",
        success:
          "border-success/30 bg-success-subtle text-success [&>svg]:text-success",
        info:
          "border-info/30 bg-info-subtle text-info [&>svg]:text-info",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"h5">) {
  return (
    <h5
      data-slot="alert-title"
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn("text-sm text-foreground [&_p]:leading-relaxed", className)}
      {...props}
    />
  );
}

export { Alert, AlertDescription, AlertTitle };
