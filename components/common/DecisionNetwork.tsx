"use client";
import {
  createNodes,
  updateNodes,
  drawNodes,
} from "@/lib/decision-network";

import { useEffect, useRef } from "react";

export default function DecisionNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    70,
    canvasElement.width,
    canvasElement.height
  );

  let animationId: number;

  function animate() {
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

    ctx.fillStyle = "#60A5FA";

    updateNodes(
      nodes,
      canvasElement.width,
      canvasElement.height
    );

    drawNodes(ctx, nodes);

    animationId = requestAnimationFrame(animate);
  }

  animate();

  return () => {
  window.removeEventListener("resize", resizeCanvas);
  cancelAnimationFrame(animationId);
};
}, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
    />
  );
}