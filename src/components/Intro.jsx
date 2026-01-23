import "./Intro.css";
import img1 from "../assets/Starter/intro1.png";
import img2 from "../assets/Starter/intro2.png";

const Intro = () => {
  return (
    <div className="intro-container">
      <img src={img1} alt="img1" className="img-top" />
      <img src={img2} alt="img2" className="img-right" />

      <h1 className="intro-text title">
        <span className="orange">4</span>
        <span className="yellow">B</span>
        <span className="green">L</span><span className="green">l</span>
        <span className="orange">O</span>
        <span className="sky">C</span>
       <span className="yellow">K</span>
<span> </span>
        <span className="orange">E</span>
        <span className="yellow">V</span>
        <span className="green">E</span><span className="green">l</span>
        <span className="orange">N</span>
        <span className="sky">T</span>
      </h1>

      <h2 className="intro-text subtitle">
        Delivering Everlasting Memories
      </h2>
    </div>
  );
};

export default Intro;
