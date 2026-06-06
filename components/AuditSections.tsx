"use client";

import { useEffect, useState } from "react";
import { Markdown, slug } from "./Markdown";

export type AuditSection = { title: string; body: string };

export function AuditSections({ sections }: { sections: AuditSection[] }) {
  // First section open by default; the rest collapsed.
  const [open, setOpen] = useState<boolean[]>(() =>
    sections.map((_, i) => i === 0),
  );

  // Open (and scroll to) a section when its anchor is hit — e.g. from the
  // sidebar subnav — so jumping never lands on a collapsed panel.
  useEffect(() => {
    function openFromHash() {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const idx = sections.findIndex((s) => slug(s.title) === id);
      if (idx < 0) return;
      setOpen((prev) => prev.map((v, i) => (i === idx ? true : v)));
      requestAnimationFrame(() =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
      );
    }
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [sections]);

  const allOpen = open.every(Boolean);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-small">
          {sections.length} sections · detailed findings
        </p>
        <button
          type="button"
          onClick={() => setOpen(sections.map(() => !allOpen))}
          className="rounded-md border border-border-default px-3 py-1.5 text-sm font-medium text-text-subtle transition-colors hover:border-border-strong hover:text-text-default"
        >
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <div className="divide-y divide-border-default overflow-hidden rounded-lg border border-border-default">
        {sections.map((s, i) => {
          const isOpen = open[i];
          const id = slug(s.title);
          return (
            <section key={id} id={id} className="scroll-mt-8">
              <h2 className="m-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpen((prev) => prev.map((v, j) => (j === i ? !v : v)))
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-background-subtle"
                >
                  <span className="text-h3 text-text-default">
                    {s.title}
                  </span>
                  <svg
                    aria-hidden
                    viewBox="0 0 16 16"
                    className={[
                      "h-4 w-4 shrink-0 text-text-subtle transition-transform",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6l4 4 4-4" />
                  </svg>
                </button>
              </h2>
              {isOpen && (
                <div className="border-t border-border-subtle px-5 pb-6 pt-1">
                  <Markdown content={s.body} />
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
