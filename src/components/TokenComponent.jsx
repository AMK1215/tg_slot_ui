import React, { useState } from 'react';
import { 
  ArrowPathIcon,
  ArrowRightIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const TokenComponent = () => {
  const [conversionAmount, setConversionAmount] = useState('1000');
  const [conversionType, setConversionType] = useState('kyat-to-token');

  const tokenBalance = 5000;
  const kyatBalance = 21750500;
  const exchangeRate = 100; // 1 token = 100 kyat

  const handleConvert = () => {
    // Handle conversion logic here
    console.log('Converting:', conversionAmount, conversionType);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Token Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">• Token</h1>
      </div>

      {/* Token Balance Display */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Token Balance</h3>
            <div className="text-3xl font-bold text-purple-400">{tokenBalance.toLocaleString()} Tokens</div>
            <p className="text-gray-400 text-sm mt-1">≈ K {tokenBalance * exchangeRate} Kyat</p>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <ArrowPathIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Kyat Balance Display */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Kyat Balance</h3>
            <div className="text-3xl font-bold text-white">K {kyatBalance.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Conversion Section */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Token Conversion</h3>
        
        {/* Conversion Type Tabs */}
        <div className="flex space-x-1 bg-gray-700 rounded-lg p-1 mb-6">
          <button
            onClick={() => setConversionType('kyat-to-token')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              conversionType === 'kyat-to-token'
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Kyat → Token
          </button>
          <button
            onClick={() => setConversionType('token-to-kyat')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              conversionType === 'token-to-kyat'
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Token → Kyat
          </button>
        </div>

        {/* Conversion Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {conversionType === 'kyat-to-token' ? 'Amount (Kyat)' : 'Amount (Tokens)'}
            </label>
            <input
              type="text"
              value={conversionAmount}
              onChange={(e) => setConversionAmount(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder={`Enter ${conversionType === 'kyat-to-token' ? 'kyat' : 'token'} amount`}
            />
          </div>

          {/* Conversion Preview */}
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <CurrencyDollarIcon className="w-6 h-6 text-gray-400" />
                <span className="text-gray-300">
                  {conversionAmount} {conversionType === 'kyat-to-token' ? 'Kyat' : 'Tokens'}
                </span>
              </div>
              <ArrowRightIcon className="w-5 h-5 text-gray-400" />
              <div className="flex items-center space-x-3">
                <span className="text-purple-400 font-semibold">
                  {conversionType === 'kyat-to-token' 
                    ? Math.floor(parseInt(conversionAmount) / exchangeRate) 
                    : parseInt(conversionAmount) * exchangeRate
                  } {conversionType === 'kyat-to-token' ? 'Tokens' : 'Kyat'}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={handleConvert}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
            >
              Convert
            </button>
          </div>
        </div>
      </div>

      {/* Quick Conversion Buttons */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h4 className="text-sm font-medium text-gray-300 mb-3">Quick Conversion</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[1000, 5000, 10000, 50000].map((amount) => (
            <button
              key={amount}
              onClick={() => setConversionAmount(amount.toString())}
              className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors"
            >
              {amount.toLocaleString()}
            </button>
          ))}
        </div>
      </div>

      {/* Token Rules */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h4 className="text-white font-semibold mb-3">Token Rules:</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li className="flex items-start space-x-2">
            <span className="text-purple-500 mt-1">•</span>
            <span>Exchange Rate: 1 Token = 100 Kyat</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-purple-500 mt-1">•</span>
            <span>Minimum conversion: 1,000 Kyat or 10 Tokens</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-purple-500 mt-1">•</span>
            <span>Maximum conversion: 1,000,000 Kyat or 10,000 Tokens</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-purple-500 mt-1">•</span>
            <span>Conversions are processed instantly</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-purple-500 mt-1">•</span>
            <span>Tokens can be used for special promotions and bonuses</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TokenComponent; 