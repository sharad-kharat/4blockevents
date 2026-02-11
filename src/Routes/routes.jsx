import { Routes, Route } from "react-router-dom";
import Services from "../components/Services";
import Banquet from "../pages/Banqute";
import Turf from "../pages/Turf";
import Cab from "../pages/Cab";
import Furniture from "../pages/Furniture";
import Events from "../pages/Events";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Services />} />
      <Route path="/events" element={<Events />} />
      <Route path="/banquet" element={<Banquet />} />
      <Route path="/turf" element={<Turf />} />
      <Route path="/cab" element={<Cab />} />
      <Route path="/furniture" element={<Furniture />} />
    </Routes>
  );
};

export default AppRoutes;
