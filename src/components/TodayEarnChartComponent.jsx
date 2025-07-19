import React, { useState } from 'react';
import people1 from '../assets/today_chart/people_1.jpg';
import people2 from '../assets/today_chart/people_2.jpg';
import people3 from '../assets/today_chart/people_3.jpg';

const TodayEarnChartComponent = () => {
  // Sample earning data - Top 3 earners matching the Figma screenshot
  const topEarners = [
    {
      id: 1,
      rank: '2nd',
      userId: 'TGL***8377',
      amount: 'K 156,498,200.00',
      image: people2, // Character with white/light blue hair and blue eyes
      color: 'bg-gray-500',
      textColor: 'text-gray-800'
    },
    {
      id: 2,
      rank: '1st',
      userId: 'TGL***3112',
      amount: 'K 241,843,080.00',
      image: people1, // Character wearing a black hoodie
      color: 'bg-yellow-500',
      textColor: 'text-yellow-800'
    },
    {
      id: 3,
      rank: '3rd',
      userId: 'TGL***5064',
      amount: 'K 55,144,900.00',
      image: people3, // Character with purple hair, sunglasses, blowing pink bubblegum
      color: 'bg-orange-500',
      textColor: 'text-orange-800'
    }
  ];

  // Sample earning data - Ranked list (4th to 10th) matching the Figma screenshot
  const rankedEarners = [
    {
      id: 4,
      userId: 'TGL User63320739',
      amount: 'K 37,600,300.00',
      image: people1 // Avatar with purple hair
    },
    {
      id: 5,
      userId: 'TGL User838780',
      amount: 'K 26,300,800.00',
      image: people2 // Avatar with white hair
    },
    {
      id: 6,
      userId: 'TGL User4099385620',
      amount: 'K 21,390,300.00',
      image: people3 // Avatar with dark hair and purple highlights
    },
    {
      id: 7,
      userId: 'TGL User736620234',
      amount: 'K 17,260,600.00',
      image: people1 // Avatar with light blue hair
    },
    {
      id: 8,
      userId: 'TGL User2933741046',
      amount: 'K 37,600,300.00',
      image: people2 // Avatar with blue hair
    },
    {
      id: 9,
      userId: 'TGL User63320739',
      amount: 'K 13,755,500.00',
      image: people3 // Avatar with purple hair
    },
    {
      id: 10,
      userId: 'TGL User8212294002',
      amount: 'K 9,540,200.00',
      image: people1 // Avatar with light blue hair
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Top Navigation Bar */}
      

      {/* Today's Earning Section */}
      <div className="px-4 py-3 bg-gray-800 border-b border-gray-700">
        
        {/* <span className="text-blue-400 text-sm">Chart</span> */}
      </div>

      {/* Main Content */}
      <div className="p-4">
        {/* Section Title */}
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-white">Today's earning chart</h2>
        </div>

        {/* Top 3 Earners Section - Single Row */}
        <div className="mb-8">
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {topEarners.map((earner) => (
              <div key={earner.id} className="flex flex-col items-center space-y-3">
                {/* Avatar with Rank Badge */}
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-purple-600">
                    <img 
                      src={earner.image} 
                      alt={`${earner.rank} place earner`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Rank Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-yellow-800 text-xs font-bold">{earner.rank}</span>
                  </div>
                </div>
                
                {/* User ID */}
                <div className="text-center">
                  <p className="text-white text-xs sm:text-sm font-medium">{earner.userId}</p>
                </div>
                
                {/* Amount Button */}
                <button className={`w-full ${earner.color} ${earner.textColor} px-2 py-2 sm:px-3 sm:py-3 rounded-lg font-bold text-xs sm:text-sm transition-transform hover:scale-105`}>
                  {earner.amount}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Ranked List Section */}
        <div className="space-y-3">
          {rankedEarners.map((earner) => (
            <div
              key={earner.id}
              className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              {/* Rank Number */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-gray-800 text-sm sm:text-base font-bold">{earner.id}</span>
                </div>
              </div>

              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-purple-600">
                  <img 
                    src={earner.image} 
                    alt={`Rank ${earner.id} earner`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* User Info */}
              <div className="flex-1 min-w-0">
                <p className="text-white text-xs sm:text-sm font-medium truncate">
                  {earner.userId}
                </p>
              </div>

              {/* Amount Button */}
              <div className="flex-shrink-0">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-bold text-xs sm:text-sm transition-colors">
                  {earner.amount}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-8 bg-gray-800 rounded-xl p-4 sm:p-6">
          <h3 className="text-white font-semibold text-sm sm:text-base mb-4">Today's Statistics</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-green-400 text-lg sm:text-xl lg:text-2xl font-bold">
                {topEarners.length + rankedEarners.length}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">Total Earners</div>
            </div>
            <div className="text-center">
              <div className="text-blue-400 text-lg sm:text-xl lg:text-2xl font-bold">
                K {topEarners.reduce((sum, earner) => sum + parseFloat(earner.amount.replace(/[K,\s]/g, '')), 0).toLocaleString()}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">Top 3 Total</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 text-lg sm:text-xl lg:text-2xl font-bold">
                {Math.floor(Math.random() * 100) + 50}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-purple-400 text-lg sm:text-xl lg:text-2xl font-bold">
                {Math.floor(Math.random() * 20) + 10}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">New Today</div>
            </div>
          </div>
        </div>

        {/* Live Updates Section */}
        <div className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold text-sm sm:text-base">Live Updates</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 text-xs sm:text-sm">Live</span>
            </div>
          </div>
          <div className="space-y-2">
            {rankedEarners.slice(0, 3).map((earner, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">{earner.id}</span>
                </div>
                <div className="flex-1">
                  <p className="text-white text-xs sm:text-sm font-medium truncate">
                    {earner.userId}
                  </p>
                </div>
                <div className="text-yellow-300 text-xs sm:text-sm font-bold">
                  {earner.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center pt-6">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
            Load More
          </button>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 px-4 py-2">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center space-y-1 text-purple-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-xs">Document</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-xs">Diamond</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="text-xs">Refresh</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs">Setting</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodayEarnChartComponent; 