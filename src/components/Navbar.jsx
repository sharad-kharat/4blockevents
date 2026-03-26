import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import "./Navbar.css";
import logoImg from "../assets/Logo/Logo1.png";

const links = [
  { name: "HOME", path: "/" },
  { name: "SERVICES", path: "/#events-carousel" },
  { name: "OUR WORK", path: "/our-work" },
  { name: "CONTACT US", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();

  const [hovered, setHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img src={logoImg} alt="4 BLOCK Events Logo" className="logo-img" />
          <div className="logo-text-container">
            <span className="logo-text">4 BLOCKS EVENT</span>
            <span className="logo-subtext">Delivering Everlasting Memories.</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links">

          {links.map((link, index) => {
            const active = location.pathname === link.path;

            const content = (
              <>
                {hovered === index && (
                  <motion.div
                    layoutId="hover-pill"
                    className="hover-pill"
                  />
                )}

                {active && (
                  <motion.div
                    layoutId="active-pill"
                    className="active-pill"
                  />
                )}

                <span className="nav-text">{link.name}</span>
              </>
            );

            if (link.path.startsWith('/#')) {
              return (
                <a
                  key={index}
                  href={link.path}
                  className="nav-item"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={index}
                to={link.path}
                className="nav-item"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {content}
              </Link>
            );
          })}



        </div>

        {/* Mobile Button */}
        <button
          className="mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

      </div>

      {/* Mobile Menu Backdrop and Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Clickable Backdrop Overlay */}
            <motion.div
              className="mobile-backdrop"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Side Drawer */}
            <motion.div
              className="mobile-menu drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="drawer-header">
                <button className="mobile-close-btn" onClick={() => setMobileOpen(false)}>
                  <HiX size={32} />
                </button>
              </div>

              {links.map((link) => {
                if (link.path.startsWith('/#')) {
                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      onClick={() => setMobileOpen(false)}
                      className="mobile-link"
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="mobile-link"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}