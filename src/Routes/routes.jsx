import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";

// Lazy load all non-Home pages to drastically reduce initial loading delays
const Banquet = React.lazy(() => import("../pages/Banqute"));
const Turf = React.lazy(() => import("../pages/Turf"));
const Cab = React.lazy(() => import("../pages/Cab"));
const Furniture = React.lazy(() => import("../pages/Furniture"));
const Events = React.lazy(() => import("../pages/Events"));
const Hade = React.lazy(() => import("../pages/Head/Hade"));
const OurWork = React.lazy(() => import("../pages/OurWork"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Consultancy = React.lazy(() => import("../pages/Consultancy"));

// Premium fallback loader
const PageLoader = () => (
  <div className="flex justify-center items-center min-h-[60vh] bg-transparent">
    <div className="w-12 h-12 border-4 border-[var(--luxury-gold)] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/events" element={<Events />} />
        <Route path="/banquet" element={<Banquet />} />
        <Route path="/turf" element={<Turf />} />
        <Route path="/cab" element={<Cab />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/hade" element={<Hade />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
