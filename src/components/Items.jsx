import React, { useEffect, useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

const Items = ({ addToCart, likedItems, toggleLike }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://681a861e17018fe505780e94.mockapi.io/ZonShop/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto my-[15px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="relative border rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
        >
          <img
            src={item.img || "https://via.placeholder.com/300x300?text=No+Image"}
            alt={item.name}
            className="w-full h-[300px] object-cover rounded-md"
          />
          <div className="mt-2">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">
              ${parseFloat(item.price).toLocaleString()}
            </p>
          </div>

          <div className="absolute top-2 right-2 flex gap-2">
            <button onClick={() => toggleLike(item)}>
              <Heart
                className={`w-5 h-5 ${
                  likedItems.some((liked) => liked.id === item.id)
                    ? "text-red-500 fill-red-500"
                    : "text-gray-400"
                }`}
              />
            </button>
          </div>

          <div className="absolute bottom-2 right-2">
            <button onClick={() => addToCart(item)}>
              <ShoppingCart className="w-5 h-5 text-gray-500 hover:text-black" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;




/*import React, { useEffect, useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const Items = ({ addToCart, likedItems, toggleLike }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://681a861e17018fe505780e94.mockapi.io/ZonShop/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('API error:', err));
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto my-[15px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="relative border rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-[300px] object-cover rounded-md"
          />
          <div className="mt-2">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">${item.price}</p>
          </div>

          <div className="absolute top-2 right-2 flex gap-2">
            <button onClick={() => toggleLike(item)}>
              <Heart
                className={`w-5 h-5 ${
                  likedItems.some((liked) => liked.id === item.id)
                    ? 'text-red-500 fill-red-500'
                    : 'text-gray-400'
                }`}
              />
            </button>
          </div>

          <div className="absolute bottom-2 right-2">
            <button onClick={() => addToCart(item)}>
              <ShoppingCart className="w-5 h-5 text-gray-500 hover:text-black" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;*/