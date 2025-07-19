import React, { useState } from 'react';
import SidebarComponent from './SidebarComponent';
import NavbarComponent from './NavbarComponent';
import FooterComponent from './FooterComponent';

const LayoutComponent = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <SidebarComponent 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <NavbarComponent 
          onMenuClick={() => setSidebarOpen(true)}
        />
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-900 p-4 lg:p-6">
          {children}
        </main>

        {/* Footer - Only visible on mobile */}
        <FooterComponent />
      </div>
    </div>
  );
};

export default LayoutComponent; 