export type QuestionType = "textarea" | "multi-select";
export type AnswerValue = string | string[];

export type Answers = Record<string, AnswerValue>;

export interface QuestionOption {
  id: string;
  label: string;
}

export interface Question {
  id: string;
  step: number;
  title: string;
  description: string;
  type: QuestionType;
  required: boolean;
  options?: QuestionOption[];
}