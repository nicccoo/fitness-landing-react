import React from "react";
import Home from "./pages/home";
import Entrenamiento from "./pages/entrenamiento";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Home />
        <Entrenamiento />
      </Router>
    </>
  );
}

export default App;
