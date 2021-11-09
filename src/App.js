import React from "react";
import "./App.css";
import Home from './pages/home';
import Entrenamiento from "./pages/entrenamiento";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <Home />
        <Entrenamiento />
      </Router>
    </>
  );
}

export default App;
