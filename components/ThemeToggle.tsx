"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme) || "light";
    setTheme(current);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("cognition-theme", next);
    } catch {}
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="flex items-center gap-2 rounded-md border border-border-default bg-background-default px-3 py-2 text-sm font-medium text-text-subtle transition-colors hover:border-border-strong hover:text-text-default"
    >
      <span
        aria-hidden
        className="inline-block h-3 w-3 rounded-full border border-border-strong"
        style={{
          background: mounted
            ? theme === "dark"
              ? "var(--color-background-inverse)"
              : "var(--color-background-primary)"
            : "transparent",
        }}
      />
      {mounted ? (theme === "dark" ? "Dark" : "Light") : "Theme"}
    </button>
  );
}
