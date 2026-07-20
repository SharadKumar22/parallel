export interface RenderZone {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function isInsideZone(
  x: number,
  y: number,
  zone: RenderZone
) {
  return (
    x >= zone.x &&
    x <= zone.x + zone.width &&
    y >= zone.y &&
    y <= zone.y + zone.height
  );
}

export function isNodeInsideAnyZone(
  x: number,
  y: number,
  zones: RenderZone[]
) {
  return zones.some((zone) => isInsideZone(x, y, zone));
}