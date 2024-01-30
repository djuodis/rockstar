import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Headers from './Header';
import SlideShow from './SlideShow';
import FAQ from './FAQ';
import Rockstars from './Rockstars';
import Footer from './Footer';
import ScrollToTop from 'react-scroll-to-top';
import LoadingSpinner from '../Loading'; // Import your loading spinner component

const MainPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you can replace this with actual data fetching logic)
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup timeout to prevent memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
       <ScrollToTop smooth color="#6f00ff" />
      <Nav />
      {loading ? (
        <LoadingSpinner /> // Display loading spinner while data is being loaded
      ) : (
        <>
          <Headers />
          <SlideShow />
          <Rockstars />
          <FAQ />
          <Footer />
        </>
      )}
    </>
  );
};

export default MainPage;
