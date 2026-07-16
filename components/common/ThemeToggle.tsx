"use client";

import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
  return (
    <Button
  variant="ghost"
  size="icon"
  onClick={() =>
    setTheme(theme === "dark" ? "light" : "dark")
  }
>
  <Sun className="h-5 w-5" />
</Button>
  );
}