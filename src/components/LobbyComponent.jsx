import React, { useState, useRef, useEffect } from 'react';
import { gameLogos } from '../utils/imageUtils';

const LobbyComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const gameCategories = [
    {
      name: 'Win Go',
      icon: '🎲',
      color: 'bg-blue-500',
      image: gameLogos.PragmaticPlay,
      description: 'Lottery & Number Games'
    },
    {
      name: 'TRX Hash',
      icon: '₿',
      color: 'bg-yellow-500',
      image: gameLogos.Cq9,
      description: 'Crypto & Hash Games'
    },
    {
      name: 'Slot',
      icon: '🎰',
      color: 'bg-purple-500',
      image: gameLogos.Epicwin,
      description: 'Slot Machine Games'
    },
    {
      name: 'Live Casino',
      icon: '♠️',
      color: 'bg-green-500',
      image: gameLogos.Live22,
      description: 'Live Casino Games'
    },
    {
      name: 'Fish',
      icon: '🐟',
      color: 'bg-pink-500',
      image: gameLogos.Cq9Fishing,
      description: 'Fishing Games'
    },
    {
      name: 'Arcade',
      icon: '🎮',
      color: 'bg-orange-500',
      image: gameLogos.Hacksaw,
      description: 'Arcade & Skill Games'
    },
    {
      name: 'Table',
      icon: '🎲',
      color: 'bg-green-600',
      image: gameLogos.JDB,
      description: 'Table Games'
    },
    {
      name: 'Crash',
      icon: '💥',
      color: 'bg-gradient-to-r from-pink-500 to-purple-500',
      image: gameLogos.PlayStarSlot,
      description: 'Crash Games'
    },
    {
      name: 'More Games',
      icon: '🎰',
      color: 'bg-purple-700',
      image: gameLogos.BGaming,
      description: 'Additional Games'
    }
  ];

  const slidesPerView = 3; // Show 3 categories per view
  const totalSlides = Math.ceil(gameCategories.length / slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Touch/Swipe functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-6">
        <span className="text-2xl">🏠</span>
        <h1 className="text-2xl lg:text-3xl font-bold text-white">Lobby</h1>
      </div>

      {/* Game Categories Slider */}
      <div>
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-white">Game Categories</h2>
          
          {/* Navigation Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-1">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-purple-500' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Slider Container */}
        <div className="hidden lg:block relative overflow-hidden rounded-lg">
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-300 ease-in-out cursor-grab active:cursor-grabbing"
            style={{
              transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
              width: `${(gameCategories.length / slidesPerView) * 100}%`
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {gameCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-4 text-center text-white cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex-shrink-0"
                style={{ width: `${100 / gameCategories.length}%` }}
              >
                {/* Game Image */}
                <div className="relative mb-3">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-2 overflow-hidden">
                    {category.image ? (
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="w-full h-full flex items-center justify-center text-3xl" style={{ display: category.image ? 'none' : 'flex' }}>
                      {category.icon}
                    </div>
                  </div>
                </div>
                
                {/* Game Info */}
                <div className="font-bold text-base mb-2">{category.name}</div>
                <div className="text-sm opacity-90">{category.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Grid View */}
        <div className="lg:hidden">
          <div className="grid grid-cols-3 gap-2">
            {gameCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-2 text-center text-white cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {/* Game Image */}
                <div className="relative mb-2">
                  <div className="w-full h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-1 overflow-hidden">
                    {category.image ? (
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="w-full h-full flex items-center justify-center text-xl" style={{ display: category.image ? 'none' : 'flex' }}>
                      {category.icon}
                    </div>
                  </div>
                </div>
                
                {/* Game Info */}
                <div className="font-bold text-sm">{category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-400">1,234</div>
          <div className="text-gray-400 text-sm">Active Players</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-purple-400">567</div>
          <div className="text-gray-400 text-sm">Games Available</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-yellow-400">89</div>
          <div className="text-gray-400 text-sm">Providers</div>
        </div>
      </div> */}
    </div>
  );
};

export default LobbyComponent; 