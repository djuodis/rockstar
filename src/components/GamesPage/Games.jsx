// Games.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/MainPage/Nav";
import Footer from "../../components/MainPage/Footer";

const Games = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="pics">
        {loading ? (
          <p>Loading...</p>
        ) : (
          games.map((game) => (
            <Link key={game.id} to={`/game/${game.id}`}>
                <img className="card-img" src={game.image} alt={game.title} />
            </Link>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default Games;