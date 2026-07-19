import { Answers } from "@/types/questionnaire";
import {
    SimulationResult,
} from "@/types/simulation";
import { calculateScores } from "./scorer";

export function runSimulation(
    answers: Answers
): SimulationResult {
    const scores = calculateScores(answers);

    return {
        decision: answers.decision,
        scenarios: [
            {
                id: "balanced",
                title: "Balanced Path",
                summary:
                    "A well-balanced future that aims for steady growth while minimizing major risks.",
                score: scores.balanced,
                strengths: [
                    "Stable progress",
                    "Healthy work-life balance",
                    "Consistent opportunities",
                ],
                tradeoffs: [
                    "Slower growth than the ambitious path",
                    "Moderate financial gains",
                ],
                recommendation:
                    "Best if you value long-term stability and sustainable growth.",
            },
            {
                id: "ambitious",
                title: "Ambitious Path",
                summary:
                    "Focuses on maximizing growth and opportunities, accepting higher uncertainty.",
                score: scores.ambitious,
                strengths: [
                    "Rapid career growth",
                    "Higher earning potential",
                    "Excellent learning opportunities",
                ],
                tradeoffs: [
                    "Higher stress",
                    "Greater uncertainty",
                ],
                recommendation:
                    "Best if your priority is maximizing growth and long-term rewards.",
            },
            {
                id: "safe",
                title: "Safe Path",
                summary:
                    "Prioritizes predictability and minimizes risk while maintaining steady progress.",
                score: scores.safe,
                strengths: [
                    "Lower risk",
                    "Predictable outcomes",
                    "Better stability",
                ],
                tradeoffs: [
                    "Slower career progression",
                    "Limited upside potential",
                ],
                recommendation:
                    "Best if stability and consistency are your primary goals.",
            },
        ],
    };
}