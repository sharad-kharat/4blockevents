import React from "react";
import "./HomeVentures.css";

// Importing logos
import logoAnantam from "../../assets/ourventures/anantamlogo.webp"; // Using main company logo as fallback for Anantam Banquet
import logoTurf from "../../assets/ourventures/turflogo.png";
import logoTravel from "../../assets/ourventures/cablogo.png";
import logoFurniture from "../../assets/ourventures/furniturelogo.png";

const ventures = [
  {
    id: 1,
    name: "ANANTAM BANQUET",
    location: "RAVET",
    description: "A luxurious destination for grand celebrations and memorable events.",
    icon: logoAnantam
  },
  {
    id: 2,
    name: "MY TURF",
    location: "CHINCHWAD",
    description: "Providing premium sports arenas and organizing exciting sports events. Host your sports events with us.",
    icon: logoTurf
  },
  {
    id: 3,
    name: "TRAVEL TIME TALES",
    location: "TATHWADE",
    description: "Providing reliable and hassle-free cab services for all your travel and event transportation needs.",
    icon: logoTravel
  },
  {
    id: 4,
    name: "FURNITURE FOR EVENT",
    location: "TATHAWADE",
    description: "Elegant and versatile furniture rentals to elevate any occasion.",
    icon: logoFurniture
  }
];

const HomeVentures = () => {
  return (
    <section className="ventures-section">
      <div className="ventures-header">
        <h2 className="ventures-title-top">OUR VENTURES</h2>
        <p className="ventures-subtitle">
          Discover our diverse portfolio of premium services and partnered businesses.
        </p>
      </div>

      <div className="ventures-grid">
        {ventures.map((venture, index) => (
          <div 
            className="venture-card" 
            key={venture.id}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="venture-card-inner">
              <div className="venture-icon">
                <img src={venture.icon} alt={`${venture.name} Logo`} className="venture-logo-img" />
              </div>
              <h3 className="venture-name">{venture.name}</h3>
              <span className="venture-location">{venture.location}</span>
              <p className="venture-description">{venture.description}</p>
              
              <div className="venture-card-hover-border"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeVentures;
