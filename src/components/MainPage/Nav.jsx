// Nav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdLogin } from "react-icons/md";
import logoImage from '../../../public/assets/logo.png';

const Nav = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logoImage} alt="Logo" />
          </Link>
        </div>
        <div className="links">
          <Link to="/mainpage">Main</Link>
          <Link to="/games">GAMES</Link>
          <a href='https://store.rockstargames.com' target="_blank" rel="noopener noreferrer">STORE</a>
          <a href="https://support.rockstargames.com" target="_blank" rel="noopener noreferrer">SUPPORT</a>
          <Link to="/about">ABOUT</Link>

          {loggedInUser ? (
            <>
              <span>{loggedInUser.firstName}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" target="_blank"><MdLogin /> Login</Link>
              <Link to="/signup" target="_blank"><MdLogin /> Sign Up</Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Nav;
