import DecisionNetwork from "@/components/common/DecisionNetwork";
import Questionnaire from "@/components/questionnaire/Questionnaire";
import FloatingControls from "@/components/common/FloatingControls";

export default function QuestionnairePage() {
  return (
    <>
      <FloatingControls />
      <DecisionNetwork variant="questionnaire" />
      <Questionnaire />
    </>
  );
}