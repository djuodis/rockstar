import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../../public/assets/logo.png';
import Loading from '../Loading';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a loading delay of 2000 milliseconds (2 seconds)
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="home">
          <img src={logoImage} alt="Logo" />
          <div className="buttons">
            <Link to="/mainpage" target="_blank">
              Main
            </Link>
            <Link to="/games" target="_blank">
              GAMES
            </Link>
            <a href='https://store.rockstargames.com' target="_blank" rel="noopener noreferrer">
              STORE
            </a>
            <a href="https://support.rockstargames.com" target="_blank" rel="noopener noreferrer">
              SUPPORT
            </a>
            <Link to="/about" target="_blank">
              ABOUT
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
