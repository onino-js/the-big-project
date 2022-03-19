import { Routes, Route } from "react-router-dom";
import { AboutWe } from "./AboutWe/AboutWe";
import Home from "./Home/Home";
import { Piece } from "./Piece/Piece";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/piece" element={<Piece />} />
      <Route path="/about-we" element={<AboutWe />} />
    </Routes>
  );
};
