// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import SuminPage from "./letter/SuminPage";
import BenPage from "./letter/BenPage";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sumin" element={<SuminPage />} />
      <Route path="/ben" element={<BenPage />} />

    </Routes>
  </Router>
);
