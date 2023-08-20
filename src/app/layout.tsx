import Clock from "@/components/clock";
import Navbar from "@/components/navbar";
import ThemeProvider from "@/components/theme-provider";
import { inter } from "@/font/font";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const defaultFont = localFont({
  src: [
    {
      path: "../font/EpiceneText-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/EpiceneText-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-default",
});

export const metadata: Metadata = {
  title: "Yuri Silva",
  description: "Front end dev.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="selection:bg-silent selection:text-accent-foreground"
    >
      <body
        className={cn(
          defaultFont.className,
          "min-h-screen bg-background antialiased",
        )}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          disableTransitionOnChange
          defaultTheme="dark"
        >
          <main className="relative flex min-h-screen flex-col">
            <Navbar />
            <Clock />
            <span
              className={cn(
                inter.className,
                "pointer-events-none absolute right-8 top-12 select-none text-xs text-silent sm:fixed",
              )}
            >
              {new Date().toLocaleString("en-US", { year: "numeric" })}
            </span>
            <div className="flex-1">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
