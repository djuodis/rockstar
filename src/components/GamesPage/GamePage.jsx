import React, { useEffect, useState } from 'react';
import Nav from "../../components/MainPage/Nav";
import Footer from "../../components/MainPage/Footer";

const GamePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <Nav />
      <h1>Games</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>Platforms: {product.platforms}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
}

export default GamePage;
