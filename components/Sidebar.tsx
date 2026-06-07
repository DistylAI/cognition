"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { Kbd } from "@/components/ui/kbd";
import { nav, type NavSection } from "@/lib/nav";
import { ThemeToggle } from "./ThemeToggle";

// Highlight the section currently scrolled into view.
function useActiveSection(sections: NavSection[] | undefined, pathname: string) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    setActiveId("");
    if (!sections?.length) return;

    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "0px 0px -65% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // pathname re-runs the effect after client navigation swaps the page.
  }, [sections, pathname]);

  return activeId;
}

export function Sidebar() {
  const pathname = usePathname();
  const activeItem = nav.flatMap((g) => g.items).find((i) => i.href === pathname);
  const activeSection = useActiveSection(activeItem?.sections, pathname);

  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  // Filter every group by label as the list grows. Empty query → full nav.
  const filteredNav = useMemo(() => {
    if (!q) return nav;
    return nav
      .map((group) => ({
        ...group,
        items: group.items.filter((i) => i.label.toLowerCase().includes(q)),
      }))
      .filter((group) => group.items.length > 0);
  }, [q]);

  // Press "/" anywhere (outside a field) to jump to search.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "/") return;
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable)
      ) {
        return;
      }
      e.preventDefault();
      searchRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col overflow-y-auto border-r border-border-default bg-background-subtle px-6 py-8 md:flex">
      <Link href="/" className="group mb-6 block">
        <div className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-full bg-background-primary" />
          <span className="text-lg font-bold tracking-tight text-text-default">
            design<span className="text-text-primary">.distyl</span>
          </span>
        </div>
      </Link>

      {/* Search — filters the whole nav. Grows with the component list. */}
      <div className="relative mb-6">
        <Search
          aria-hidden
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-subtle"
        />
        <input
          ref={searchRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setQuery("");
              e.currentTarget.blur();
            }
          }}
          placeholder="Search…"
          aria-label="Search navigation"
          className="h-9 w-full rounded-lg border border-border-default bg-background-default pl-9 pr-9 text-sm text-text-default transition-colors placeholder:text-text-subtle focus-visible:border-border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-primary"
        />
        {searching ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              searchRef.current?.focus();
            }}
            aria-label="Clear search"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-1 text-text-subtle transition-colors hover:text-text-default"
          >
            <X className="size-4" />
          </button>
        ) : (
          <Kbd
            aria-hidden
            className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
          >
            /
          </Kbd>
        )}
      </div>

      <nav className="flex-1 space-y-7">
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
                        className={[
                          "-mx-3 block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                          active
                            ? "bg-background-secondary text-text-default"
                            : "text-text-subtle hover:bg-background-secondary hover:text-text-default",
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>

                      {/* Sub-navigation: only under the active page, and not
                          while filtering (keeps results flat). */}
                      {!searching && active && item.sections && (
                        <ul className="mt-1 space-y-px border-l border-border-default pl-3">
                          {item.sections.map((s) => {
                            const current = activeSection === s.id;
                            return (
                              <li key={s.id}>
                                <a
                                  href={`${item.href}#${s.id}`}
                                  aria-current={current ? "true" : undefined}
                                  className={[
                                    "block rounded-sm py-1 text-[13px] transition-colors",
                                    current
                                      ? "font-semibold text-text-default"
                                      : "font-medium text-text-subtle hover:text-text-default",
                                  ].join(" ")}
                                >
                                  {s.label}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))
        )}
      </nav>

      <div className="mt-8 border-t border-border-default pt-6">
        <ThemeToggle />
        <div className="mt-4 flex flex-col gap-1 text-xs text-text-subtle">
          <span>Cognition v1.2</span>
          <a
            href="https://distylai.slack.com/archives/C0A22RR2N6P"
            target="_blank"
            rel="noreferrer"
            className="text-text-default transition-colors hover:text-text-primary"
          >
            #research-and-design
          </a>
          <a
            href="https://distylai.slack.com/archives/C079VBDTJLA"
            target="_blank"
            rel="noreferrer"
            className="text-text-default transition-colors hover:text-text-primary"
          >
            #engineering-fe
          </a>
        </div>
      </div>
    </aside>
  );
}
