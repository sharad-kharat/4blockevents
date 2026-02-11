import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Intro from "./components/Intro";
import AppRoutes from "./Routes/routes";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {/* ROUTES ALWAYS MOUNTED */}
      <AppRoutes />

      {/* INTRO OVERLAY */}
      {showIntro && <Intro />}
    </BrowserRouter>
  );
}

export default App;
