import { inter } from "@/font/font";
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
        "fixed bottom-12 left-2/4 z-50 flex w-[95%] max-w-[18.125rem] -translate-x-2/4 justify-between rounded-full border border-border bg-card/20 p-1 backdrop-blur-lg supports-[backdrop-blur]:bg-card/80",
      )}
    >
      <div className="flex h-10 flex-1 items-center justify-between">
        {/* <div className="mr-0 md:mr-10 md:flex"> */}
        {/* <div className="md:flex"> */}
        <div className="flex">
          <Link href="/" className="px-1">
            <div className="h-8 w-8 rounded-full bg-foreground"></div>
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
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
