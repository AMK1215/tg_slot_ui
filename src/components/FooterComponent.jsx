import React, { useState } from 'react';

const FooterComponent = () => {
  const [activeTab, setActiveTab] = useState('home');

  const footerTabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'document', label: 'Document', icon: '📄' },
    { id: 'diamond', label: 'Diamond', icon: '💎' },
    { id: 'refresh', label: 'Refresh', icon: '🔄' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'chat', label: 'Chat', icon: '💬' },
  ];

  return (
    <div className="lg:hidden bg-gray-800 border-t border-gray-700">
      <div className="flex items-center justify-around px-2 py-3">
        {footerTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
              activeTab === tab.id
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <span className="text-lg lg:text-xl">{tab.icon}</span>
            <span className="text-xs">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FooterComponent; 