import {
  PrimaryColor,
  DangerColor,
  WarningColor,
  DarkColor,
  TextColor,
  Color,
  GrayColor
} from "./Color";
import { Padding } from "./Density";
import { Radius, Shadow } from "./Surface";
import { IColorScale } from "../schemas/IColorScale";
import { Size } from "./Typography";

export const DefaultTheme = {
  Color: {
    primary: new PrimaryColor(),
    danger: new DangerColor(),
    warning: new WarningColor(),
    dark: new DarkColor(),
    text: new TextColor(),
    gray: new GrayColor(),
    border: Color.border
  },
  Surface: {
    defaultRadius: "4px",
    radius: new Radius(),
    shadow: new Shadow()
  },
  Density: {
    spacing: new Padding()
  },
  Typography: {
    size: new Size()
  }
};

interface ThemeColors {
  primary?: IColorScale;
  danger?: IColorScale;
  warning?: IColorScale;
  dark?: IColorScale;
  text?: IColorScale;
  gray?: IColorScale;
  border?: string;
}

interface ThemeSurface {
  defaultRadius: string;
  shadow: Shadow;
  radius: Radius;
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
