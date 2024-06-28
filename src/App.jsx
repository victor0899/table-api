import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Characters from "./components/ApiComponents";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Characters />
    </Router>
  );
}
