import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { DefaultTheme, ExtendTheme } from "amino-ui";

import "./index.css";
import { App } from "./App";

ReactDOM.render(
  <ThemeProvider theme={DefaultTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
