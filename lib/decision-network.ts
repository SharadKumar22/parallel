export interface Node {
  x: number;
  y: number;

  vx: number;
  vy: number;

  radius: number;
}
export function createNodes(
  count: number,
  width: number,
  height: number
): Node[] {
  const nodes: Node[] = [];

  for (let i = 0; i < count; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,

      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,

      radius: 2 + Math.random() * 1.5,
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
  nodes: Node[]
) {
  for (const node of nodes) {
    ctx.beginPath();

    ctx.arc(
      node.x,
      node.y,
      node.radius,
      0,
      Math.PI * 2
    );

    ctx.fill();
  }
}