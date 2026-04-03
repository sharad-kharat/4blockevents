import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import "./Consultancy.css";
import img1 from '../assets/consaltancy/consaltant.webp'
const Consultancy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const services = [
    "Event Concept and Theme Development.",
    "Budget Planning and Cost Management.",
    "Vendor Selection and Recommendations.",
    "Event Timeline and Flow Planning.",
    "Décor and Design Consultation."
  ];

  return (
    <div className="consultancy-page">
      <motion.div 
        className="consultancy-page-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <h2 className="consultancy-page-title">CONSULTANCY</h2>
      </motion.div>

      <div className="consultancy-container">
        
        {/* Left Side: Content */}
        <motion.div 
          className="consultancy-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="consultancy-header">
            <h1 className="consultancy-title">Navigate Your Event with Confidence</h1>
            <div className="consultancy-divider"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="consultancy-intro">
            <p>
              "Planning an event can be overwhelming without professional guidance. Our Event
              Consultancy Services help clients plan their celebrations with expert advice and
              strategic planning".
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="consultancy-services-box">
            <h3 className="consultancy-services-title">Our Consultancy Services include:</h3>
            <ul className="consultancy-list">
              {services.map((service, index) => (
                <motion.li key={index} variants={itemVariants} className="consultancy-list-item">
                  <FaCheckCircle className="check-icon" />
                  <span>{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="consultancy-conclusion">
            {/* <p>
              Whether you want full event management or professional guidance, our team will help
              you create a well-planned and successful event.
            </p> */}
            <button className="book-consultation-btn">Book a Consultation</button>
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div 
          className="consultancy-image-wrapper"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img 
            src={img1} 
            alt="Event Planning Meeting" 
            className="consultancy-image"
          />
          <div className="image-accent-box"></div>
        </motion.div>

      </div>
    </div>
  );
};

export default Consultancy;
