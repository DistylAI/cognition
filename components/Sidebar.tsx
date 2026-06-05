"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  {
    section: "Overview",
    items: [{ href: "/", label: "Introduction" }],
  },
  {
    section: "Foundations",
    items: [
      { href: "/tokens", label: "Tokens" },
      { href: "/guidelines", label: "Guidelines" },
    ],
  },
  {
    section: "Status",
    items: [{ href: "/audit", label: "Codebase Audit" }],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border-default bg-background-subtle px-6 py-8 md:flex">
      <Link href="/" className="group mb-10 block">
        <div className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-md bg-background-primary" />
          <span className="text-lg font-bold tracking-tight text-text-default">
            design<span className="text-text-primary">.distyl</span>
          </span>
        </div>
        <p className="mt-2 text-xs font-bold uppercase tracking-wide text-text-subtle">
          Cognition v1.2
        </p>
      </Link>

      <nav className="flex-1 space-y-7">
        {nav.map((group) => (
          <div key={group.section}>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-text-subtle">
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
                        "block rounded-md px-3 py-2 text-sm transition-colors",
                        active
                          ? "bg-background-accent font-bold text-text-primary"
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
        ))}
      </nav>

      <div className="mt-8 border-t border-border-default pt-6">
        <ThemeToggle />
        <p className="mt-4 text-xs text-text-subtle">
          Distyl AI · #design · #frontend
        </p>
      </div>
    </aside>
  );
}
