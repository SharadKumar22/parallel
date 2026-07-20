interface JourneyProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function JourneyProgress({
  currentStep,
  totalSteps,
}: JourneyProgressProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;

        return (
          <div key={index} className="flex items-center">
            <div
              className={[
                "rounded-full transition-all duration-300",
                isCurrent
  ? "h-4 w-4"
  : "h-3 w-3",
                isCompleted
  ? "bg-foreground"
  : isCurrent
  ? "border-2 border-foreground bg-background"
  : "border border-zinc-400 dark:border-zinc-600 bg-transparent"
              ].join(" ")}
            />

            {index < totalSteps - 1 && (
              <div
  className={[
    "mx-2 h-px w-8 transition-colors duration-300",
    isCompleted
      ? "bg-foreground"
      : "bg-zinc-300 dark:bg-zinc-700",
  ].join(" ")}
/>
            )}
          </div>
        );
      })}
    </div>
  );
}