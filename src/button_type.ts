export const buttons = [
  "a",
  "b",
  "x",
  "y",
  "up",
  "right",
  "down",
  "left",
  "r",
  "l",
  "zr",
  "zl",
  "plus",
  "minus",
  "home",
  "cap",
] as const;
export type Button = typeof buttons[number];
