
"use client";
import { SCENES, type Scene } from "@/constants/scene";
import { useEffect, useState } from "react";
const QUESTIONS = [
  "...you chose differently?",
  "...you took the chance?",
  "...you waited?",
  "...you said yes?",
];



interface IntroSequenceProps {
  scene: Scene;
  onComplete: () => void;
}

export default function IntroSequence({
  scene,
  onComplete,
}: IntroSequenceProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showTitle, setShowTitle] = useState(false);
    const [showQuestion, setShowQuestion] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);
    
        useEffect(() => {
            
            let rotationInterval: NodeJS.Timeout;
            let rotationStartTimer: NodeJS.Timeout;

            const titleTimer = setTimeout(() => {
                setShowTitle(true);
            }, 600);

            const questionTimer = setTimeout(() => {
                setShowQuestion(true);


                rotationStartTimer = setTimeout(() => {
                    rotationInterval = setInterval(() => {
  setIsTransitioning(true);

  setTimeout(() => {
    setCurrentQuestion((previous) =>
      (previous + 1) % QUESTIONS.length
    );

    setIsTransitioning(false);
  }, 300);

}, 1700);
                }, 1000);

            }, 1400);

            const finishTimer = setTimeout(() => {
  setIsLeaving(true);

setTimeout(() => {
  onComplete();
}, 700);
}, 9500);

        return () => {
            clearTimeout(titleTimer);
            clearTimeout(questionTimer);
            clearTimeout(rotationStartTimer);
            clearTimeout(finishTimer);

            if (rotationInterval) {
                clearInterval(rotationInterval);
            }
        };
    }, []);
    return (
        <section
  className={`
    fixed inset-0 z-10
    flex items-center justify-center pb-24
    transition-all
    duration-700
    ease-out
    ${
  scene === SCENES.INTRO
    ? "opacity-100 scale-100"
    : scene === SCENES.TRANSITION
      ? "opacity-0 scale-[0.98] pointer-events-none"
      : "hidden"
}
  `}
>
        <div className="text-center">
        <h1
            className={`
                text-6xl md:text-7xl
                font-extralight
                tracking-tight
                leading-none
                text-white/90
                transition-all
                duration-700
                ease-out
                ${
                    showTitle
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                }
  `         }
>
  What if...
</h1>
    <div className="mt-6 h-10 flex items-center justify-center">    <p
  className={`
    text-xl
    md:text-2xl
    font-normal
    text-white/65
    transition-all
    duration-700
    ease-out
    ${
  !showQuestion
    ? "opacity-0 translate-y-2"
    : isTransitioning
      ? "opacity-0 -translate-y-2"
      : "opacity-100 translate-y-0"
}
  `}
>
  {QUESTIONS[currentQuestion]}
</p></div>
      </div>
    </section>
  );
}