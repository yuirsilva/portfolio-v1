import Navbar from "@/components/navbar";
import ThemeProvider from "@/components/theme-provider";
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
    <html lang="en" suppressHydrationWarning>
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
          themes={["light", "dark", "gruvbox", "blue", "mono"]}
        >
          <main className="relative flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
