import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FutureScenario } from "@/types/simulation";

interface ScenarioCardProps {
    scenario: FutureScenario;
}

export default function ScenarioCard({
    scenario,
}: ScenarioCardProps) {
    return (
        <Card className="h-full">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>{scenario.title}</CardTitle>

                    <span className="text-lg font-bold">
                        {scenario.score}/100
                    </span>
                </div>
            </CardHeader>

            <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                    {scenario.summary}
                </p>

                <section>
                    <h3 className="mb-2 font-semibold">
                        Strengths
                    </h3>

                    <ul className="list-disc space-y-1 pl-5">
                        {scenario.strengths.map((strength) => (
                            <li key={strength}>{strength}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h3 className="mb-2 font-semibold">
                        Trade-offs
                    </h3>

                    <ul className="list-disc space-y-1 pl-5">
                        {scenario.tradeoffs.map((tradeoff) => (
                            <li key={tradeoff}>{tradeoff}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h3 className="mb-2 font-semibold">
                        Recommendation
                    </h3>

                    <p>{scenario.recommendation}</p>
                </section>
            </CardContent>
        </Card>
    );
}