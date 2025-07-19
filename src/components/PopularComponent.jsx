import React from 'react';
import { gameLogos } from '../utils/imageUtils';

const PopularComponent = () => {
  const popularGames = [
    {
      name: 'Pragmatic Play',
      provider: 'Pragmatic Play',
      image: gameLogos.PragmaticPlay,
      description: 'Premium Slot Games',
      rating: 4.8
    },
    {
      name: 'Hacksaw Gaming',
      provider: 'Hacksaw',
      image: gameLogos.Hacksaw,
      description: 'Innovative Scratch Cards',
      rating: 4.6
    },
    {
      name: 'MegaH5 Games',
      provider: 'MegaH5',
      image: gameLogos.PlayStarSlot,
      description: 'HTML5 Mobile Games',
      rating: 4.7
    },
    {
      name: 'Live22 Gaming',
      provider: 'Live22',
      image: gameLogos.Live22,
      description: 'Live Casino & Slots',
      rating: 4.5
    },
    {
      name: 'EpicWin Games',
      provider: 'EpicWin',
      image: gameLogos.Epicwin,
      description: 'Epic Slot Adventures',
      rating: 4.9
    },
    {
      name: 'CQ9 Gaming',
      provider: 'CQ9',
      image: gameLogos.Cq9,
      description: 'Asian-Themed Slots',
      rating: 4.4
    },
    {
      name: 'Jili Gaming',
      provider: 'Jili',
      image: gameLogos.Jili,
      description: 'Premium Casino Games',
      rating: 4.6
    },
    {
      name: 'Fachai Gaming',
      provider: 'Fachai',
      image: gameLogos.Fachi,
      description: 'Traditional Asian Games',
      rating: 4.3
    },
    {
      name: 'PG Soft',
      provider: 'PG Soft',
      image: gameLogos.PGSoft,
      description: 'Soft Gaming Solutions',
      rating: 4.7
    },
    {
      name: 'Evoplay',
      provider: 'Evoplay',
      image: gameLogos.Evoplay,
      description: 'Evolutionary Gaming',
      rating: 4.8
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">★</span>
          <h2 className="text-xl lg:text-2xl font-bold text-white">Popular</h2>
        </div>
        <button className="text-purple-400 hover:text-white transition-colors text-sm lg:text-base">
          See More →
        </button>
      </div>

      {/* Popular Games Grid - 3 per row on mobile, 5 on desktop */}
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-6">
        {popularGames.map((game, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-2 lg:p-4 text-center cursor-pointer hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {/* Game Image */}
            <div className="relative mb-2 lg:mb-3">
              <div className="w-full h-16 lg:h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-2 overflow-hidden">
                {game.image ? (
                  <img 
                    src={game.image} 
                    alt={game.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className="w-full h-full flex items-center justify-center text-xl lg:text-4xl" style={{ display: game.image ? 'none' : 'flex' }}>
                  🎮
                </div>
              </div>
              {/* Rating Badge */}
              <div className="absolute top-1 right-1 lg:top-2 lg:right-2 bg-yellow-500 text-black text-xs px-1 lg:px-2 py-0.5 lg:py-1 rounded-full font-bold">
                {game.rating}
              </div>
            </div>
            
            {/* Game Info */}
            <div className="text-white font-semibold text-xs lg:text-base mb-1 truncate">
              {game.name}
            </div>
            <div className="text-gray-400 text-xs mb-1 lg:mb-2">
              {game.provider}
            </div>
            <div className="text-gray-500 text-xs truncate hidden lg:block">
              {game.description}
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

export default PopularComponent; 