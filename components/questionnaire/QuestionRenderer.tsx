import { Question, AnswerValue } from "@/types/questionnaire";

import TextareaQuestion from "./TextareaQuestion";
import MultiSelectQuestion from "./MultiSelectQuestion";

interface QuestionRendererProps {
  question: Question;
  value: AnswerValue | undefined;
  otherValue: string;
  onChange: (value: AnswerValue) => void;
  onOtherChange: (value: string) => void;
}

export default function QuestionRenderer({
  question,
  value,
  otherValue,
  onChange,
  onOtherChange,
}: QuestionRendererProps) {
  switch (question.type) {
    case "textarea":
      return (
        <TextareaQuestion
          question={question}
          value={typeof value === "string" ? value : ""}
          onChange={onChange}
        />
      );

    case "multi-select":
  return (
    <MultiSelectQuestion
      question={question}
      value={Array.isArray(value) ? value : []}
      onChange={(newValue) => onChange(newValue)}
      otherValue={otherValue}
      onOtherChange={onOtherChange}
    />
  );

    default:
  throw new Error(
    `Unsupported question type: ${question.type}`
  );
  }
}