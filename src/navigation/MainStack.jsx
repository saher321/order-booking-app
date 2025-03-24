import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/about" element={<Sale />} />
      <Route path="/about" element={<Customer />} />
    </Routes>
  );
}

export default Navigation;
