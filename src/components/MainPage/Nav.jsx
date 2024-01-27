import React from 'react';
import { Link } from 'react-router-dom';
import { MdLogin } from "react-icons/md";
import logoImage from '../../../public/assets/logo.png';

const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logoImage} alt="Logo" />
          </Link>
        </div>
        <div className="links">
          <Link to="/about">ABOUT</Link>
          <Link to="/games">GAMES</Link>
          <a href='https://store.rockstargames.com' target="_blank" rel="noopener noreferrer">STORE</a>
          <a href="https://support.rockstargames.com" target="_blank" rel="noopener noreferrer">SUPPORT</a>
          <Link to="/login" target="_blank"><MdLogin /></Link>
          <Link to="/signup" target="_blank"><MdLogin /></Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
