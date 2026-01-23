import { Routes, Route } from "react-router-dom";

import Services from "../components/Services";
import Wedding from "../pages/Wedding";
import Birthday from "../pages/Birthday";
import Privite from "../pages/Privite";
import Corporate from "../pages/Corporate";
import Exhibition from "../pages/Exhibition";
import Cultural from "../pages/Cultural";
import Promotional from "../pages/Promotional";
import Sports from "../pages/Sports";
import Rental from "../pages/Rental";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Services />} />

      <Route path="/wedding" element={<Wedding />} />
      <Route path="/birthday" element={<Birthday />} />
      <Route path="/private" element={<Privite />} />
      <Route path="/corporate" element={<Corporate />} />
      <Route path="/exhibition" element={<Exhibition />} />
      <Route path="/cultural" element={<Cultural />} />
      <Route path="/promotion" element={<Promotional />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/rental" element={<Rental />} />
    </Routes>
  );
};

export default AppRoutes;
