import React from 'react';
import BannerComponent from './BannerComponent';
import LobbyComponent from './LobbyComponent';
import PopularComponent from './PopularComponent';
import InHouseComponent from './InHouseComponent';

const HomeContent = () => {
  return (
    <div className="space-y-8">
      {/* Banner Component */}
      <BannerComponent />

      {/* Lobby Component */}
      <LobbyComponent />

      {/* Popular Component */}
      <PopularComponent />

      {/* In-house Component */}
      <InHouseComponent />
    </div>
  );
};

export default HomeContent; 