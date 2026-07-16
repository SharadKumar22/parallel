import DecisionNetwork from "@/components/common/DecisionNetwork";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Home() {
  return (
    <>
      <DecisionNetwork />

      <main className="flex min-h-screen items-center justify-center">
        <ThemeToggle />
      </main>
    </>
  );
}