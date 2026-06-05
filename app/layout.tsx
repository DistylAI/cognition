import type { Metadata } from "next";
import { Lato, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cognition — Distyl AI Design System",
    template: "%s · Cognition",
  },
  description:
    "Cognition v1.2 — the canonical design system for Distyl AI. Tokens, component rules, and the current codebase audit.",
};

// Set the theme before first paint to avoid a flash of the wrong theme.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('cognition-theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lato.variable} ${robotoMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-background-default text-text-default">
        <div className="mx-auto flex min-h-screen w-full max-w-[1400px]">
          <Sidebar />
          <div className="flex min-w-0 flex-1 flex-col">
            <MobileNav />
            <main className="min-w-0 flex-1 px-6 py-10 sm:px-10 lg:px-16">
              <div className="mx-auto w-full max-w-3xl">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
