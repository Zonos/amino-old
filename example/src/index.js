import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { DefaultTheme, ExtendTheme } from "amino-ui";

import "./index.css";
import { App } from "./App";

class CustomPrimaryColor {
  veryLight = "#F1FBFC";
  light = "#D2EEF3";
  base = "#14B5D0";
  dark = "#007489";
  veryDark = "#007489";
}

const CustomTheme = ExtendTheme({
  Color: {
    primary: new CustomPrimaryColor()
  }
});

console.log(CustomTheme);

ReactDOM.render(
  <ThemeProvider theme={CustomTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
