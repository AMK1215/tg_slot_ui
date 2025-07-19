import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LayoutComponent from './components/LayoutComponent';
import HomeContent from './components/HomeContent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import ProfileComponent from './components/ProfileComponent';
import WalletComponent from './components/WalletComponent';
import TGTokenComponent from './components/TGTokenComponent';
import CashBackHistoryComponent from './components/CashBackHistoryComponent';
import TransactionComponent from './components/TransactionComponent';
import ActivityComponent from './components/ActivityComponent';
import TRXComponent from './components/TRXComponent';
import WinningInformationComponent from './components/WinningInformationComponent';
import './App.css';

function App() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Function to toggle full screen
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullScreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullScreen(false);
      });
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <Router>
      <div className="h-screen flex flex-col bg-gray-900">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          
          {/* Protected Routes */}
          <Route path="/" element={
            <LayoutComponent>
              <HomeContent />
            </LayoutComponent>
          } />
          <Route path="/profile" element={
            <LayoutComponent>
              <ProfileComponent />
            </LayoutComponent>
          } />
          <Route path="/wallet" element={
            <LayoutComponent>
              <WalletComponent />
            </LayoutComponent>
          } />
          <Route path="/tg-token" element={
            <LayoutComponent>
              <TGTokenComponent />
            </LayoutComponent>
          } />
          <Route path="/cashback-history" element={
            <LayoutComponent>
              <CashBackHistoryComponent />
            </LayoutComponent>
          } />
          <Route path="/transaction" element={
            <LayoutComponent>
              <TransactionComponent />
            </LayoutComponent>
          } />
          <Route path="/activity" element={
            <LayoutComponent>
              <ActivityComponent />
            </LayoutComponent>
          } />
          <Route path="/trx-hash" element={
            <LayoutComponent>
              <TRXComponent />
            </LayoutComponent>
          } />
          <Route path="/winning-information" element={
            <LayoutComponent>
              <WinningInformationComponent />
            </LayoutComponent>
          } />
          
          {/* Redirect to home for unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        {/* Full Screen Toggle Button (Desktop Only) */}
        <button
          onClick={toggleFullScreen}
          className="fixed bottom-4 right-4 lg:block hidden bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors z-50"
          title={isFullScreen ? "Exit Full Screen" : "Enter Full Screen"}
        >
          {isFullScreen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          )}
        </button>
      </div>
    </Router>
  );
}

export default App;
