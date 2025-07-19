import React, { useState } from 'react';
import { 
  ArrowPathIcon,
  FunnelIcon,
  CalendarIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const HistoryComponent = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'deposit', label: 'Deposit' },
    { id: 'withdraw', label: 'Withdraw' },
    { id: 'token', label: 'Token' }
  ];

  const transactions = [
    {
      id: 1,
      type: 'deposit',
      amount: 100000,
      currency: 'Kyat',
      status: 'completed',
      date: '2025-01-18 10:30:15',
      method: 'KBZ Pay',
      reference: 'KBZ123456789'
    },
    {
      id: 2,
      type: 'withdraw',
      amount: 50000,
      currency: 'Kyat',
      status: 'pending',
      date: '2025-01-18 09:15:22',
      method: 'USDT (TRC-20)',
      reference: 'USDT987654321'
    },
    {
      id: 3,
      type: 'token',
      amount: 100,
      currency: 'Tokens',
      status: 'completed',
      date: '2025-01-17 16:45:33',
      method: 'Token Conversion',
      reference: 'TOKEN456789123'
    },
    {
      id: 4,
      type: 'deposit',
      amount: 200000,
      currency: 'Kyat',
      status: 'completed',
      date: '2025-01-17 14:20:45',
      method: 'Wave Pay',
      reference: 'WAVE789123456'
    },
    {
      id: 5,
      type: 'withdraw',
      amount: 75000,
      currency: 'Kyat',
      status: 'failed',
      date: '2025-01-17 11:30:12',
      method: 'CB Pay',
      reference: 'CB123789456'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-400';
      case 'pending':
        return 'text-yellow-400';
      case 'failed':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'deposit':
        return 'text-green-400';
      case 'withdraw':
        return 'text-red-400';
      case 'token':
        return 'text-purple-400';
      default:
        return 'text-gray-400';
    }
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesFilter = activeFilter === 'all' || transaction.type === activeFilter;
    const matchesSearch = transaction.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.method.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6 p-6">
      {/* History Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">• History</h1>
      </div>

      {/* Filters and Search */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          {/* Filter Tabs */}
          <div className="flex space-x-1 bg-gray-700 rounded-lg p-1">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Search transactions..."
            />
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="space-y-4">
          {filteredTransactions.map((transaction) => (
            <div key={transaction.id} className="border border-gray-700 rounded-lg p-4 hover:bg-gray-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'deposit' ? 'bg-green-600' :
                    transaction.type === 'withdraw' ? 'bg-red-600' :
                    'bg-purple-600'
                  }`}>
                    <span className="text-white font-bold text-sm">
                      {transaction.type === 'deposit' ? 'D' :
                       transaction.type === 'withdraw' ? 'W' : 'T'}
                    </span>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className={`font-semibold ${getTypeColor(transaction.type)}`}>
                        {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        transaction.status === 'completed' ? 'bg-green-900 text-green-300' :
                        transaction.status === 'pending' ? 'bg-yellow-900 text-yellow-300' :
                        'bg-red-900 text-red-300'
                      }`}>
                        {transaction.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{transaction.method}</p>
                    <p className="text-gray-500 text-xs">{transaction.reference}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className={`font-bold text-lg ${
                    transaction.type === 'deposit' ? 'text-green-400' :
                    transaction.type === 'withdraw' ? 'text-red-400' :
                    'text-purple-400'
                  }`}>
                    {transaction.type === 'withdraw' ? '-' : '+'}{transaction.amount.toLocaleString()} {transaction.currency}
                  </div>
                  <div className="text-gray-400 text-sm">{transaction.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTransactions.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400">No transactions found</p>
          </div>
        )}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="text-gray-400 text-sm">Total Deposits</h4>
          <p className="text-green-400 font-bold text-xl">
            K {transactions.filter(t => t.type === 'deposit' && t.status === 'completed')
              .reduce((sum, t) => sum + t.amount, 0).toLocaleString()}
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="text-gray-400 text-sm">Total Withdrawals</h4>
          <p className="text-red-400 font-bold text-xl">
            K {transactions.filter(t => t.type === 'withdraw' && t.status === 'completed')
              .reduce((sum, t) => sum + t.amount, 0).toLocaleString()}
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="text-gray-400 text-sm">Total Tokens</h4>
          <p className="text-purple-400 font-bold text-xl">
            {transactions.filter(t => t.type === 'token' && t.status === 'completed')
              .reduce((sum, t) => sum + t.amount, 0).toLocaleString()} Tokens
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryComponent; 