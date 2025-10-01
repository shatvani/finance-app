'use client'

import { ThemeContext } from "@/app/theme-context";
import Button from './button';
import {Moon, Sun} from 'lucide-react';
import { useContext, useEffect, useState } from "react";

function DarModeToggle({defaultMode = 'dark'}) {
  const { theme, isDark, setTheme } = useContext(ThemeContext);
  // resolvedDark: SSR-en a context isDark-ját használjuk; mount után frissítjük, ha 'system'
  const [resolvedDark, setResolvedDark] = useState(isDark);

  useEffect(() => {
    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const update = () => setResolvedDark(mq.matches);
      update();
      mq.addEventListener?.("change", update);
      return () => mq.removeEventListener?.("change", update);
    } else {
      setResolvedDark(theme === "dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const next = resolvedDark ? "light" : "dark";
    document.cookie = `theme=${next}; path=/; max-age=31536000; samesite=lax`;
    setTheme(next);
    // frissítsük azonnal a <html> class-át is, hogy ne várjunk re-renderre
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <Button className="hover" variant="ghost" size="sm" onClick={toggleTheme}>
      {resolvedDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </Button>
  )
}

export default DarModeToggle
