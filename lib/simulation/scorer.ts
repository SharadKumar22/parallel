import { Answers } from "@/types/questionnaire";
import { ScenarioScore } from "@/types/simulation";

export function calculateScores(
    answers: Answers
): ScenarioScore {
    const scores: ScenarioScore = {
        balanced: 50,
        ambitious: 50,
        safe: 50,
    };

    for (const priority of answers.priorities) {
        switch (priority) {
            case "career":
                scores.ambitious += 10;
                scores.balanced += 5;
                break;

            case "finance":
                scores.safe += 8;
                scores.balanced += 6;
                break;

            case "learning":
                scores.ambitious += 8;
                scores.balanced += 4;
                break;

            case "worklife":
                scores.safe += 8;
                scores.balanced += 8;
                break;

            case "family":
                scores.safe += 10;
                scores.balanced += 5;
                break;

            case "happiness":
                scores.balanced += 8;
                scores.safe += 5;
                break;

            case "security":
                scores.safe += 12;
                scores.balanced += 4;
                break;

            case "adventure":
                scores.ambitious += 12;
                scores.balanced += 3;
                break;

            case "flexibility":
                scores.balanced += 8;
                scores.ambitious += 4;
                break;

            case "other":
                scores.balanced += 2;
                break;
        }
    }

    return scores;
}