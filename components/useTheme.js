"use client";
import { useContext } from "react";
import { ThemeContext } from "@/app/theme-context";

export function useTheme() {
  return useContext(ThemeContext); // { theme, isDark }
}
