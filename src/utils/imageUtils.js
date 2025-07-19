// Import all game logo images
import PragmaticPlay from '../assets/game_logo/PragmaticPlay.png';
import Hacksaw from '../assets/game_logo/Hacksaw.png';
import PlayStarSlot from '../assets/game_logo/play_star_slot.png';
import Live22 from '../assets/game_logo/live22.png';
import Epicwin from '../assets/game_logo/Epicwin.png';
import Cq9 from '../assets/game_logo/cq_9.png';
import Jili from '../assets/game_logo/ji_li.png';
import Fachi from '../assets/game_logo/Fachi.png';
import PGSoft from '../assets/game_logo/PG_Soft.png';
import Evoplay from '../assets/game_logo/evoplay.png';
import JDB from '../assets/game_logo/j_db.png';
import BGaming from '../assets/game_logo/BGaming.png';
import Cq9Fishing from '../assets/game_logo/Cq9Fishing.png';
import JiliFishing from '../assets/game_logo/JiliFishing.png';
import SpadegamingFishing from '../assets/game_logo/SpadegamingFishing.png';
import SabaVirtualSport from '../assets/game_logo/SabaVirtualSport.png';

// Export all images as an object
export const gameLogos = {
  PragmaticPlay,
  Hacksaw,
  PlayStarSlot,
  Live22,
  Epicwin,
  Cq9,
  Jili,
  Fachi,
  PGSoft,
  Evoplay,
  JDB,
  BGaming,
  Cq9Fishing,
  JiliFishing,
  SpadegamingFishing,
  SabaVirtualSport
};

// Helper function to get image by name
export const getGameLogo = (name) => {
  return gameLogos[name] || null;
};

// Helper function to get random image
export const getRandomGameLogo = () => {
  const logoKeys = Object.keys(gameLogos);
  const randomKey = logoKeys[Math.floor(Math.random() * logoKeys.length)];
  return gameLogos[randomKey];
}; 