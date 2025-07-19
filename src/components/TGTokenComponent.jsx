import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CurrencyDollarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const TGTokenComponent = () => {
  const [tokenBalance] = useState(32);

  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6">
      {/* TG Token Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold text-white">• TG Token</h1>
      </div>

      {/* TG Token Display Card */}
      <div className="bg-gray-800 rounded-lg p-4 sm:p-6 border-2 border-dashed border-purple-500">
        <div className="text-center space-y-3 sm:space-y-4">
          {/* Token Coins Display */}
          <div className="flex justify-center space-x-2 sm:space-x-4">
            {[1, 2, 3].map((coin) => (
              <div key={coin} className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-yellow-800 font-bold text-sm sm:text-lg">TG</span>
              </div>
            ))}
          </div>
          
          {/* Token Label and Balance */}
          <div>
            <h2 className="text-yellow-400 font-bold text-lg sm:text-xl mb-1 sm:mb-2">TG TOKEN</h2>
            <div className="text-white text-2xl sm:text-3xl font-bold">{tokenBalance}</div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-3 sm:pt-4">
            <button className="w-full sm:flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm sm:text-base font-medium transition-colors">
              Cash Back
            </button>
            <Link
              to="/cashback-history"
              className="w-full sm:flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm sm:text-base font-medium transition-colors flex items-center justify-center"
            >
              <span className="hidden sm:inline">Cash Back History</span>
              <span className="sm:hidden">History</span>
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Rules and Regulations */}
      <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
        <h3 className="text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6">စည်းမျဉ်းနှင့် သတ်မှတ်ချက်များ</h3>
        
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start space-x-2 sm:space-x-3">
            <span className="text-yellow-500 mt-1 flex-shrink-0">•</span>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Based on the total bet amount, it is intended to be very valuable by setting it as a daily accumulated amount.
            </p>
          </div>
          
          <div className="flex items-start space-x-2 sm:space-x-3">
            <span className="text-yellow-500 mt-1 flex-shrink-0">•</span>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              TG Token is based on the total bet amount and is set as a daily accumulated amount, and is returned daily according to the set Token value.
            </p>
          </div>
          
          <div className="flex items-start space-x-2 sm:space-x-3">
            <span className="text-yellow-500 mt-1 flex-shrink-0">•</span>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              For every 1 million Kyats bet, 1 TG token will be received, and 10 TG tokens will receive 1150 Kyats.
            </p>
          </div>
          
          <div className="flex items-start space-x-2 sm:space-x-3">
            <span className="text-yellow-500 mt-1 flex-shrink-0">•</span>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              TG Token can be accumulated daily/monthly and can greatly increase the current refund amount.
            </p>
          </div>
          
          <div className="flex items-start space-x-2 sm:space-x-3">
            <span className="text-yellow-500 mt-1 flex-shrink-0">•</span>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Soon, 1 TG Token will be equal to 1 USDT.
            </p>
          </div>
        </div>
      </div>

      {/* Token Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <CurrencyDollarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 flex-shrink-0" />
            <div>
              <h4 className="text-gray-400 text-xs sm:text-sm">Total Bet Amount</h4>
              <p className="text-white font-semibold text-sm sm:text-base">K 32,000,000</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs sm:text-sm">TG</span>
            </div>
            <div>
              <h4 className="text-gray-400 text-xs sm:text-sm">Tokens Earned</h4>
              <p className="text-white font-semibold text-sm sm:text-base">{tokenBalance} Tokens</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-3 sm:p-4 sm:col-span-2 md:col-span-1">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs sm:text-sm">₭</span>
            </div>
            <div>
              <h4 className="text-gray-400 text-xs sm:text-sm">Cash Back Value</h4>
              <p className="text-white font-semibold text-sm sm:text-base">K {tokenBalance * 115}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TGTokenComponent; 