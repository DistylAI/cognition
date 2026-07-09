import { Spinner } from "@/components/ui/spinner";

export function LoadingBubble() {
  return (
    <div className="flex flex-col items-start gap-1">
      <p className="px-0.5 text-caption">Meno</p>
      <div className="flex items-center gap-2 rounded-xl rounded-bl-sm border border-border-default bg-background-subtle px-4 py-3">
        <Spinner size="sm" />
        <span className="text-sm text-text-subtle">Thinking…</span>
      </div>
    </div>
  );
}
