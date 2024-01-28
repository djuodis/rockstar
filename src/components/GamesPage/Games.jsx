// Games.jsx
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../../components/MainPage/Nav";
import Footer from "../../components/MainPage/Footer";

const Games = () => {
  const { id } = useParams();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/products");
        const data = await response.json();

        let sortedGames = data.slice();

        if (!id) {
          // Sort only when viewing all games
          sortedGames = sortedGames.sort((a, b) => {
            const dateA = new Date(a.released);
            const dateB = new Date(b.released);

            return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
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
      <Nav />
      <div>
        <label>
          Sort by Release Date:
          <select value={sortOrder} onChange={(e) => handleSortChange(e.target.value)}>
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
