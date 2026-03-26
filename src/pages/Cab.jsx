import React from "react";
import {
  FaCar,
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import "./Cab.css";

const Cab = () => {
  return (
    <div className="cab-page">

      {/* HEADER */}
      <header className="cab-header">
        <h1 className="cab-logo">4 BLOCK GROUP</h1>

        <nav className="cab-nav">
          <button className="active">
            <FaCar /> Cab Rental
          </button>
          <button>
            <FaMapMarkerAlt /> Outstation
          </button>
        </nav>
      </header>

      {/* ABOUT SECTION */}
      <section className="cab-about">
        <h2>About 4Block Cab Service</h2>
        <p>
          Premium cab rental service in Pune for local, airport
          and outstation travel. Safe, affordable and reliable.
        </p>

        <div className="cab-buttons">
          <a href="tel:+919067785123" className="cab-btn">
            <FaPhoneAlt /> 9067785123
          </a>

          <a href="mailto:sharadkharat@gmail.com" className="cab-btn">
            <FaEnvelope /> sharadkharat@gmail.com
          </a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="cab-services">
        <div className="service-card">
          <FaCar className="service-icon" />
          <h3>Local Rides</h3>
          <p>Comfortable daily city travel.</p>
        </div>

        <div className="service-card">
          <FaMapMarkerAlt className="service-icon" />
          <h3>Outstation Trips</h3>
          <p>Weekend and long-distance journeys.</p>
        </div>

        <div className="service-card">
          <FaCar className="service-icon" />
          <h3>Airport Pickup</h3>
          <p>On-time pickup & drop service.</p>
        </div>
      </section>

      {/* FLOATING CONTACT BAR */}
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

export default Cab;
