import { display, inter } from "@/font/font";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import ThemeSwitch from "./theme-switch";
import { buttonVariants } from "./ui/button";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header
      className={cn(
        inter.className,
        "fixed bottom-12 left-2/4 z-50 flex w-fit -translate-x-2/4 justify-between rounded-lg border border-border bg-card/20 p-1 backdrop-blur supports-[backdrop-blur]:bg-card/60",
      )}
    >
      <div className="flex h-10 items-center">
        <div className="mr-10 hidden md:flex">
          <Link href="/" className={cn(display.className, "p-2 text-4xl")}>
            y
          </Link>
        </div>
        <nav className="flex h-full items-center [&_a]:h-full">
          <Link className={buttonVariants({ variant: "ghost" })} href="/about">
            About
          </Link>
          <a
            className={buttonVariants({ variant: "ghost" })}
            href="mailto:yuxipersonal@gmail.com"
          >
            Connect
          </a>
        </nav>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Navbar;
