import { useEffect } from "react";
import "./Intro.css";

import img1 from "../assets/Starter/intro1.png";
import img2 from "../assets/Starter/intro2.png";
import introSound from "../assets/sounds/introsound.mp3";

const Intro = () => {
 useEffect(() => {
  const audio = new Audio(introSound);
  audio.volume = 0.25;
  audio.muted = true;

  // preload + muted autoplay (allowed)
  audio.play().catch(() => {});

  const unlockAudio = () => {
    audio.muted = false;
    audio.play().catch(() => {});
    window.removeEventListener("pointerdown", unlockAudio);
    window.removeEventListener("keydown", unlockAudio);
  };

  // TRUSTED user gestures
  window.addEventListener("pointerdown", unlockAudio, { once: true });
  window.addEventListener("keydown", unlockAudio, { once: true });

  return () => {
    audio.pause();
    window.removeEventListener("pointerdown", unlockAudio);
    window.removeEventListener("keydown", unlockAudio);
  };
}, []);






  return (
    <div className="intro-container">
      {/* Decorative Images */}
      <img src={img1} alt="Intro Visual 1" className="img-top" />
      <img src={img2} alt="Intro Visual 2" className="img-right" />

      {/* Brand Title */}
      <h1 className="intro-text title">
        <span className="orange">4</span>
        <span className="yellow">B</span>
        <span className="light">L</span>
        <span className="light">L</span>
        <span className="orange">O</span>
        <span className="light">C</span>
        <span className="yellow">K</span>
        <span className="space" />
        <span className="orange">G</span>
        <span className="yellow">R</span>
        <span className="light">O</span>
        <span className="light">U</span>
        <span className="light">P</span>
      </h1>

      {/* Tagline */}
      <h2 className="intro-text subtitle">
        Delivering Everlasting Memories
      </h2>
    </div>
  );
};

export default Intro;
