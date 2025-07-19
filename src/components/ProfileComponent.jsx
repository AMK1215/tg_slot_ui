import React, { useState } from 'react';
import { 
  UserIcon, 
  ShieldCheckIcon, 
  CogIcon,
  ClipboardDocumentIcon,
  ArrowRightIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const ProfileComponent = () => {
  const [activeWallet, setActiveWallet] = useState('lottery'); // 'slot' or 'lottery'

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here
  };

  return (
    <div className="space-y-6 p-6">
      {/* Profile Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Profile</h1>
      </div>

      {/* User Information Card */}
      <div className="bg-gray-800 rounded-lg p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            {/* Avatar */}
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <UserIcon className="w-8 h-8 text-white" />
            </div>
            
            {/* User Details */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <h2 className="text-xl font-semibold text-white">Username311</h2>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  KYC Verified
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">UID | TGL21004117</span>
                <button
                  onClick={() => copyToClipboard('TGL21004117')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <ClipboardDocumentIcon className="w-4 h-4" />
                </button>
              </div>
              
              <p className="text-gray-400 text-sm">
                Last login: 2025-04-28 14:30:15
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Account Balance Section */}
      <div className="bg-gray-800 rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Your Account Balance</h3>
          <button className="text-gray-400 hover:text-white transition-colors">
            <ArrowPathIcon className="w-5 h-5" />
          </button>
        </div>
        
        <div className="text-3xl font-bold text-white mb-4">
          K 21,750,500.00
        </div>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
            Deposit
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
            Withdraw
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
            Token
          </button>
        </div>
      </div>

      {/* Wallet Selection Tabs */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex space-x-1 bg-gray-700 rounded-lg p-1">
          <button
            onClick={() => setActiveWallet('slot')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeWallet === 'slot'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Slot Wallet
          </button>
          <button
            onClick={() => setActiveWallet('lottery')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeWallet === 'lottery'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Lottery Wallet
          </button>
        </div>
      </div>

      {/* Invite Bonus and Count Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Total Invite Bonus */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">₭</span>
              </div>
              <div>
                <h4 className="text-gray-400 text-sm">Total invite bonus</h4>
                <p className="text-white font-semibold text-lg">K 650,500.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Invite Count */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <div>
                <h4 className="text-gray-400 text-sm">Invite</h4>
                <p className="text-white font-semibold text-lg">746</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Action Links */}
      <div className="bg-gray-800 rounded-lg">
        <div className="space-y-1">
          {/* Edit Profile */}
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-700 transition-colors">
            <div className="flex items-center space-x-3">
              <UserIcon className="w-5 h-5 text-gray-400" />
              <span className="text-white">Edit Profile</span>
            </div>
            <ArrowRightIcon className="w-5 h-5 text-gray-400" />
          </button>

          {/* Verification */}
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-700 transition-colors">
            <div className="flex items-center space-x-3">
              <ShieldCheckIcon className="w-5 h-5 text-gray-400" />
              <span className="text-white">Verification</span>
            </div>
            <ArrowRightIcon className="w-5 h-5 text-gray-400" />
          </button>

          {/* Security */}
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-700 transition-colors">
            <div className="flex items-center space-x-3">
              <CogIcon className="w-5 h-5 text-gray-400" />
              <span className="text-white">Security</span>
            </div>
            <ArrowRightIcon className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent; 