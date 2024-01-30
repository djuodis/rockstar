import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/MainPage/Nav";
import Footer from "../../components/MainPage/Footer";
import ScrollToTop from "react-scroll-to-top";
import Loading from "../Loading";

const GamePage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [game_info, setgame_info] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const gameResponse = await fetch(`http://localhost:4000/products/${id}`);
        const gameData = await gameResponse.json();
        setGame(gameData);

        const game_infoResponse = await fetch(`http://localhost:4000/game_info?productId=${id}`);
        const game_infoData = await game_infoResponse.json();
        setgame_info(game_infoData);

        const reviewsResponse = await fetch(`http://localhost:4000/reviews?productId=${id}`);

        if (!reviewsResponse.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const reviewsData = await reviewsResponse.json();
        const reviewsArray = Array.isArray(reviewsData) ? reviewsData : [];
        const parsedReviews = reviewsArray.map(review => ({
          ...review,
          id: parseInt(review.id),
          productId: parseInt(review.productId)
        }));

        setReviews(parsedReviews);
      } catch (error) {
        console.error("Error fetching game data:", error);
      }

      setLoading(false);
    };

    fetchGame();
  }, [id]);

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const response = await fetch('http://localhost:4000/loggedIn');
        if (response.ok) {
          const users = await response.json();

          if (users.length > 0) {
            setLoggedInUser(users[0]);
          } else {
            setLoggedInUser(null);
          }
        } else {
          console.error('Error fetching logged-in user:', response.statusText);
          setLoggedInUser(null);
        }
      } catch (error) {
        console.error('Error fetching logged-in user:', error.message);
        setLoggedInUser(null);
      }
    };

    fetchLoggedInUser();
  }, []);

  const submitNewReview = async (newReview) => {
    try {
      const loggedInResponse = await fetch('http://localhost:4000/loggedIn');
      const loggedInUser = await loggedInResponse.json();
  
      if (!loggedInUser || !loggedInUser.userId) {
        alert('Please Login  to post your review.');
        return;
      }
  
      newReview.userId = loggedInUser.userId;
      newReview.username = loggedInUser.username;
  
      const response = await fetch('http://localhost:4000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
      });
  
      if (response.ok) {
        const createdReview = await response.json();
        setReviews((prevReviews) => [...prevReviews, createdReview]);
      } else {
        console.error('Failed to add a new review:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding a new review:', error.message);
    }
  };
  

  const startEditing = (reviewId) => {
    const reviewToEdit = reviews.find((review) => review.id === reviewId);

    if (loggedInUser && reviewToEdit && loggedInUser.userId === reviewToEdit.userId) {
      setEditingReviewId(reviewId);
    } else {
      alert('You can only edit the card that you created yourself.');
    }
  };

  const editReview = async (editedReview) => {
    try {
      const originalReview = reviews.find((review) => review.id === editedReview.id);

      if (!originalReview) {
        console.error("Original review not found for editing.");
        return;
      }

      const updatedReview = {
        ...editedReview,
        productId: originalReview.productId,
      };

      await fetch(`http://localhost:4000/reviews/${editedReview.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedReview),
      });

      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review.id === editedReview.id ? updatedReview : review
        )
      );

      setEditingReviewId(null);
    } catch (error) {
      console.error("Error editing review:", error);
    }
  };

  const deleteReview = async (reviewId) => {
    try {
      await fetch(`http://localhost:4000/reviews/${reviewId}`, {
        method: "DELETE",
      });

      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.id !== reviewId)
      );
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  const cancelEditing = () => {
    setEditingReviewId(null);
  };

  return (
    <>
      <ScrollToTop smooth color="#6f00ff" />
      <Nav />

      {loading ? (
        <Loading />
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

                <div className="addReview">
                  <h1>Add Review</h1>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const newReview = {
                        title: e.target.title.value,
                        userComment: e.target.userComment.value,
                        productId: id,
                      };
                      submitNewReview(newReview);
                    }}
                  >
                    <label>Title:</label>
                    <input type="text" name="title" />
                    <label>Comment:</label>
                    <textarea name="userComment" />
                    <button type="submit">Submit Review</button>
                  </form>
                </div>

                <div className="reviews">
                  <h1>Reviews</h1>
                  <div className="cards">
                    {reviews.map((review) => (
                      <div className="card" key={review.id}>
                        {editingReviewId === review.id ? (
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              const editedReview = {
                                id: review.id,
                                title: e.target.title.value,
                                username: e.target.username.value,
                                userComment: e.target.userComment.value,
                              };
                              editReview(editedReview);
                            }}
                          >
                            <label>Title:</label>
                            <input
                              type="text"
                              name="title"
                              defaultValue={review.title}
                            />
                            <label>Username:</label>
                            <input
                              type="text"
                              name="username"
                              defaultValue={review.username}
                            />
                            <label>Comment:</label>
                            <textarea
                              name="userComment"
                              defaultValue={review.userComment}
                            />
                            <button type="submit">Save Changes</button>
                            <button type="button" onClick={cancelEditing}>
                              Cancel
                            </button>
                          </form>
                        ) : (
                          <>
                            <h2>{review.title}</h2>
                            <p>{loggedInUser && loggedInUser.userId === review.userId ? 'You' : review.username}</p>
                            <p>{review.rating}</p>
                            <p>{review.userComment}</p>
                            {loggedInUser && loggedInUser.userId === review.userId && (
                              <>
                                <button
                                  type="button"
                                  onClick={() => startEditing(review.id)}
                                >
                                  Edit
                                </button>
                                <button
                                  type="button"
                                  onClick={() => deleteReview(review.id)}
                                >
                                  Delete
                                </button>
                              </>
                            )}
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
