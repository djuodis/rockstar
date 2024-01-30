import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../../public/assets/logo.png';
import Loading from '../Loading';
import { motion } from 'framer-motion'; // Import motion from framer-motion

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
          <motion.div
            className="buttons"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
          >
            <Link to="/mainpage" target="">
              Main
            </Link>
            <Link to="/games" target="">
              GAMES
            </Link>
            <a href='https://store.rockstargames.com' target="_blank" rel="noopener noreferrer">
              STORE
            </a>
            <a href="https://support.rockstargames.com" target="_blank" rel="noopener noreferrer">
              SUPPORT
            </a>
            <Link to="/about" target="">
              ABOUT
            </Link>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Home;
