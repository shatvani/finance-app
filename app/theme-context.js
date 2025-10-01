"use client";
import { createContext } from "react";

export const ThemeContext = createContext({
  theme: "light",           // "light" | "dark" | "system"
  isDark: false,            // kényelmi flag
  setTheme: () => {},
});
