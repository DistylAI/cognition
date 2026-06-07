"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { nav } from "@/lib/nav";
import { ThemeToggle } from "./ThemeToggle";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Close the drawer whenever the route changes (i.e. a link was followed).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll + close on Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const q = query.trim().toLowerCase();
  const filteredNav = useMemo(() => {
    if (!q) return nav;
    return nav
      .map((group) => ({
        ...group,
        items: group.items.filter((i) => i.label.toLowerCase().includes(q)),
      }))
      .filter((group) => group.items.length > 0);
  }, [q]);

  return (
    <>
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border-default bg-background-subtle/95 px-4 py-3 backdrop-blur md:hidden">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-5 w-5 rounded-full bg-background-primary" />
          <span className="font-bold tracking-tight text-text-default">
            design<span className="text-text-primary">.distyl</span>
          </span>
        </Link>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="inline-flex size-9 items-center justify-center rounded-md text-text-default transition-colors hover:bg-background-secondary [&>svg]:size-5"
          >
            <Menu />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50"
          />
          {/* Drawer */}
          <div className="absolute inset-y-0 left-0 flex w-72 max-w-[85%] flex-col border-r border-border-default bg-background-subtle">
            <div className="flex items-center justify-between border-b border-border-default px-4 py-3">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2"
              >
                <span className="inline-block h-5 w-5 rounded-full bg-background-primary" />
                <span className="font-bold tracking-tight text-text-default">
                  design<span className="text-text-primary">.distyl</span>
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex size-9 items-center justify-center rounded-md text-text-subtle transition-colors hover:bg-background-secondary hover:text-text-default [&>svg]:size-5"
              >
                <X />
              </button>
            </div>

            <div className="px-4 py-3">
              <div className="relative">
                <Search
                  aria-hidden
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-subtle"
                />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search…"
                  aria-label="Search navigation"
                  className="h-9 w-full rounded-lg border border-border-default bg-background-default pl-9 pr-3 text-sm text-text-default transition-colors placeholder:text-text-subtle focus-visible:border-border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-primary"
                />
              </div>
            </div>

            <nav className="flex-1 space-y-6 overflow-y-auto px-4 pb-6">
              {filteredNav.length === 0 ? (
                <p className="px-1 text-sm text-text-subtle">
                  No matches for &ldquo;{query.trim()}&rdquo;.
                </p>
              ) : (
                filteredNav.map((group) => (
                  <div key={group.section}>
                    <p className="mb-2 text-xs font-normal text-text-subtle">
                      {group.section}
                    </p>
                    <ul className="space-y-0.5">
                      {group.items.map((item) => {
                        const active = pathname === item.href;
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className={[
                                "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                active
                                  ? "bg-background-secondary text-text-default"
                                  : "text-text-subtle hover:bg-background-secondary hover:text-text-default",
                              ].join(" ")}
                            >
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
