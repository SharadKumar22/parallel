"use client";

import { Button } from "@/components/ui/button";
import JourneyProgress from "./JourneyProgress";

import QuestionnaireLayout from "./QuestionnaireLayout";
import QuestionRenderer from "./QuestionRenderer";

import { QUESTIONS } from "@/constants/questionnaire";
import { AnswerValue, Answers } from "@/types/questionnaire";

import { saveSession } from "@/store/session";
import { useRouter } from "next/navigation";

import { useEffect, useRef, useState } from "react";
import type { RenderZone } from "@/lib/render-zones";

interface QuestionnaireProps {
  onZonesChange: (zones: RenderZone[]) => void;
}

export default function Questionnaire({
  onZonesChange,
}: QuestionnaireProps) {
  const [currentStep, setCurrentStep] = useState(0)

const cardRef = useRef<HTMLElement>(null);

  const router = useRouter();

  const [answers, setAnswers] = useState<Answers>({
    decision: "",
    context: "",
    priorities: [],
    prioritiesOther: "",
    constraints: "",
    "ideal-outcome": "",
  });
  const currentQuestion = QUESTIONS[currentStep];

  useEffect(() => {
  if (!cardRef.current) return;

  const rect = cardRef.current.getBoundingClientRect();

  onZonesChange([
    {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    },
  ]);
}, [onZonesChange]);

  function goNext() {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep((step) => step + 1);
      return;
    }

    saveSession(answers);

    router.push("/simulation");
  }

  function goBack() {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  }

  function handleAnswerChange(value: AnswerValue) {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  }

  function handleOtherChange(value: string) {
    setAnswers((prev) => ({
      ...prev,
      prioritiesOther: value,
    }));
  }
  function getCurrentQuestionValidation() {
    const answer = answers[currentQuestion.id];

    if (currentQuestion.type === "textarea") {
      const text = typeof answer === "string" ? answer.trim() : "";

      if (!text) {
        return {
          valid: false,
          message: `Please answer this question to continue.`,
        };
      }
    }
    if (currentQuestion.type === "multi-select") {
      const selected = Array.isArray(answer) ? answer : [];

      if (selected.length === 0) {
        return {
          valid: false,
          message: "Please select at least one priority.",
        };
      }
      const otherText = answers.prioritiesOther.trim();
      if (selected.includes("other") && !otherText) {
        return {
          valid: false,
          message: "Please describe your custom priority.",
        };
      }
    }

    return {
      valid: true,
      message: "",
    };
  }

  const validation = getCurrentQuestionValidation();

  return (

    <QuestionnaireLayout>

      <section
  ref={cardRef}
  className="
    relative
    w-full
    max-w-3xl
    overflow-hidden
    rounded-3xl

    border
    
    border-white/[0.12]

    shadow-[0_20px_50px_rgba(0,0,0,0.35)]
  "
>
       <div
  className="
    absolute
    inset-0

    bg-zinc-50/65
    dark:bg-zinc-900/40

    backdrop-blur-2xl
    backdrop-saturate-150
  "
/>
<div
  className="
    pointer-events-none
    absolute
    inset-0

    bg-gradient-to-b
    from-white/[0.08]
    via-transparent
    to-black/[0.10]
  "
/>

<div
  className="
    pointer-events-none
    absolute
    inset-[1px]
    rounded-[inherit]

    shadow-[inset_0_1px_rgba(255,255,255,0.10)]
  "
/>
        <div className="relative z-10 p-8">
          <h1 className="text-3xl font-bold">
            {currentQuestion.title}
          </h1>

          <div className="mt-8">
            <p className="text-zinc-600 dark:text-zinc-400">
  {currentQuestion.description}
</p>
          </div>

          <div className="mt-10">
            <QuestionRenderer
              question={currentQuestion}
              value={answers[currentQuestion.id]}
              otherValue={answers.prioritiesOther}
              onChange={handleAnswerChange}
              onOtherChange={handleOtherChange}
            />
          </div>

          {!validation.valid && (
            <p className="mt-8 text-sm text-destructive">
              {validation.message}
            </p>
          )}

          <div className="mt-8 flex items-center justify-between">
            {currentStep > 0 ? (
              <Button variant="outline" onClick={goBack}>
                Back
              </Button>
            ) : (
              <div />
            )}

            <Button onClick={goNext} disabled={!validation.valid}>
              {currentStep === QUESTIONS.length - 1
                ? "Start Simulation"
                : "Continue"}
            </Button>
          </div>
          <div className="mt-10">
            <JourneyProgress
              currentStep={currentStep}
              totalSteps={QUESTIONS.length}
            />
          </div>
        </div>
      </section>
    </QuestionnaireLayout>

  );
}