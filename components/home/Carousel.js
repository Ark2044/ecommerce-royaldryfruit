// components/Carousel.js
'use client'
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
    <div className="relative mb-8">
      <div className="overflow-hidden rounded-full shadow-lg">
        <Image
          src={items[currentIndex].src}
          alt={items[currentIndex].alt}
          width={1920}
          height={600}
          className="w-full h-auto"
        />
      </div>
      <p className="text-center text-lg font-semibold text-gray-700 mt-2">
        {items[currentIndex].caption}
      </p>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors duration-300"
        aria-label="Previous image"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors duration-300"
        aria-label="Next image"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
