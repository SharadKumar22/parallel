"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

import { AnswerValue, Question } from "@/types/questionnaire";


interface MultiSelectQuestionProps {
  question: Question;
  value: string[];
  onChange: (value: string[]) => void;
  otherValue: string;
  onOtherChange: (value: string) => void;
}

export default function MultiSelectQuestion({
  question,
  value,
  onChange,
  otherValue,
  onOtherChange,
}: MultiSelectQuestionProps) {

    function toggleOption(optionId: string) {
        if (value.includes(optionId)) {
            if (optionId === "other") {
    onOtherChange("");
}

            onChange(value.filter((id) => id !== optionId));
        } else {
            onChange([...value, optionId]);
        }
    }

    const isOtherSelected = value.includes("other");

    return (
        <div className="mt-8 space-y-3">
            {question.options?.map((option) => (
                <label
                    key={option.id}
                    className="flex cursor-pointer items-center gap-3 rounded-lg border p-4"
                >
                    <Checkbox
                        checked={value.includes(option.id)}
                        onCheckedChange={() => toggleOption(option.id)}
                    />

                    <span className="text-sm font-medium">
                        {option.label}
                    </span>
                </label>
            ))}
            {isOtherSelected && (
                <div className="mt-6">
                    <Textarea
                        value={otherValue}
                        onChange={(e) => onOtherChange(e.target.value)}
                        placeholder="Tell us what other priority is important to you..."
                        className="min-h-28 resize-none"
                    />
                </div>
            )}
        </div>

    );
}