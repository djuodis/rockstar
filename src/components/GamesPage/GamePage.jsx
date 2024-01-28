import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/MainPage/Nav";
import Footer from "../../components/MainPage/Footer";
import ScrollToTop from "react-scroll-to-top";

const GamePage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [game_info, setgame_info] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingReviewId, setEditingReviewId] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const gameResponse = await fetch(`http://localhost:4000/products/${id}`);
        const gameData = await gameResponse.json();
        setGame(gameData);
      } catch (error) {
        console.error("Error fetching game data:", error);
      }

      try {
        const game_infoResponse = await fetch(`http://localhost:4000/game_info?productId=${id}`);
        const game_infoData = await game_infoResponse.json();
        setgame_info(game_infoData);
      } catch (error) {
        console.error("Error fetching game_info:", error);
      }

      try {
        const reviewsResponse = await fetch(`http://localhost:4000/reviews?productId=${id}`);
        const reviewsData = await reviewsResponse.json();
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }

      setLoading(false);
    };

    fetchGame();
  }, [id]);

  const editReview = async (editedReview) => {
    try {
      await fetch(`http://localhost:4000/reviews/${editedReview.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedReview),
      });

      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review.id === editedReview.id ? { ...review, ...editedReview } : review
        )
      );

      // Exit editing mode after a successful edit
      setEditingReviewId(null);
    } catch (error) {
      console.error('Error editing review:', error);
    }
  };

  const deleteReview = async (reviewId) => {
    try {
      // Delete review from API
      await fetch(`http://localhost:4000/reviews/${reviewId}`, {
        method: 'DELETE',
      });

      // Update state to remove the deleted review
      setReviews((prevReviews) => prevReviews.filter((review) => review.id !== reviewId));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const startEditing = (reviewId) => {
    setEditingReviewId(reviewId);
  };

  const cancelEditing = () => {
    setEditingReviewId(null);
  };

  return (
    <>
      <ScrollToTop smooth color="#6f00ff" />
      <Nav />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {game_info.map((review, index) => (
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

                <div className="reviews">
                  <h1>Reviews</h1>
                  <div className="cards">
                    {reviews.map((review) => (
                      <div className="card" key={review.id}>
                        {editingReviewId === review.id ? (
                          // Edit form for the selected review
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              const editedReview = {
                                id: review.id,
                                title: e.target.title.value,
                                username: e.target.username.value,
                                rating: e.target.rating.value,
                                userComment: e.target.userComment.value,
                              };
                              editReview(editedReview);
                            }}
                          >
                            <label>Title:</label>
                            <input type="text" name="title" defaultValue={review.title} />
                            <label>Username:</label>
                            <input type="text" name="username" defaultValue={review.username} />
                            <label>Rating:</label>
                            <input type="number" name="rating" defaultValue={review.rating} />
                            <label>Comment:</label>
                            <textarea name="userComment" defaultValue={review.userComment} />
                            <button type="submit">Save Changes</button>
                            <button type="button" onClick={cancelEditing}>
                              Cancel
                            </button>
                          </form>
                        ) : (
                          // Display existing review content with "Edit" and "Delete" buttons
                          <>
                            <h2>{review.title}</h2>
                            <p>{review.username}</p>
                            <p>{review.rating}</p>
                            <p>{review.userComment}</p>
                            <button type="button" onClick={() => startEditing(review.id)}>
                              Edit
                            </button>
                            <button type="button" onClick={() => deleteReview(review.id)}>
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
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
                      <td>
                        <img
                          className="rating"
                          src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
                          alt=""
                        />
                      </td>
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
