"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/", label: "Intro" },
  { href: "/tokens", label: "Tokens" },
  { href: "/guidelines", label: "Guidelines" },
  { href: "/audit", label: "Audit" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-border-default bg-background-subtle/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-5 w-5 rounded-md bg-background-primary" />
          <span className="font-bold tracking-tight">
            design<span className="text-text-primary">.distyl</span>
          </span>
        </Link>
        <ThemeToggle />
      </div>
      <nav className="mt-3 flex gap-1 overflow-x-auto">
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              className={[
                "whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition-colors",
                active
                  ? "bg-background-accent font-bold text-text-primary"
                  : "text-text-subtle hover:bg-background-secondary",
              ].join(" ")}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
