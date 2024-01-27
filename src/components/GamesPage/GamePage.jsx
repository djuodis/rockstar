// GamePage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/MainPage/Nav";
import Footer from "../../components/MainPage/Footer";

const GamePage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const gameResponse = await fetch(
          `http://localhost:4000/products/${id}`
        );
        const gameData = await gameResponse.json();
        setGame(gameData);
      } catch (error) {
        console.error("Error fetching game data:", error);
      }

      try {
        const reviewsResponse = await fetch(
          `http://localhost:4000/reviews?productId=${id}`
        );
        const reviewsData = await reviewsResponse.json();
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }

      setLoading(false);
    };

    fetchGame();
  }, [id]);

  return (
    <>
      <Nav />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {reviews.map((review, index) => (
            <div key={index}>
              <div className="game-info">
                <img className="logo" src={review.logo} />
                <div className="game-top">
                  <img src={review.image} />
                  <div className="game-details">
                    <h1>Game Details</h1>
                    <p>{review.description1}</p>
                    <p>{review.description2}</p>
                  </div>
                </div>

                <h2 className="screens">Screens</h2>
                <div className="game-images">
                  <img src={review.gameImage1} />
                  <img src={review.gameImage2} />
                  <img src={review.gameImage3} />
                  <img src={review.gameImage4} />
                </div>

                <table className="specs">
                <h1>Specifications</h1>
                  <tbody>
                    <tr>
                      <th>Developers</th>
                      <td>{review.developer}</td>
                    </tr>
                    <tr>
                      <th>Platforms</th>
                      <td>{review.platform}</td>
                    </tr>
                    <tr>
                      <th>Released</th>
                      <td>{review.released}</td>
                    </tr>
                    <tr>
                      <th>Rating</th>
                      <td><img
                  className="rating"
                  src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
                  alt=""
                /></td>
                    </tr>
                
                  </tbody>
                </table>

              </div>
            </div>
          ))}
        </>
      )}
      <Footer />
    </>
  );
};

export default GamePage;
