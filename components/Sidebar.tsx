"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

type Section = { id: string; label: string };
type NavItem = { href: string; label: string; sections?: Section[] };
type NavGroup = { section: string; items: NavItem[] };

const nav: NavGroup[] = [
  {
    section: "Overview",
    items: [{ href: "/", label: "Introduction" }],
  },
  {
    section: "Foundations",
    items: [
      {
        href: "/tokens",
        label: "Tokens",
        sections: [
          { id: "background", label: "Backgrounds" },
          { id: "text", label: "Text" },
          { id: "border", label: "Borders" },
          { id: "feedback", label: "Feedback" },
          { id: "radius", label: "Radius" },
          { id: "spacing", label: "Spacing" },
          { id: "typography", label: "Typography" },
        ],
      },
      {
        href: "/guidelines",
        label: "Guidelines",
        sections: [
          { id: "component-semantics", label: "Component semantics" },
          { id: "full-specification", label: "Full specification" },
        ],
      },
    ],
  },
  {
    section: "Status",
    items: [
      {
        href: "/audit",
        label: "Codebase Audit",
        sections: [
          { id: "executive-summary", label: "Executive Summary" },
          { id: "dark-mode-status", label: "Dark Mode Status" },
          { id: "token-inventory", label: "Token Inventory" },
          { id: "violations-summary", label: "Violations Summary" },
          { id: "component-inventory", label: "Component Inventory" },
          { id: "component-semantic-violations", label: "Semantic Violations" },
          { id: "drift-map", label: "Drift Map" },
          { id: "debt-priority", label: "Debt Priority" },
          { id: "rebrand-readiness", label: "Rebrand Readiness" },
        ],
      },
    ],
  },
];

// Highlight the section currently scrolled into view.
function useActiveSection(sections: Section[] | undefined, pathname: string) {
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

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col overflow-y-auto border-r border-border-default bg-background-subtle px-6 py-8 md:flex">
      <Link href="/" className="group mb-10 block">
        <div className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-md bg-background-primary" />
          <span className="text-lg font-bold tracking-tight text-text-default">
            design<span className="text-text-primary">.distyl</span>
          </span>
        </div>
      </Link>

      <nav className="flex-1 space-y-7">
        {nav.map((group) => (
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

                    {/* Sub-navigation: only render under the active page */}
                    {active && item.sections && (
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
        ))}
      </nav>

      <div className="mt-8 border-t border-border-default pt-6">
        <ThemeToggle />
        <p className="mt-4 text-xs font-normal text-text-subtle">Cognition v1.2</p>
        <p className="mt-2 text-xs text-text-subtle">
          Design at Distyl AI ·{" "}
          <a
            href="https://distylai.slack.com/archives/C0A22RR2N6P"
            target="_blank"
            rel="noreferrer"
            className="text-text-default transition-colors hover:text-text-primary"
          >
            #research-and-design
          </a>{" "}
          ·{" "}
          <a
            href="https://distylai.slack.com/archives/C079VBDTJLA"
            target="_blank"
            rel="noreferrer"
            className="text-text-default transition-colors hover:text-text-primary"
          >
            #engineering-fe
          </a>
        </p>
      </div>
    </aside>
  );
}
