"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { inter } from "@/font/font";
import { cn } from "@/lib/utils";
import { HalfMoon, SunLight } from "iconoir-react";
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

interface ThemeSwitchProps {}

const ThemeSwitch: FC<ThemeSwitchProps> = ({}) => {
  const { theme, setTheme } = useTheme();
  const [position, setPosition] = useState<string>(theme!);

  useEffect(() => setTheme(position), [position, setTheme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={inter.className}>
        <Button variant="ghost" className="h-full">
          <SunLight className="rotate-0 scale-100 transition-all dark:-rotate-180 dark:scale-0" />
          <HalfMoon className="absolute rotate-180 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={cn(inter.className, "w-56")}>
        <DropdownMenuLabel>Themes</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitch;
