import React from "react";
import Home from "./pages/home";
import Entrenamiento from "./pages/entrenamiento";
import Footer from './pages/contacto'
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Home />
        <Entrenamiento />
        <Footer />
      </Router>
    </>
  );
}

export default App;
