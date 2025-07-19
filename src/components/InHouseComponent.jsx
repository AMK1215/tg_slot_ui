import React from 'react';
import { gameLogos } from '../utils/imageUtils';

const InHouseComponent = () => {
  const inHouseGames = [
    {
      name: 'EvoPlay Games',
      provider: 'EvoPlay',
      image: gameLogos.Evoplay,
      description: 'Evolutionary Gaming Experience',
      category: 'Slots'
    },
    {
      name: 'YellowBet Gaming',
      provider: 'YellowBet',
      image: gameLogos.PlayStarSlot,
      description: 'Premium Betting Solutions',
      category: 'Casino'
    },
    {
      name: 'JCB Gaming',
      provider: 'JCB Gaming',
      image: gameLogos.JDB,
      description: 'Japanese Casino Brand',
      category: 'Live Casino'
    },
    {
      name: 'POSoft Gaming',
      provider: 'POSoft',
      image: gameLogos.PGSoft,
      description: 'Soft Gaming Platform',
      category: 'Slots'
    },
    {
      name: 'FaChai Gaming',
      provider: 'FaChai',
      image: gameLogos.Fachi,
      description: 'Traditional Asian Games',
      category: 'Traditional'
    },
    {
      name: 'BigGaming',
      provider: 'BigGaming',
      image: gameLogos.BGaming,
      description: 'Big Gaming Experience',
      category: 'Slots'
    },
    {
      name: 'CQ9 Fishing',
      provider: 'CQ9',
      image: gameLogos.Cq9Fishing,
      description: 'Fishing Game Collection',
      category: 'Fishing'
    },
    {
      name: 'Jili Fishing',
      provider: 'Jili',
      image: gameLogos.JiliFishing,
      description: 'Premium Fishing Games',
      category: 'Fishing'
    },
    {
      name: 'Spadegaming Fishing',
      provider: 'Spadegaming',
      image: gameLogos.SpadegamingFishing,
      description: 'Spade Fishing Adventures',
      category: 'Fishing'
    },
    {
      name: 'Saba Virtual Sport',
      provider: 'Saba',
      image: gameLogos.SabaVirtualSport,
      description: 'Virtual Sports Betting',
      category: 'Sports'
    }
  ];

  const categories = ['All', 'Slots', 'Casino', 'Fishing', 'Sports', 'Traditional'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">■</span>
          <h2 className="text-xl lg:text-2xl font-bold text-white">In-house</h2>
        </div>
        <button className="text-purple-400 hover:text-white transition-colors text-sm lg:text-base">
          See More →
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              index === 0
                ? 'bg-purple-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* In-house Games Grid - 3 per row on mobile, 5 on desktop */}
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-6">
        {inHouseGames.map((game, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-2 lg:p-4 text-center cursor-pointer hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {/* Game Image */}
            <div className="relative mb-2 lg:mb-3">
              <div className="w-full h-16 lg:h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-2 overflow-hidden">
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
              {/* Category Badge */}
              <div className="absolute top-1 right-1 lg:top-2 lg:right-2 bg-blue-500 text-white text-xs px-1 lg:px-2 py-0.5 lg:py-1 rounded-full font-bold">
                {game.category}
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

      {/* In-house Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-center text-white">
          <div className="text-2xl font-bold">50+</div>
          <div className="text-sm opacity-90">In-house Games</div>
        </div>
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-4 text-center text-white">
          <div className="text-2xl font-bold">24/7</div>
          <div className="text-sm opacity-90">Support Available</div>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4 text-center text-white">
          <div className="text-2xl font-bold">99.9%</div>
          <div className="text-sm opacity-90">Uptime</div>
        </div>
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg p-4 text-center text-white">
          <div className="text-2xl font-bold">100%</div>
          <div className="text-sm opacity-90">Fair Gaming</div>
        </div>
      </div>
    </div>
  );
};

export default InHouseComponent; 