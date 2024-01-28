import React from 'react'
import Nav from './Nav'
import Headers from './Header'
import SlideShow from './SlideShow'
import FAQ from './FAQ'
import Rockstars from './Rockstars'
import Footer from './Footer'
import ScrollToTop from "react-scroll-to-top";

const MainPage = () => {
  return (
    <>
    <ScrollToTop smooth color="#6f00ff" />
    <Nav/>
    <Headers />
    <SlideShow />
    <Rockstars />
    <FAQ />
    <Footer />
    </>
  )
}

export default MainPage