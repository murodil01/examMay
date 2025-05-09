import React from "react";
import { useCart } from "../context/CartContext"; // useCart hook

const Cards = ({ products }) => {
  const { likedItems, setLikedItems } = useCart();

  const toggleLike = (product) => {
    setLikedItems((prev) => {
      const alreadyLiked = prev.some((item) => item.id === product.id);
      if (alreadyLiked) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <button onClick={() => toggleLike(product)}>Like</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
