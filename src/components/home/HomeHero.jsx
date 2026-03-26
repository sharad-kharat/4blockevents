import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HomeHero.css';
import logoImg from '../../assets/Logo/Logo1.png';

import homehero1 from '../../assets/Home/homehero/homehero1.png';
import homehero2 from '../../assets/Home/homehero/homehero2.jpg';
import homehero3 from '../../assets/Home/homehero/homehero3.jpeg';

const slides = [
  {
    id: 1,
    image: homehero1,
    title: "4 Blocks Event",
    subtitle: "delivering everlasting memories",
    animType: "slide"
  },
  {
    id: 2,
    image: homehero2,
    title: "4 Blocks Event",
    subtitle: "delivering everlasting memories",
    animType: "zoom"
  },
  {
    id: 3,
    image: homehero3,
    title: "4 Blocks Event",
    subtitle: "delivering everlasting memories",
    animType: "fade"
  }
];

const slideVariants = {
  enter: (custom) => {
    const { direction, animType } = custom;
    if (animType === "zoom") return { scale: 1.1, opacity: 0, x: 0 };
    if (animType === "fade") return { opacity: 0, x: 0, scale: 1 };
    return { x: direction > 0 ? 1000 : -1000, opacity: 0, scale: 1 };
  },
  center: {
    zIndex: 1,
    x: 0,
    scale: 1,
    opacity: 1
  },
  exit: (custom) => {
    const { direction, animType } = custom;
    if (animType === "zoom") return { scale: 0.9, opacity: 0, x: 0 };
    if (animType === "fade") return { opacity: 0, x: 0, scale: 1 };
    return { zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0, scale: 1 };
  }
};

const textVariants = {
  enter: (animType) => {
    if (animType === "zoom") return { opacity: 0, scale: 0.8, y: 30 };
    if (animType === "fade") return { opacity: 0, y: -30, scale: 1 };
    return { opacity: 0, scale: 0.95, y: 20 };
  },
  center: { opacity: 1, scale: 1, y: 0 },
  exit: (animType) => {
    if (animType === "zoom") return { opacity: 0, scale: 1.1, y: -30 };
    if (animType === "fade") return { opacity: 0, y: 30, scale: 1 };
    return { opacity: 0, scale: 0.95, y: -20 };
  }
};

const HomeHero = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const slideIndex = Math.abs(page % slides.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000); // Slower transition for a more relaxed luxury vibe
    return () => clearInterval(timer);
  }, [page]); 

  return (
    <section className="home-hero-section">
      <AnimatePresence initial={false} custom={{ direction, animType: slides[slideIndex].animType }}>
        <motion.div
          key={page}
          custom={{ direction, animType: slides[slideIndex].animType }}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 200, damping: 25 },
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 }
          }}
          className="absolute inset-0"
        >
          <div 
            className="home-hero-bg" 
            style={{ backgroundImage: `url('${slides[slideIndex].image}')` }}
          ></div>
          <div className="home-hero-overlay"></div>
        </motion.div>
      </AnimatePresence>

      <div className="home-hero-content-wrapper">

        <div className="home-hero-content relative z-10">
          <div className="home-hero-text-container">
            <img 
              src={logoImg} 
              alt="4 Blocks Logo" 
              className="w-40 md:w-56 lg:w-72 mb-6 object-contain rounded-full drop-shadow-2xl"
              style={{borderRadius:0}}
            />
            <h1 className="home-hero-main-title">
              {slides[slideIndex].title}
            </h1>
            <p className="home-hero-main-subtitle">
              {slides[slideIndex].subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
