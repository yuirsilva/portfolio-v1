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
import { SunLight } from "iconoir-react";
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
          <SunLight />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={cn(inter.className, "w-56")}>
        <DropdownMenuLabel>Themes</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem value="mono">Mono</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitch;
