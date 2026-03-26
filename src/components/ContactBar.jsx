import { FaPhoneAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./ContactBar.css";

const ContactBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 300);
  }, []);


  
  return (
    <div className={`contact-bar ${visible ? "show" : ""}`}>
      <a href="tel:+919067785123" className="icon call">
        <FaPhoneAlt />
      </a>

      <a
        href="https://wa.me/919067785123"
        target="_blank"
        rel="noreferrer"
        className="icon whatsapp"
      >
        <FaWhatsapp />
        <span className="ring"></span>
      </a>

      <a
        href="https://instagram.com/4blockgroup"
        target="_blank"
        rel="noreferrer"
        className="icon instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default ContactBar;