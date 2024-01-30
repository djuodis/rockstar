// Nav.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../../public/assets/logo.png';

const Nav = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const response = await fetch('http://localhost:4000/loggedIn');
        if (response.ok) {
          const users = await response.json();

          if (users.length > 0) {
            setLoggedInUser(users[0]);
          } else {
            setLoggedInUser(null);
          }
        } else {
          console.error('Error fetching logged-in user:', response.statusText);
          setLoggedInUser(null);
        }
      } catch (error) {
        console.error('Error fetching logged-in user:', error.message);
        setLoggedInUser(null);
      }
    };

    fetchLoggedInUser();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch(`http://localhost:4000/loggedIn/${loggedInUser.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Logout successful');
        setLoggedInUser(null);
        // Reload the page after successful logout
        window.location.reload();
      } else {
        console.error('Error logging out:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
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
              <div className="loggedInUser">
                <span style={{ color: 'white' }}>{loggedInUser.username}</span>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav