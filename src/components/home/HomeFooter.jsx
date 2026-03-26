import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import logoImg from '../../assets/Logo/Logo1.png';
import './HomeFooter.css';

const HomeFooter = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Column 1: Brand */}
        <div className="footer-brand">
          <div className="footer-logo-wrapper">
            <img src={logoImg} alt="4 Blocks Events Logo" className="footer-logo-img" />
            <div className="footer-logo-text-container">
              <h2 className="footer-logo">4 BLOCKS EVENT</h2>
              <span className="footer-tagline">Delivering Everlasting Memories.</span>
            </div>
          </div>
          <p className="footer-desc">
            Your premier destination for luxury event management in Pune. 
            We turn your grandest celebrations into flawless, lifelong memories.
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/share/1RMKhbAEc7/?mibextid=wwXIfr" className="footer-social-icon" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/4blocks_events_?igsh=eWp3YW5xMjVxdzlo" className="footer-social-icon" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://youtube.com/@sagarchalke4409?si=1SKRZFSmWRahdqPB" className="footer-social-icon" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://www.linkedin.com/company/4blocksevent/" className="footer-social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-links-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/our-work">Our Portfolio</Link></li>
            <li><Link to="/consultancy">Event Consultancy</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-contact-col">
          <h3 className="footer-title">Contact Us</h3>
          
          <div className="footer-contact-block">
            <h4>Customer Care</h4>
            <p>+91 8855844448</p>
            <p>+91 9021351689</p>
          </div>

          <div className="footer-contact-block">
            <h4>Email Inquiries</h4>
            <p><strong>General:</strong> 4blocksevents@gmail.com</p>
            <p><strong>Corporate:</strong> SNEHAL.4BLOCKSEVENTS@GMAIL.COM</p>
            <p><strong>Weddings:</strong> SHREYAS.4BLOCKSEVENT@GMAIL.COM</p>
          </div>
        </div>

        {/* Column 4: Locations */}
        <div className="footer-location-col">
          <h3 className="footer-title">Our Locations</h3>
          
          <div className="footer-contact-block">
            <h4>Current Office</h4>
            <p>
              4BLOCKS ENT. near Arun Car Care, Gada Road, 
              beside Renuka Pancha Tattva, Tathawade, Pune, 411033.
            </p>
          </div>

          <div className="footer-contact-block">
            <h4>Permanent Address</h4>
            <p>
              Building No.60, Flat No.08, Masulkar Colony, 
              near Annapurna Hotel, Pimpri, Pune 411018.
            </p>
          </div>
        </div>

      </div>

      {/* Footer Bottom Line */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">© {new Date().getFullYear()} 4 Blocks Events. All Rights Reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
