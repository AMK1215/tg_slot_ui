import React from 'react';
import { 
  ArrowLeftIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const CashBackHistoryComponent = () => {
  const totalCashBack = 224480;
  
  const cashBackHistory = [
    { date: '2025-05-01', tokenAmount: 32, cashBack: 51520 },
    { date: '2025-04-17', tokenAmount: 32, cashBack: 179960 },
    { date: '2025-05-01', tokenAmount: 32, cashBack: 51520 },
    { date: '2025-04-17', tokenAmount: 32, cashBack: 179960 },
    { date: '2025-05-01', tokenAmount: 32, cashBack: 51520 },
    { date: '2025-04-17', tokenAmount: 32, cashBack: 179960 }
  ];

  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link
            to="/tg-token"
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <ArrowLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold text-white">Cash Back History</h1>
        </div>
      </div>

      {/* Total Cash Back Display */}
      <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Total Cash Back</h3>
            <div className="text-2xl sm:text-3xl font-bold text-green-400">{totalCashBack.toLocaleString()} MMK</div>
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center">
            <CurrencyDollarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Cash Back History Table */}
      <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Transaction History</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-gray-300 font-medium text-xs sm:text-sm">Date</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-gray-300 font-medium text-xs sm:text-sm">Token Amount</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-gray-300 font-medium text-xs sm:text-sm">Cash Back</th>
              </tr>
            </thead>
            <tbody>
              {cashBackHistory.map((transaction, index) => (
                <tr 
                  key={index} 
                  className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
                >
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-white text-xs sm:text-sm">
                    {transaction.date}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-purple-400 font-medium text-xs sm:text-sm">
                    {transaction.tokenAmount}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-400 font-medium text-xs sm:text-sm">
                    {transaction.cashBack.toLocaleString()} Ks
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs sm:text-sm">TG</span>
            </div>
            <div>
              <h4 className="text-gray-400 text-xs sm:text-sm">Total Tokens Used</h4>
              <p className="text-white font-semibold text-sm sm:text-base">
                {cashBackHistory.reduce((sum, t) => sum + t.tokenAmount, 0)} Tokens
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs sm:text-sm">₭</span>
            </div>
            <div>
              <h4 className="text-gray-400 text-xs sm:text-sm">Average Cash Back</h4>
              <p className="text-white font-semibold text-sm sm:text-base">
                K {Math.round(totalCashBack / cashBackHistory.length).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-3 sm:p-4 sm:col-span-2 md:col-span-1">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs sm:text-sm">#</span>
            </div>
            <div>
              <h4 className="text-gray-400 text-xs sm:text-sm">Total Transactions</h4>
              <p className="text-white font-semibold text-sm sm:text-base">{cashBackHistory.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cash Back Rules */}
      <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
        <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Cash Back Rules:</h4>
        <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
          <li className="flex items-start space-x-2">
            <span className="text-green-500 mt-1 flex-shrink-0">•</span>
            <span>10 TG Tokens = 1,150 Kyats Cash Back</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-green-500 mt-1 flex-shrink-0">•</span>
            <span>Cash back is processed daily based on token accumulation</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-green-500 mt-1 flex-shrink-0">•</span>
            <span>Minimum 10 tokens required for cash back</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-green-500 mt-1 flex-shrink-0">•</span>
            <span>Cash back amount is automatically credited to your wallet</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CashBackHistoryComponent; 