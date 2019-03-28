import { IDensityScale } from "../schemas/IDensityScale";

class Padding implements IDensityScale {
  xxxxs = "2px";
  xxxs = "4px";
  xxs = "6px";
  xs = "8px";
  sm = "12px";
  md = "20px";
  lg = "32px";
  xl = "52px";
  xxl = "84px";
  xxxl = "136px";
  xxxxl = "220px";
}

export const Density = {
  spacing: new Padding()
};
