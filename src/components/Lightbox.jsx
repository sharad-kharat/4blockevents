import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import "./Lightbox.css";

const Lightbox = ({ items, index, onClose }) => {
  const [current, setCurrent] = useState(index);

  const next = () =>
    setCurrent((prev) => (prev + 1) % items.length);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );

  // 🔑 Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // 🔥 Swipe support (mobile + desktop)
  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  });

  const currentItem = items[current];

  return (
    <motion.div
      className="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...handlers}
    >
      {/* Close */}
      <button className="close-btn" onClick={onClose}>✕</button>

      {/* Previous */}
      <button
        className="nav-btn left"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
      >
        ‹
      </button>

      {/* Media item */}
      <AnimatePresence mode="wait">
        {currentItem.type === 'video' ? (
          <motion.video
            key={current}
            src={currentItem.src}
            className="lightbox-img" /* reuse class for positioning */
            controls
            autoPlay
            playsInline
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ maxHeight: '85vh', maxWidth: '90vw', objectFit: 'contain' }}
          />
        ) : (
          <motion.img
            key={current}
            src={currentItem.src}
            className="lightbox-img"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        )}
      </AnimatePresence>

      {/* Next */}
      <button
        className="nav-btn right"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
      >
        ›
      </button>
    </motion.div>
  );
};

export default Lightbox;
