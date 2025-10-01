"use client";
import { useState, useMemo } from "react";
import { ThemeContext } from "@/app/theme-context";

export function ThemeProvider({ children, initialTheme, initialIsDark }) {
  const [theme, setTheme] = useState(initialTheme);
  const isDark = theme === "dark" || (theme === "system" ? initialIsDark : false);

  const value = useMemo(() => ({ theme, isDark, setTheme }), [theme, isDark]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
