import { motion } from "framer-motion";
import "./stickyheader.css"
const categories = [
  { key: "wedding", label: "Wedding" },
  { key: "haldi", label: "Haldi" },
  { key: "sangeet", label: "Sangeet" },
  { key: "vidai", label: "Vidai" },
];

const StickyHeader = ({ active, onChange }) => {
  return (
    <header className="sticky-header">
      <motion.div 
        className="brand-container"
        initial={{ opacity: 0, letterSpacing: "2px" }}
        animate={{ opacity: 1, letterSpacing: "8px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="events-title">
          <span className="orange">4</span>
          <span className="yellow">B</span>
          <span className="white-glow">LOCK</span>
          <span className="space"> </span>
          <span className="outline-text">GROUP</span>
        </h1>
      </motion.div>

      <nav className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`category-btn ${active === cat.key ? "active" : ""}`}
            onClick={() => onChange(cat.key)}
          >
            {cat.label}
            {/* This creates the smooth sliding underline */}
            {active === cat.key && (
              <motion.div 
                layoutId="activeUnderline"
                className="active-line"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default StickyHeader;
