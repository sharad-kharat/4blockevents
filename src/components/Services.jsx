import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-wrapper">

        {/* FEATURED CARD */}
        <Link to="/events" className="service-link featured">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 160 }}
            className="neon-card neon-large"
          >
            <img src="/images/events.jpg" alt="Events" />
            <h2>EVENTS</h2>
          </motion.div>
        </Link>

        {/* SMALL CARDS */}
        <div className="neon-row">
          <Link to="/turf" className="service-link">
            <motion.div whileHover={{ scale: 1.04 }} className="neon-card">
              <img src="/images/turf.png" alt="Turf" />
              <span>TURF</span>
            </motion.div>
          </Link>

          <Link to="/cab" className="service-link">
            <motion.div whileHover={{ scale: 1.04 }} className="neon-card">
              <img src="/images/car.png" alt="Cab" />
              <span>CAB</span>
            </motion.div>
          </Link>
          <Link to="/furniture" className="service-link">
            <motion.div whileHover={{ scale: 1.04 }} className="neon-card">
              <img src="/images/furniture.png" alt="Furniture" />
              <span>Furniture</span>
            </motion.div>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;
