'use client';

import Icon from '@import/components/Icon';
import classNames from 'classnames';
import React, { useEffect, useState, useCallback } from 'react';

type CarouselProps = {
  autoPlayInterval?: number; // Optional interval for auto-play
  arrowColor?: string; // Optional interval for auto-play
  children: React.ReactNode[]; // Optional interval for auto-play
};

const Carousel: React.FC<CarouselProps> = ({ autoPlayInterval = 0, children, arrowColor = '#000' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Wrap nextSlide function with useCallback to prevent unnecessary re-renders
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  }, [children.length]);

  // Wrap prevSlide function with useCallback to prevent unnecessary re-renders
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? children.length - 1 : prevIndex - 1));
  }, [children.length]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (autoPlayInterval >= 100) {
      interval = setInterval(nextSlide, autoPlayInterval);
    }
    return () => {
      if (interval) {
        clearInterval(interval); // Cleanup interval on unmount or autoPlayInterval change
      }
    };
    // eslint-disable-next-line
  }, [autoPlayInterval]);

  return (
    <div className="w-full block relative lg:px-[20px] px-0">
      <button
        onClick={prevSlide}
        className="z-20 absolute left-0 top-1/2 transform -translate-y-1/2 pr-3 text-white bg-opacity-50 rounded-full">
        <Icon name="caret-left" color={arrowColor}></Icon>
      </button>
      <button
        onClick={nextSlide}
        className="z-20 absolute right-0 top-1/2 transform -translate-y-1/2 pl-3 text-white bg-opacity-50 rounded-full">
        <Icon name="caret-right" color={arrowColor}></Icon>
      </button>
      <div className="w-full flex h-[410px] overflow-hidden">
        <div className="w-full relative flex justify-center items-center">
          {children.map((element, index) => {
            const isLeft = currentIndex === (index - 1 + children.length) % children.length; // Left side image
            const isRight = currentIndex === (index + 1) % children.length; // Right side image
            const isCenter = currentIndex === index; // Center active image

            return (
              <div
                key={index}
                className={classNames('absolute top-0 bottom-0 transition-all ease-in-out', {
                  // Center image takes full space
                  'z-10 w-full flex scale-100 transform top-0 left-0 right-0 bottom-0 justify-center items-center':
                    isCenter,
                  // Left image is half and on the left side
                  'z-0 w-1/2 inline-flex lg:scale-[0.8] scale-75 transform -translate-x-[50%] duration-100': isLeft,
                  // Right image is half and on the right side
                  'z-0 w-1/2 inline-flex lg:scale-[0.8] scale-75 transform translate-x-[50%] ': isRight,
                })}>
                <div
                  className={classNames('flex transition-all duration-100 ease-in', {
                    'lg:w-[54%] w-[254px]': isCenter, // Active image
                    'w-full flex': !isCenter, // Non-active data
                  })}>
                  {element}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
