import React, { useState, useEffect } from 'react';
import { 
  ArrowPathIcon,
  ClockIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

// Import digit images
import digit0 from '../assets/digit_img/0_Red-Purple.png';
import digit1 from '../assets/digit_img/1_Green.png';
import digit2 from '../assets/digit_img/2_Red.png';
import digit3 from '../assets/digit_img/3_Green.png';
import digit4 from '../assets/digit_img/4_Red.png';
import digit5 from '../assets/digit_img/5_Green-Purple.png';
import digit6 from '../assets/digit_img/6_Red.png';
import digit7 from '../assets/digit_img/7_Green.png';
import digit8 from '../assets/digit_img/8_Red.png';
import digit9 from '../assets/digit_img/9_Green.png';

const LotteryComponent = () => {
  const [timeLeft, setTimeLeft] = useState(31);
  const [activeTab, setActiveTab] = useState('gameHistory');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [multiplier, setMultiplier] = useState(1);
  const [betAmount, setBetAmount] = useState('1000');
  const [quantity, setQuantity] = useState(12);
  const [showBetModal, setShowBetModal] = useState(false);
  const [modalColor, setModalColor] = useState('');

  // Game history data for Game History tab
  const gameHistoryData = [
    { period: '20250502101114', number: 0, bigSmall: 'Small', color: 'red-purple' },
    { period: '20250502101114', number: 1, bigSmall: 'Small', color: 'green' },
    { period: '20250502101114', number: 2, bigSmall: 'Small', color: 'red' },
    { period: '20250502101114', number: 3, bigSmall: 'Small', color: 'green' },
    { period: '20250502101114', number: 4, bigSmall: 'Small', color: 'red' },
    { period: '20250502101114', number: 5, bigSmall: 'Big', color: 'green-purple' },
    { period: '20250502101114', number: 6, bigSmall: 'Big', color: 'red' },
    { period: '20250502101114', number: 7, bigSmall: 'Big', color: 'green' },
    { period: '20250502101114', number: 8, bigSmall: 'Big', color: 'red' },
    { period: '20250502101114', number: 9, bigSmall: 'Big', color: 'green' },
  ];

  // Chart data for Chart tab
  const chartData = {
    winningNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    missing: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    avgMissing: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    frequency: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    maxConsecutive: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  };

  // Chart history data
  const chartHistoryData = [
    { period: '20250503100499', highlightedNumber: 0, bigSmall: 'Small', color: 'red-purple' },
    { period: '20250503100499', highlightedNumber: 5, bigSmall: 'Big', color: 'green-purple' },
    { period: '20250503100499', highlightedNumber: 1, bigSmall: 'Small', color: 'green' },
    { period: '20250503100499', highlightedNumber: 6, bigSmall: 'Big', color: 'red' },
    { period: '20250503100499', highlightedNumber: 2, bigSmall: 'Small', color: 'red' },
    { period: '20250503100499', highlightedNumber: 7, bigSmall: 'Big', color: 'green' },
    { period: '20250503100499', highlightedNumber: 3, bigSmall: 'Small', color: 'green' },
    { period: '20250503100499', highlightedNumber: 8, bigSmall: 'Big', color: 'red' },
    { period: '20250503100499', highlightedNumber: 4, bigSmall: 'Small', color: 'red' },
    { period: '20250503100499', highlightedNumber: 9, bigSmall: 'Big', color: 'green' },
  ];

  // Bet history data for Bet History tab
  const betHistoryData = [
    { gameId: '20250503100446', timestamp: '2025-05-03-10:04:46', type: 'Small', outcome: 'Lose', amount: 'K 100' },
    { gameId: '20250503100445', timestamp: '2025-05-03-10:04:45', type: 'Big', outcome: 'Win', amount: 'K 1960' },
    { gameId: '20250503100444', timestamp: '2025-05-03-10:04:44', type: 'Violet', outcome: 'Win', amount: 'K 4410' },
    { gameId: '20250503100443', timestamp: '2025-05-03-10:04:43', type: 'Red', outcome: 'Lose', amount: 'K 100' },
    { gameId: '20250503100442', timestamp: '2025-05-03-10:04:42', type: 'Green', outcome: 'Win', amount: 'K 1960' },
    { gameId: '20250503100441', timestamp: '2025-05-03-10:04:41', type: '0', outcome: 'Lose', amount: 'K 100' },
    { gameId: '20250503100440', timestamp: '2025-05-03-10:04:40', type: '1', outcome: 'Win', amount: 'K 1960' },
    { gameId: '20250503100439', timestamp: '2025-05-03-10:04:39', type: '2', outcome: 'Lose', amount: 'K 100' },
    { gameId: '20250503100438', timestamp: '2025-05-03-10:04:38', type: '3', outcome: 'Win', amount: 'K 1960' },
    { gameId: '20250503100437', timestamp: '2025-05-03-10:04:37', type: '4', outcome: 'Lose', amount: 'K 100' },
  ];

  // Recent results for display
  const recentResults = [
    { number: 1, color: 'green' },
    { number: 6, color: 'red' },
    { number: 2, color: 'red' },
    { number: 5, color: 'violet' },
    { number: 4, color: 'red' },
  ];

  // Digit images mapping
  const digitImages = {
    0: digit0, 1: digit1, 2: digit2, 3: digit3, 4: digit4,
    5: digit5, 6: digit6, 7: digit7, 8: digit8, 9: digit9
  };

  // Number color mapping
  const numberColors = {
    0: 'red', 1: 'green', 2: 'red', 3: 'green', 4: 'red',
    5: 'violet', 6: 'red', 7: 'green', 8: 'red', 9: 'green'
  };

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 60; // Reset to 60 seconds
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleColorBet = (color) => {
    setModalColor(color);
    setShowBetModal(true);
  };

  const handleNumberBet = (number) => {
    setSelectedNumber(selectedNumber === number ? null : number);
    setSelectedColor('');
    setSelectedSize('');
  };

  const handleSizeBet = (size) => {
    setSelectedSize(selectedSize === size ? '' : size);
    setSelectedColor('');
    setSelectedNumber(null);
  };

  const handleRandomBet = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    setSelectedNumber(randomNumber);
    setSelectedColor('');
    setSelectedSize('');
  };

  const getColorClass = (color) => {
    switch (color) {
      case 'green': return 'bg-green-500';
      case 'red': return 'bg-red-500';
      case 'violet': return 'bg-purple-500';
      case 'red-purple': return 'bg-gradient-to-r from-red-500 to-purple-500';
      case 'green-purple': return 'bg-gradient-to-r from-green-500 to-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getColorTextClass = (color) => {
    switch (color) {
      case 'green': return 'text-green-500';
      case 'red': return 'text-red-500';
      case 'violet': return 'text-purple-500';
      default: return 'text-gray-500';
    }
  };

  const getBetTypeColor = (type) => {
    switch (type) {
      case 'Small': return 'bg-green-500';
      case 'Big': return 'bg-red-500';
      case 'Violet': return 'bg-purple-500';
      case 'Red': return 'bg-red-500';
      case 'Green': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getOutcomeColor = (outcome) => {
    return outcome === 'Win' ? 'text-green-500' : 'text-red-500';
  };

  const getModalColorClass = (color) => {
    switch (color) {
      case 'green': return 'bg-green-600';
      case 'red': return 'bg-red-600';
      case 'violet': return 'bg-purple-600';
      default: return 'bg-gray-600';
    }
  };

  const getModalColorTextClass = (color) => {
    switch (color) {
      case 'green': return 'text-green-500';
      case 'red': return 'text-red-500';
      case 'violet': return 'text-purple-500';
      default: return 'text-gray-500';
    }
  };

  const getModalColorButtonClass = (color) => {
    switch (color) {
      case 'green': return 'bg-green-500 hover:bg-green-600';
      case 'red': return 'bg-red-500 hover:bg-red-600';
      case 'violet': return 'bg-purple-500 hover:bg-purple-600';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  const getModalColorBorderClass = (color) => {
    switch (color) {
      case 'green': return 'border-green-500';
      case 'red': return 'border-red-500';
      case 'violet': return 'border-purple-500';
      default: return 'border-gray-500';
    }
  };

  // Betting Modal Component
  const BettingModal = ({ color, onClose }) => {
    const [selectedAmount, setSelectedAmount] = useState('1000');
    const [selectedMultiplier, setSelectedMultiplier] = useState(1);
    const [modalQuantity, setModalQuantity] = useState(12);

    const amountOptions = ['100', '1000', '10000', '100000'];
    const multiplierOptions = [1, 5, 10, 20, 50, 100];

    const handleQuantityChange = (increment) => {
      setModalQuantity(prev => Math.max(1, prev + increment));
    };

    const getColorName = (color) => {
      switch (color) {
        case 'green': return 'Green';
        case 'red': return 'Red';
        case 'violet': return 'Violet';
        default: return 'Unknown';
      }
    };

    const calculateTotalBet = () => {
      const amount = parseInt(selectedAmount);
      const total = amount * modalQuantity * selectedMultiplier;
      return total.toLocaleString();
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
        <div className="bg-white rounded-lg w-full max-w-sm sm:max-w-md">
          {/* Header */}
          <div className={`${getModalColorClass(color)} text-white p-3 sm:p-4 rounded-t-lg`}>
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-semibold">Win Go 1 Minute</h3>
              <button onClick={onClose} className="text-white hover:text-gray-200 p-1">
                <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Selection Display */}
          <div className="p-3 sm:p-4 border-b border-gray-200">
            <div className="text-gray-600 text-xs sm:text-sm mb-2">Your Selection:</div>
            <button className={`px-3 sm:px-4 py-2 rounded border-2 ${getModalColorBorderClass(color)} ${getModalColorTextClass(color)} font-medium text-sm sm:text-base`}>
              {getColorName(color)}
            </button>
          </div>

          {/* Main Content Area */}
          <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
            {/* Amount Selection */}
            <div>
              <div className="text-gray-600 text-xs sm:text-sm mb-2">Amount</div>
              <div className="grid grid-cols-4 gap-1 sm:gap-2">
                {amountOptions.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`px-2 sm:px-3 py-2 rounded text-xs sm:text-sm font-medium transition-colors ${
                      selectedAmount === amount
                        ? `${getModalColorButtonClass(color)} text-white shadow-md`
                        : `${getModalColorButtonClass(color)} text-white opacity-80`
                    }`}
                  >
                    {amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <div className="text-gray-600 text-xs sm:text-sm mb-2">Quantity</div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 ${getModalColorBorderClass(color)} ${getModalColorTextClass(color)} flex items-center justify-center font-bold text-sm`}
                >
                  -
                </button>
                <input
                  type="number"
                  value={modalQuantity}
                  onChange={(e) => setModalQuantity(parseInt(e.target.value) || 1)}
                  className="w-14 h-7 sm:w-16 sm:h-8 text-center border-2 border-gray-300 rounded font-medium text-sm"
                />
                <button
                  onClick={() => handleQuantityChange(1)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 ${getModalColorBorderClass(color)} ${getModalColorTextClass(color)} flex items-center justify-center font-bold text-sm`}
                >
                  +
                </button>
              </div>
            </div>

            {/* Multiplier Buttons */}
            <div>
              <div className="text-gray-600 text-xs sm:text-sm mb-2">Multiplier</div>
              <div className="grid grid-cols-6 gap-1 sm:gap-2">
                {multiplierOptions.map((mult) => (
                  <button
                    key={mult}
                    onClick={() => setSelectedMultiplier(mult)}
                    className={`px-1 sm:px-2 py-2 rounded text-xs sm:text-sm font-medium transition-colors ${
                      selectedMultiplier === mult
                        ? `${getModalColorButtonClass(color)} text-white shadow-md`
                        : `${getModalColorButtonClass(color)} text-white opacity-80`
                    }`}
                  >
                    ×{mult}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2 sm:space-x-3 pt-3 sm:pt-4">
              <button
                onClick={onClose}
                className={`flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded border-2 ${getModalColorBorderClass(color)} ${getModalColorTextClass(color)} font-medium transition-colors text-sm sm:text-base`}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle bet placement with calculated total
                  const totalBet = parseInt(selectedAmount) * modalQuantity * selectedMultiplier;
                  console.log(`Placing bet: ${color}, Amount: ${selectedAmount}, Quantity: ${modalQuantity}, Multiplier: ${selectedMultiplier}, Total: ${totalBet}`);
                  onClose();
                }}
                className={`flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded ${getModalColorButtonClass(color)} text-white font-medium transition-colors text-sm sm:text-base`}
              >
                Bet K{calculateTotalBet()}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render Game History Content
  const renderGameHistory = () => (
    <div className="space-y-3">
      <div className="overflow-x-auto">
        <table className="w-full min-w-full">
          <thead>
            <tr className="bg-purple-600 text-white">
              <th className="text-left py-2 px-2 sm:px-4 font-medium text-xs sm:text-sm">Period</th>
              <th className="text-left py-2 px-2 sm:px-4 font-medium text-xs sm:text-sm">Number</th>
              <th className="text-left py-2 px-2 sm:px-4 font-medium text-xs sm:text-sm">Big/Small</th>
              <th className="text-left py-2 px-2 sm:px-4 font-medium text-xs sm:text-sm">Color</th>
            </tr>
          </thead>
          <tbody>
            {gameHistoryData.map((game, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-2 px-2 sm:px-4 text-white text-xs sm:text-sm">{game.period}</td>
                <td className="py-2 px-2 sm:px-4">
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white font-bold ${getColorClass(game.color)}`}>
                    {game.number}
                  </div>
                </td>
                <td className="py-2 px-2 sm:px-4 text-white text-xs sm:text-sm">{game.bigSmall}</td>
                <td className="py-2 px-2 sm:px-4">
                  <div className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full ${getColorClass(game.color)}`}></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Render Chart Content
  const renderChart = () => (
    <div className="space-y-4">
      {/* Statistics Section */}
      <div className="bg-gray-800 rounded-xl p-3 sm:p-4">
        <div className="space-y-2 sm:space-y-3">
          {Object.entries(chartData).map(([key, values]) => (
            <div key={key} className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
              <div className="w-full sm:w-32 text-white text-xs sm:text-sm font-medium">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
              </div>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {values.map((value, index) => (
                  <span key={index} className="text-white text-xs sm:text-sm">{value}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chart History Table */}
      <div className="bg-gray-800 rounded-xl p-3 sm:p-4">
        <div className="overflow-x-auto">
          <table className="w-full min-w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 px-2 sm:px-4 text-gray-300 font-medium text-xs sm:text-sm">Period</th>
                <th className="text-left py-2 px-2 sm:px-4 text-gray-300 font-medium text-xs sm:text-sm">Number</th>
              </tr>
            </thead>
            <tbody>
              {chartHistoryData.map((game, index) => (
                <tr key={index} className="border-b border-gray-700 border-dotted">
                  <td className="py-2 px-2 sm:px-4 text-white text-xs sm:text-sm">{game.period}</td>
                  <td className="py-2 px-2 sm:px-4">
                    <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto">
                      {/* All numbers 0-9 with one highlighted */}
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <div
                          key={num}
                          className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${
                            num === game.highlightedNumber
                              ? getColorClass(game.color)
                              : 'bg-gray-600 border border-dotted border-gray-400'
                          }`}
                        >
                          {num}
                        </div>
                      ))}
                      {/* S/B indicator */}
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-white text-xs font-bold bg-purple-500 ml-1 sm:ml-2 flex-shrink-0">
                        {game.bigSmall === 'Small' ? 'S' : 'B'}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-3 sm:space-x-4">
        <button className="bg-purple-600 hover:bg-purple-700 text-white p-1.5 sm:p-2 rounded-lg">
          <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <span className="text-white text-sm sm:text-base">1/8816</span>
        <button className="bg-purple-600 hover:bg-purple-700 text-white p-1.5 sm:p-2 rounded-lg">
          <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );

  // Render Bet History Content
  const renderBetHistory = () => (
    <div className="space-y-3">
      {betHistoryData.map((bet, index) => (
        <div key={index} className="bg-gray-800 rounded-xl p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <div className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-white font-medium text-xs sm:text-sm ${getBetTypeColor(bet.type)}`}>
                {bet.type}
              </div>
              <div className="text-gray-300">
                <div className="text-xs sm:text-sm">{bet.gameId}</div>
                <div className="text-xs">{bet.timestamp}</div>
              </div>
            </div>
            <div className="text-right">
              <div className={`font-medium text-xs sm:text-sm ${getOutcomeColor(bet.outcome)}`}>
                {bet.outcome}
              </div>
              <div className={`text-xs sm:text-sm ${getOutcomeColor(bet.outcome)}`}>
                {bet.amount}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-3 sm:space-x-4">
        <button className="bg-purple-600 hover:bg-purple-700 text-white p-1.5 sm:p-2 rounded-lg">
          <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <span className="text-white text-sm sm:text-base">1/8816</span>
        <button className="bg-purple-600 hover:bg-purple-700 text-white p-1.5 sm:p-2 rounded-lg">
          <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-3 sm:px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">TRX Hash</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4">
        {/* Lottery Balance Card */}
        <div className="bg-purple-600 rounded-xl p-3 sm:p-4 lg:p-6">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <h3 className="text-white font-semibold text-sm sm:text-base">Lottery Balance</h3>
            <ArrowPathIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">K 500,000</div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <button className="bg-purple-700 hover:bg-purple-800 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold transition-colors text-sm sm:text-base">
              Deposit
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold transition-colors text-sm sm:text-base">
              Withdraw
            </button>
          </div>
        </div>

        {/* Game Timer and Hash */}
        <div className="bg-gray-800 rounded-xl p-3 sm:p-4 lg:p-6">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <h3 className="text-white font-semibold text-sm sm:text-base">TRX Hash 1 Min</h3>
            <div className="text-purple-400 font-bold text-lg sm:text-xl lg:text-4xl">{formatTime(timeLeft)}</div>
          </div>
          <div className="text-xs sm:text-sm text-gray-300 mb-2">Current Hash</div>
          <div className="text-xs sm:text-sm font-mono text-white break-all">
            22882193093762117
          </div>
        </div>

        {/* Recent Results */}
        <div className="bg-gray-800 rounded-xl p-3 sm:p-4 lg:p-6">
          <h3 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">1 Minute Result</h3>
          <div className="flex justify-center space-x-1 sm:space-x-2 lg:space-x-3">
            {recentResults.map((result, index) => (
              <div
                key={index}
                className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg ${getColorClass(result.color)}`}
              >
                {result.number}
              </div>
            ))}
          </div>
        </div>

        {/* Betting Options */}
        <div className="space-y-3 sm:space-y-4">
          {/* Color Bets */}
          <div className="bg-gray-800 rounded-xl p-3 sm:p-4">
            <h3 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Color Bets</h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <button
                onClick={() => handleColorBet('green')}
                className="py-3 sm:py-4 px-2 sm:px-4 rounded-lg font-semibold transition-colors text-sm sm:text-base bg-green-500 hover:bg-green-600 text-white"
              >
                Green
              </button>
              <button
                onClick={() => handleColorBet('violet')}
                className="py-3 sm:py-4 px-2 sm:px-4 rounded-lg font-semibold transition-colors text-sm sm:text-base bg-purple-500 hover:bg-purple-600 text-white"
              >
                Violet
              </button>
              <button
                onClick={() => handleColorBet('red')}
                className="py-3 sm:py-4 px-2 sm:px-4 rounded-lg font-semibold transition-colors text-sm sm:text-base bg-red-500 hover:bg-red-600 text-white"
              >
                Red
              </button>
            </div>
          </div>

          {/* Number Bets */}
          <div className="bg-gray-800 rounded-xl p-3 sm:p-4">
            <h3 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Number Bets</h3>
            <div className="grid grid-cols-5 gap-1 sm:gap-2">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <button
                  key={number}
                  onClick={() => handleNumberBet(number)}
                  className={`aspect-square rounded-lg transition-all ${
                    selectedNumber === number
                      ? 'ring-2 ring-yellow-400 ring-offset-2 ring-offset-gray-800'
                      : ''
                  }`}
                >
                  <img
                    src={digitImages[number]}
                    alt={`Number ${number}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Random Button */}
          <div className="bg-gray-800 rounded-xl p-3 sm:p-4">
            <button
              onClick={handleRandomBet}
              className="w-full flex items-center justify-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-black py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold transition-colors text-sm sm:text-base"
            >
              <span>🔄</span>
              <span>Random</span>
            </button>
          </div>

          {/* Multiplier */}
          <div className="bg-gray-800 rounded-xl p-3 sm:p-4">
            <h3 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Multiplier</h3>
            <div className="grid grid-cols-5 gap-1 sm:gap-2">
              {[1, 5, 10, 20, 50].map((mult) => (
                <button
                  key={mult}
                  onClick={() => setMultiplier(mult)}
                  className={`py-2 sm:py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                    multiplier === mult
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                  }`}
                >
                  x{mult}
                </button>
              ))}
            </div>
          </div>

          {/* Size Bets */}
          <div className="bg-gray-800 rounded-xl p-3 sm:p-4">
            <h3 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Size Bets</h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <button
                onClick={() => handleSizeBet('big')}
                className={`py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
                  selectedSize === 'big'
                    ? 'bg-red-600 text-white'
                    : 'bg-red-500 hover:bg-red-600 text-white'
                }`}
              >
                Big
              </button>
              <button
                onClick={() => handleSizeBet('small')}
                className={`py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
                  selectedSize === 'small'
                    ? 'bg-green-600 text-white'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                Small
              </button>
            </div>
          </div>
        </div>

        {/* Game History/Chart/Bet History Section */}
        <div className="bg-gray-800 rounded-xl p-3 sm:p-4">
          {/* Tabs */}
          <div className="flex space-x-1 mb-3 sm:mb-4">
            {[
              { id: 'gameHistory', label: 'Game History', icon: DocumentTextIcon },
              { id: 'chart', label: 'Chart', icon: ChartBarIcon },
              { id: 'betHistory', label: 'Bet History', icon: DocumentTextIcon }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                }`}
              >
                <tab.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-3 sm:mt-4">
            {activeTab === 'gameHistory' && renderGameHistory()}
            {activeTab === 'chart' && renderChart()}
            {activeTab === 'betHistory' && renderBetHistory()}
          </div>
        </div>
      </div>

      {/* Betting Modal */}
      {showBetModal && (
        <BettingModal
          color={modalColor}
          onClose={() => setShowBetModal(false)}
        />
      )}
    </div>
  );
};

export default LotteryComponent; 