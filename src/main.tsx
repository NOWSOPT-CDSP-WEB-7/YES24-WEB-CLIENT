import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import App from "./App.tsx";
import Router from "./Router.tsx";
import GlobalStyles from "./styles/GlobalStyle.ts";
import theme from "./styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Router />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
