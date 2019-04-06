import { IShadowScale } from "../schemas/IShadowScale";

class Shadow implements IShadowScale {
  base = "rgba(67, 90, 111, 0.3) 0px 0px 1px, rgba(67, 90, 111, 0.47) 0px 2px 4px -2px";
  high = "rgba(67, 90, 111, 0.3) 0px 0px 1px, rgba(67, 90, 111, 0.47) 0px 5px 8px -4px";
}

export const Surface = {
  defaultRadius: "4px",
  shadow: new Shadow()
};
