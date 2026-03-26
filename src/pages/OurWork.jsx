import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Lightbox from '../components/Lightbox';
import '../components/stickyheader.css';
import '../components/gallary.css';
import './OurWork.css'; 

// Automatically load ALL photos and videos placed directly into public/images/wedding/ 
// No more 12-item limit! It automatically syncs everything in the folder.
const mediaModules = import.meta.glob('/public/images/wedding/*.{jpg,jpeg,png,webp,mp4,mov,JPG,PNG,MP4}', { eager: true });

const allMedia = Object.keys(mediaModules).map(filePath => {
  const src = filePath.replace('/public', '');
  const type = filePath.match(/\.(mp4|mov)$/i) ? 'video' : 'image';
  return { type, src };
}).sort((a, b) => {
  if (a.type === 'image' && b.type === 'video') return -1;
  if (a.type === 'video' && b.type === 'image') return 1;
  return 0;
});

const FadeInMedia = ({ item, onClick, index }) => {
  const mediaRef = useRef(null);

  return (
    <motion.div 
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100%', 
        overflow: 'hidden',
        borderRadius: '16px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
        backgroundColor: '#e5e7eb' // Native fallback background
      }}
      initial={{ opacity: 0, y: 80, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "400px" }}
      transition={{ 
        type: "spring", 
        stiffness: 80, 
        damping: 12,
        delay: (index % 24) * 0.04 // stagger effect based on batch size
      }}
      whileHover={{ y: -8, boxShadow: '0 25px 45px rgba(0,0,0,0.22)' }}
    >
      {item.type === 'video' ? (
        <video
          ref={mediaRef}
          src={item.src}
          muted
          loop
          playsInline
          autoPlay
          onClick={onClick}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            cursor: "pointer",
            position: "relative",
            zIndex: 2
          }}
        />
      ) : (
        <img
          ref={mediaRef}
          src={item.src}
          loading="lazy"
          alt="Gallery Event"
          onClick={onClick}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            cursor: "pointer",
            position: "relative",
            zIndex: 2
          }}
        />
      )}
    </motion.div>
  );
};

const OurWork = () => {
  const [lightbox, setLightbox] = useState(null);
  const [visibleCount, setVisibleCount] = useState(24);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => prev + 24);
      }
    }, { rootMargin: "1500px" });

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="our-work-page">
      {/* Intro Analysis Text Section */}
      <section className="our-work-intro">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="our-work-intro-content"
        >
          <span className="our-work-badge">
            DEEP ANALYSIS
          </span>
          <h1 className="our-work-title">
            OUR WORK
          </h1>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <div className="our-work-gallery-wrap" style={{ marginTop: '2rem' }}>
        <div className="gallery-grid">
          {allMedia.slice(0, visibleCount).map((item, i) => (
            <div
              key={item.src + i}
              className="gallery-card our-work-gallery-card"
              style={{ backgroundColor: 'transparent' }}
            >
              <FadeInMedia item={item} index={i} onClick={() => setLightbox({ items: allMedia, index: i })} />
            </div>
          ))}
        </div>
        
        {/* Intersection Observer target for Infinite Scroll */}
        {visibleCount < allMedia.length && (
          <div ref={loaderRef} style={{ height: '50px', width: '100%', marginTop: '20px' }} />
        )}
      </div>

      {/* Lightbox pop-up */}
      {lightbox && (
        <Lightbox
          items={lightbox.items}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
};

export default OurWork;
