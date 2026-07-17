import { Question } from "@/types/questionnaire";

export const QUESTIONS: Question[] = [
  {
    id: "decision",
    step: 1,
    title: "What decision are you trying to make?",
    description:
      "Describe the decision you'd like Parallel to simulate.",
    type: "textarea",
    required: true,
  },
  {
    id: "context",
    step: 2,
    title: "Tell us about your current situation.",
    description:
      "Share any background that could influence this decision.",
    type: "textarea",
    required: true,
  },
  {
    id: "priorities",
    step: 3,
    title: "What matters most in this decision?",
    description:
      "Choose all the priorities that are important to you.",
    type: "multi-select",
    required: true,
    options: [
      { id: "career", label: "Career Growth" },
      { id: "finance", label: "Financial Stability" },
      { id: "learning", label: "Learning" },
      { id: "worklife", label: "Work-Life Balance" },
      { id: "family", label: "Family" },
      { id: "happiness", label: "Happiness" },
      { id: "security", label: "Security" },
      { id: "adventure", label: "Adventure" },
      { id: "flexibility", label: "Flexibility" },
      { id: "other", label: "Other" },
    ],
  },
  {
    id: "constraints",
    step: 4,
    title: "Are there any constraints we should consider?",
    description:
      "Mention anything that could limit or influence your decision.",
    type: "textarea",
    required: false,
  },
  {
    id: "ideal-outcome",
    step: 5,
    title: "If everything went perfectly, what outcome would you hope for?",
    description:
      "Describe what success looks like for you.",
    type: "textarea",
    required: true,
  },
];