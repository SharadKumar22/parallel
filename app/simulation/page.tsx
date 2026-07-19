"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import SimulationResults from "@/components/simulation/SimulationResults";
import { runSimulation } from "@/lib/simulation/engine";
import { loadSession } from "@/store/session";
import { Answers } from "@/types/questionnaire";
import FloatingControls from "@/components/common/FloatingControls";

export default function SimulationPage() {
    const router = useRouter();

    const [answers, setAnswers] = useState<Answers | null>(null);

    useEffect(() => {
        const session = loadSession();

        if (!session) {
            router.replace("/questionnaire");
            return;
        }

        setAnswers(session);
    }, [router]);

    if (!answers) {
        return null;
    }

    const result = runSimulation(answers);

    return (
        <>
            <FloatingControls />
            <main className="container mx-auto px-6 py-10">
                <SimulationResults result={result} />
            </main>
        </>
    );
}