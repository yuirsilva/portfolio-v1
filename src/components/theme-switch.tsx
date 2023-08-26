"use client";

import { Button } from "@/components/ui/button";
import { HalfMoon, SunLight } from "iconoir-react";
import { useTheme } from "next-themes";
import { FC } from "react";

interface ThemeSwitchProps {}

const ThemeSwitch: FC<ThemeSwitchProps> = ({}) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      className="h-full"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunLight className="rotate-0 scale-100 transition-all dark:-rotate-180 dark:scale-0" />
      <HalfMoon className="absolute rotate-180 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeSwitch;
