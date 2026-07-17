import DecisionNetwork from "@/components/common/DecisionNetwork";
import Questionnaire from "@/components/questionnaire/Questionnaire";

export default function QuestionnairePage() {
  return (
    <>
      <DecisionNetwork variant="questionnaire" />
      <Questionnaire />
    </>
  );
}