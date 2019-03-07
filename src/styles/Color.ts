import { IColorScale } from "../schemas/IColorScale";

class PrimaryColor implements IColorScale {
  veryLight = "#64AAF6";
  light = "#2D8BF3";
  base = "#2285F2";
  dark = "#207BE0";
  veryDark = "#1D71CE";
}

class TextColor implements IColorScale {
  veryLight = "#A5A5A5"; // TODO: define
  light = "#595959";
  base = "#5D6D81";
  dark = "#1A3547";
  veryDark = ""; // TODO: define
}

export const Color = {
  primary: new PrimaryColor(),
  text: new TextColor(),

  // DEPRECATED
  primaryColor: "#2285F2",
  superLightPrimaryColor: "#64AAF6",
  lightPrimaryColor: "#2D8BF3",
  borderColor: "rgba(0, 0, 0, 0.12)",
  textColor: "#607d8b",
  darkTextColor: "rgb(42, 47, 69)",
  secondaryTextColor: "rgb(105, 115, 134)"
};
