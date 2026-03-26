import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './HomeEventsCarousel.css';

import corporateImg from '../../assets/whatwedo/corprate.png';
import sportsImg from '../../assets/whatwedo/sport.jpeg';
import artistImg from '../../assets/whatwedo/artestmanagment.png';
import themewedding from '../../assets/whatwedo/themwedding.webp'
import exibiction from '../../assets/whatwedo/exibiction.jpeg'
import persnol from '../../assets/whatwedo/persnolevent.jpeg'
const events = [
  {
    title: "Corporate Events",
    image: corporateImg,
    link: "/contact"
  },
  {
    title: "Exhibitions",
    image: exibiction,
    link: "/contact"
  },
  {
    title: "Theme Weddings",
    image: themewedding,
    link: "/contact"
  },
  {
    title: "Sports Events",
    image: sportsImg,
    link: "/contact"
  },
  {
    title: "Personal Events",
    image: persnol,
    link: "/contact"
  },
  {
    title: "Artist Management",
    image: artistImg,
    link: "/contact"
  }
];

const HomeEventsCarousel = () => {
  return (
    <section id="events-carousel" className="events-carousel-section max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center mb-16">
        <h2 className="events-carousel-title text-3xl md:text-4xl font-bold uppercase mb-6">
          WHAT WE DO
        </h2>
        {/* <button className="btn-callnow">
          CALL NOW
        </button> */}
      </div>

      {/* Grid / Carousel Items */}
      <div className="events-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {events.map((event, index) => (
          <Link to={event.link} key={index} className="event-card flex flex-col items-center group">
            <div className="event-img-wrapper w-full aspect-[2/3] overflow-hidden rounded-lg shadow-lg">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <h3 className="event-card-title mt-6 text-xl font-medium tracking-wide transition-colors duration-300 group-hover:text-[var(--luxury-gold)]">
              {event.title}
            </h3>
          </Link>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <div className="events-nav-container flex items-center justify-center gap-6 mt-16">
        <button className="nav-arrow-btn" aria-label="Previous">
          <HiOutlineArrowLeft className="w-6 h-6" />
        </button>
        <button className="nav-arrow-btn" aria-label="Next">
          <HiOutlineArrowRight className="w-6 h-6" />
        </button>
      </div> */}
    </section>
  );
};

export default HomeEventsCarousel;
