import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

import App from "./App";

let theme = createTheme({
  palette: {
    primary: {
      light: green[200],
      main: green[400],
      dark: green[800],
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
