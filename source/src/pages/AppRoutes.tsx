import { Routes, Route } from "react-router-dom";
import { AboutWe } from "./AboutWe/AboutWe";
import Home from "./Home/Home";
import { Inventory } from "./Inventory/Inventory";
import { Piece } from "./Piece/Piece";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/piece" element={<Piece />} />
      <Route path="/about-we" element={<AboutWe />} />
      <Route path="/inventory" element={<Inventory />} />
    </Routes>
  );
};
