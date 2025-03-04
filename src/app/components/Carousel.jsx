"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import the Image component from Next.js

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // Number of slides

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Slide 1 */}
        <div
          className={`duration-700 ease-in-out ${
            currentSlide === 0 ? "block" : "hidden"
          }`}
          data-carousel-item
        >
          <Image
            src="/poster1.png"
            className="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 1"
            width={500}
            height={300}
          />
        </div>
        {/* Slide 2 */}
        <div
          className={`duration-700 ease-in-out ${
            currentSlide === 1 ? "block" : "hidden"
          }`}
          data-carousel-item
        >
          <Image
            src="/poster2.png"
            className="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 2"
            width={500}
            height={300}
          />
        </div>
        {/* Slide 3 */}
        <div
          className={`duration-700 ease-in-out ${
            currentSlide === 2 ? "block" : "hidden"
          }`}
          data-carousel-item
        >
          <Image
            src="/poster3.png"
            className="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 3"
            width={500}
            height={300}
          />
        </div>
        {/* Slide 4 */}
        <div
          className={`duration-700 ease-in-out ${
            currentSlide === 3 ? "block" : "hidden"
          }`}
          data-carousel-item
        >
          <Image
            src="/art4.jpg"
            className="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 4"
            width={500}
            height={300}
          />
        </div>
        {/* Slide 5 */}
        <div
          className={`duration-700 ease-in-out ${
            currentSlide === 4 ? "block" : "hidden"
          }`}
          data-carousel-item
        >
          <Image
            src="/art5.jpg"
            className="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 5"
            width={500}
            height={300}
          />
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current={currentSlide === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
