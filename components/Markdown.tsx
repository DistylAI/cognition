import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
            <h1 className="mt-0 mb-3 text-3xl font-bold tracking-tight text-text-default">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-12 mb-4 border-b border-border-default pb-2 text-2xl font-bold tracking-tight text-text-default">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-8 mb-3 text-lg font-bold text-text-default">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="my-4 leading-7 text-text-default">{children}</p>
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
            <ul className="my-4 list-disc space-y-2 pl-6 text-text-default marker:text-text-subtle">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 list-decimal space-y-2 pl-6 text-text-default marker:text-text-subtle">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="leading-7">{children}</li>,
          strong: ({ children }) => (
            <strong className="font-bold text-text-default">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          hr: () => <hr className="my-10 border-border-default" />,
          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-4 border-border-primary bg-background-accent px-4 py-2 text-text-default">
              {children}
            </blockquote>
          ),
          code: ({ className, children }) => {
            const isBlock = className?.includes("language-");
            if (isBlock) {
              return (
                <code className="font-mono text-sm text-text-default">
                  {children}
                </code>
              );
            }
            return (
              <code className="rounded-sm border border-border-subtle bg-background-secondary px-1.5 py-0.5 font-mono text-[0.85em] text-text-primary">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="my-6 overflow-x-auto rounded-lg border border-border-default bg-background-subtle p-4 text-sm leading-6">
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
            <th className="border-b border-border-default px-4 py-2.5 text-left font-bold text-text-default">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-border-subtle px-4 py-2.5 align-top text-text-default">
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
