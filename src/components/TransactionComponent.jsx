import React, { useState } from 'react';
import { 
  ChevronDownIcon,
  CalendarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const TransactionComponent = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedDate, setSelectedDate] = useState('');

  // Sample transaction data
  const transactions = [
    {
      id: 1,
      title: 'Welcome Bonus',
      date: '2025-05-02',
      time: '12:25:50',
      amount: '+K 2000',
      type: 'credit',
      balance: '+K 2000'
    },
    {
      id: 2,
      title: 'Welcome Bonus',
      date: '2025-05-02',
      time: '12:25:50',
      amount: '+K 2000',
      type: 'credit',
      balance: '+K 2000'
    },
    {
      id: 3,
      title: 'Welcome Bonus',
      date: '2025-05-02',
      time: '12:25:50',
      amount: '+K 2000',
      type: 'credit',
      balance: '+K 2000'
    },
    {
      id: 4,
      title: 'Slot Game Win',
      date: '2025-05-01',
      time: '15:30:25',
      amount: '+K 5000',
      type: 'credit',
      balance: '+K 5000'
    },
    {
      id: 5,
      title: 'Lottery Bet',
      date: '2025-05-01',
      time: '10:15:40',
      amount: '-K 1000',
      type: 'debit',
      balance: '-K 1000'
    },
    {
      id: 6,
      title: 'Deposit',
      date: '2025-04-30',
      time: '09:45:12',
      amount: '+K 10000',
      type: 'credit',
      balance: '+K 10000'
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'credit', label: 'Credits' },
    { value: 'debit', label: 'Debits' },
    { value: 'bonus', label: 'Bonuses' },
    { value: 'deposit', label: 'Deposits' },
    { value: 'withdrawal', label: 'Withdrawals' }
  ];

  const filteredTransactions = transactions.filter(transaction => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'credit') return transaction.type === 'credit';
    if (selectedFilter === 'debit') return transaction.type === 'debit';
    if (selectedFilter === 'bonus') return transaction.title.toLowerCase().includes('bonus');
    if (selectedFilter === 'deposit') return transaction.title.toLowerCase().includes('deposit');
    if (selectedFilter === 'withdrawal') return transaction.title.toLowerCase().includes('withdrawal');
    return true;
  });

  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold text-white">Transaction</h1>
      </div>

      {/* Filters Section */}
      <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {/* Filter Dropdown */}
          <div className="flex-1">
            <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
              Filter
            </label>
            <div className="relative">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
              >
                {filterOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Date Filter */}
          <div className="flex-1">
            <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
              Choose A Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Transaction List */}
      <div className="space-y-3 sm:space-y-4">
        {filteredTransactions.map((transaction, index) => (
          <div
            key={transaction.id}
            className="bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-700 hover:border-purple-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              {/* Transaction Info */}
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'credit' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      <span className="text-lg sm:text-xl">
                        {transaction.type === 'credit' ? '+' : '-'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-medium text-white truncate">
                      {transaction.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center space-x-1 text-xs text-gray-400">
                        <CalendarIcon className="w-3 h-3" />
                        <span>{transaction.date}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-gray-400">
                        <ClockIcon className="w-3 h-3" />
                        <span>{transaction.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amount */}
              <div className="flex flex-col items-end space-y-1">
                <span className={`text-sm sm:text-base font-semibold ${
                  transaction.type === 'credit' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {transaction.amount}
                </span>
                <span className="text-xs text-gray-400">
                  Balance: {transaction.balance}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTransactions.length === 0 && (
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <div className="text-gray-400 text-sm sm:text-base">
            No transactions found for the selected filters.
          </div>
        </div>
      )}

      {/* Transaction Summary */}
      <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Summary</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-gray-700 rounded-lg p-3 sm:p-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs sm:text-sm">+</span>
              </div>
              <div>
                <h4 className="text-gray-400 text-xs sm:text-sm">Total Credits</h4>
                <p className="text-white font-semibold text-sm sm:text-base">
                  K {filteredTransactions
                    .filter(t => t.type === 'credit')
                    .reduce((sum, t) => sum + parseInt(t.amount.replace(/[^0-9]/g, '')), 0)
                    .toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3 sm:p-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs sm:text-sm">-</span>
              </div>
              <div>
                <h4 className="text-gray-400 text-xs sm:text-sm">Total Debits</h4>
                <p className="text-white font-semibold text-sm sm:text-base">
                  K {filteredTransactions
                    .filter(t => t.type === 'debit')
                    .reduce((sum, t) => sum + parseInt(t.amount.replace(/[^0-9]/g, '')), 0)
                    .toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3 sm:p-4 sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs sm:text-sm">#</span>
              </div>
              <div>
                <h4 className="text-gray-400 text-xs sm:text-sm">Total Transactions</h4>
                <p className="text-white font-semibold text-sm sm:text-base">{filteredTransactions.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionComponent; 