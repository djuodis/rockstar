import React, { useState } from 'react';
import Header from "./components/Header";
import Nav from "./components/Nav";
import SlideShow from "./components/SlideShow";
import "./scss/style.scss";

function App() {
  const [expandedQuestions, setExpandedQuestions] = useState([]);

  const toggleAnswer = (id) => {
    if (expandedQuestions.includes(id)) {
      setExpandedQuestions(expandedQuestions.filter((q) => q !== id));
    } else {
      setExpandedQuestions([...expandedQuestions, id]);
    }
  };

  return (
    <>
      <Nav />
      <Header />
      <SlideShow />

      <div className="rg">
        <div className="name">
          <h2>ROCKSTAR</h2>
          <h2>GAME</h2>
        </div>

        <div className="parahraps">
          <div className="parahraph1">
            <h4>Philosophy</h4>
            <p>
              When we started, the core idea was that we will make games that we
              want to play. Games that had progressive gameplay on the one hand
              and cinematic production values.
            </p>
          </div>
          <div className="parahraph2">
            <h4>Play it</h4>
            <p>
              Our games up to now have been different from any genre that
              existed at the time; we made new genres by ourselves. We didn't
              rely on testimonials in a business textbook to do what we've done.
            </p>
          </div>
        </div>
      </div>

      <div className="gameLauncher">
        <div className="info">
        <h2>ROCKSTAR GAME LAUNCHER</h2>
        <p>Download and play the latest PC games from Rockstar Games</p>
        <a href="https://gamedownloads.rockstargames.com/public/installer/Rockstar-Games-Launcher.exe?_gl=1*1wls5hk*_ga*MjE0NTY4MzM0MC4xNzA2MDI5OTQw*_ga_PJQ2JYZDQC*MTcwNjA0NDY0Mi4yLjAuMTcwNjA0NDY0Mi4wLjAuMA..">Download for Windows</a>
        </div>
        <img src="./assets/gta5.png" alt="" />
      </div>

      <div className="faq">
        <div className="name">
          <h2>SOCIAL CLUB FAQ</h2>
        </div>
        <div className="questions">

        <div className="q1">
          <h4 onClick={() => toggleAnswer(1)}>What it is?</h4>
          <p
            id="answer-1"
            className={`answer ${expandedQuestions.includes(1) ? 'show' : ''}`}
          >
            Join the Social Club! With over 100 million members worldwide, our
            official platform will help you get the most out of your Rockstar
            Games games.
          </p>
          <hr/>

        </div>
        <div className="q2">
          <h4 onClick={() => toggleAnswer(2)}>How to verify my mail?</h4>
          <p
            id="answer-2"
            className={`answer ${expandedQuestions.includes(2) ? 'show' : ''}`}
          >
            When you sign up for a Rockstar Games account, you will receive an email with a link to click in order to verify your account. Verifying your account makes you eligible for certain promotions and allows you to create a Crew.
          </p>
          <hr/>

        </div>
        <div className="q3">
          <h4 onClick={() => toggleAnswer(3)}>What platforms does Social Club work on?</h4>
          <p
            id="answer-3"
            className={`answer ${expandedQuestions.includes(3) ? 'show' : ''}`}
          >
            Social Club works only on PC.
          </p>
          <hr/>

        </div>
       
        
        <div className="q6">
          <h4 onClick={() => toggleAnswer(6)}>How to Request the Deletion of Personal Information?</h4>
          <p
            id="answer-6"
            className={`answer ${expandedQuestions.includes(6) ? 'show' : ''}`}
          >
            If you wish to delete your personal information, you can do so by requesting a Rockstar Games account Deletion using the Delete Account and Information option at the following URL:
            <a href="https://support.rockstargames.com/account/
">https://support.rockstargames.com/account/
</a>
          </p>
          <hr/>

        </div>
      </div>
    </div>
    </>
  );
}


export default App;
