import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Headers from './Header';
import SlideShow from './SlideShow';
import FAQ from './FAQ';
import Rockstars from './Rockstars';
import Footer from './Footer';
import ScrollToTop from 'react-scroll-to-top';
import LoadingSpinner from '../Loading/Loading';
import '../../scss/MainPage.scss'


const MainPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []); 

  return (
    <>
       <ScrollToTop smooth color="#6f00ff" />
      <Nav />
      {loading ? (
        <LoadingSpinner />
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
