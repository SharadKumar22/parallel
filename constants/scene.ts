export const SCENES = {
  INTRO: "intro",
  TRANSITION: "transition",
  HERO: "hero",
} as const;

export type Scene =
  (typeof SCENES)[keyof typeof SCENES];