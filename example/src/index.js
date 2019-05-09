import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { DefaultTheme, ExtendTheme } from "amino-ui";

import "./index.css";
import { App } from "./App";

class CustomPrimaryColor {
  veryLight = "#EAE7F8";
  light = "#EAE7F8";
  base = "#735DD0";
  dark = "#37248F";
  veryDark = "#37248F";
}

const CustomTheme = ExtendTheme({
  Color: {
    primary: new CustomPrimaryColor()
  }
});

ReactDOM.render(
  <ThemeProvider theme={CustomTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
