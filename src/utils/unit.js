export const autoPx = px => (
  px * window.innerWidth / (window.innerWidth < 768 ? 360 : 1440)
);

export const remToPx = rem => (
  rem * 16 * window.innerWidth / (window.innerWidth < 768 ? 360 : 1440)
);
