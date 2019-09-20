import { IShadowScale } from "../schemas/IShadowScale";
import { ISizeScale } from "../schemas/ISizeScale";

export class Radius implements ISizeScale {
  xs = "2px";
  sm = "6px";
  base = "8px";
  lg = "10px";
  xl = "12px";
}

export class Shadow implements IShadowScale {
  base = "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
  high = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
  higher = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
}

export const Surface = {
  shadow: new Shadow(),
  radius: new Radius(),

  // Deprecated
  defaultRadius: "4px"
};
