import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
