export type QuestionType = "textarea" | "multi-select";
export type AnswerValue = string | string[];

export interface Answers {
  decision: string;
  context: string;
  priorities: string[];
  prioritiesOther: string;
  constraints: string;
  "ideal-outcome": string;
}

export interface QuestionOption {
  id: string;
  label: string;
}

export type QuestionId =
  | "decision"
  | "context"
  | "priorities"
  | "constraints"
  | "ideal-outcome";

export interface Question {
  id: QuestionId;
  step: number;
  title: string;
  description: string;
  type: QuestionType;
  required: boolean;
  options?: QuestionOption[];
}