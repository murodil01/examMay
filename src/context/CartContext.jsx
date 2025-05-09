// context/CartContext.jsx
import React, { createContext, useState, useContext } from "react";

// CartContext yaratish
const CartContext = createContext();

// CartProvider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart, likedItems, setLikedItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook - useCart
export const useCart = () => useContext(CartContext);


/*import React, { createContext, useContext, useState } from "react";
const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};*/
