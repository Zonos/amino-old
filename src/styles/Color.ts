import { IColorScale } from "../schemas/IColorScale";

export class PrimaryColor implements IColorScale {
  veryLight = "#BEE3F8";
  light = "#63B3ED";
  base = "#448EE1";
  dark = "#3182CE";
  veryDark = "#2A6CB0";
}

export class DangerColor implements IColorScale {
  veryLight = "#FED7D7";
  light = "#FC8181";
  base = "#F56565";
  dark = "#E53E3E";
  veryDark = "#C43030";
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
  border: "#EDF0F2",

  // DEPRECATED
  primaryColor: "#2285F2",
  superLightPrimaryColor: "#64AAF6",
  lightPrimaryColor: "#2D8BF3",
  borderColor: "rgba(0, 0, 0, 0.12)",
  textColor: "#607d8b",
  darkTextColor: "rgb(42, 47, 69)",
  secondaryTextColor: "rgb(105, 115, 134)"
};
