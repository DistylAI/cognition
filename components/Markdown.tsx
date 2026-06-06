import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Flatten a heading's React children down to plain text so we can slugify it.
function nodeText(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeText).join("");
  if (node && typeof node === "object" && "props" in node) {
    return nodeText((node as { props: { children?: React.ReactNode } }).props.children);
  }
  return "";
}

// Stable anchor id from heading text. Drops leading section numbers ("1. ") so
// "## 1. Executive Summary" → "executive-summary".
export function slug(text: string): string {
  return text
    .toLowerCase()
    .replace(/^[\d.\s]+/, "")
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Styled Markdown — every element maps to Cognition semantic tokens, so the
// rendered docs are themselves a demonstration of the system (and dark mode
// works with zero dark: classes).
export function Markdown({ content }: { content: string }) {
  return (
    <div className="cognition-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mt-0 mb-3 text-h2 text-text-default">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2
              id={slug(nodeText(children))}
              className="mt-12 mb-4 scroll-mt-8 border-b border-border-default pb-2 text-h3 text-text-default"
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3
              id={slug(nodeText(children))}
              className="mt-8 mb-3 scroll-mt-8 text-h4 text-text-default"
            >
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="my-4 text-body">{children}</p>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              className="font-bold text-text-primary underline decoration-border-primary/40 underline-offset-2 hover:decoration-border-primary"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="my-4 list-disc pl-6 text-list text-text-default marker:text-text-subtle">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 list-decimal pl-6 text-list text-text-default marker:text-text-subtle">
              {children}
            </ol>
          ),
          li: ({ children }) => <li>{children}</li>,
          strong: ({ children }) => (
            <strong className="font-bold text-text-default">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          hr: () => <hr className="my-10 border-border-default" />,
          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-4 border-border-primary bg-background-accent px-4 py-2 text-blockquote text-text-default">
              {children}
            </blockquote>
          ),
          code: ({ className, children }) => {
            const isBlock = className?.includes("language-");
            if (isBlock) {
              return (
                <code className="text-code text-text-default">
                  {children}
                </code>
              );
            }
            return (
              <code className="rounded-sm border border-border-subtle bg-background-secondary px-1.5 py-0.5 text-inline-code text-text-default">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="my-6 overflow-x-auto rounded-lg border border-border-default bg-background-subtle p-4">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto rounded-lg border border-border-default">
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-background-secondary">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="border-b border-border-default px-4 py-2.5 text-left text-xs font-semibold text-text-default">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-border-subtle px-4 py-2.5 align-top text-xs font-normal text-text-default">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
