"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

// Toasts are fired on click, never on mount, so the demos stay inert at rest.
type ToastKind =
  | "default"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "action"
  | "description";

function fire(kind: ToastKind) {
  switch (kind) {
    case "success":
      return toast.success("Changes saved");
    case "error":
      return toast.error("Could not save changes");
    case "warning":
      return toast.warning("Your trial ends in 3 days");
    case "info":
      return toast.info("A new version is available");
    case "action":
      return toast("Workspace archived", {
        action: { label: "Undo", onClick: () => toast.success("Restored") },
      });
    case "description":
      return toast("Changes saved", {
        description: "Your workspace is up to date as of a moment ago.",
      });
    default:
      return toast("Event scheduled for June 14");
  }
}

export function ToastButton({
  kind,
  children,
  variant = "secondary",
  size = "sm",
}: {
  kind: ToastKind;
  children: React.ReactNode;
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
}) {
  return (
    <Button variant={variant} size={size} onClick={() => fire(kind)}>
      {children}
    </Button>
  );
}
