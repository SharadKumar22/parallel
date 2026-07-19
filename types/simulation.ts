export interface FutureScenario {
    id: string;

    title: string;

    summary: string;

    score: number;

    strengths: string[];

    tradeoffs: string[];

    recommendation: string;
}

export interface SimulationResult {
    decision: string;

    scenarios: FutureScenario[];
}

export interface ScenarioScore {
    balanced: number;
    ambitious: number;
    safe: number;
}