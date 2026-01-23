import Services from "./Services";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Services />
      <Outlet />
    </div>
  );
};

export default Home;
