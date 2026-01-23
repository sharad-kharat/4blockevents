import "./Services.css";
import ServiceItem from "./ServiceCard";

import {
  FaRing,
  FaBirthdayCake,
  FaUsers,
  FaBuilding,
  FaStore,
  FaTheaterMasks,
  FaBullhorn,
  FaFutbol,
  FaCouch,
} from "react-icons/fa";

const services = [
  { title: "Wedding Planner", route: "/wedding", color: "#ef4444", icon: <FaRing /> },
  { title: "Birthday Parties", route: "/birthday", color: "#3b82f6", icon: <FaBirthdayCake /> },
  { title: "Private Parties", route: "/private", color: "#22c55e", icon: <FaUsers /> },
  { title: "Corporate Events", route: "/corporate", color: "#eab308", icon: <FaBuilding /> },
  { title: "Exhibition Events", route: "/exhibition", color: "#a855f7", icon: <FaStore /> },
  { title: "Cultural Events", route: "/cultural", color: "#ec4899", icon: <FaTheaterMasks /> },
  { title: "Promotional Events", route: "/promotion", color: "#f97316", icon: <FaBullhorn /> },
  { title: "Sports Events", route: "/sports", color: "#14b8a6", icon: <FaFutbol /> },
  { title: "Rental Services", route: "/rental", color: "#38bdf8", icon: <FaCouch /> },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>

      <div className="services-container">
        {services.map((item, index) => (
          <ServiceItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Services;
