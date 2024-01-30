import './scss/style.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rockstars from './components/MainPage/Rockstars';
import About from './components/AboutPage/About';
import Games from './components/GamesPage/Games';
import GamePage from './components/GamesPage/GamePage'; 
import Login from './components/Registration/Login';
import SignUp from './components/Registration/SignUp';
import MainPage from './components/MainPage/MainPage';
import Home from './components/HomePage/Home';


const HomePage = () => (
  <>

  <Home/>    
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/rockstars" element={<Rockstars />} />
        <Route path="/games" element={<Games />} />
        <Route path="/game/:id" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
