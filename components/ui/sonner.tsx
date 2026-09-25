"use client";

import * as React from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

import { Spinner } from "@/components/ui/spinner";

// API mirrors fe-distillery/components/ui/sonner.tsx (the Sonner Toaster). This
// project has no next-themes, so the toaster syncs to the [data-theme] attribute
// on <html> via a MutationObserver. Every toast surface is styled with Folio
// tokens (base plus per-type success/error/warning/info) so it themes via
// [data-theme="dark"] with no dark: classes and no leaking of Sonner's palette.
const Toaster = ({ ...props }: ToasterProps) => {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    const root = document.documentElement;
    const read = () =>
      setTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");
    read();
    const observer = new MutationObserver(read);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Sonner
      theme={theme}
      position="bottom-right"
      className="toaster group"
      // Loading is a neutral, indeterminate state -- no feedback color. It uses
      // the neutral base toast surface plus the canonical Folio Spinner
      // (purple arc / neutral track), not Sonner's default loader.
      icons={{ loading: <Spinner size="sm" /> }}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:rounded-xl group-[.toaster]:border group-[.toaster]:border-border group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:shadow-lg",
          description: "group-[.toast]:!text-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-inverse",
          cancelButton:
            "group-[.toast]:bg-secondary group-[.toast]:text-muted-foreground",
          // Per-type surface: shared verbatim with the Alert recipe -- tinted
          // background + SOFT in-hue stroke (feedback color at 30%) + icon/title
          // in the contrast-tuned text-<type> token (every title clears 4.5:1 on
          // its tint). The stroke stays feedback-<type> (status hue) at low alpha.
          success:
            "group-[.toaster]:!border-success/30 group-[.toaster]:!bg-success-subtle group-[.toaster]:!text-success",
          error:
            "group-[.toaster]:!border-destructive/30 group-[.toaster]:!bg-destructive-subtle group-[.toaster]:!text-destructive",
          warning:
            "group-[.toaster]:!border-warning/30 group-[.toaster]:!bg-warning-subtle group-[.toaster]:!text-warning",
          info: "group-[.toaster]:!border-info/30 group-[.toaster]:!bg-info-subtle group-[.toaster]:!text-info",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
