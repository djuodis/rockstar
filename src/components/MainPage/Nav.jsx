import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo">
        <Link to="/">
          <img src="./assets/logo.png" alt="" />
          </Link>
        </div>
        <div className="links">
          <Link to="/about">ABOUT</Link>
          <Link to="/games">GAMES</Link>
          <Link to="/videos">VIDEOS</Link>
          <a href='https://store.rockstargames.com' target="_blank" rel="noopener noreferrer">STORE</a>
          <a href="https://support.rockstargames.com" target="_blank" rel="noopener noreferrer">SUPPORT</a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
