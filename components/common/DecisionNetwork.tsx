"use client";
import {
  createNodes,
  updateNodes,
  drawNodes,
  drawConnections,
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

updateNodes(
  nodes,
  canvasElement.width,
  canvasElement.height
);
const time = performance.now() * 0.001;

drawConnections(ctx, nodes, time);

ctx.fillStyle = "#60A5FA";

drawNodes(ctx, nodes, time);

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