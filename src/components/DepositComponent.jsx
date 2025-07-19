import React, { useState } from 'react';
import { 
  ArrowPathIcon,
  UserIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline';

// Import bank images
import kbzPay from '../assets/bank/kbz.png';
import wavePay from '../assets/bank/wave.png';
import kbzBank from '../assets/bank/kbz_bank.jpg';
import cbPay from '../assets/bank/cb.png';
import binance from '../assets/bank/binance.jpg';
import usdt from '../assets/bank/trc.jpg';

const DepositComponent = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('kbzpay');
  const [depositAmount, setDepositAmount] = useState('100000');

  const paymentMethods = [
    { id: 'kbzpay', name: 'KBZ Pay', logo: kbzPay, color: 'blue' },
    { id: 'wavepay', name: 'Wave Pay', logo: wavePay, color: 'yellow' },
    { id: 'kbzbank', name: 'KBZ Banking', logo: kbzBank, color: 'red' },
    { id: 'cbpay', name: 'CB Pay', logo: cbPay, color: 'blue' },
    { id: 'binance', name: 'Binance', logo: binance, color: 'yellow' },
    { id: 'usdt', name: 'USDT (TRC-20)', logo: usdt, color: 'green' }
  ];

  const quickAmounts = [10000, 50000, 100000, 200000, 500000, 1000000];

  const handleDeposit = () => {
    // Handle deposit logic here
    console.log('Depositing:', depositAmount);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Deposit Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">• Deposit</h1>
      </div>

      {/* Balance Display */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Your Balance</h3>
            <div className="text-3xl font-bold text-white">K 21,750,500.00</div>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <ArrowPathIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Payment Methods</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedPaymentMethod(method.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedPaymentMethod === method.id
                  ? 'border-green-500 bg-gray-700'
                  : 'border-gray-600 hover:border-gray-500'
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                <img
                  src={method.logo}
                  alt={method.name}
                  className="w-12 h-12 object-contain"
                />
                <span className="text-xs text-gray-300 text-center">{method.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Quick Amount Buttons */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-300 mb-3">Quick Amount (Kyat)</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => setDepositAmount(amount.toString())}
                className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors"
              >
                {amount.toLocaleString()} K
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Deposit Form */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Deposit Amount (Kyat)
            </label>
            <input
              type="text"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter deposit amount"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Your Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Transaction Reference
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CreditCardIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter transaction reference"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Upload Screenshot
            </label>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
              Choose File
            </button>
          </div>

          <div className="pt-4">
            <button
              onClick={handleDeposit}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
            >
              Submit Deposit
            </button>
          </div>
        </div>
      </div>

      {/* Deposit Rules */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h4 className="text-white font-semibold mb-3">Deposit Rules:</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li className="flex items-start space-x-2">
            <span className="text-green-500 mt-1">•</span>
            <span>Minimum deposit amount: 10,000 Kyat</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-green-500 mt-1">•</span>
            <span>Maximum deposit amount: 10,000,000 Kyat</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-green-500 mt-1">•</span>
            <span>Deposits are processed within 5-10 minutes</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-green-500 mt-1">•</span>
            <span>Please ensure your transaction reference is accurate</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DepositComponent; 