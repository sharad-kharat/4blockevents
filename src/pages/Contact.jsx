import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="contact-page">
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Row: Form and Info */}
        <div className="contact-top-row">
          {/* Left Column: Contact Form */}
          <motion.div className="contact-column" variants={itemVariants}>
            <h2 className="contact-heading">Send Us a Message</h2>
            <div className="contact-form-box">
              <h3 className="form-title">Contact Us</h3>
              <form className="contact-form">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email Address" required />
                <textarea placeholder="Message (Text Area)" rows="5" required></textarea>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Contact Info */}
          <motion.div className="contact-column contact-info-column" variants={itemVariants}>
            <h2 className="contact-heading">CONNECT WITH US</h2>
            
            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <div>
                <p>+91 8855844448</p>
                <p>+91 9021351689</p>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <p><strong>General:</strong> 4blocksevents@gmail.com</p>
                <p><strong>Corporate Sales:</strong> SNEHAL.4BLOCKSEVENTS@GMAIL.COM</p>
                <p><strong>Wedding/Personal:</strong> SHREYAS.4BLOCKSEVENT@GMAIL.COM</p>
              </div>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt className="info-icon location-icon" />
              <div>
                <p className="mb-2"><strong>Current Address:</strong><br/>4BLOCKS ENT. near Arun Car Care, Gada Road, beside Renuka Pancha Tattva, Tathawade, Pune, 411033.</p>
                <p><strong>Permanent Address:</strong><br/>Building No.60, Flat No.08, Masulkar Colony, near Annapurna Hotel, Pimpri, Pune 411018.</p>
              </div>
            </div>
          </motion.div>
        </div>

      </motion.div>

      {/* Footer Links */}
      <motion.div 
        className="contact-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p>Privacy Policy &nbsp;&nbsp;|&nbsp;&nbsp; Terms & Conditions</p>
      </motion.div>
    </div>
  );
};

export default Contact;
