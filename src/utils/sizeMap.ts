export type AllowedSizes = 14 | 16 | 18 | 24 | 36 | 48 | 60;

export const sizeMap: Record<AllowedSizes, string> = {
  14: "sm:text-sm text-xs",
  16: "sm:text-base text-sm",
  18: "sm:text-lg text-base",
  24: "sm:text-2xl text-lg",
  36: "sm:text-4xl text-2xl",
  48: "sm:text-5xl text-3xl",
  60: "sm:text-6xl text-4xl",
};
