import type { Metadata } from "next";
import { ChatShell, LoadingBubble } from "@/components/ConversationalUI";
import { CodeBlock } from "@/components/CodeBlock";
import { getMenoSystemPrompt } from "@/lib/meno";
import {
  ChatInputDemo,
  EmptyStateDemo,
  MessageBubbleDemo,
  StatesDemo,
  VariantShell,
} from "./ConversationalUIDemos";

export const metadata: Metadata = {
  title: "Conversational UI",
  description:
    "The canonical AI conversation surface for Distyl products — ChatShell, MessageBubble, ChatInput, and LoadingBubble composed from Cognition components.",
};

const props = [
  {
    name: "systemPrompt",
    type: "string",
    def: "undefined",
    desc: "System prompt forwarded to the API route. Each product context should override this.",
  },
  {
    name: "placeholder",
    type: "string",
    def: '"Ask the context view…"',
    desc: "Input placeholder text.",
  },
  {
    name: "onSend",
    type: "(messages, userMessage) => Promise<string>",
    def: "undefined",
    desc: "Optional escape hatch. If provided, ChatShell calls this instead of /api/chat. Use for products with their own API layer.",
  },
];

const parts = [
  {
    name: "ChatShell",
    desc: "Composes all sub-components. Owns message state, API call, and auto-scroll.",
  },
  {
    name: "MessageBubble",
    desc: "Renders a single user or assistant turn. Parses markdown and fenced code blocks.",
  },
  {
    name: "ChatInput",
    desc: "Auto-resizing Textarea with send Button. Handles Enter-to-send and Shift+Enter newline.",
  },
  {
    name: "LoadingBubble",
    desc: "Assistant thinking state. Uses the Distyl Spinner.",
  },
  {
    name: "EmptyState",
    desc: "Zero-message state with prompt chips.",
  },
];

const doCode = `// Panel — does not block the canvas
<div className="w-96 border-l border-border-default">
  <ChatShell
    systemPrompt="You are analyzing Tower pipeline data."
    placeholder="Ask about this pipeline…"
  />
</div>

// With custom API layer (Tower, Platform)
<ChatShell
  onSend={async (messages, userMessage) => {
    const res = await myProductApi.chat(messages);
    return res.reply;
  }}
/>`;

const installCode = `import { ChatShell } from "@/components/ConversationalUI";

export function ContextPanel() {
  return (
    <div className="flex h-full flex-col border-l border-border-default">
      <ChatShell
        systemPrompt="You are analyzing Distyl pipeline data."
        placeholder="Ask about this context…"
      />
    </div>
  );
}`;

const chatInputProps = [
  {
    name: "onSend",
    type: "(message: string) => void",
    def: "required",
    desc: "Called with the trimmed message string on Enter or button click.",
  },
  {
    name: "disabled",
    type: "boolean",
    def: "false",
    desc: "Disables the Textarea and send Button. Set while a response is loading.",
  },
  {
    name: "placeholder",
    type: "string",
    def: '"Ask the context view…"',
    desc: "Input placeholder text.",
  },
];

const messageBubbleProps = [
  {
    name: "role",
    type: '"user" | "assistant"',
    def: "required",
    desc: "Determines alignment, background, and content rendering.",
  },
  {
    name: "content",
    type: "string",
    def: "required",
    desc: "Message text. Assistant role parses inline code and fenced code blocks.",
  },
  {
    name: "error",
    type: "boolean",
    def: "false",
    desc: "Renders an assistant turn in the danger style with an alert icon.",
  },
];

const emptyStateProps = [
  {
    name: "onChipClick",
    type: "(text: string) => void",
    def: "required",
    desc: "Called with the chip label when a prompt chip is clicked. Wire to ChatShell's handleSend or your own send handler.",
  },
];

const chatInputCode = `import { ChatInput } from "@/components/ConversationalUI";

export function MyInput() {
  return (
    <ChatInput
      onSend={(message) => console.log(message)}
      placeholder="Ask something…"
    />
  );
}`;

const messageBubbleCode =
  'import { MessageBubble } from "@/components/ConversationalUI";\n\n' +
  "// User turn\n" +
  '<MessageBubble role="user" content="What are the risk signals?" />\n\n' +
  "// Assistant turn — parses markdown and code blocks automatically\n" +
  "<MessageBubble\n" +
  '  role="assistant"\n' +
  '  content="Here\'s the query:\\n\\n```typescript\\nentities.filter(e => e.riskScore > 0.7)\\n```"\n' +
  "/>";

const loadingBubbleCode = `import { LoadingBubble } from "@/components/ConversationalUI";

// Render while awaiting response
{loading && <LoadingBubble />}`;

const emptyStateCode = `import { EmptyState } from "@/components/ConversationalUI";

<EmptyState
  onChipClick={(text) => handleSend(text)}
/>`;

function PropsTable({
  rows,
}: {
  rows: { name: string; type: string; def: string; desc: string }[];
}) {
  return (
    <div className="mt-4 overflow-x-auto rounded-lg border border-border-default">
      <div className="min-w-[640px]">
        <div className="grid grid-cols-[1.2fr_2fr_1.2fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-xs font-medium text-text-subtle">
          <div>Prop</div>
          <div>Type</div>
          <div>Default</div>
          <div>Description</div>
        </div>
        <div className="divide-y divide-border-default">
          {rows.map((r) => (
            <div
              key={r.name}
              className="grid grid-cols-[1.2fr_2fr_1.2fr_3fr] gap-4 px-4 py-3"
            >
              <div className="font-mono text-sm text-text-default">
                {r.name}
              </div>
              <div className="font-mono text-xs text-text-subtle">{r.type}</div>
              <div className="font-mono text-xs text-text-subtle">{r.def}</div>
              <div className="text-sm text-text-subtle">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ConversationalUIPage() {
  const menoPrompt = getMenoSystemPrompt();
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Conversational UI</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        The canonical AI conversation surface for Distyl products. Composed from
        ChatShell, MessageBubble, ChatInput, and LoadingBubble — each
        independently usable. Not a modal or a drawer. A panel or inline surface
        that supports a full turn-based AI exchange.
      </p>

      <div className="mt-4 rounded-lg border border-border-default bg-background-accent p-4">
        <p className="text-small text-text-default">
          <span className="font-semibold">Distyl-specific.</span> This component
          has no external library counterpart or design-tool source yet. It is
          the canonical pattern for AI chat surfaces across Distyl products —
          Platform, Tower, and future implementations.
        </p>
      </div>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <p className="mb-3 text-small">
          This preview is live — it&apos;s running Meno, Cognition&apos;s
          built-in assistant. Ask it anything about tokens, components, or system
          rules.
        </p>
        <div className="overflow-hidden rounded-lg border border-border-default">
          <ChatShell
            systemPrompt={menoPrompt}
            placeholder="Ask Meno about Cognition..."
          />
        </div>
      </section>

      {/* Variants */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Variants</h3>
        <VariantShell />
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">States</h3>
        <StatesDemo />
        <p className="mt-3 text-small">
          The error state is a danger-styled{" "}
          <code className="font-mono">MessageBubble</code> (the{" "}
          <code className="font-mono">error</code> prop) — alert icon, danger
          border, and danger surface. The message string is set by the catch
          block in <code className="font-mono">ChatShell</code>.
        </p>
      </section>

      {/* API */}
      <section id="anatomy" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>

        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.2fr_2fr_1.2fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-xs font-medium text-text-subtle">
              <div>Prop</div>
              <div>Type</div>
              <div>Default</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {props.map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.2fr_2fr_1.2fr_3fr] gap-4 px-4 py-3"
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

        <div className="mt-4 divide-y divide-border-default rounded-lg border border-border-default">
          {parts.map((p) => (
            <div key={p.name} className="px-4 py-3">
              <span className="font-mono text-sm text-text-default">
                {p.name}
              </span>
              <span className="ml-2 text-sm text-text-subtle">— {p.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-components */}
      <section id="sub-components" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Sub-components</h3>

        <h4 className="mt-10 mb-1 font-mono text-base font-semibold text-text-default">
          ChatInput
        </h4>
        <p className="mb-4 text-sm text-text-subtle">
          Auto-resizing message input with keyboard shortcuts. Composes Textarea
          and Button.
        </p>
        <div className="rounded-lg border border-border-default bg-background-subtle p-6">
          <ChatInputDemo />
        </div>
        <PropsTable rows={chatInputProps} />
        <CodeBlock
          code={chatInputCode}
          className="mt-4 rounded-lg border border-border-default bg-background-subtle"
        />

        <h4 className="mt-10 mb-1 font-mono text-base font-semibold text-text-default">
          MessageBubble
        </h4>
        <p className="mb-4 text-sm text-text-subtle">
          Renders a single conversation turn. User turns are plain text.
          Assistant turns parse markdown and fenced code blocks.
        </p>
        <div className="flex flex-col gap-5 rounded-lg border border-border-default bg-background-subtle p-6">
          <MessageBubbleDemo />
        </div>
        <PropsTable rows={messageBubbleProps} />
        <CodeBlock
          code={messageBubbleCode}
          className="mt-4 rounded-lg border border-border-default bg-background-subtle"
        />

        <h4 className="mt-10 mb-1 font-mono text-base font-semibold text-text-default">
          LoadingBubble
        </h4>
        <p className="mb-4 text-sm text-text-subtle">
          Assistant thinking state. Uses the Distyl Spinner. No props — render it
          while awaiting a response.
        </p>
        <div className="rounded-lg border border-border-default bg-background-subtle p-6">
          <LoadingBubble />
        </div>
        <p className="mt-3 text-small text-text-subtle">
          No props. Render <code className="font-mono">LoadingBubble</code> while{" "}
          <code className="font-mono">loading === true</code> and remove it when
          the reply arrives.
        </p>
        <CodeBlock
          code={loadingBubbleCode}
          className="mt-4 rounded-lg border border-border-default bg-background-subtle"
        />

        <h4 className="mt-10 mb-1 font-mono text-base font-semibold text-text-default">
          EmptyState
        </h4>
        <p className="mb-4 text-sm text-text-subtle">
          Zero-message state with prompt chips. Shown when the message list is
          empty. Chips call onChipClick with the chip text.
        </p>
        <EmptyStateDemo />
        <PropsTable rows={emptyStateProps} />
        <CodeBlock
          code={emptyStateCode}
          className="mt-4 rounded-lg border border-border-default bg-background-subtle"
        />
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
              Don&apos;t render ChatShell inside a Dialog or Sheet. It is a panel
              or inline surface — it does not block the canvas behind it.
              Don&apos;t hardcode a system prompt in the call site — pass it as
              the systemPrompt prop so each context owns its own behaviour.
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
      </section>

      {/* Copy-paste */}
      <section id="copy-paste" className="mt-12 scroll-mt-8">
        <CodeBlock
          code={installCode}
          className="rounded-lg border border-border-default bg-background-subtle"
        />
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        Distyl-specific — no fe-distillery counterpart yet. API route lives at{" "}
        <code className="font-mono text-text-default">
          app/api/chat/route.ts
        </code>{" "}
        and requires{" "}
        <code className="font-mono text-text-default">ANTHROPIC_API_KEY</code> in
        the environment. Model is{" "}
        <code className="font-mono text-text-default">
          claude-sonnet-4-20250514
        </code>{" "}
        with a 1000-token max. Override the API call entirely via the{" "}
        <code className="font-mono text-text-default">onSend</code> prop.
      </footer>
    </div>
  );
}
