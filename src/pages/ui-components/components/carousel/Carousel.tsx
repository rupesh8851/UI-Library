// @flow

import { useEffect, useRef, useState } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { slider } from './ts/constant.ts';

export const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | number>();

  const onNextSlide = () => {
    setActiveSlide(
      (prevSlide) => (prevSlide + 1 + slider.length) % slider.length,
    );
  };

  const onPrevSlide = () => {
    setActiveSlide(
      (prevSlide) => (prevSlide - 1 + slider.length) % slider.length,
    );
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      onNextSlide();
    }, 2000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="flex w-3/4 h-72 bg-white shadow-md mx-auto mt-20 overflow-hidden relative">
      <div
        className="absolute top-1/2 right-2 cursor-pointer z-10 transition-all -translate-y-1/2 hover:translate-x-2"
        onClick={onNextSlide}
      >
        <IoIosArrowForward className="fill-white shrink-0 size-16" />
      </div>
      <div
        className="absolute top-1/2 left-2 cursor-pointer z-10 transition-all -translate-y-1/2 hover:-translate-x-2"
        onClick={onPrevSlide}
      >
        <IoIosArrowBack className="fill-white shrink-0 size-16" />
      </div>

      <div className="absolute flex items-center justify-between bottom-2 left-1/2 z-10 space-x-2 -translate-x-1/2">
        {slider.map((_, index) => (
          <div
            key={index}
            className={`size-4 rounded-full border-2 border-white transition-colors ${activeSlide === index ? 'bg-white' : ''}`}
          />
        ))}
      </div>

      <div
        className="flex w-full h-full transition-all duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${activeSlide * 100}%)`,
        }}
      >
        {slider.map((src, index) => {
          return <img className="h-full min-w-full " key={index} src={src} />;
        })}
      </div>
    </div>
  );
};
