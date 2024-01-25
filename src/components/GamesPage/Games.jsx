// Games.jsx
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/MainPage/Nav";
import Footer from "../../components/MainPage/Footer";

const Games = () => {
  return (
    <>
      <Nav />
      <div className="pics">
        <Link to="/game/gta5">
          <img
            className="card"
            src="https://m.media-amazon.com/images/M/MV5BYjEzMTM4ZmQtZTEzYS00ZGVmLTkwM2EtNWNmMDI4OWQ0MjBmXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg"
            alt="GTA 5"
          />
        </Link>
        <Link to="/game/gtaOnline">
          <img
            className="card"
            src="https://m.media-amazon.com/images/M/MV5BN2I3NjZmN2YtNGQ0Yi00ZWUwLThlMGQtOWI4YmMxMTA1YTQyXkEyXkFqcGdeQXVyMTU0NTQxNTM4._V1_FMjpg_UX1000_.jpg"
            alt="GTA Online"
          />
        </Link>
        <Link to="/game/gta4">
          <img
            className="card"
            src="https://m.media-amazon.com/images/M/MV5BYThjZGVhMzktZjRlNS00NTcwLTk4ZjktMWUzMmU3MTM4YThmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg"
            alt=""
          />
        </Link>

        <Link to="/game/rdr2">
          <img
            className="card"
            src="https://m.media-amazon.com/images/M/MV5BMjMyZDY5NTctMzQ0Ny00ZTU0LWE1ZDYtNDYzMjAxYjA1ZGYxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
        </Link>

        <Link to="/game/rdrOnline">
          <img
            className="card"
            src="https://m.media-amazon.com/images/M/MV5BMmQ2YWQzN2ItZDU5OC00YjYwLThiYzEtMjNhNWY3MmI1YTEyXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
        </Link>

        <Link to="/game/rdr1">
          <img
            className="card"
            src="https://m.media-amazon.com/images/M/MV5BODQ1YzU4MmMtYmE0YS00NTRjLWE4YWMtZWNiNzM4M2ZkMzcxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
        </Link>

        <Link to="/game/bully">
          <img
            className="card"
            src="https://m.media-amazon.com/images/M/MV5BYTQ5NWM4ZDgtZTFhZS00YzQwLWI5OWMtZjVlYTdhZGM4ZGNiXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
        </Link>

        <Link to="/game/laNoire">
          <img
            className="card"
            src="https://m.media-amazon.com/images/M/MV5BNWVkOGQ4NzMtY2Q2OS00OTcwLTlmMGEtMmE2MDc0NDEyY2RjXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
        </Link>

        <Link to="/game/maxPayne3">
          <img
            className="card"
            src="https://m.media-amazon.com/images/M/MV5BNzQyNTM0YTctZjZhYi00MDg5LWE0ZWMtODcyMmJiNzY3NGZhXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
        </Link>

        <Link to="/game/viceCity">
          <img
            className="card"
            src="https://m.media-amazon.com/images/M/MV5BMzdkMTM3ODEtZjFkNi00NzFiLTgxMTEtZWZlMDJmMzkyODNiXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
        </Link>

        <Link to="/game/gta3">
          <img
            className="card"
            src="https://m.media-amazon.com/images/M/MV5BNjhlMmM5YmYtMWFkNS00MzJkLWI0MTAtODU1OWY2YTI4MTA1XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
        </Link>

        <Link to="/game/gtaSa">
          <img
            className="card"
            src="https://m.media-amazon.com/images/M/MV5BN2NmOWZmM2EtZGI1Yi00ZDYxLTkxODEtOTMwNmQ0M2IxOWZiXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
        </Link>

        <Link to="/game/maxPayne2">
          <img
            className="card"
            src="https://m.media-amazon.com/images/M/MV5BMmMyYWU4ZTEtY2ViOC00YTQ4LWJmOGQtMTMxYWM2OTViY2JmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
        </Link>

        <Link to="/game/gtaEpisodesFromLibertyCirty">
          <img
            className="card"
            src="https://m.media-amazon.com/images/M/MV5BZDQ3OGY2MjItMDlmYi00YWM2LWE2YWYtMDgyZTg5YjZhODljXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
        </Link>

        <Link to="/game/gtaChinatownWars">
          <img
            className="card"
            src="https://m.media-amazon.com/images/M/MV5BNTEyYmIzYmYtYzk4Mi00OTVhLTg2NDItMjljMDdhMzFmZDg4XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Games;
