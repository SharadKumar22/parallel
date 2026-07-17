"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import QuestionnaireLayout from "./QuestionnaireLayout";
import QuestionRenderer from "./QuestionRenderer";

import { QUESTIONS } from "@/constants/questionnaire";
import { AnswerValue, Answers } from "@/types/questionnaire";
export default function Questionnaire() {
    const [currentStep, setCurrentStep] = useState(0);

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
  }
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
  return (
    <QuestionnaireLayout>
      <section className="w-full max-w-3xl rounded-3xl border p-8">
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
  otherValue={answers.prioritiesOther as string}
  onChange={handleAnswerChange}
  onOtherChange={handleOtherChange}
/>
</div>

<div className="mt-12 flex items-center justify-between">
  {currentStep > 0 ? (
    <Button variant="outline" onClick={goBack}>
      Back
    </Button>
  ) : (
    <div />
  )}

  <Button onClick={goNext}>
    {currentStep === QUESTIONS.length - 1
      ? "Start Simulation"
      : "Continue"}
  </Button>
</div>
      </section>
    </QuestionnaireLayout>
  );
}