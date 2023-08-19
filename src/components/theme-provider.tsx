"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { FC } from "react";

interface NextThemeProvider extends ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: FC<NextThemeProvider> = ({ children, ...props }) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
