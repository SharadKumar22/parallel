"use client";
import {
  createNodes,
  updateNodes,
  drawNodes,
  drawConnections,
} from "@/lib/decision-network";

import { NETWORK_VARIANTS } from "@/constants/network-variants";

import { useEffect, useRef } from "react";

type DecisionNetworkVariant =
  | "landing"
  | "questionnaire"
  | "simulation";

import type { RenderZone } from "@/lib/render-zones";

interface DecisionNetworkProps {
  variant?: DecisionNetworkVariant;
  zones?: RenderZone[];
}

export default function DecisionNetwork({
  variant = "landing",
  zones = [],
}: DecisionNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const config = NETWORK_VARIANTS[variant];

  useEffect(() => {
    const canvasElement = canvasRef.current!;

    const ctx = canvasElement.getContext("2d")!;

    function resizeCanvas() {
      canvasElement.width = window.innerWidth;
      canvasElement.height = window.innerHeight;
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    const nodes = createNodes(
      config.density,
      canvasElement.width,
      canvasElement.height
    );

    let animationId: number;

    function animate() {
      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

      updateNodes(
        nodes,
        canvasElement.width,
        canvasElement.height,
      );
      const time = performance.now() * 0.001;

      drawConnections(ctx, nodes, time, zones);

      ctx.fillStyle = "#60A5FA";

      drawNodes(ctx, nodes, time, zones);

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [config,zones]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
    />
  );
}