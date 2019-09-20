import { ISizeScale } from "../schemas/ISizeScale";

export class Size implements ISizeScale {
  xs = ".75rem";
  sm = ".875rem";
  base = "1rem";
  lg = "1.125rem";
  xl = "1.25rem";
}

export const Typography = {
  fontPrimary: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  fontMono: `font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  size: new Size(),

  // Deprecated
  defaultFontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
};
