"use client";

import { useState } from "react";
import type { RenderZone } from "@/lib/render-zones";

import DecisionNetwork from "@/components/common/DecisionNetwork";
import Questionnaire from "@/components/questionnaire/Questionnaire";
import FloatingControls from "@/components/common/FloatingControls";

export default function QuestionnairePage() {
  const [zones, setZones] = useState<RenderZone[]>([]);

  return (
    <>
      <FloatingControls />

      <DecisionNetwork
        variant="questionnaire"
        zones={zones}
      />

      <Questionnaire
  onZonesChange={setZones}
/>
    </>
  );
}