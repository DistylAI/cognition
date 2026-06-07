import type { Metadata } from "next";
import { CodeBlock } from "@/components/CodeBlock";
import { DataTableDemo } from "./DataTableDemo";

export const metadata: Metadata = {
  title: "Data Table",
  description:
    "Data Table — powerful tables and datagrids built on TanStack Table. The canonical stack at Distyl (DataTable + @tanstack/react-table).",
};

const columnsCode = `import { type ColumnDef } from "@tanstack/react-table";

type Payment = { id: string; status: string; email: string; amount: number };

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting()}>
        Email <ArrowUpDown />
      </Button>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => formatCurrency(row.getValue("amount")),
  },
];`;

const installCode = `import { useDataTable } from "@/platform/components/DataTable/DataTable";
// (or useReactTable directly for a standalone table)

const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  state: { sorting, columnFilters, rowSelection },
  enableRowSelection: true,
});`;

export default function DataTablePage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Data Table</h1>
      <p className="mt-3 max-w-2xl text-body text-text-subtle">
        Powerful tables and datagrids built using TanStack Table. Use it for
        sortable, filterable, selectable rows of structured data.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="rounded-lg border border-border-default bg-background-subtle p-6">
          <div className="rounded-lg border border-border-default bg-background-default p-4">
            <DataTableDemo />
          </div>
        </div>
        <p className="mt-2 text-small">
          Live and interactive — sort by Email, filter, select rows, page. Toggle
          the theme: the header, row borders, hover, and selected-row tint all
          remap from Cognition tokens, no <code className="font-mono">dark:</code>{" "}
          classes.
        </p>
      </section>

      {/* Pattern */}
      <section id="pattern" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Pattern</h3>
        <p className="mb-4 max-w-2xl text-body text-text-subtle">
          A Data Table is <code className="font-mono">columns</code> +{" "}
          <code className="font-mono">data</code> fed to{" "}
          <code className="font-mono">useReactTable</code>, rendered through the
          Cognition <code className="font-mono">Table</code> primitive with{" "}
          <code className="font-mono">flexRender</code>. Define columns
          declaratively:
        </p>
        <CodeBlock
          code={columnsCode}
          className="rounded-lg border border-border-default bg-background-subtle"
        />
        <p className="mt-2 text-small">
          Sorting, filtering, row selection, and pagination are TanStack row
          models you opt into — the markup stays the same.
        </p>
      </section>

      {/* Don't and Do */}
      <section id="do-dont" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Don&apos;t and Do</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t reach for{" "}
              <code className="font-mono">MaterialReactTable</code> or the{" "}
              <code className="font-mono">MUI DataGrid</code> for new tables —
              they pull in MUI, bypass Cognition tokens, and can&apos;t theme
              with the design system. TanStack Table is the canonical stack.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`// Headless TanStack + the Cognition Table primitive
const table = useReactTable({ data, columns, ... });
// render <Table> / <TableRow> / <TableCell>`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Install */}
      <section id="copy-paste" className="mt-12 scroll-mt-8">
        <CodeBlock
          code={installCode}
          className="rounded-lg border border-border-default bg-background-subtle"
        />
        <p className="mt-2 text-small">
          In platform, prefer{" "}
          <code className="font-mono">useDataTable</code> from{" "}
          <code className="font-mono">
            @/platform/components/DataTable
          </code>{" "}
          — it auto-adds the selection column and wires the shared toolbar.
          Standalone tables can call <code className="font-mono">useReactTable</code>{" "}
          directly.
        </p>
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        Built on{" "}
        <code className="font-mono text-text-default">@tanstack/react-table</code>{" "}
        with the Cognition{" "}
        <code className="font-mono text-text-default">Table</code> primitive
        (mirrors fe-distillery{" "}
        <code className="font-mono text-text-default">
          components/ui/table.tsx
        </code>{" "}
        and the platform{" "}
        <code className="font-mono text-text-default">DataTable</code> pattern).
        Raw <code className="font-mono text-text-default">muted</code> /{" "}
        <code className="font-mono text-text-default">primary</code> utilities are
        replaced with Cognition tokens.
      </footer>
    </div>
  );
}
