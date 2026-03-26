import React from 'react';
import { motion } from 'framer-motion';
import './HomeNetworking.css';

const HomeNetworking = () => {
  return (
    <section className="networking-section">
      <div className="networking-container">
        
        {/* Text Content (Left) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="networking-text-content"
        >
          <h2 className="networking-title text-3xl md:text-4xl font-bold tracking-widest uppercase">
            BUSINESS NETWORKING
          </h2>
          <p className="networking-desc text-gray-600 leading-relaxed max-w-lg">
            At 4 Block Group, we understand that meaningful connections drive business success. Our elegant and comfortable venues are ideal for hosting networking events, business dinners, and client meetups. Our culinary experts craft customized menus to suit your guest preferences, while our event planners manage decor, lighting, and entertainment to align with your corporate image. From intimate executive dinners to large networking galas, we ensure each gathering reflects sophistication and class. Every detail at 4 Block Group is designed to make your corporate evenings productive, memorable, and effortlessly elegant.
          </p>
          <div className="networking-btn-container">
            <button className="btn-outline-gold">
              Read More
            </button>
          </div>
        </motion.div>

        {/* Image Content (Right) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="networking-image-wrapper"
        >
          <div className="networking-image-container rounded-2xl shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1973&auto=format&fit=crop" 
              alt="Business Networking and Client Meetups"
              className="networking-image"
            />
            {/* Elegant overlay gradient */}
            <div className="networking-image-overlay"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeNetworking;
