"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatInput } from "./ChatInput";
import { MessageBubble } from "./MessageBubble";
import { LoadingBubble } from "./LoadingBubble";
import { EmptyState } from "./EmptyState";

type Message = {
  role: "user" | "assistant";
  content: string;
  error?: boolean;
};

interface ChatShellProps {
  systemPrompt?: string;
  placeholder?: string;
  onSend?: (messages: Message[], userMessage: string) => Promise<string>;
}

export function ChatShell({
  systemPrompt,
  placeholder,
  onSend,
}: ChatShellProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  // When an assistant message arrives, bring the TOP of it into view so the
  // reader starts at the beginning of the reply. For user messages, fall back
  // to scrolling to the bottom so the just-sent message stays visible.
  useEffect(() => {
    const last = messages[messages.length - 1];
    if (last?.role === "assistant" && lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  // Keep the loading bubble in view while a reply streams in.
  useEffect(() => {
    if (loading && listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [loading]);

  const handleSend = async (text: string) => {
    if (!text.trim() || loading) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setLoading(true);
    try {
      let reply: string;
      if (onSend) {
        reply = await onSend(next, text);
      } else {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: next, systemPrompt }),
        });
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        reply = data.reply;
      }
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Unknown error";
      setMessages([
        ...next,
        { role: "assistant", content: `Error: ${msg}`, error: true },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col overflow-hidden rounded-xl border border-border-default bg-background-default"
      style={{ height: 560 }}
    >
      <header className="flex shrink-0 items-center justify-between border-b border-border-default px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-background-primary" />
          <span className="text-sm font-medium text-text-default">
            Context view
          </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setMessages([])}
          className="gap-1.5 text-text-subtle"
        >
          <Plus size={12} aria-hidden /> New chat
        </Button>
      </header>

      <div
        ref={listRef}
        className="flex flex-1 flex-col gap-5 overflow-y-auto px-5 py-6"
      >
        {messages.length === 0 && !loading ? (
          <EmptyState onChipClick={handleSend} />
        ) : (
          messages.map((m, i) => (
            <div
              key={i}
              ref={i === messages.length - 1 ? lastMessageRef : undefined}
            >
              <MessageBubble role={m.role} content={m.content} error={m.error} />
            </div>
          ))
        )}
        {loading && <LoadingBubble />}
      </div>

      <div className="shrink-0 border-t border-border-default px-4 py-3">
        <ChatInput
          onSend={handleSend}
          disabled={loading}
          placeholder={placeholder ?? "Ask the context view…"}
        />
      </div>
    </div>
  );
}
