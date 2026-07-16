"use client";

import { useEffect, useState } from "react";
const QUESTIONS = [
  "...you chose differently?",
  "...you took the chance?",
  "...you waited?",
  "...you said yes?",
];



export default function IntroSequence() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showTitle, setShowTitle] = useState(false);
    const [showQuestion, setShowQuestion] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
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

        return () => {
            clearTimeout(titleTimer);
            clearTimeout(questionTimer);
            clearTimeout(rotationStartTimer);

            if (rotationInterval) {
                clearInterval(rotationInterval);
            }
        };
    }, []);
    return (
        <section className="flex min-h-screen items-center justify-center pb-24">
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
        <p
  className={`
    mt-6
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
</p>
      </div>
    </section>
  );
}