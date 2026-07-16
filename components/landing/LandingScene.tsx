"use client";

import { useEffect, useState } from "react";

import IntroSequence from "./IntroSequence";
import Hero from "./Hero";
import Navbar from "./Navbar";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

import { SCENES, type Scene } from "@/constants/scene";

export default function LandingScene() {
  const [scene, setScene] = useState<Scene>(SCENES.INTRO);
  const [showNavbar, setShowNavbar] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setScene(SCENES.HERO);

setTimeout(() => {
  setShowNavbar(true);
}, 800);
    }, 9500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
  key={resolvedTheme}
  initial={{
    opacity: 0.985,
    scale: 0.995,
  }}
  animate={{
    opacity: 1,
    scale: 1,
  }}
  transition={{
    duration: 0.45,
    ease: "easeOut",
  }}
  className="relative min-h-screen overflow-hidden"
>

      <div
        className={`
          absolute inset-0
          transition-all duration-700 ease-out
          ${
            scene === SCENES.INTRO
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >
        <IntroSequence
  scene={scene}
  onComplete={() => {}}
/>
      </div>

      <div
        className={`
          absolute inset-0
          transition-all duration-700 ease-out
          ${
            scene === SCENES.HERO
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >
        <Hero animate={scene === SCENES.HERO} />
      </div>
      <Navbar visible={showNavbar} />

    </motion.section>
  );
}