import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { messages, systemPrompt } = await req.json();

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY ?? "",
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      system:
        systemPrompt ??
        "You are a helpful AI assistant embedded in Distyl AI's enterprise platform. Be concise and useful. Use fenced code blocks with a language label when showing code.",
      messages,
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: `Anthropic API error: ${res.status}` },
      { status: res.status },
    );
  }

  const data = await res.json();
  const reply = data.content?.[0]?.text ?? "No response.";
  return NextResponse.json({ reply });
}
