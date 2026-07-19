"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import QuestionnaireLayout from "./QuestionnaireLayout";
import QuestionRenderer from "./QuestionRenderer";

import { QUESTIONS } from "@/constants/questionnaire";
import { AnswerValue, Answers } from "@/types/questionnaire";

import { saveSession } from "@/store/session";
import { useRouter } from "next/navigation";

export default function Questionnaire() {
  const [currentStep, setCurrentStep] = useState(0);

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
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  return (

    <QuestionnaireLayout>

      <section className="w-full max-w-3xl rounded-3xl border p-8">
        <div className="mb-8">
          <Progress value={progress} />
        </div>
        <h1 className="text-3xl font-bold">
          {currentQuestion.title}
        </h1>

        <p className="mt-2 text-muted-foreground">
          Step {currentQuestion.step} of {QUESTIONS.length}
        </p>

        <div className="mt-8">
          <p className="text-muted-foreground">
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

        <div className="mt-4 flex items-center justify-between">
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
      </section>
    </QuestionnaireLayout>

  );
}