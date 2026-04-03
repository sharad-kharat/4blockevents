import React from "react";
import { motion } from "framer-motion";
import watermarkLogo from "../../assets/Watermark/watermark.webp";
import aboutus1 from "../../assets/aboutus/aboutus1.webp";
import aboutus2 from "../../assets/aboutus/aboutus2.webp";
import "./HomeAbout.css";

const HomeAbout = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="about-section">
      {/* Watermark */}
      <motion.div
        className="about-watermark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <img src={watermarkLogo} alt="46 Blocks Event Watermark" />
      </motion.div>

      <motion.div 
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Content */}
        <div className="about-text-content">
          <motion.h4
            variants={fadeInDown}
            className="about-subtitle"
          >
            About Us
          </motion.h4>

          <motion.h2
            variants={fadeInLeft}
            className="about-title"
          >
            OUR STORY OF ELEGANCE
          </motion.h2>

          <div className="about-desc">
            <motion.p
              variants={fadeInRight}
              className="about-paragraph"
            >
              At 4 Blocks Events, we don’t just host; we engineer industry-leading experiences. Our reputation is built on a foundation of seamless execution and architectural sophistication. We specialize in transforming complex corporate visions into flawless realities, providing a world-class backdrop where networking meets refined luxury. From high-stakes retreats to grand-scale exhibitions, our team ensures every detail is handled with the surgical precision your brand deserves.
            </motion.p>
          </div>

          <motion.button
            variants={fadeInUp}
            className="btn-reservation"
          >
            RESERVATION
          </motion.button>
        </div>

        {/* Right Images */}
        <div className="about-image-wrapper">
          <motion.div
            variants={zoomIn}
            className="about-img-arch"
          >
            <img src={aboutus1} alt="Venue" />
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="about-img-overlap"
          >
            <img src={aboutus2} alt="Event Setup" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeAbout;