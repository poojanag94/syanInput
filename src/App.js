import React from "react";
import { ThemeProvider } from "@material-ui/core";
import "./App.css";

import Routes from "./routes/routes";
import theme from "./styles/Theme";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
