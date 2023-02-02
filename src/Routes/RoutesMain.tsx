import { Route, Routes } from "react-router-dom";
import { ProviderContextRover } from "../Context/ContexRovers";
import { Planetary } from "../Pages/Planetary";
import { RoversImgs } from "../Pages/RoversImgs";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route
        path="/rover/:rovers?/:sol?/:cam?/:date?"
        element={
          <ProviderContextRover>
            <RoversImgs />
          </ProviderContextRover>
        }
      />
      <Route
        path="/"
        element={
          <ProviderContextRover>
            <RoversImgs />
          </ProviderContextRover>
        }
      />

      <Route path="planetary" element={<Planetary />} />
    </Routes>
  );
};
