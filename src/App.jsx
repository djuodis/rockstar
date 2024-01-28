// App.jsx
import './scss/style.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rockstars from './components/MainPage/Rockstars';
import About from './components/AboutPage/About';
import Games from './components/GamesPage/Games';
import Videos from './components/VideosPage/Videos';
import GamePage from './components/GamesPage/GamePage'; 
import Login from './components/Registration/Login';
import SignUp from './components/Registration/SignUp';
import MainPage from './components/MainPage/MainPage';
import { Link } from 'react-router-dom';
import logoImage from '../public/assets/logo.png';

// New component for displaying MainPage content
const Home = () => (
  <>
<div className="home">
<img src={logoImage} alt="Logo" />
<div className="buttons">
<Link to="/mainpage" target="_blank">Main</Link>
<Link to="/games" target="_blank">GAMES</Link>
          <a href='https://store.rockstargames.com' target="_blank" rel="noopener noreferrer">STORE</a>
          <a href="https://support.rockstargames.com" target="_blank" rel="noopener noreferrer">SUPPORT</a>
          <Link to="/about" target="_blank">ABOUT</Link>
</div>
          
</div>
    
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route for the root path */}
        <Route path="/" element={<Home />} />
        {/* Add routes for other pages */}
        <Route path="/mainpage" element={<MainPage />} />
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
