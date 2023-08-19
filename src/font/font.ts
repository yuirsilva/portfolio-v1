import localFont from "next/font/local";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const display = localFont({
  src: "./EpiceneDisplay-Medium.woff2",
  variable: "--font-display",
});

export { inter, display };
