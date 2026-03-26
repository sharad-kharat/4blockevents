import React from 'react';
import { motion } from 'framer-motion';
import './HomeEvents.css';

const HomeEvents = () => {
  return (
    <section className="events-section">
      <div className="events-container">
        
        {/* Image Content (Left) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="events-image-wrapper"
        >
          <div className="events-image-container rounded-2xl shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2162&auto=format&fit=crop" 
              alt="Awards and Annual Events" 
              className="events-image"
            />
            {/* Elegant overlay gradient */}
            <div className="events-image-overlay"></div>
          </div>
        </motion.div>

        {/* Text Content (Right) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="events-text-content"
        >
          <h2 className="events-title text-3xl md:text-4xl font-bold tracking-widest uppercase">
            AWARD & ANNUAL EVENTS
          </h2>
          <p className="events-desc text-gray-600 leading-relaxed max-w-lg">
            Celebrate your team's success in grandeur at 4 Block Group, Pune's premium venue for corporate celebrations. Whether it's an annual meet, award function, or festive office party, our luxurious halls and elegant decor set the perfect mood. We offer customized lighting, stage setups, and fine dining experiences that elevate every occasion. Our event experts handle everything — from planning to execution — ensuring flawless hospitality and a vibrant atmosphere that energizes your team and strengthens corporate bonds.
          </p>
          <div className="events-btn-container">
            <button className="btn-outline-gold">
              Reservation
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeEvents;
