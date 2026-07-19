import { Answers } from "@/types/questionnaire";

const SESSION_KEY = "parallel-session";

export function saveSession(answers: Answers): void {
    localStorage.setItem(
        SESSION_KEY,
        JSON.stringify(answers)
    );
}

export function loadSession(): Answers | null {
    const data = localStorage.getItem(SESSION_KEY);

    if (!data) return null;

    return JSON.parse(data) as Answers;
}

export function clearSession(): void {
    localStorage.removeItem(SESSION_KEY);
}