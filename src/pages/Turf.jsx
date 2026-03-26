import { useState, useEffect } from "react";
import {
  FaCalendarAlt,
  FaFutbol,
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import "./Turf.css";

/* ---------------- IMAGE DATA ---------------- */

const imageData = [
  { src: "/images/turf/1.jpg", category: "Events" },
  { src: "/images/turf/2.jpg", category: "Football" },
  { src: "/images/turf/3.jpg", category: "Cricket" },
  { src: "/images/turf/4.jpg", category: "Events" },
  { src: "/images/turf/5.jpg", category: "Football" },
];

/* ---------------- CATEGORIES ---------------- */

const CATEGORIES = [
  { id: "Events", icon: <FaCalendarAlt />, label: "Events" },
  { id: "Football", icon: <FaFutbol />, label: "Football" },
  { id: "Cricket", icon: <MdSportsCricket />, label: "Cricket" },
];

const Turf = () => {
  const [filter, setFilter] = useState("Events");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [fade, setFade] = useState(false);

  const filteredImages = imageData.filter(
    (img) => img.category === filter
  );

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === filteredImages.length - 1 ? 0 : prev + 1
      );
      setFade(true);
    }, 150);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? filteredImages.length - 1 : prev - 1
      );
      setFade(true);
    }, 150);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") setCurrentIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, filteredImages]);

  return (
    <div className="turf-page">
      {/* HEADER */}
      <header className="turf-header">
        <h1 className="animated-logo">4 BLOCK GROUP</h1>

        <nav className="turf-nav">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={filter === cat.id ? "active" : ""}
              onClick={() => setFilter(cat.id)}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </nav>
      </header>

      {/* ABOUT */}
      <section className="about-section">
        <h2>About 4Block Turf</h2>
        <p>
          Pune's premium multi-sport arena for football,
          cricket and events.
        </p>

        <div className="about-buttons">
          <a href="tel:+919067785123" className="about-btn">
            <FaPhoneAlt /> 9067785123
          </a>

          <a
            href="mailto:sharadkharat@gmail.com"
            className="about-btn"
          >
            <FaEnvelope /> sharadkharat@gmail.com
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <div className="masonry-grid">
          {filteredImages.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt="turf"
              onClick={() => {
                setCurrentIndex(index);
                setFade(true);
              }}
            />
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {currentIndex !== null && (
        <div
          className="lightbox"
          onClick={() => setCurrentIndex(null)}
        >
          <button className="prev" onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}>❮</button>

          <img
            src={filteredImages[currentIndex].src}
            className={`lightbox-img ${fade ? "fade-in" : ""}`}
            onClick={(e) => e.stopPropagation()}
            alt="preview"
          />

          <button className="next" onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}>❯</button>
        </div>
      )}

      {/* FLOATING ICONS */}
      <div className="contact-bar-turf">
        <a href="tel:+919067785123" className="icon call">
          <FaPhoneAlt />
        </a>

        <a
          href="https://wa.me/919067785123"
          target="_blank"
          rel="noopener noreferrer"
          className="icon whatsapp"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://instagram.com/4blockgroup"
          target="_blank"
          rel="noopener noreferrer"
          className="icon instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Turf;
