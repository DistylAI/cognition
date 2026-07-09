"use client";

import * as React from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

// API mirrors fe-distillery/components/ui/sonner.tsx (the Sonner Toaster). This
// project has no next-themes, so the toaster syncs to the [data-theme] attribute
// on <html> via a MutationObserver. Every toast surface is styled with Cognition
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
      position="top-right"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:rounded-lg group-[.toaster]:border group-[.toaster]:border-border-default group-[.toaster]:bg-background-default group-[.toaster]:text-text-default group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-text-subtle",
          actionButton:
            "group-[.toast]:bg-background-primary group-[.toast]:text-text-inverse",
          cancelButton:
            "group-[.toast]:bg-background-secondary group-[.toast]:text-text-subtle",
          success:
            "group-[.toaster]:!border-border-success group-[.toaster]:!bg-background-success group-[.toaster]:!text-text-success",
          error:
            "group-[.toaster]:!border-border-danger group-[.toaster]:!bg-background-danger group-[.toaster]:!text-text-danger",
          warning:
            "group-[.toaster]:!border-feedback-warning group-[.toaster]:!bg-background-warning group-[.toaster]:!text-text-warning",
          info: "group-[.toaster]:!border-feedback-info group-[.toaster]:!bg-background-subtle group-[.toaster]:!text-feedback-info",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
