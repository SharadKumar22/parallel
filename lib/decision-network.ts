import {
  MAX_NODE_SPEED,
  MIN_NODE_RADIUS,
  MAX_NODE_RADIUS,
} from "@/constants/decision-network";
export interface Node {
  x: number;
  y: number;

  vx: number;
  vy: number;

  radius: number;

  pulseOffset: number;
  pulseSpeed: number;

  layer: 1 | 2 | 3;
}
export function createNodes(
  count: number,
  width: number,
  height: number
): Node[] {
  const nodes: Node[] = [];

  for (let i = 0; i < count; i++) {
    const random = Math.random();

let layer: 1 | 2 | 3;

if (random < 0.15) {
  layer = 1;
} else if (random < 0.85) {
  layer = 2;
} else {
  layer = 3;
}
let radius =
  MIN_NODE_RADIUS +
  Math.random() *
    (MAX_NODE_RADIUS - MIN_NODE_RADIUS);

let speed = MAX_NODE_SPEED;
if (layer === 1) {
  radius *= 1.25;
  speed *= 1.15;
}

if (layer === 3) {
  radius *= 0.8;
  speed *= 0.75;
}
    nodes.push({
  x: Math.random() * width,
  y: Math.random() * height,

  vx: (Math.random() - 0.5) * speed*2,
  vy: (Math.random() - 0.5) * speed*2,

  radius,

  pulseOffset: Math.random() * Math.PI * 2,

  pulseSpeed: 0.25 + Math.random() * 0.15,
  layer,
});
  }

  return nodes;
}
export function updateNodes(
  nodes: Node[],
  width: number,
  height: number
) {
  for (const node of nodes) {
    node.x += node.vx;
    node.y += node.vy;

    if (node.x <= 0 || node.x >= width) {
      node.vx *= -1;
    }

    if (node.y <= 0 || node.y >= height) {
      node.vy *= -1;
    }
  }
}
export function drawNodes(
  ctx: CanvasRenderingContext2D,
  nodes: Node[],
  time: number
) {
  for (const node of nodes) {
   const pulse =
  (Math.sin(time * node.pulseSpeed + node.pulseOffset) + 1) / 2;

const animatedRadius =
  node.radius + pulse * 0.35;

let layerAlpha = 1;

if (node.layer === 1) {
  layerAlpha = 1.1;
} else if (node.layer === 3) {
  layerAlpha = 0.75;
}

const alpha =
  (0.55 + pulse * 0.45) * layerAlpha;

  let shadowBlur = 0;
let shadowAlpha = 0;

if (node.layer === 1) {
  shadowBlur = 10 + pulse * 4;
  shadowAlpha = 0.35 + pulse * 0.15;
} else if (node.layer === 2) {
  shadowBlur = 5 + pulse * 2;
  shadowAlpha = 0.20 + pulse * 0.10;
}

ctx.fillStyle = `rgba(125,170,255,${alpha})`;

ctx.shadowBlur = shadowBlur;
ctx.shadowColor = `rgba(125,170,255,${shadowAlpha})`;

ctx.beginPath();

ctx.arc(
  node.x,
  node.y,
  animatedRadius,
  0,
  Math.PI * 2
);

ctx.fill();

ctx.shadowBlur = 0;
ctx.shadowColor = "transparent";
  }
}
import { MAX_CONNECTION_DISTANCE } from "@/constants/decision-network";

export function drawConnections(
  ctx: CanvasRenderingContext2D,
  nodes: Node[],
  time: number
) {
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const nodeA = nodes[i];
      const nodeB = nodes[j];

      const dx = nodeA.x - nodeB.x;
      const dy = nodeA.y - nodeB.y;

      const distance = Math.hypot(dx, dy);

      if (distance > MAX_CONNECTION_DISTANCE) {
        continue;
      }

      const opacity =
        1 - distance / MAX_CONNECTION_DISTANCE;

      const pulse =
  (
    Math.sin(
      time *
        ((nodeA.pulseSpeed + nodeB.pulseSpeed) / 2) +
      (nodeA.pulseOffset + nodeB.pulseOffset) / 2
    ) + 1
  ) / 2;

let layerMultiplier = 1;

if (nodeA.layer === 1 || nodeB.layer === 1) {
  layerMultiplier = 1.15;
}

if (nodeA.layer === 3 && nodeB.layer === 3) {
  layerMultiplier = 0.70;
}

const lineAlpha =
  opacity *
  (0.30 + pulse * 0.15) *
  layerMultiplier;

ctx.strokeStyle = `rgba(125,170,255,${lineAlpha})`;

      ctx.lineWidth =
  nodeA.layer === 1 || nodeB.layer === 1
    ? 1.2
    : nodeA.layer === 3 && nodeB.layer === 3
    ? 0.6
    : 0.9;

      ctx.beginPath();

      ctx.moveTo(nodeA.x, nodeA.y);

      ctx.lineTo(nodeB.x, nodeB.y);

      ctx.stroke();
    }
  }
}