import React, { useState } from 'react';
import { 
  ArrowPathIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import DepositComponent from './DepositComponent';
import TokenComponent from './TokenComponent';
import HistoryComponent from './HistoryComponent';

// Import bank images
import kbzPay from '../assets/bank/kbz.png';
import wavePay from '../assets/bank/wave.png';
import kbzBank from '../assets/bank/kbz_bank.jpg';
import cbPay from '../assets/bank/cb.png';
import binance from '../assets/bank/binance.jpg';
import usdt from '../assets/bank/trc.jpg';

const WalletComponent = () => {
  const [activeTab, setActiveTab] = useState('withdraw');
  const [activeWallet, setActiveWallet] = useState('lottery');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('usdt');
  const [withdrawalAmount, setWithdrawalAmount] = useState('100000');
  
  // Modal states
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [transferDirection, setTransferDirection] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  
  // Wallet balances
  const [slotWalletBalance, setSlotWalletBalance] = useState(500000);
  const [lotteryWalletBalance, setLotteryWalletBalance] = useState(200000);

  const walletTabs = [
    { id: 'deposit', label: 'Deposit', color: 'green', dot: 'green' },
    { id: 'withdraw', label: 'Withdraw', color: 'red', dot: 'red' },
    { id: 'token', label: 'Token', color: 'purple', dot: 'purple' },
    { id: 'history', label: 'History', color: 'gray', dot: 'gray' }
  ];

  const paymentMethods = [
    { id: 'kbzpay', name: 'KBZ Pay', logo: kbzPay, color: 'blue' },
    { id: 'wavepay', name: 'Wave Pay', logo: wavePay, color: 'yellow' },
    { id: 'kbzbank', name: 'KBZ Banking', logo: kbzBank, color: 'red' },
    { id: 'cbpay', name: 'CB Pay', logo: cbPay, color: 'blue' },
    { id: 'binance', name: 'Binance', logo: binance, color: 'yellow' },
    { id: 'usdt', name: 'USDT (TRC-20)', logo: usdt, color: 'green' }
  ];

  const usdtAmounts = [5, 10, 30, 50, 100, 500];

  const handleWithdraw = () => {
    // Handle withdrawal logic here
    console.log('Withdrawing:', withdrawalAmount);
  };

  const handleWalletClick = (walletType) => {
    if (walletType === activeWallet) return;
    
    setTransferDirection(walletType === 'slot' ? 'Slot Wallet → Lottery Wallet' : 'Lottery Wallet → Slot Wallet');
    setTransferAmount('');
    setShowTransferModal(true);
  };

  const handleTransfer = () => {
    const amount = parseFloat(transferAmount);
    if (isNaN(amount) || amount <= 0) return;

    if (transferDirection.includes('Slot Wallet → Lottery Wallet')) {
      if (amount <= slotWalletBalance) {
        setSlotWalletBalance(slotWalletBalance - amount);
        setLotteryWalletBalance(lotteryWalletBalance + amount);
        setActiveWallet('lottery');
      }
    } else {
      if (amount <= lotteryWalletBalance) {
        setLotteryWalletBalance(lotteryWalletBalance - amount);
        setSlotWalletBalance(slotWalletBalance + amount);
        setActiveWallet('slot');
      }
    }
    
    setShowTransferModal(false);
    setTransferAmount('');
  };

  const closeModal = () => {
    setShowTransferModal(false);
    setTransferAmount('');
  };

  // Render different components based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'deposit':
        return <DepositComponent />;
      case 'token':
        return <TokenComponent />;
      case 'history':
        return <HistoryComponent />;
      case 'withdraw':
      default:
        return (
          <>
            {/* Withdraw Content */}
            <div className="space-y-6">
              {/* Payment Methods Section */}
              <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Payment Methods</h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedPaymentMethod(method.id)}
                      className={`p-2 sm:p-4 rounded-lg border-2 transition-all ${
                        selectedPaymentMethod === method.id
                          ? 'border-yellow-500 bg-gray-700'
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                        <img
                          src={method.logo}
                          alt={method.name}
                          className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
                        />
                        <span className="text-xs text-gray-300 text-center">{method.name}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* USDT Amount Buttons */}
                {selectedPaymentMethod === 'usdt' && (
                  <div className="mt-4 sm:mt-6">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3">Select Amount (USDT)</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
                      {usdtAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setWithdrawalAmount((amount * 4600).toString())}
                          className="bg-gray-700 hover:bg-gray-600 text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-medium transition-colors"
                        >
                          {amount} USDT
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Withdrawal Input and Button */}
              <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="flex-1">
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Withdrawal Amount (Kyat)
                    </label>
                    <input
                      type="text"
                      value={withdrawalAmount}
                      onChange={(e) => setWithdrawalAmount(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter amount"
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={handleWithdraw}
                      className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors"
                    >
                      Withdraw
                    </button>
                  </div>
                </div>
              </div>

              {/* Important Notes/Rules Section */}
              <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  {/* Warning Message */}
                  <div className="bg-red-900/20 border border-red-500 rounded-lg p-3 sm:p-4">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <ExclamationTriangleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-red-400 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Important Notice</h4>
                        <p className="text-red-300 text-xs sm:text-sm">
                          You need to bet 10,000 Ks more before you can withdraw.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Rules List */}
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="text-white font-semibold text-sm sm:text-base">Withdrawal Rules:</h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-yellow-500 mt-1 flex-shrink-0">•</span>
                        <span>You need to bet 10,000 Ks before you can withdraw.</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-yellow-500 mt-1 flex-shrink-0">•</span>
                        <span>Today Exchange Rate: 1 USDT = 4600.00 Kyat</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-yellow-500 mt-1 flex-shrink-0">•</span>
                        <span>Withdraw Time is 00:00-23:59</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-yellow-500 mt-1 flex-shrink-0">•</span>
                        <span>Daily Remaining Withdrawal Times: 5 Times For KYC Verified, 3 Times For Non KYC Verified</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-yellow-500 mt-1 flex-shrink-0">•</span>
                        <span>Please confirm your beneficial account information before withdrawing. If your information is incorrect, our company will not be liable for the amount of loss.</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-yellow-500 mt-1 flex-shrink-0">•</span>
                        <span>If your beneficial information is incorrect, please contact customer service.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6">
      {/* Wallet Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold text-white">Wallet</h1>
      </div>

      {/* Wallet Tabs */}
      <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
        <div className="flex space-x-1 bg-gray-700 rounded-lg p-1">
          {walletTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-2 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center justify-center space-x-1 sm:space-x-2 ${
                activeTab === tab.id
                  ? tab.id === 'withdraw'
                    ? 'bg-red-600 text-white'
                    : `bg-${tab.color}-600 text-white`
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-${tab.dot}-500`}></div>
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.length > 4 ? tab.label.substring(0, 4) : tab.label}</span>
              {tab.id === 'history' && <DocumentTextIcon className="w-3 h-3 sm:w-4 sm:h-4" />}
            </button>
          ))}
        </div>

        {/* Balance Display */}
        <div className="mt-4 sm:mt-6 flex items-center justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Your Balance</h3>
            <div className="text-2xl sm:text-3xl font-bold text-white">
              K {(slotWalletBalance + lotteryWalletBalance).toLocaleString()}.00
            </div>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors p-2">
            <ArrowPathIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Wallet Type Tabs */}
        <div className="mt-4 sm:mt-6">
          <div className="flex space-x-1 bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => handleWalletClick('slot')}
              className={`flex-1 py-2 px-2 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                activeWallet === 'slot'
                  ? 'bg-purple-600 text-white'
                  : 'text-purple-400 hover:text-white'
              }`}
            >
              <span className="hidden sm:inline">Slot Wallet</span>
              <span className="sm:hidden">Slot</span>
            </button>
            <button
              onClick={() => handleWalletClick('lottery')}
              className={`flex-1 py-2 px-2 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                activeWallet === 'lottery'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="hidden sm:inline">Lottery Wallet</span>
              <span className="sm:hidden">Lottery</span>
            </button>
          </div>
          
          {/* Wallet Balances Display */}
          <div className="mt-4 grid grid-cols-1 gap-3 sm:gap-4">
            <div className="bg-gray-700 rounded-lg p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <div>
                  <h4 className="text-xs sm:text-sm text-gray-400">Slot Wallet</h4>
                  <p className="text-lg sm:text-xl font-bold text-white">{slotWalletBalance.toLocaleString()} MMK</p>
                </div>
                <button 
                  onClick={() => handleWalletClick('lottery')}
                  className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors"
                >
                  <span className="hidden sm:inline">Transfer to Lottery Wallet</span>
                  <span className="sm:hidden">To Lottery</span>
                </button>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <div>
                  <h4 className="text-xs sm:text-sm text-gray-400">Lottery Wallet</h4>
                  <p className="text-lg sm:text-xl font-bold text-white">{lotteryWalletBalance.toLocaleString()} MMK</p>
                </div>
                <button 
                  onClick={() => handleWalletClick('slot')}
                  className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors"
                >
                  <span className="hidden sm:inline">Transfer to Slot Wallet</span>
                  <span className="sm:hidden">To Slot</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render Content Based on Active Tab */}
      {renderContent()}

      {/* Transfer Modal */}
      {showTransferModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-semibold text-white">Confirm Transfer</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-300 text-xs sm:text-sm mb-3">{transferDirection}</p>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Transfer Amount (MMK)
                  </label>
                  <input
                    type="number"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter amount"
                    min="1"
                    max={transferDirection.includes('Slot Wallet') ? slotWalletBalance : lotteryWalletBalance}
                  />
                </div>
                
                <div className="text-xs text-gray-400">
                  Available: {transferDirection.includes('Slot Wallet') ? slotWalletBalance.toLocaleString() : lotteryWalletBalance.toLocaleString()} MMK
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2 sm:space-x-3">
              <button
                onClick={closeModal}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm sm:text-base font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleTransfer}
                disabled={!transferAmount || parseFloat(transferAmount) <= 0}
                className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm sm:text-base font-medium transition-colors"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletComponent; 