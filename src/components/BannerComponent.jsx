import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Import banner images
import banner1 from '../assets/banners/1.png';
import banner2 from '../assets/banners/2.png';
import banner3 from '../assets/banners/3.png';
import banner4 from '../assets/banners/banner67b5fd306f25d.png';
import banner5 from '../assets/banners/banner67f0c18c21f02.jpg';

const BannerComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  const banners = [
    {
      id: 1,
      image: banner1,
      title: "Welcome Bonus",
      subtitle: "Get up to 100% bonus on your first deposit",
      cta: "Claim Now"
    },
    {
      id: 2,
      image: banner2,
      title: "Daily Rewards",
      subtitle: "Login daily and earn exclusive rewards",
      cta: "Login Now"
    },
    {
      id: 3,
      image: banner3,
      title: "VIP Program",
      subtitle: "Join our VIP program for exclusive benefits",
      cta: "Join VIP"
    },
    {
      id: 4,
      image: banner4,
      title: "Live Casino",
      subtitle: "Experience real-time gaming with live dealers",
      cta: "Play Live"
    },
    {
      id: 5,
      image: banner5,
      title: "Tournament",
      subtitle: "Compete in our weekly tournaments",
      cta: "Join Tournament"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
      {/* Banner Container */}
      <div className="relative w-full h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-8 lg:px-12">
              <div className="max-w-md">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                  {banner.title}
                </h2>
                <p className="text-sm md:text-base text-gray-200 mb-4">
                  {banner.subtitle}
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg transition-colors duration-200">
                  {banner.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-20"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-yellow-500 scale-110'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <button
        onClick={toggleAutoPlay}
        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white px-3 py-1 rounded-full text-xs transition-all duration-200 z-20"
        aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
      >
        {isAutoPlaying ? '⏸️' : '▶️'}
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30 z-20">
        <div
          className="h-full bg-yellow-500 transition-all duration-100 ease-linear"
          style={{
            width: `${((currentSlide + 1) / banners.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
};

export default BannerComponent; 