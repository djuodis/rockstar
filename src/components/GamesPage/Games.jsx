// Games.jsx
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../../components/MainPage/Nav";
import Footer from "../../components/MainPage/Footer";
import ScrollToTop from "react-scroll-to-top";
const Games = () => {
  const { id } = useParams();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/products");
        const data = await response.json();

        let sortedGames = data.slice();

        if (!id) {
          sortedGames = sortedGames.sort((a, b) => {
            if (sortOrder === "newest") {
              return new Date(b.released) - new Date(a.released);
            } else if (sortOrder === "oldest") {
              return new Date(a.released) - new Date(b.released);
            } else {
              return parseInt(a.id) - parseInt(b.id);
            }
          });
        }

        setGames(sortedGames);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [sortOrder, id]);

  const handleSortChange = (newOrder) => {
    setSortOrder(newOrder);
  };

  return (
    <>
    <ScrollToTop smooth color="#6f00ff" />
      <Nav />
      <div>
        <label>
          Sort by:
          <select value={sortOrder} onChange={(e) => handleSortChange(e.target.value)}>
            <option value="default">Default</option>
            <option value="newest">Newest to Oldest</option>
            <option value="oldest">Oldest to Newest</option>
          </select>
        </label>
      </div>
      <div className="pics">
        {loading ? (
          <p>Loading...</p>
        ) : (
          games.map((game) => (
            <Link  target="_blank" key={game.id} to={`/game/${game.id}`}>
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
