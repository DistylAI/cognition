import type { Metadata } from "next";
import {
  CalendarDisabled,
  CalendarRange,
  CalendarSingle,
} from "./calendar-demos";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "Calendar component — an always-visible date selection grid for single dates, ranges, and multiple dates.",
};

const props = [
  {
    name: "mode",
    type: '"single" | "range" | "multiple"',
    def: '"single"',
    desc: "What kind of selection the calendar allows.",
  },
  {
    name: "selected",
    type: "Date | DateRange | Date[]",
    def: "undefined",
    desc: "The selected value. Its shape follows the mode.",
  },
  {
    name: "onSelect",
    type: "(value) => void",
    def: "undefined",
    desc: "Called when the selection changes.",
  },
  {
    name: "disabled",
    type: "Matcher | Matcher[]",
    def: "undefined",
    desc: "Days that cannot be selected, by date, range, or weekday.",
  },
  {
    name: "numberOfMonths",
    type: "number",
    def: "1",
    desc: "How many months to render side by side.",
  },
  {
    name: "autoFocus",
    type: "boolean",
    def: "false",
    desc: "Move focus into the grid on mount. Date Picker sets this when it opens.",
  },
] as const;

const doCode = `<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>`;

const installCode = `"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export function BookingDate() {
  const [date, setDate] = React.useState<Date>();
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border border-border-default"
    />
  );
}`;

export default function CalendarPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Calendar</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        An always-visible grid for picking dates inline. It supports single
        dates, ranges, and multiple selections, with disabled days and a today
        indicator.
      </p>

      <div className="mt-4 rounded-lg border border-border-default bg-background-accent p-4">
        <p className="text-small text-text-default">
          Calendar is the primitive that Date Picker is built on. Date Picker
          wraps this same grid in a Popover behind a button; here the grid stands
          on its own, always visible.
        </p>
      </div>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <CalendarSingle />
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens. Pick a day, page months, no{" "}
          <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-6">
              <CalendarSingle />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Calendar mode="single" />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-center justify-center bg-background-subtle p-6">
              <CalendarRange />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Calendar mode="range" />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default lg:col-span-2">
            <div className="flex items-center justify-center bg-background-subtle p-6">
              <CalendarDisabled />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={`<Calendar mode="single" disabled={{ dayOfWeek: [0, 6] }} />`}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          Single date, a date range, and a calendar with weekends disabled.
          Multiple-date selection uses <code className="font-mono">mode=&quot;multiple&quot;</code>.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex flex-col items-center gap-3 rounded-lg border border-border-default bg-background-subtle p-6">
            <CalendarSingle />
            <p className="text-xs text-text-subtle">
              Selected fills with the brand primary; today carries the accent
              tint.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-lg border border-border-default bg-background-subtle p-6">
            <CalendarRange />
            <p className="text-xs text-text-subtle">
              A range fills its span with the accent; disabled days dim and a day
              tints on hover.
            </p>
          </div>
        </div>
        <p className="mt-2 text-small">
          Default, day hover, day selected, day in range, day disabled, and the
          today indicator are all visible in the live grids above.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-xs font-medium text-text-subtle">
              <div>Prop</div>
              <div>Type</div>
              <div>Default</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {props.map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 px-4 py-3"
                >
                  <div className="font-mono text-sm text-text-default">
                    {p.name}
                  </div>
                  <div className="font-mono text-xs text-text-subtle">
                    {p.type}
                  </div>
                  <div className="font-mono text-xs text-text-subtle">
                    {p.def}
                  </div>
                  <div className="text-sm text-text-subtle">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Don't and Do */}
      <section id="do-dont" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">
          Don&apos;t and Do
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t drop a full inline Calendar into a tight space like a
              form row or a toolbar. The grid is large and pushes other content
              around. When room is limited, use a Date Picker, which keeps the
              same grid tucked inside a Popover.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {doCode}
              </code>
            </pre>
          </div>
        </div>
        <p className="mt-2 text-small">
          Use it when picking a date is a primary action on the surface and the
          calendar should always be visible.
        </p>
      </section>

      {/* Copy-paste */}
      <section id="copy-paste" className="mt-12 scroll-mt-8">
        <CodeBlock
          code={installCode}
          className="rounded-lg border border-border-default bg-background-subtle"
        />
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        Cognition v1.2 · June 2026 · Questions? Ask{" "}
        <a
          href="https://distylai.slack.com/team/U07KY4SEFH7"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-text-primary underline-offset-4 hover:underline"
        >
          Tony Yates
        </a>{" "}
        <a
          href="https://distylai.slack.com/archives/C0A22RR2N6P"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-text-primary underline-offset-4 hover:underline"
        >
          #research-and-design
        </a>
      </footer>
    </div>
  );
}
