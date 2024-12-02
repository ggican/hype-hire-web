'use client';

import React, { useState, useEffect } from 'react';

type TSliderProps = {
  children: React.ReactNode[];
  duration?: number;
};

const Slider: React.FC<TSliderProps> = ({ children, duration = 5000 }) => {
  // State to track the current slide
  const [slideIndex, setSlideIndex] = useState(0);

  // Array of items
  const items = [...children, ...children, ...children, ...children];

  // Clone the first set of items to create an infinite loop effect
  const duplicatedItems = items;

  // Slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, duration);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="flex w-full mt-[60px] relative z-10">
      {/* Container with overflow hidden to create a slide effect */}
      <div className="w-full overflow-hidden">
        {/* The sliding items */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${slideIndex * (100 / items.length)}%)`,
          }}>
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[calc(100%/6-10px)] mr-[10px]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
