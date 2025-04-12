"use client";
import { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes"; // Importación corregida

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={props.defaultTheme}>{children}</div>;
  }

  return (
    <NextThemesProvider
      {...props}
      storageKey="portfolio-theme"
      disableTransitionOnChange
      enableColorScheme
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  );
}
