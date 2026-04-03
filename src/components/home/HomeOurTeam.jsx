import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import ownerImg from '../../assets/ourteam/owner.webp';
import corporateImg from '../../assets/ourteam/snehal.webp';
import weddingImg from '../../assets/ourteam/shreyash.webp';
import accountImg from '../../assets/ourteam/bpatil.webp';
import productionImg from '../../assets/ourteam/akshayp.webp'; 
import purchaseImg from '../../assets/ourteam/meet.webp';
import inventoryImg from '../../assets/ourteam/khan.webp';
import './HomeOurTeam.css';

const teamMembers = [
  {
    id: 1,
    name: "Mr. Sagar Chalke",
    role: "Founder & CEO",
    
    image: ownerImg,
    bio: "Driving the vision and success of 4Blocks Events with a passion for excellence.",
  },
  {
    id: 2,
    name: "Mrs. Snehal Ogale",
    role: "Corporate Sales Head",
    image: corporateImg,  
    bio: "Building strong corporate relationships and managing high-profile client accounts.",
  },
  {
    id: 3,
    name: "Mr. Shreyas Mali",
    role: "Wedding & Personal Event Sales Head",
    image: weddingImg,  
    bio: "Turning dream weddings and personal celebrations into beautiful realities.",
  },
  {
    id: 4,
    name: "Mrs. Bhagyashree Patil",
    role: "Account Head",
    image: accountImg,  
    bio: "Ensuring seamless financial operations and meticulous budgeting for all events.",
  },
  {
    id: 5,
    name: "Mr. Akshay Patil",
    role: "Production Head",
    image: productionImg,  
    bio: "Overseeing all stage, sound, and lighting execution to ensure flawless experiences.",
  },
  {
    id: 6,
    name: "Mrs. Meet Kabra",
    role: "Purchase Head",
    image: purchaseImg,  
    bio: "Sourcing the highest quality materials and coordinating essential event logistics.",
  },
  {
    id: 7,
    name: "Mr. SP Khan",
    role: "Inventory Manager",
    image: inventoryImg,  
    bio: "Managing assets and resources to keep our event production running smoothly.",
  }
];

const HomeOurTeam = () => {
  const owner = teamMembers.find(m => m.id === 1);
  const otherMembers = teamMembers.filter(m => m.id !== 1);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="our-team-section">
      <div className="our-team-container">
        
        {/* Section Header */}
        <motion.div 
          className="our-team-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          {/* <span className="our-team-subtitle">MEET TEAM 4 Blocks</span> */}
          <h2 className="our-team-title">OUR TEAM</h2>
          <div className="our-team-divider"></div>
          
          {/* <p className="our-team-description mt-6 max-w-3xl text-center text-gray-600 leading-relaxed">
            The success of 4Blocks Events lies in our dedicated team known as <strong>Team 4 Blocks</strong>. 
            Our team consists of creative designers, event planners, co-ordinators and logistics experts who 
            work together to deliver exceptional events. <br/><br/>
            Team 46 is Passionate about creating memorable celebrations and ensuring every event runs smoothly.
          </p> */}
        </motion.div>

        {/* Owner Section */}
        {owner && (
          <motion.div 
            className="owner-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={cardVariants} className="team-card owner-card">
              <div className="team-image-wrapper">
                <img src={owner.image} alt={owner.name} className="team-image" />
                <div className="team-social-overlay">
                  <a href="https://www.linkedin.com/in/sagar-chalke-51a10996/" aria-label="LinkedIn" className="social-icon"><FaLinkedinIn /></a>
                  <a href="#" aria-label="Twitter" className="social-icon"><FaTwitter /></a>
                  <a href="https://www.instagram.com/4blocks_events_?utm_source=qr&igsh=anUxdmQ5aWFkMzhy" aria-label="Instagram" className="social-icon"><FaInstagram /></a>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{owner.name}</h3>
                <p className="team-role">{owner.role}</p>
                <div className="team-bio-divider"></div>
                <p className="team-bio">{owner.bio}</p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Team Grid */}
        <motion.div 
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {otherMembers.map((member) => (
            <motion.div key={member.id} variants={cardVariants} className="team-card">
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
                {/* <div className="team-social-overlay">
                  <a href="#" aria-label="LinkedIn" className="social-icon"><FaLinkedinIn /></a>
                  <a href="#" aria-label="Twitter" className="social-icon"><FaTwitter /></a>
                  <a href="#" aria-label="Instagram" className="social-icon"><FaInstagram /></a>
                </div> */}
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <div className="team-bio-divider"></div>
                <p className="team-bio">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HomeOurTeam;
