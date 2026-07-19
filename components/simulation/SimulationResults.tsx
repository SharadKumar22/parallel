import { SimulationResult } from "@/types/simulation";
import ScenarioCard from "./ScenarioCard";

interface SimulationResultsProps {
    result: SimulationResult;
}

export default function SimulationResults({
    result,
}: SimulationResultsProps) {
    return (

        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">
                    Simulation Results
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Decision: {result.decision}
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {result.scenarios.map((scenario) => (
                    <ScenarioCard
                        key={scenario.id}
                        scenario={scenario}
                    />
                ))}
            </div>
        </div>
    );
}