import { Textarea } from "@/components/ui/textarea";

import { AnswerValue, Question } from "@/types/questionnaire";

interface TextareaQuestionProps {
  question: Question;
  value: string;
  onChange: (value: AnswerValue) => void;
}

export default function TextareaQuestion({
  question,
  value,
  onChange,
}: TextareaQuestionProps) {
  return (
    <Textarea
      value={value}
      placeholder={question.description}
      onChange={(e) => onChange(e.target.value)}
      className="mt-8 min-h-40 resize-none"
    />
  );
}