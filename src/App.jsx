import { useEffect, useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import Intro from "./components/Intro";
import AppRoutes from "./Routes/routes";
import Navbar from "./components/Navbar";
import HomeFooter from "./components/home/HomeFooter";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // TEMPORARY: Commented out to keep Intro on screen for styling
     const timer = setTimeout(() => setShowIntro(false), 5000);
     return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* STATIC NAVBAR AROUND APP ROUTES */}
      <Navbar />
      
      {/* MAIN CONTAINER THAT SETS OVERALL THEME AND PADDING FOR GLOBAL HEADER */}
      <div className="bg-[var(--luxury-bg)] min-h-screen font-sans overflow-x-hidden">
        <AppRoutes />
      </div>
      
      {/* STATIC FOOTER AROUND APP ROUTES */}
      <HomeFooter />

      {/* INTRO OVERLAY */}
      {showIntro && <Intro />}
    </BrowserRouter>
  );
}

export default App;
