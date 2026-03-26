import React from 'react';
import { motion } from 'framer-motion';
import './HomeIntro.css';

// Import local assets
import intro1 from '../../assets/Starter/intro1.png';
import intro2 from '../../assets/Starter/intro2.png';

const HomeIntro = () => {
  // Animation variants for text blocks
  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }
  };

  return (
    <section className="intro-section relative w-full overflow-hidden">
      {/* Background Watermark */}
      <motion.div 
        className="intro-watermark absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.03] overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img 
          src="/images/logo.png" 
          alt="Watermark Logo" 
          className="w-[80vw] h-[80vh] object-contain object-center scale-150"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        {/* Fallback Text Watermark */}
        <div className="hidden text-[12rem] md:text-[20rem] font-black text-black leading-none whitespace-nowrap opacity-60">
          4 BLOCK GROUP
        </div>
      </motion.div>

      {/* Decorative floral background hints */}
      <div className="intro-bg-glow-1 z-0"></div>
      <div className="intro-bg-glow-2 z-0"></div>

      <div className="intro-content relative z-10">
        <motion.h2 
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ fontFamily: '"Playfair Display", serif' }}
          className="intro-title text-2xl md:text-3xl lg:text-4xl font-bold"
        >
          CORPORATE BANQUET HALLS IN PUNE – DISCOVER THE IDEAL VENUE FOR YOUR BUSINESS CELEBRATIONS
        </motion.h2>

        <div className="intro-text-wrapper text-sm md:text-base lg:text-lg flex flex-col md:flex-row gap-8 lg:gap-14 text-left mt-10">
          {/* Paragraph 1 with Background Image */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 relative group"
          >
            {/* Background Image Plate */}
            <div className="absolute inset-0 z-0 opacity-15 transition-opacity duration-500 group-hover:opacity-30 rounded-xl overflow-hidden pointer-events-none scale-110">
              <img src={intro1} alt="Decorative" className="w-full h-full object-cover grayscale mix-blend-multiply" />
              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--corporate-light)] via-transparent to-[var(--corporate-light)]"></div>
            </div>

            {/* Content Text */}
            <div className="relative z-10 px-6 py-8 h-full flex items-center bg-[rgba(255,255,255,0.4)] backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-[rgba(255,255,255,0.3)] rounded-xl">
              <p>
                At <span className="intro-text-highlight">4 Block Group</span>, we offer the perfect setting for corporate events that inspire, connect, and impress. Whether you’re planning a business conference, seminar, product launch, annual gathering, or networking event, our modern and spacious venues provide a professional yet elegant environment. Our event specialists assist you with customized decor, seating layouts, gourmet catering, and advanced audio-visual arrangements, ensuring flawless execution from start to finish.
              </p>
            </div>
          </motion.div>

          {/* Paragraph 2 with Background Image */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 relative group mt-8 md:mt-0"
          >
            {/* Background Image Plate */}
            <div className="absolute inset-0 z-0 opacity-15 transition-opacity duration-500 group-hover:opacity-30 rounded-xl overflow-hidden pointer-events-none scale-110">
              <img src={intro2} alt="Decorative" className="w-full h-full object-cover grayscale mix-blend-multiply" />
              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--corporate-light)] via-transparent to-[var(--corporate-light)]"></div>
            </div>

            {/* Content Text */}
            <div className="relative z-10 px-6 py-8 h-full flex items-center bg-[rgba(255,255,255,0.4)] backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-[rgba(255,255,255,0.3)] rounded-xl">
              <p>
                Corporate success isn’t limited to meetings alone; it’s about celebrating milestones too. From team-building sessions and workshops to award functions, gala dinners, and festive office parties, we make every moment engaging and memorable. At 4 Block Group, we go beyond venue management; we deliver experiences that blend luxury, efficiency, and hospitality to create the perfect corporate impression in the heart of Pune.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
