import { IColorScale } from "../schemas/IColorScale";

export class PrimaryColor implements IColorScale {
  veryLight = "#64AAF6";
  light = "#2D8BF3";
  base = "#2285F2";
  dark = "#207BE0";
  veryDark = "#1D71CE";
}

export class DangerColor implements IColorScale {
  veryLight = "#FEF6F6";
  light = "#FAE2E2";
  base = "#EC4C47";
  dark = "#CF433E";
  veryDark = "";
}

export class WarningColor implements IColorScale {
  veryLight = "#E8B480";
  light = "#DE9347";
  base = "#D9822B";
  dark = "#BE7226";
  veryDark = "";
}

export class TextColor implements IColorScale {
  veryLight = "#7B8B9A";
  light = "#66788A";
  base = "#425A70";
  dark = "#234361";
  veryDark = "";
}

export class DarkColor implements IColorScale {
  veryLight = "#7B8B9A";
  light = "#66788A";
  base = "#425A70";
  dark = "#234361";
  veryDark = "";
}

export const Color = {
  primary: new PrimaryColor(),
  danger: new DangerColor(),
  warning: new WarningColor(),
  dark: new DarkColor(),
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
