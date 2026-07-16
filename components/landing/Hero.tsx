"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  animate: boolean;
}

export default function Hero({ animate }: HeroProps) {
const [showBrand, setShowBrand] = useState(false);
const [showHeadline, setShowHeadline] = useState(false);
const [showDescription, setShowDescription] = useState(false);
const [showButton, setShowButton] = useState(false);

useEffect(() => {
  if (!animate) {
    return;
  }

  const timers = [
    setTimeout(() => setShowBrand(true), 250),
    setTimeout(() => setShowHeadline(true), 500),
    setTimeout(() => setShowDescription(true), 750),
    setTimeout(() => setShowButton(true), 1000),
  ];

  return () => timers.forEach(clearTimeout);
}, [animate]);
  return (
  <section className="flex min-h-screen items-center justify-center px-6 pb-24">
      <div className="max-w-3xl text-center">

        <p
  className={`
    mb-6
    text-sm
    font-medium
    uppercase
    tracking-[0.4em]
    text-foreground/60

    transition-all
    duration-700
    ease-out

    ${
      showBrand
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4"
    }
  `}
>
  Parallel
</p>

       <h1
  className={`
    text-5xl
    md:text-6xl
    font-light
    tracking-tight
    text-foreground

    transition-all
    duration-700
    ease-out

    ${
      showHeadline
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4"
    }
  `}
>
          Explore the future
          <br />
          before you choose it.
        </h1>

        <p
  className={`
    mx-auto
    mt-8
    max-w-xl
    text-lg
    leading-relaxed
    text-foreground/60
    md:text-xl

    transition-all
    duration-700
    ease-out

    ${
      showDescription
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4"
    }
  `}
>
          Simulate possibilities, not predictions.
        </p>

        <div
  className={`
    mt-12

    transition-all
    duration-700
    ease-out

    ${
      showButton
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4"
    }
  `}
>
          <Button size="lg">
            Start Exploring →
          </Button>
        </div>

      </div>
    </section>
  );
}