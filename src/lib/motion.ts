export const motionDuration = {
  fast: 150,
  base: 250,
  slow: 400,
} as const;

export const motionEasing = "cubic-bezier(0.16, 1, 0.3, 1)";
export const pageTransitionDuration = 200;
export const staggerInterval = 60;

export const revealFrom = {
  opacity: 0,
  transform: "translateY(12px)",
};

export const revealTo = {
  opacity: 1,
  transform: "translateY(0)",
};
