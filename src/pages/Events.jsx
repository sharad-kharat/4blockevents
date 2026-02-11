import { useState } from "react";
import StickyHeader from "../components/StickyHeader";
import Gallery from "../components/Gallary";
import ContactBar from "../components/ContactBar";
import "./events.css";

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("wedding");

  return (
    <div className="events-page">
      <StickyHeader
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <Gallery category={activeCategory} />

      <ContactBar />
    </div>
  );
};

export default Events;
