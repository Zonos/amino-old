import { PrimaryColor, DangerColor, WarningColor, DarkColor, TextColor, Color } from "./Color";
import { Padding } from "./Density";
import { Shadow } from "./Surface";
import { IColorScale } from "../schemas/IColorScale";

export const DefaultTheme = {
  Color: {
    primary: new PrimaryColor(),
    danger: new DangerColor(),
    warning: new WarningColor(),
    dark: new DarkColor(),
    text: new TextColor(),
    border: Color.border
  },
  Surface: {
    defaultRadius: "4px",
    shadow: new Shadow()
  },
  Density: {
    spacing: new Padding()
  }
};

interface ThemeColors {
  primary?: IColorScale;
  danger?: IColorScale;
  warning?: IColorScale;
  dark?: IColorScale;
  text?: IColorScale;
  border?: string;
}

interface ThemeSurface {
  defaultRadius: string;
  shadow: Shadow;
}

interface ThemeDensity {
  spacing: Padding;
}

interface ITheme {
  Color?: ThemeColors;
  Surface?: ThemeSurface;
  Density?: ThemeDensity;
}

export const ExtendTheme = (newTheme: ITheme) => {
  return {
    ...DefaultTheme,
    Color: {
      ...DefaultTheme.Color,
      ...newTheme.Color
    },
    Surface: {
      ...DefaultTheme.Surface,
      ...newTheme.Surface
    },
    Density: {
      ...DefaultTheme.Density,
      ...newTheme.Density
    }
  };
};
