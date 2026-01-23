import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Wedding.css";

// 👉 Replace these with your real images
const images = [
  "/Wedding/heroimg1.jpg",
  "/Wedding/heroimg2.jpg",
  "/Wedding/heroimg3.jpg",
  "/Wedding/heroimg4.jpg",
  "/Wedding/heroimg5.jpg",
    "/Wedding/heroimg6.jpg",

];

const Wedding = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeModal = () => setActiveIndex(null);

  const nextImage = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="wedding-page">
      {/* CONTACT BAR */}
      <div className="contact-bar">
        <span>📞 +91 90677 85123</span>
        <span>💍 4 Block Events</span>
        <span>✉️ events@4block.com</span>
      </div>

      {/* TITLE */}
      <h1 className="page-title">Wedding Events</h1>
      <p className="page-subtitle">
        Turning your special moments into lifelong memories
      </p>

      {/* IMAGE GRID */}
      <div className="gallery">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="Wedding Event"
            className="gallery-img"
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="close-btn" onClick={closeModal}>
              ✕
            </button>

            <button className="nav-btn left" onClick={prevImage}>
              ‹
            </button>

            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              className="lightbox-img"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            />

            <button className="nav-btn right" onClick={nextImage}>
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Wedding;
