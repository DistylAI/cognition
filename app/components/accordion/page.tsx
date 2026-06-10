import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Accordion",
  description:
    "Accordion component — a vertically stacked set of interactive headings that each reveal a section of content. API matches fe-distillery components/ui/accordion.tsx.",
};

const faqs = [
  {
    q: "How do I reset my password?",
    a: "Click Forgot Password on the login page, enter your email address, and we'll send you a link to reset it. The link expires in 24 hours.",
  },
  {
    q: "Can I change my subscription plan?",
    a: "Yes — upgrade or downgrade at any time from Billing. Changes are prorated against your current cycle.",
  },
  {
    q: "What payment methods do you accept?",
    a: "All major credit cards, ACH bank transfer, and invoicing on annual Enterprise plans.",
  },
] as const;

const props = [
  {
    name: "type",
    type: '"single" | "multiple"',
    def: "required",
    desc: "single allows one open item at a time; multiple lets several stay open.",
  },
  {
    name: "collapsible",
    type: "boolean",
    def: "false",
    desc: "single only — lets the open item close again so all can be collapsed.",
  },
  {
    name: "defaultValue",
    type: "string | string[]",
    def: "undefined",
    desc: "Item value(s) open on mount. Use value + onValueChange to control it.",
  },
  {
    name: "AccordionItem value",
    type: "string",
    def: "required",
    desc: "Unique id for the item — what type / defaultValue reference.",
  },
  {
    name: "AccordionItem disabled",
    type: "boolean",
    def: "false",
    desc: "Disables the trigger; it dims to 50% and stops responding.",
  },
] as const;

const basicCode = `<Accordion type="single" collapsible defaultValue="item-0">
  <AccordionItem value="item-0">
    <AccordionTrigger>How do I reset my password?</AccordionTrigger>
    <AccordionContent>Click Forgot Password…</AccordionContent>
  </AccordionItem>
  {/* …more items */}
</Accordion>`;

const borderedCode = `<Accordion
  type="single"
  collapsible
  className="rounded-lg border border-border-default"
>
  <AccordionItem value="item-0" className="px-4 last:border-b-0">
    <AccordionTrigger>How does billing work?</AccordionTrigger>
    <AccordionContent>We offer monthly and annual plans…</AccordionContent>
  </AccordionItem>
</Accordion>`;

const cardCode = `<Card>
  <CardHeader>
    <CardTitle>Subscription &amp; Billing</CardTitle>
    <CardDescription>Common questions about your account.</CardDescription>
  </CardHeader>
  <CardContent>
    <Accordion type="single" collapsible>
      <AccordionItem value="item-0">…</AccordionItem>
    </Accordion>
  </CardContent>
</Card>`;

const multipleCode = `<Accordion type="multiple" defaultValue={["item-0", "item-1"]}>
  …
</Accordion>`;

const disabledCode = `<AccordionItem value="item-1" disabled>
  <AccordionTrigger>Can I change my plan?</AccordionTrigger>
</AccordionItem>`;

const installCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="reset">
        <AccordionTrigger>How do I reset my password?</AccordionTrigger>
        <AccordionContent>
          Click Forgot Password on the login page…
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`;

function BasicAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-0"
      className="w-full max-w-md"
    >
      {faqs.map((f, i) => (
        <AccordionItem key={f.q} value={`item-${i}`}>
          <AccordionTrigger>{f.q}</AccordionTrigger>
          <AccordionContent className="text-text-subtle">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default function AccordionDocsPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Accordion</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A vertically stacked set of interactive headings that each reveal a
        section of content. Built on Radix — keyboard accessible, with{" "}
        <code className="font-mono">type</code> controlling whether one or many
        sections stay open.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-start justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <BasicAccordion />
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens — item borders, the chevron, and
          text remap on theme change, no{" "}
          <code className="font-mono">dark:</code> classes. Expand/collapse uses
          the <code className="font-mono">animate-accordion-*</code> utilities.
        </p>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Variants</h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-start justify-center bg-background-subtle p-8">
              <BasicAccordion />
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={basicCode}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-start justify-center bg-background-subtle p-8">
              <Accordion
                type="single"
                collapsible
                defaultValue="b-0"
                className="w-full max-w-md rounded-lg border border-border-default"
              >
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={f.q}
                    value={`b-${i}`}
                    className="px-4 last:border-b-0"
                  >
                    <AccordionTrigger>{f.q}</AccordionTrigger>
                    <AccordionContent className="text-text-subtle">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={borderedCode}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-start justify-center bg-background-subtle p-8">
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle>Subscription &amp; Billing</CardTitle>
                  <CardDescription>
                    Common questions about your account, plans, and payments.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible defaultValue="c-0">
                    {faqs.map((f, i) => (
                      <AccordionItem
                        key={f.q}
                        value={`c-${i}`}
                        className="last:border-b-0"
                      >
                        <AccordionTrigger>{f.q}</AccordionTrigger>
                        <AccordionContent className="text-text-subtle">
                          {f.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={cardCode}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          The base accordion is borderless — items are divided by a single rule.
          Wrap it in a rounded border for a self-contained block, or drop it into
          a <code className="font-mono">Card</code> alongside a header.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-start justify-center bg-background-subtle p-8">
              <Accordion
                type="multiple"
                defaultValue={["m-0", "m-1"]}
                className="w-full max-w-md"
              >
                {faqs.map((f, i) => (
                  <AccordionItem key={f.q} value={`m-${i}`}>
                    <AccordionTrigger>{f.q}</AccordionTrigger>
                    <AccordionContent className="text-text-subtle">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={multipleCode}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="flex items-start justify-center bg-background-subtle p-8">
              <Accordion
                type="single"
                collapsible
                className="w-full max-w-md"
              >
                <AccordionItem value="d-0">
                  <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                  <AccordionContent className="text-text-subtle">
                    {faqs[0].a}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="d-1" disabled>
                  <AccordionTrigger>
                    Can I change my subscription plan?
                  </AccordionTrigger>
                  <AccordionContent className="text-text-subtle">
                    {faqs[1].a}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="border-t border-border-default p-3">
              <CodeBlock
                code={disabledCode}
                size="sm"
                className="rounded-md border border-border-subtle bg-background-subtle"
              />
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          <code className="font-mono">type=&quot;multiple&quot;</code> lets
          several sections stay open at once; a{" "}
          <code className="font-mono">disabled</code> item dims to 50% and stops
          toggling. An open trigger rotates its chevron 180°.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.4fr_1.6fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-xs font-medium text-text-subtle">
              <div>Prop</div>
              <div>Type</div>
              <div>Default</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {props.map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.4fr_1.6fr_1fr_3fr] gap-4 px-4 py-3"
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
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Don&apos;t and Do</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t hide content a user always needs behind an accordion,
              and don&apos;t nest interactive controls in the trigger — the whole
              header is the toggle. Reach for it to condense long, optional
              sections like an FAQ, not to bury primary content.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`<Accordion type="single" collapsible>
  <AccordionItem value="reset">
    <AccordionTrigger>How do I reset?</AccordionTrigger>
    <AccordionContent>Click Forgot Password…</AccordionContent>
  </AccordionItem>
</Accordion>`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Copy-paste */}
      <section id="copy-paste" className="mt-12 scroll-mt-8">
        <CodeBlock
          code={installCode}
          className="rounded-lg border border-border-default bg-background-subtle"
        />
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        API matches{" "}
        <code className="font-mono text-text-default">
          fe-distillery/components/ui/accordion.tsx
        </code>{" "}
        — <code className="font-mono text-text-default">Accordion</code>,{" "}
        <code className="font-mono text-text-default">AccordionItem</code>,{" "}
        <code className="font-mono text-text-default">AccordionTrigger</code>,{" "}
        <code className="font-mono text-text-default">AccordionContent</code>.
        The bare border and muted chevron are replaced with Cognition tokens; the
        bordered and in-card layouts are compositions.
      </footer>
    </div>
  );
}
