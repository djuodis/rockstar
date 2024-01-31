import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../../components/MainPage/Nav";
import Footer from "../../components/MainPage/Footer";
import ScrollToTop from "react-scroll-to-top";
import Loading from "../Loading/Loading"; 
import { motion } from "framer-motion";
import { Error404 } from "../ErrorPage/Error404";
import '../../scss/Games.scss'

const Games = () => {
  const { id } = useParams();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("default");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        const response = await fetch("http://localhost:4000/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

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
        setError(error);
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
      {loading ? (
        <Loading />
      ) : error ? ( 
        <Error404 />
      ) : (
        <>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="sort">
              <motion.label
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p>Sort by:</p>
                <select value={sortOrder} onChange={(e) => handleSortChange(e.target.value)}>
                  <option value="default">Default</option>
                  <option value="newest">Newest to Oldest</option>
                  <option value="oldest">Oldest to Newest</option>
                </select>
              </motion.label>
            </div>
            <motion.div
              className="pics"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {games.map((game) => (
                <Link target="_blank" key={game.id} to={`/game/${game.id}`}>
                  <motion.img
                    className="card-img"
                    src={game.image}
                    alt={game.title}
                    whileHover={{ scale: 1.1 }}
                  />
                </Link>
              ))}
            </motion.div>
          </motion.div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Games;
