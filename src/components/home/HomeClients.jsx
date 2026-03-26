import React from 'react';
import { motion } from 'framer-motion';
import './HomeClients.css';

import logoVJ from "../../assets/ourpartner/vilasjavdekarlogo.jpg";
import logoSupreme from "../../assets/ourpartner/suprimelogo.png";
import logoRohan from "../../assets/ourpartner/rohanlogo.jpg";
import logoVerma from "../../assets/ourpartner/vermahomeslogo.png";
import logoJhamtani from "../../assets/ourpartner/jhamtanilogo.png";
import logoDas from "../../assets/ourpartner/daslogo.png";
import logoTunkers from "../../assets/ourpartner/tunkerslogo.png";
import logoSumsoft from "../../assets/ourpartner/sumalogo.png";

const clients = [
  { name: "VILAS JAVDEKAR", logo: logoVJ },
  { name: "SUPRIME UNIVERSAL", logo: logoSupreme },
  { name: "ROHAN BUILDERS", logo: logoRohan },
  { name: "VERMA BUILDERS", logo: logoVerma },
  { name: "JAMTANI BUILDERS", logo: logoJhamtani },
  { name: "DAEBU AUTOMOTIVE SEAT", logo: logoDas },
  { name: "TUNKERS AUTOMATION", logo: logoTunkers },
  { name: "SUMASOFT PVT LTD", logo: logoSumsoft }
];

const HomeClients = () => {
  return (
    <section className="home-clients-section">
      <div className="home-clients-container">
        
        {/* Header */}
        <motion.div 
          className="clients-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="clients-subtitle">TRUSTED BY THE BEST</span>
          <h2 className="clients-title">OUR CLIENTS</h2>
          <div className="clients-divider"></div>
        </motion.div>

        {/* Marquee Wrapper */}
        <div className="clients-marquee-wrapper">
          <div className="clients-marquee">
            {/* 
               We duplicate the list twice so that the CSS animation can scroll 
               infinitely and seamlessly without a gap.
            */}
            <div className="clients-marquee-content">
              {clients.map((client, index) => (
                <div key={`first-${index}`} className="client-item">
                  <img src={client.logo} alt={`${client.name} Logo`} className="client-logo" />
                  <span className="client-name">{client.name}</span>
                </div>
              ))}
            </div>
            <div className="clients-marquee-content" aria-hidden="true">
              {clients.map((client, index) => (
                <div key={`second-${index}`} className="client-item">
                  <img src={client.logo} alt={`${client.name} Logo`} className="client-logo" />
                  <span className="client-name">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeClients;
