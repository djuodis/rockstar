import React from 'react';
import { FaTwitch, FaInstagram, FaTwitter, FaYoutube, FaFacebookF } from 'react-icons/fa';  
import gta5Image from '../../../assets/gta5.png';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="gameLauncher">
          <div className="info">
            <h2>ROCKSTAR GAME LAUNCHER</h2>
            <p>Download and play the latest PC games from Rockstar Games</p>
            <a href="https://gamedownloads.rockstargames.com/public/installer/Rockstar-Games-Launcher.exe?_gl=1*1wls5hk*_ga*MjE0NTY4MzM0MC4xNzA2MDI5OTQw*_ga_PJQ2JYZDQC*MTcwNjA0NDY0Mi4yLjAuMTcwNjA0NDY0Mi4wLjAuMA..">Download for Windows</a>
          </div>
          <img src={gta5Image} alt="GTA 5" />
        </div>

        <div className="bottom">
          <div className="name">
            <h1>Rockstars Games</h1>
          </div>

          <div className="locations">
            <h1>New York</h1>
            <h1>London</h1>
            <h1>Paris</h1>
            <h1>Bogotá</h1>
          </div>

          <div className="socials">
            <a href="https://www.twitch.tv/rockstargames" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
            <a href="https://www.instagram.com/rockstargames" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com/rockstargames" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.youtube.com/rockstargames" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://www.facebook.com/rockstargames" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
