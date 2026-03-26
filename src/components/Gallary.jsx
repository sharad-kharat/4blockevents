import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Lightbox from "./Lightbox";
import "./gallary.css";
const imageCount = {
  wedding: 12,
  haldi: 13,
  sangeet: 13,
  vidai: 13,
};

const Gallery = ({ category }) => {
  const [lightbox, setLightbox] = useState(null);

  const images = Array.from(
    { length: imageCount[category] },
    (_, i) => `/images/${category}/${i + 1}.jpg`
  );

  return (
    <>
      <motion.div
        layout
        className="gallery-grid"
        key={category}
      >
        <AnimatePresence>
          {images.map((src, i) => (
            <motion.div
              layout
              key={src}
              className="gallery-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() =>
                setLightbox({ images, index: i })
              }
            >
              <img
                src={src}
                loading="lazy"
                alt={category}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
};

export default Gallery;
