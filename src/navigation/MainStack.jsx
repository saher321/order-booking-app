import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Offers from "../pages/Offers";
import FlatSale from "../pages/FlatSale";
import DailyDeals from "../pages/DailyDeals";

function MainStack() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/flat-sale" element={<FlatSale />} />
      <Route path="/daily-deals" element={<DailyDeals />} />
    </Routes>
  );
}

export default MainStack;
