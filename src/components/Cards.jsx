import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heart, ShoppingCart } from "lucide-react";

const Cards = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://681a861e17018fe505780e94.mockapi.io/ZonShop/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Xatolik yuz berdi");
        setLoading(false);
      });
  }, []);

  const toggleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (loading) return <p className="text-center mt-10">Yuklanmoqda...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="max-w-[1200px] mx-auto mt-10">
      <h1 className="font-medium text-[24.8px] tracking-[0.53px] mb-6">
        Популярные
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border relative shadow-sm hover:shadow-md transition duration-300 p-3 rounded"
          >
            <button
              onClick={() => toggleLike(product.id)}
              className="absolute top-3 right-3 z-10"
            >
              <Heart
                size={22}
                className={
                  liked[product.id]
                    ? "text-red-500 fill-red-500"
                    : "text-gray-400"
                }
              />
            </button>

            <button
              className="absolute bottom-3 right-3 z-10 bg-black text-white p-2 rounded-full"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart size={22} />
            </button>

            <img
              src={product.img}
              alt={product.name}
              className="w-full h-[300px] object-cover rounded"
            />

            <h2 className="text-[17px] font-semibold mt-3">{product.name}</h2>

            <div className="flex items-center gap-2 mt-2">
              {product.discountPrice ? (
                <>
                  <span className="text-gray-500 line-through">
                    {product.price}₽
                  </span>
                  <span className="text-red-500 font-bold">
                    {product.discountPrice}₽
                  </span>
                </>
              ) : (
                <span className="text-black font-medium">{product.price}₽</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;




/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { Heart, ShoppingCart } from "lucide-react";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://681a861e17018fe505780e94.mockapi.io/ZonShop/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Xatolik yuz berdi");
        setLoading(false);
      });
  }, []);

  const toggleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (loading) return <p className="text-center mt-10">Yuklanmoqda...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="max-w-[1200px] mx-auto mt-10">
      <h1 className="font-medium text-[24.8px] tracking-[0.53px] mb-6">
        Популярные
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border relative shadow-sm hover:shadow-md transition duration-300 p-3 rounded"
          >
            <button
              onClick={() => toggleLike(product.id)}
              className="absolute top-3 right-3 z-10"
            >
              <Heart
                size={22}
                className={
                  liked[product.id]
                    ? "text-red-500 fill-red-500"
                    : "text-gray-400"
                }
              />
            </button>

            <button className="absolute bottom-3 right-3 z-10 bg-black text-white p-2 rounded-full">
              <ShoppingCart size={22} />
            </button>

            <img
              src={product.img}
              alt={product.name}
              className="w-full h-[300px] object-cover rounded"
            />

            <h2 className="text-[17px] font-semibold mt-3">{product.name}</h2>

            <div className="flex items-center gap-2 mt-2">
              {product.discountPrice ? (
                <>
                  <span className="text-gray-500 line-through">
                    {product.price}₽
                  </span>
                  <span className="text-red-500 font-bold">
                    {product.discountPrice}₽
                  </span>
                </>
              ) : (
                <span className="text-black font-medium">{product.price}₽</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;*/
