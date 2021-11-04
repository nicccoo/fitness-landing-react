import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <Header />
      </Router>
    </>
  );
}

export default App;
