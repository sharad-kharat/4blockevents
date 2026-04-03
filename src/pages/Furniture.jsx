import React from "react";
import { motion } from "motion/react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaShoppingCart
} from "react-icons/fa";
import "./Furniture.css";

const products = [
  {
    id: 1,
    name: "Luxury Sofa",
    price: "₹24,999",
    img: "/images/furniture/sofa.webp",
  },
  {
    id: 2,
    name: "Modern Chair",
    price: "₹6,999",
    img: "/images/furniture/chair.webp",
  },
  {
    id: 3,
    name: "Wooden Table",
    price: "₹12,499",
    img: "/images/furniture/table.webp",
  },
  {
    id: 4,
    name: "Premium Bed",
    price: "₹34,999",
    img: "/images/furniture/bed.webp",
  },
];

const Furniture = () => {
  return (
    <div className="furniture-page">

      {/* ===== BRAND HEADER ===== */}
      <header className="brand-header">
        <h1 className="glow-logo">4 BLOCK FURNITURE</h1>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="furniture-hero">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hero-content"
        >
          <h2>Premium Furniture Collection</h2>
          <p>Modern designs crafted for comfort & elegance.</p>
        </motion.div>
      </section>

      {/* ===== PRODUCT GRID ===== */}
      <section className="product-section">
        <h2 className="section-title">Featured Products</h2>

        <div className="product-grid">
          {products.map((item) => (
            <motion.div
              key={item.id}
              className="product-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="product-img">
                <img src={item.img} alt={item.name} />
              </div>

              <div className="product-info">
                <h3>{item.name}</h3>
                <p>{item.price}</p>

                <button className="cart-btn">
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FLOATING CONTACT BAR ===== */}
      <div className="contact-bar">
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

export default Furniture;
