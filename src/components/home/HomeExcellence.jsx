import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import './HomeExcellence.css';

const images = [
  "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop", // Elegant dinner setup
  "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1973&auto=format&fit=crop", // Conference setup
  "https://images.unsplash.com/photo-1505362940251-507ff52e00a3?q=80&w=2070&auto=format&fit=crop", // Award looking setup
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const HomeExcellence = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="excellence-section">
      <div className="excellence-header">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="excellence-title text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest uppercase"
        >
          PROFESSIONAL EXCELLENCE MEETS ELEGANT HOSPITALITY
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="excellence-desc text-gray-600 leading-relaxed max-w-2xl mx-auto"
        >
          Host your meetings and events at 4 Block Group, where elegance meets professionalism. With modern facilities, premium service, and a refined atmosphere, we make every corporate occasion truly impressive.
        </motion.p>
      </div>

      <div className="excellence-carousel-container">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="excellence-img"
            alt="4 Block Group Excellence"
          />
        </AnimatePresence>
        
        {/* Navigation Buttons */}
        <button 
          className="excellence-nav-btn excellence-nav-btn-left"
          onClick={() => paginate(-1)}
        >
          <HiOutlineChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button 
          className="excellence-nav-btn excellence-nav-btn-right"
          onClick={() => paginate(1)}
        >
          <HiOutlineChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
    </section>
  );
};

export default HomeExcellence;
