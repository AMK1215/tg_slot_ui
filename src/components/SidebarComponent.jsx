import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarComponent = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(() => {
    // Set active menu based on current route
    if (location.pathname === '/') return 'home';
    if (location.pathname === '/profile') return 'profile';
    if (location.pathname === '/wallet') return 'wallet';
    if (location.pathname === '/tg-token') return 'tgToken';
    if (location.pathname === '/cashback-history') return 'cashbackHistory';
    if (location.pathname === '/transaction') return 'transaction';
    if (location.pathname === '/activity') return 'activity';
    if (location.pathname === '/trx-hash') return 'trxHash';
    if (location.pathname === '/lottery') return 'lottery';
    if (location.pathname === '/winning-information') return 'winningInfo';
    if (location.pathname === '/today-earn-chart') return 'earningChart';
    return 'home';
  });
  const [winningInfoExpanded, setWinningInfoExpanded] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠', path: '/' },
    { id: 'profile', label: 'Profile', icon: '👤', path: '/profile' },
    { id: 'wallet', label: 'Wallet', icon: '💼', path: '/wallet' },
    { id: 'tgToken', label: 'TG Token', icon: '🪙', path: '/tg-token' },
    { id: 'cashbackHistory', label: 'Cashback History', icon: '💰', path: '/cashback-history' },
    { id: 'transaction', label: 'Transaction', icon: '💳', path: '/transaction' },
    { id: 'activity', label: 'Activity', icon: '📊', path: '/activity' },
    { id: 'trxHash', label: 'TRX Hash', icon: '₿', path: '/trx-hash' },
    { id: 'lottery', label: 'Lottery', icon: '🎰', path: '/lottery' },
    { id: 'todayEarnChart', label: "Today's Earning Chart", icon: '📊', path: '/today-earn-chart' },
  ];

  const gameCategories = [
    { id: 'lottery', label: 'Lottery', icon: '🎰', path: '/lottery' },
    { id: 'slot', label: 'Slot', icon: '🎰', path: '/slot' },
    { id: 'records', label: 'Records', icon: '📄', path: '/records' },
    { id: 'betData', label: 'Bet Data', icon: '📈', path: '/bet-data' },
  ];

  const winningInfoItems = [
    { id: 'earningChart', label: "Today's Earning Chart", icon: '📊', path: '/today-earn-chart' },
    { id: 'winningInfo', label: 'Winning Information', icon: '🏆', path: '/winning-information' },
    
    { id: 'history', label: 'History', icon: '📄', path: '/history' },
    { id: 'notification', label: 'Notification', icon: '🔔', path: '/notification', hasDot: true },
    { id: 'liveChart', label: '24/7 Live Chart', icon: '📈', path: '/live-chart' },
    { id: 'adminChart', label: "Admin's Chart", icon: '👨‍💼', path: '/admin-chart' },
  ];

  return (
    <>
      {/* Mobile Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-purple-900 text-white transform transition-transform duration-300 ease-in-out lg:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Mobile Header with Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-purple-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-yellow-800 text-lg">🎺</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-yellow-400">TRUMPET GAMME</h1>
                <p className="text-xs text-purple-300">Lottery</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 p-2"
            >
              <span className="text-2xl">×</span>
            </button>
          </div>

          {/* Mobile Content */}
          <div className="flex-1 overflow-y-auto">
            {/* User Info Section */}
            <div className="p-4 border-b border-purple-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white">👤</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">USERNAME</p>
                  <p className="text-xs text-purple-300">ID: 12345678</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-green-400">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="p-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => {
                    setActiveMenu(item.id);
                    onClose(); // Close sidebar on mobile when item is clicked
                  }}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeMenu === item.id
                      ? 'bg-purple-600 text-white'
                      : 'text-purple-200 hover:bg-purple-800'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}

              {/* Game Categories */}
              <div className="mt-6">
                <h3 className="text-xs text-purple-300 mb-2">Game Categories</h3>
                <div className="space-y-1">
                  {gameCategories.map((item) => (
                    <Link
                      key={item.id}
                      to={item.path}
                      onClick={() => {
                        setActiveMenu(item.id);
                        onClose(); // Close sidebar on mobile when item is clicked
                      }}
                      className={`w-full flex items-center space-x-2 px-3 py-1 text-sm transition-colors ${
                        activeMenu === item.id
                          ? 'text-purple-400 bg-purple-800 rounded'
                          : 'text-purple-200 hover:text-white'
                      }`}
                    >
                      <span className="text-purple-400">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Winning Information Section */}
              <div className="mt-6">
                <button
                  onClick={() => setWinningInfoExpanded(!winningInfoExpanded)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-purple-200 hover:bg-purple-800 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🏆</span>
                    <span>Winning Information</span>
                  </div>
                  <span className={`transition-transform ${winningInfoExpanded ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                
                {winningInfoExpanded && (
                  <div className="ml-6 mt-2 space-y-1">
                    {winningInfoItems.map((item) => (
                      <Link
                        key={item.id}
                        to={item.path}
                        onClick={() => {
                          setActiveMenu(item.id);
                          onClose(); // Close sidebar on mobile when item is clicked
                        }}
                        className={`w-full flex items-center justify-between px-3 py-1 text-xs ${
                          activeMenu === item.id
                            ? 'text-purple-400 bg-purple-800 rounded'
                            : 'text-purple-300 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                        {item.hasDot && (
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 24/7 Online Support */}
              <div className="mt-6">
                <button className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-purple-200 hover:bg-purple-800 rounded-lg">
                  <span className="text-lg">💬</span>
                  <span>24/7 Online</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:z-50">
        <div className="flex-1 flex flex-col bg-purple-900 text-white">
          {/* Logo Section */}
          <div className="p-6 border-b border-purple-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-yellow-800 text-lg">🎺</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-yellow-400">TRUMPET GAMME</h1>
                <p className="text-xs text-purple-300">Lottery</p>
              </div>
            </div>
          </div>

          {/* User Info Section */}
          <div className="p-4 border-b border-purple-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white">👤</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">USERNAME</p>
                <p className="text-xs text-purple-300">ID: 12345678</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-xs text-green-400">Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeMenu === item.id
                    ? 'bg-purple-600 text-white'
                    : 'text-purple-200 hover:bg-purple-800'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}

            {/* Game Categories */}
            <div className="mt-6">
              <h3 className="text-xs text-purple-300 mb-2">Game Categories</h3>
              <div className="space-y-1">
                {gameCategories.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full flex items-center space-x-2 px-3 py-1 text-sm transition-colors ${
                      activeMenu === item.id
                        ? 'text-purple-400 bg-purple-800 rounded'
                        : 'text-purple-200 hover:text-white'
                    }`}
                  >
                    <span className="text-purple-400">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Winning Information Section */}
            <div className="mt-6">
              <button
                onClick={() => setWinningInfoExpanded(!winningInfoExpanded)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm text-purple-200 hover:bg-purple-800 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">🏆</span>
                  <span>Winning Information</span>
                </div>
                <span className={`transition-transform ${winningInfoExpanded ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {winningInfoExpanded && (
                <div className="ml-6 mt-2 space-y-1">
                  {winningInfoItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.path}
                      onClick={() => setActiveMenu(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-1 text-xs ${
                        activeMenu === item.id
                          ? 'text-purple-400 bg-purple-800 rounded'
                          : 'text-purple-300 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                      {item.hasDot && (
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 24/7 Online Support */}
            <div className="mt-6">
              <button className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-purple-200 hover:bg-purple-800 rounded-lg">
                <span className="text-lg">💬</span>
                <span>24/7 Online</span>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Desktop Spacer */}
      <div className="hidden lg:block lg:w-64"></div>
    </>
  );
};

export default SidebarComponent; 