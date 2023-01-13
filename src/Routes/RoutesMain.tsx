import { Route, Routes } from "react-router-dom";
import { Planetary } from "../Pages/Planetary";
import { RoversImgs } from "../Pages/RoversImgs";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="rovers" element={<RoversImgs />} />
      <Route path="*" element={<RoversImgs />} />
      <Route path="planetary" element={<Planetary />} />
    </Routes>
  );
};
