"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative"
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
    >
      <AnimatePresence mode="wait">
  <motion.div
    key={isDark ? "sun" : "moon"}
    initial={{
      opacity: 0,
      rotate: -180,
      scale: 0.6,
    }}
    animate={{
      opacity: 1,
      rotate: 0,
      scale: 1,
    }}
    exit={{
      opacity: 0,
      rotate: 180,
      scale: 0.6,
    }}
    transition={{
      duration: 0.35,
      ease: "easeInOut",
    }}
  >
    {isDark ? (
      <Sun className="h-5 w-5" />
    ) : (
      <Moon className="h-5 w-5" />
    )}
  </motion.div>
</AnimatePresence>
    </Button>
  );
}