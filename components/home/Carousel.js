// components/Carousel.js
"use client";
import Image from "next/image";
import { useState } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative mb-8 max-w-5xl mx-auto rounded-full overflow-hidden shadow-2xl">
      <div className="relative overflow-hidden">
        <Image
          src={items[currentIndex].src}
          alt={items[currentIndex].alt}
          width={1920}
          height={600}
          className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform scale-100 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-center p-6">
        <h3 className="text-white text-3xl md:text-4xl font-extrabold drop-shadow-lg">
          {items[currentIndex].caption}
        </h3>
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gradient-to-r from-black to-transparent p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Previous image"
      >
        <span className="text-white text-xl font-semibold">&lt;</span>
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gradient-to-l from-black to-transparent p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Next image"
      >
        <span className="text-white text-xl font-semibold">&gt;</span>
      </button>
    </div>
  );
};

export default Carousel;
