import React from 'react';
import { 
  StarIcon,
  GiftIcon,
  TrophyIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const ActivityComponent = () => {
  const playerRewards = [
    'WELCOME BONUS',
    'EXTRA BONUS', 
    'NEW MEMBER BONUS',
    'DEPOSIT 2% BONUS',
    'NIGHT BONUS',
    'WIN STREAK BONUS',
    'WEEKLY BONUS',
    'TOKEN REWARD'
  ];

  const gamePromotions = [
    { title: 'win BONUS +500%', game: 'ZMEY11', image: '/placeholder-game1.jpg' },
    { title: '%50 PRAGMATIC', subtitle: 'FREESPIN', game: 'PRAGMATIC', image: '/placeholder-game2.jpg' },
    { title: '%50 FREE SPIN', game: 'SLOT', image: '/placeholder-game3.jpg' }
  ];

  const lotteryTable = [
    { win: '100', profit: '100' },
    { win: '98', profit: '196' },
    { win: '96', profit: '588' },
    { win: '188', profit: '1372' },
    { win: '272', profit: '2720' }
  ];

  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold text-white">Activity</h1>
      </div>

      {/* Rewards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Player Rewards */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-4 sm:p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-white">PLAYER REWARD</h2>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <StarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-800" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {playerRewards.map((reward, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-2 sm:p-3">
                  <span className="text-xs sm:text-sm text-white font-medium">{reward}</span>
                </div>
              ))}
            </div>
            
            {/* Golden coins decoration */}
            <div className="absolute top-4 right-4 opacity-20">
              <div className="text-yellow-400 text-4xl">💰</div>
            </div>
          </div>
        </div>

        {/* Agent Rewards */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-4 sm:p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-white">AGENT REWARD</h2>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <TrophyIcon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-800" />
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl sm:text-6xl mb-2">🏆</div>
              <p className="text-sm sm:text-base text-white/80">Earn commissions and bonuses as an agent</p>
            </div>
            
            {/* Trophy decoration */}
            <div className="absolute bottom-4 right-4 opacity-20">
              <div className="text-yellow-400 text-4xl">🎁</div>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Code Section */}
      <div className="bg-gray-800 rounded-2xl p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-2">USE PROMO CODE GET EXTRA BONUS</h2>
            <p className="text-sm sm:text-base text-gray-300">Enter promo codes to unlock exclusive bonuses and rewards</p>
          </div>
          
          <div className="flex space-x-3">
            <div className="bg-yellow-400 rounded-lg p-3 sm:p-4 text-center">
              <div className="text-xs sm:text-sm font-bold text-yellow-800">COUPON</div>
              <div className="text-lg sm:text-xl font-bold text-yellow-800">10% OFF</div>
            </div>
            <div className="bg-purple-500 rounded-lg p-3 sm:p-4 text-center">
              <div className="text-xs sm:text-sm font-bold text-white">COUPON</div>
              <div className="text-lg sm:text-xl font-bold text-white">20% OFF</div>
            </div>
          </div>
        </div>
      </div>

      {/* Signal Channel Section */}
      <div className="bg-gray-800 rounded-2xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-4">SIGNAL CHANNEL</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - Text */}
          <div className="space-y-4">
            <div className="bg-purple-600/20 rounded-lg p-4">
              <h3 className="text-yellow-400 font-bold mb-2">TRUMPET GAMME</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-2">
                ဉာဏ်ကို အသုံးပြု၍ ကံကို မမှီခိုပါနှင့်
              </p>
              <p className="text-sm sm:text-base text-gray-300">
                TG LOTTERY တွင် ကျပ် ၂၀၀၀ ရင်းနှီးမြှုပ်နှံ၍ နေ့စဉ်/လစဉ် အမြတ်ရရှိပါ။
              </p>
            </div>
            
            <div className="text-sm sm:text-base text-gray-300">
              <p className="mb-2">Big & Small ရွေးချယ်၍ နေ့စဉ်ဝင်ငွေရနိုင်ပါသည်။</p>
              <div className="space-y-1">
                <p>📱 <a href="https://tglottery.bet" className="text-purple-400 hover:text-purple-300">https://tglottery.bet</a></p>
                <p>💬 <a href="https://t.me/yooneainTG" className="text-purple-400 hover:text-purple-300">contact - https://t.me/yooneainTG</a></p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Phone Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-80 sm:w-56 sm:h-96 bg-gradient-to-b from-purple-600 to-purple-800 rounded-3xl p-4 relative">
                <div className="bg-gray-900 rounded-2xl h-full p-3">
                  <div className="grid grid-cols-3 gap-1 mb-4">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="bg-purple-600 rounded text-center py-2 text-xs text-white">
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  <div className="text-center text-white text-sm">
                    <div className="bg-red-500 rounded-lg py-2 mb-2">00:57</div>
                    <p>TG LOTTERY</p>
                  </div>
                </div>
                
                {/* Floating coins */}
                <div className="absolute -top-2 -right-2 text-yellow-400 text-2xl">💰</div>
                <div className="absolute -bottom-2 -left-2 text-green-400 text-2xl">💵</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Promotions */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-white">Game Promotions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gamePromotions.map((promo, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-4 sm:p-6 hover:bg-gray-700 transition-colors">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg mb-3 flex items-center justify-center">
                <div className="text-4xl">🎮</div>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">{promo.title}</h3>
              {promo.subtitle && (
                <p className="text-xs sm:text-sm text-purple-400 mb-2">{promo.subtitle}</p>
              )}
              <p className="text-xs sm:text-sm text-gray-400">{promo.game}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trumpet Gamme Lottery Section */}
      <div className="bg-gray-800 rounded-2xl p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white">TRUMPET GAMME Lottery</h2>
            <p className="text-sm sm:text-base text-gray-300">လိုက်ဆဇယား</p>
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-yellow-800 font-bold text-sm">🎰</span>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-gray-300 font-medium text-xs sm:text-sm">နိုင်ရင်ရငွေ</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-gray-300 font-medium text-xs sm:text-sm">မြတ်</th>
              </tr>
            </thead>
            <tbody>
              {lotteryTable.map((row, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-white text-xs sm:text-sm">{row.win}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-400 font-medium text-xs sm:text-sm">{row.profit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 p-4 bg-purple-600/20 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-bold mb-1">Player တွေကို ချင် RTP 98% ၏ TG Lottery</h3>
              <p className="text-sm text-gray-300">https://tgbet.net</p>
            </div>
            <div className="text-right">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold text-sm">👤</span>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityComponent; 