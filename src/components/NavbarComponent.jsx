import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = ({ onMenuClick }) => {
  const [balanceDropdownOpen, setBalanceDropdownOpen] = useState(false);

  return (
    <div className="bg-gray-800 border-b border-gray-700 px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Side - Hamburger Menu & Title */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            onClick={onMenuClick}
            className="lg:hidden text-white hover:text-gray-300 p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <h2 className="text-white text-lg font-semibold">TGLOTTERY</h2>
        </div>

        {/* Center - Balance (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="relative">
            <button
              onClick={() => setBalanceDropdownOpen(!balanceDropdownOpen)}
              className="flex flex-col items-center bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white font-medium transition-colors"
            >
              <span className="text-xs">K</span>
              <span className="text-sm font-bold">21.75M</span>
            </button>
            
            {balanceDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-700 border border-gray-600 rounded-lg shadow-lg z-10">
                <div className="p-3 border-b border-gray-600">
                  <p className="text-sm text-gray-300">Available Balance</p>
                  <p className="text-white font-semibold">K 21,750,000.00</p>
                </div>
                <div className="p-3">
                  <p className="text-sm text-gray-300">Total Balance</p>
                  <p className="text-white font-semibold">K 21,750,000.00</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Action Buttons */}
        <div className="flex items-center space-x-2 lg:space-x-3">
          {/* Mobile Balance Display */}
          <div className="md:hidden">
            <button className="flex flex-col items-center bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded-lg text-white font-medium transition-colors">
              <span className="text-xs">K</span>
              <span className="text-sm font-bold">21.75M</span>
            </button>
          </div>

          {/* App Download Button (Hidden on Small Mobile) */}
          <button className="hidden sm:flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-3 lg:px-4 py-2 rounded-lg text-white text-sm lg:text-base font-medium transition-colors">
            <span>📱</span>
            <span className="hidden lg:inline">App Download</span>
            <span className="lg:hidden">App</span>
          </button>

          {/* Login Button */}
          <Link
            to="/login"
            className="bg-purple-600 hover:bg-purple-700 px-3 lg:px-4 py-2 rounded-lg text-white text-sm lg:text-base font-medium transition-colors"
          >
            Login
          </Link>

          {/* Sign Up Button */}
          <Link
            to="/register"
            className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-colors"
          >
            SignUp
          </Link>

          {/* Code Icon (Hidden on Small Mobile) */}
          <button className="hidden sm:block text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700 transition-colors">
            <span className="text-lg">&lt;/&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent; 