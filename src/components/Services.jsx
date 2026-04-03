import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="services-section">
      <motion.div 
        className="services-wrapper"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >

        {/* FEATURED CARD */}
        <Link to="/events" className="service-link featured">
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 160 } }}
            className="neon-card neon-large"
          >
            <img src="/images/events.webp" alt="Events" />
            <h2>EVENTS</h2>
          </motion.div>
        </Link>

        {/* SMALL CARDS */}
        <div className="neon-row">
          <Link to="/turf" className="service-link">
            <motion.div variants={cardVariants} whileHover={{ scale: 1.04 }} className="neon-card">
              <img src="/images/turf.webp" alt="Turf" />
              <span>TURF</span>
            </motion.div>
          </Link>

          <Link to="/cab" className="service-link">
            <motion.div variants={cardVariants} whileHover={{ scale: 1.04 }} className="neon-card">
              <img src="/images/car.webp" alt="Cab" />
              <span>CAB</span>
            </motion.div>
          </Link>
          <Link to="/furniture" className="service-link">
            <motion.div variants={cardVariants} whileHover={{ scale: 1.04 }} className="neon-card">
              <img src="/images/furniture.webp" alt="Furniture" />
              <span>Furniture</span>
            </motion.div>
          </Link>
        </div>

      </motion.div>
    </section>
  );
};

export default Services;
