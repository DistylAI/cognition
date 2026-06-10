import type { Metadata } from "next";
import { CodeBlock } from "@/components/CodeBlock";
import { AccountMenu, ViewMenu } from "./DropdownDemos";

export const metadata: Metadata = {
  title: "Dropdown Menu",
  description:
    "Dropdown Menu — a menu of actions or options triggered by a button. API matches fe-distillery components/ui/dropdown-menu.tsx.",
};

const anatomyCode = `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start" className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <User />
      Profile
      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`;

const installCode = `import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";`;

export default function DropdownMenuPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Dropdown Menu</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        Displays a menu of actions or options triggered by a button. Use it for
        contextual actions, account menus, and view toggles.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex min-h-[20rem] items-start justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <AccountMenu />
        </div>
        <p className="mt-2 text-small">
          Live and interactive — open it, then toggle the theme. The panel,
          item focus highlight, and separators all remap from Cognition tokens,
          no <code className="font-mono">dark:</code> classes. Focus is trapped
          and arrow keys navigate (Radix).
        </p>
      </section>

      {/* API */}
      <section id="anatomy" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>
        <CodeBlock
          code={anatomyCode}
          className="rounded-lg border border-border-default bg-background-subtle"
        />
        <p className="mt-2 text-small">
          <code className="font-mono">DropdownMenuLabel</code>,{" "}
          <code className="font-mono">DropdownMenuSeparator</code>, and{" "}
          <code className="font-mono">DropdownMenuShortcut</code> structure the
          panel; a leading Lucide icon in an{" "}
          <code className="font-mono">Item</code> is sized automatically.
        </p>
      </section>

      {/* Examples */}
      <section id="examples" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">
          Checkbox &amp; radio items
        </h3>
        <div className="flex min-h-[20rem] items-start justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <ViewMenu />
        </div>
        <p className="mt-2 text-small">
          <code className="font-mono">DropdownMenuCheckboxItem</code> and{" "}
          <code className="font-mono">DropdownMenuRadioGroup</code> /{" "}
          <code className="font-mono">RadioItem</code> hold selection state with
          token-driven check and dot indicators.
        </p>
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
              Don&apos;t import{" "}
              <code className="font-mono">@radix-ui/react-dropdown-menu</code>{" "}
              directly and restyle it inline — that&apos;s how unstyled,
              off-token menus creep in. Use the Cognition wrapper. And
              don&apos;t use it for primary navigation; that&apos;s a nav or a
              Select.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`// Import the Cognition wrapper, not Radix directly
import { DropdownMenu } from "@/components/ui/dropdown-menu";`}
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
          Built on Radix Dropdown Menu — keyboard navigation, typeahead, focus
          trapping, and submenus come for free. Compose only the parts you need.
        </p>
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        API matches{" "}
        <code className="font-mono text-text-default">
          fe-distillery/components/ui/dropdown-menu.tsx
        </code>{" "}
        — the full set (
        <code className="font-mono text-text-default">DropdownMenu</code>,{" "}
        <code className="font-mono text-text-default">Trigger</code>,{" "}
        <code className="font-mono text-text-default">Content</code>,{" "}
        <code className="font-mono text-text-default">Item</code>,{" "}
        <code className="font-mono text-text-default">CheckboxItem</code>,{" "}
        <code className="font-mono text-text-default">RadioGroup</code>,{" "}
        <code className="font-mono text-text-default">Sub*</code>, …). The raw{" "}
        <code className="font-mono text-text-default">bg-popover</code> /{" "}
        <code className="font-mono text-text-default">bg-accent</code> /{" "}
        <code className="font-mono text-text-default">bg-muted</code> utilities
        are replaced with Cognition tokens.
      </footer>
    </div>
  );
}
