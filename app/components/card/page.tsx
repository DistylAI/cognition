import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Card",
  description:
    "Card component — a surface that groups a header, content, and footer. API matches fe-distillery components/ui/card.tsx.",
};

// Illustrative input — the design system has no Input component yet, so the
// playground renders the field shells with tokens to match the Cognition Input.
function FieldShell({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-text-default">{label}</span>
      <div className="flex h-9 items-center rounded-lg border border-border-default bg-background-default px-3 text-sm text-text-subtle">
        {value}
      </div>
    </div>
  );
}

const anatomyCode = `<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Supporting copy.</CardDescription>
  </CardHeader>
  <CardContent>Body content.</CardContent>
  <CardFooter>
    <Button className="w-full">Action</Button>
  </CardFooter>
</Card>`;

const doCode = `// Group related content on one surface
<Card>
  <CardHeader>
    <CardTitle>Monthly usage</CardTitle>
    <CardDescription>Resets on the 1st.</CardDescription>
  </CardHeader>
  <CardContent>{usage}</CardContent>
</Card>`;

const installCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function EventCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  );
}`;

export default function CardPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Card</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        Displays a card with header, content, and footer. Use it to group
        related content and actions on a single bordered surface.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <Card className="w-full max-w-sm">
            <CardHeader className="flex-row items-start justify-between space-y-0">
              <div className="flex flex-col gap-1">
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                  Enter your email below to login to your account.
                </CardDescription>
              </div>
              <Button variant="link" size="sm" className="-mr-2 -mt-1">
                Sign up
              </Button>
            </CardHeader>
            <CardContent className="gap-6">
              <FieldShell label="Email" value="derek.ho@distyl.ai" />
              <FieldShell label="Password" value="••••••••" />
            </CardContent>
            <CardFooter className="flex-col items-stretch gap-2">
              <Button className="w-full">Login</Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </CardFooter>
          </Card>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens — toggle the theme and the surface,
          border, and footer tint remap, no{" "}
          <code className="font-mono">dark:</code> classes.
        </p>
      </section>

      {/* API */}
      <section id="anatomy" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex items-start justify-center rounded-lg border border-border-default bg-background-subtle p-8">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Title</CardTitle>
                <CardDescription>Supporting copy.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-text-default">Body content.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Action</Button>
              </CardFooter>
            </Card>
          </div>
          <CodeBlock
            code={anatomyCode}
            className="rounded-lg border border-border-default bg-background-subtle"
          />
        </div>
        <p className="mt-2 text-small">
          <code className="font-mono">CardHeader</code>,{" "}
          <code className="font-mono">CardContent</code>, and{" "}
          <code className="font-mono">CardFooter</code> are all optional — compose
          only the parts you need. The footer carries the top border and subtle
          tint automatically.
        </p>
      </section>

      {/* Examples */}
      <section id="examples" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Examples</h3>
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          {/* Featured event card with media + badge */}
          <Card className="w-full">
            <div className="aspect-[16/10] w-full bg-background-secondary" />
            <CardHeader className="flex-row items-start justify-between space-y-0">
              <div className="flex flex-col gap-1">
                <CardTitle>Design systems meetup</CardTitle>
                <CardDescription>
                  A practical talk on component APIs, accessibility, and shipping
                  faster.
                </CardDescription>
              </div>
              <Badge variant="secondary">Featured</Badge>
            </CardHeader>
            <CardFooter>
              <Button className="w-full">View Event</Button>
            </CardFooter>
          </Card>

          {/* Small size variant */}
          <Card size="sm" className="w-full">
            <CardHeader>
              <CardTitle>Small Card</CardTitle>
              <CardDescription>
                This card uses the small size variant.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-text-default">
                The card component supports a{" "}
                <code className="font-mono">size</code> prop that can be set to{" "}
                <code className="font-mono">&quot;sm&quot;</code> for a more
                compact appearance.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Action
              </Button>
            </CardFooter>
          </Card>
        </div>
        <p className="mt-2 text-small">
          The featured card pairs the surface with media and a{" "}
          <code className="font-mono">Badge</code>; the compact one is{" "}
          <code className="font-mono">size=&quot;sm&quot;</code>, which tightens
          padding and the title throughout the compound parts.
        </p>
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
              Don&apos;t reach for a Card as a generic{" "}
              <code className="font-mono">div</code> wrapper or hardcode{" "}
              <code className="font-mono">bg-white</code> /{" "}
              <code className="font-mono">border-gray-200</code> on it — that
              breaks dark mode and the rebrand.
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
        <p className="mt-2 text-small">
          Drop-in ready. The surface, border, shadow, and footer tint are baked
          into the component as Cognition tokens — no{" "}
          <code className="font-mono">className</code> needed for standard usage.
        </p>
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        API matches{" "}
        <code className="font-mono text-text-default">
          fe-distillery/components/ui/card.tsx
        </code>{" "}
        — <code className="font-mono text-text-default">Card</code>,{" "}
        <code className="font-mono text-text-default">CardHeader</code>,{" "}
        <code className="font-mono text-text-default">CardTitle</code>,{" "}
        <code className="font-mono text-text-default">CardDescription</code>,{" "}
        <code className="font-mono text-text-default">CardContent</code>,{" "}
        <code className="font-mono text-text-default">CardFooter</code>. The raw
        <code className="font-mono text-text-default"> bg-card</code> /{" "}
        <code className="font-mono text-text-default">text-muted-foreground</code>{" "}
        utilities are replaced with Cognition tokens, and a{" "}
        <code className="font-mono text-text-default">size</code> prop is added.
      </footer>
    </div>
  );
}
