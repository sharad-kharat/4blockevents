import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceCard = ({ title, route, color, icon }) => {
  return (
    <Link to={route} className="service-link">
      <motion.div
        className="service-pill"
        style={{ "--glow-color": color }}
        whileHover={{ scale: 1.08 }}
      >
        <span className="pill-icon">{icon}</span>
        <span className="pill-text">{title}</span>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;
