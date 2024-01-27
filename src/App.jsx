// App.jsx
import './scss/style.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/MainPage/Header';
import Nav from './components/MainPage/Nav';
import SlideShow from './components/MainPage/SlideShow';
import Footer from './components/MainPage/Footer';
import FAQ from './components/MainPage/FAQ';
import Rockstars from './components/MainPage/Rockstars';
import About from './components/AboutPage/About';
import Games from './components/GamesPage/Games';
import Videos from './components/VideosPage/Videos';
import GamePage from './components/GamesPage/GamePage'; 
import Login from './components/Registration/Login';
import SignUp from './components/Registration/SignUp';


// New component for displaying MainPage content
const Home = () => (
  <>
    <Nav />
    <Header />
    <SlideShow />
    <FAQ />
    <Rockstars />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route for the root path */}
        <Route path="/" element={<Home />} />
        {/* Add routes for other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/rockstars" element={<Rockstars />} />
        <Route path="/games" element={<Games />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/game/:id" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
