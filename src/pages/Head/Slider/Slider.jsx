import React, { useState, useEffect } from "react";
import "./slider.css";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const data = [
  {
    title: "Lossless Youths",
    img: "https://images.pexels.com/photos/6837799/pexels-photo-6837799.webp",
  },
  {
    title: "Estrange Bond",
    img: "https://images.pexels.com/photos/325044/pexels-photo-325044.webp",
  },
  {
    title: "The Gate Keeper",
    img: "https://images.pexels.com/photos/1291515/pexels-photo-1291515.webp",
  },
  {
    title: "Last Trace Of Us",
    img: "https://images.pexels.com/photos/619419/pexels-photo-619419.webp",
  },
  {
    title: "Urban Decay",
    img: "https://images.pexels.com/photos/35888/amazing-beautiful-breathtaking-clouds.webp",
  },
  {
    title: "The Migration",
    img: "https://images.pexels.com/photos/1304642/pexels-photo-1304642.webp",
  },
];

const Slider = () => {
  const [items, setItems] = useState(data);
  const [selectedImage, setSelectedImage] = useState(null);

  const nextSlide = () => {
    setItems((prev) => {
      const updated = [...prev];
      const first = updated.shift();
      updated.push(first);
      return updated;
    });
  };

  const prevSlide = () => {
    setItems((prev) => {
      const updated = [...prev];
      const last = updated.pop();
      updated.unshift(last);
      return updated;
    });
  };

  /* AUTO SLIDER */

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) => {
        const updated = [...prevItems];
        const first = updated.shift();
        updated.push(first);
        return updated;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <main>
        <ul className="slider">
          {items.map((item, index) => (
            <li
              key={index}
              className="item"
              style={{ backgroundImage: `url(${item.img})` }}
              onClick={() => {
                if (index === 1) setSelectedImage(item.img);
              }}
            >
              <div className="content">
                <h2 className="title">{item.title}</h2>
                <button>Read More</button>
              </div>
            </li>
          ))}
        </ul>

        <div className="nav">
          <button className="btn" onClick={prevSlide}>
            <IoArrowBackOutline />
          </button>

          <button className="btn" onClick={nextSlide}>
            <IoArrowForwardOutline />
          </button>
        </div>
      </main>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="preview" />
        </div>
      )}
    </>
  );
};

export default Slider;