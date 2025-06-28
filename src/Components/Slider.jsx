import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaChevronRight } from "react-icons/fa6";

const images = [
  'https://blogmedia.testbook.com/blog/wp-content/uploads/2025/03/1752x406-1769d17b.png',
  'https://blogmedia.testbook.com/blog/wp-content/uploads/2025/04/1752x406.png-text-932ea2a0.png',
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div   className="relative w-full min-h-[300px] overflow-hidden">
      <img
        src={images[currentIndex]}
        alt="slider"
        className="w-full h-full object-cover transition duration-500"
      />

    
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black p-2 rounded-full"
      >
        <FaAngleLeft />
      </button>

      
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black p-2 rounded-full"
      >
        <FaChevronRight />
      </button>

      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? 'bg-blue-600' : 'bg-blue-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
