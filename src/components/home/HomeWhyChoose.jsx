import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './HomeWhyChoose.css';

const features = [
  {
    title: "EXPERT TEAM",
    desc: "Experienced specialists providing innovative solutions.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "CUSTOM EVENT DESIGN",
    desc: "Unique, tailored event concepts and detailed planning to realize your vision.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "EVENT TECHNOLOGY",
    desc: "State-of-the-art A/V, lighting, live streaming, and seamless execution.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "SEAMLESS EXECUTION",
    desc: "A dedicated team on-site for coordination, support, and flawless delivery.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
  }
];

const HomeWhyChoose = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="why-custom-section">
      <div className="why-custom-container">
        
        {/* Top Area: Text & Main Image */}
        <div className="why-top-grid">
          
          {/* Left Text */}
          <motion.div 
            className="why-text-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="why-main-title">
              WHY CHOOSE US?
            </motion.h2>
            <motion.p variants={itemVariants} className="why-main-desc">
              <i>4 BLOCKS Event</i> is the definitive choice for the modern enterprise. We specialize in high-impact corporate engagements where brand prestige meets flawless execution. By merging architectural grandeur with advanced technology and premium executive catering, we provide a sophisticated backdrop for global product launches, elite networking summits, and set professional benchmarks, turning your corporate vision into a flawless reality.
            </motion.p>
          </motion.div>

          {/* Right Animated Quote */}
          <div className="why-quote-col" style={{ display: 'flex', alignItems: 'center', justifyItems: 'center', padding: '2rem 0' }}>
            <motion.div 
              className="premium-quote-card"
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(135deg, rgba(20,20,20,0.8) 0%, rgba(40,40,40,0.9) 100%)',
                padding: '3.5rem 2.5rem',
                borderRadius: '24px',
                borderLeft: '4px solid #E9AD17',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)',
                position: 'relative',
                overflow: 'hidden',
                width: '100%'
              }}
              whileHover={{ y: -5, boxShadow: '0 25px 50px rgba(0,0,0,0.4)', transition: { duration: 0.3 } }}
            >
              {/* Giant Background Quote Mark */}
              <div style={{
                position: 'absolute',
                top: '-30px',
                left: '10px',
                fontSize: '180px',
                color: 'rgba(233, 173, 23, 0.08)',
                fontFamily: 'serif',
                lineHeight: 1,
                zIndex: 0
              }}>
                "
              </div>

              {/* Quote Text */}
              <h3 
                style={{ 
                  color: '#fff', 
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', 
                  fontWeight: '300', 
                  fontFamily: '"Playfair Display", serif',
                  lineHeight: '1.5',
                  position: 'relative',
                  zIndex: 2,
                  marginBottom: '2rem'
                }}
              >
                "We don't just host events; we <span style={{ color: '#E9AD17', fontWeight: '500', fontStyle: 'italic' }}>architect unforgettable experiences.</span>"
              </h3>

              {/* Author / Signature */}
              <div style={{ 
                position: 'relative', 
                zIndex: 2, 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px' 
              }}>
                <div style={{ height: '1px', width: '40px', backgroundColor: '#E9AD17' }}></div>
                <p
                  style={{
                    color: '#e2e8f0',
                    fontSize: '0.9rem',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    fontWeight: '600',
                    margin: 0
                  }}
                >
                  The 4 Blocks Standard
                </p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* The Connection Line Background */}
        {/* <div className="why-connection-lines"></div> */}

        

      </div>
    </section>
  );
};

export default HomeWhyChoose;
