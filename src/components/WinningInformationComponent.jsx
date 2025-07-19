import React, { useState } from 'react';
import { 
  StarIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';

const WinningInformationComponent = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  // Sample winning data
  const winningEntries = [
    {
      id: 1,
      memberId: 'Member211540993547671',
      amount: 'K 10,000.00',
      avatar: '👩‍🦳', // Purple hair avatar
      gameThumbnail: '🎭', // Two cartoon characters
      gameType: 'Slot Game'
    },
    {
      id: 2,
      memberId: 'Member211540993547672',
      amount: 'K 8,000.00',
      avatar: '👩‍🦲', // White hair avatar
      gameThumbnail: '🐠', // Goldfish
      gameType: 'Fishing Game'
    },
    {
      id: 3,
      memberId: 'Member211540993547673',
      amount: 'K 32,000.00',
      avatar: '👨‍🦳', // Brown hair avatar
      gameThumbnail: '🤡', // Clown makeup
      gameType: 'Arcade Game'
    },
    {
      id: 4,
      memberId: 'Member211540993547674',
      amount: 'K 7,000.00',
      avatar: '👨‍🦳', // Brown hair avatar
      gameThumbnail: '💎', // Glowing treasure chest
      gameType: 'Treasure Hunt'
    },
    {
      id: 5,
      memberId: 'Member211540993547675',
      amount: 'K 15,500.00',
      avatar: '👩‍🦳', // Purple hair avatar
      gameThumbnail: '🎭', // Two cartoon characters
      gameType: 'Slot Game'
    },
    {
      id: 6,
      memberId: 'Member211540993547676',
      amount: 'K 12,300.00',
      avatar: '👩‍🦲', // White hair avatar
      gameThumbnail: '🐠', // Goldfish
      gameType: 'Fishing Game'
    },
    {
      id: 7,
      memberId: 'Member211540993547677',
      amount: 'K 25,800.00',
      avatar: '👨‍🦳', // Brown hair avatar
      gameThumbnail: '🤡', // Clown makeup
      gameType: 'Arcade Game'
    },
    {
      id: 8,
      memberId: 'Member211540993547678',
      amount: 'K 9,200.00',
      avatar: '👨‍🦳', // Brown hair avatar
      gameThumbnail: '💎', // Glowing treasure chest
      gameType: 'Treasure Hunt'
    },
    {
      id: 9,
      memberId: 'Member211540993547679',
      amount: 'K 18,900.00',
      avatar: '👩‍🦳', // Purple hair avatar
      gameThumbnail: '🎭', // Two cartoon characters
      gameType: 'Slot Game'
    },
    {
      id: 10,
      memberId: 'Member211540993547680',
      amount: 'K 11,400.00',
      avatar: '👩‍🦲', // White hair avatar
      gameThumbnail: '🐠', // Goldfish
      gameType: 'Fishing Game'
    },
    {
      id: 11,
      memberId: 'Member211540993547681',
      amount: 'K 28,600.00',
      avatar: '👨‍🦳', // Brown hair avatar
      gameThumbnail: '🤡', // Clown makeup
      gameType: 'Arcade Game'
    },
    {
      id: 12,
      memberId: 'Member211540993547682',
      amount: 'K 6,800.00',
      avatar: '👨‍🦳', // Brown hair avatar
      gameThumbnail: '💎', // Glowing treasure chest
      gameType: 'Treasure Hunt'
    }
  ];

  return (
    <div className="space-y-3 sm:space-y-4 p-3 sm:p-4 lg:p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <StarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Winning Information</h1>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {isExpanded ? (
            <ChevronUpIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>

      {/* Winning Entries */}
      {isExpanded && (
        <div className="space-y-2 sm:space-y-3">
          {winningEntries.map((entry) => (
            <div
              key={entry.id}
              className="bg-gray-800 rounded-xl p-3 sm:p-4 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-lg sm:text-xl">
                    {entry.avatar}
                  </div>
                </div>

                {/* Member Info and Amount */}
                <div className="flex-1 min-w-0">
                  <div className="text-gray-300 text-xs sm:text-sm mb-1">
                    Member
                  </div>
                  <div className="text-white text-xs sm:text-sm font-medium truncate">
                    {entry.memberId}
                  </div>
                  <div className="text-green-400 text-sm sm:text-base lg:text-lg font-bold">
                    {entry.amount}
                  </div>
                </div>

                {/* Game Thumbnail */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white text-lg sm:text-xl">
                    {entry.gameThumbnail}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load More Button */}
      <div className="text-center pt-4">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
          Load More
        </button>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-800 rounded-xl p-3 sm:p-4 lg:p-6 mt-6">
        <h2 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Today's Statistics</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="text-center">
            <div className="text-green-400 text-lg sm:text-xl lg:text-2xl font-bold">
              {winningEntries.length}
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">Total Wins</div>
          </div>
          <div className="text-center">
            <div className="text-blue-400 text-lg sm:text-xl lg:text-2xl font-bold">
              K {winningEntries.reduce((sum, entry) => sum + parseFloat(entry.amount.replace(/[K,\s]/g, '')), 0).toLocaleString()}
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">Total Amount</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-400 text-lg sm:text-xl lg:text-2xl font-bold">
              {Math.floor(Math.random() * 50) + 10}
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">Active Players</div>
          </div>
          <div className="text-center">
            <div className="text-purple-400 text-lg sm:text-xl lg:text-2xl font-bold">
              {Math.floor(Math.random() * 20) + 5}
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">Games Played</div>
          </div>
        </div>
      </div>

      {/* Recent Winners Highlight */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-3 sm:p-4 lg:p-6">
        <h2 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Recent Winners Highlight</h2>
        <div className="space-y-2 sm:space-y-3">
          {winningEntries.slice(0, 3).map((entry, index) => (
            <div key={index} className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center text-white text-sm sm:text-base">
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="text-white text-xs sm:text-sm font-medium truncate">
                  {entry.memberId}
                </div>
                <div className="text-yellow-300 text-xs sm:text-sm">
                  {entry.amount}
                </div>
              </div>
              <div className="text-white text-xs sm:text-sm">
                {entry.gameType}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinningInformationComponent; 