import React from 'react';
import { gameLogos } from '../utils/imageUtils';

const LobbyComponent = () => {
  const gameCategories = [
    {
      name: 'Win Go',
      provider: 'Lottery Games',
      icon: '🎲',
      image: gameLogos.PragmaticPlay,
      description: 'Lottery & Number Games',
      rating: 4.8
    },
    {
      name: 'TRX Hash',
      provider: 'Crypto Games',
      icon: '₿',
      image: gameLogos.Cq9,
      description: 'Crypto & Hash Games',
      rating: 4.6
    },
    {
      name: 'Slot',
      provider: 'Slot Games',
      icon: '🎰',
      image: gameLogos.Epicwin,
      description: 'Slot Machine Games',
      rating: 4.7
    },
    {
      name: 'Live Casino',
      provider: 'Live Games',
      icon: '♠️',
      image: gameLogos.Live22,
      description: 'Live Casino Games',
      rating: 4.5
    },
    {
      name: 'Fish',
      provider: 'Fishing Games',
      icon: '🐟',
      image: gameLogos.Cq9Fishing,
      description: 'Fishing Games',
      rating: 4.4
    },
    {
      name: 'Arcade',
      provider: 'Arcade Games',
      icon: '🎮',
      image: gameLogos.Hacksaw,
      description: 'Arcade & Skill Games',
      rating: 4.3
    },
    {
      name: 'Table',
      provider: 'Table Games',
      icon: '🎲',
      image: gameLogos.JDB,
      description: 'Table Games',
      rating: 4.6
    },
    {
      name: 'Crash',
      provider: 'Crash Games',
      icon: '💥',
      image: gameLogos.PlayStarSlot,
      description: 'Crash Games',
      rating: 4.9
    },
    {
      name: 'More Games',
      provider: 'Additional Games',
      icon: '🎰',
      image: gameLogos.BGaming,
      description: 'Additional Games',
      rating: 4.2
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🏠</span>
          <h2 className="text-xl lg:text-2xl font-bold text-white">Lobby</h2>
        </div>
        <button className="text-purple-400 hover:text-white transition-colors text-sm lg:text-base">
          See More →
        </button>
      </div>

      {/* Game Categories Grid - 3 per row on mobile, 5 on desktop */}
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-6">
        {gameCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-2 lg:p-4 text-center cursor-pointer hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {/* Game Image */}
            <div className="relative mb-2 lg:mb-3">
              <div className="w-full h-16 lg:h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-2 overflow-hidden">
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
                <div className="w-full h-full flex items-center justify-center text-xl lg:text-4xl" style={{ display: category.image ? 'none' : 'flex' }}>
                  {category.icon}
                </div>
              </div>
              {/* Rating Badge */}
              <div className="absolute top-1 right-1 lg:top-2 lg:right-2 bg-yellow-500 text-black text-xs px-1 lg:px-2 py-0.5 lg:py-1 rounded-full font-bold">
                {category.rating}
              </div>
            </div>
            
            {/* Game Info */}
            <div className="text-white font-semibold text-xs lg:text-base mb-1 truncate">
              {category.name}
            </div>
            <div className="text-gray-400 text-xs mb-1 lg:mb-2">
              {category.provider}
            </div>
            <div className="text-gray-500 text-xs truncate hidden lg:block">
              {category.description}
            </div>
          </div>
        ))}
      </div>

      {/* Featured Game Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl lg:text-2xl font-bold mb-2">Featured Game</h3>
            <p className="text-purple-100 mb-4">Experience the most popular games with amazing rewards!</p>
            <button className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
              Play Now
            </button>
          </div>
          <div className="text-6xl lg:text-7xl">🎰</div>
        </div>
      </div>
    </div>
  );
};

export default LobbyComponent; 