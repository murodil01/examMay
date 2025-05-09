import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Brand from "./components/Brand";
import Items from "./components/Items";
import Slider from "./components/Slider";
import Statistic from "./components/Statistic";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [likedItems, setLikedItems] = useState(() => {
    const savedLikedItems = localStorage.getItem("likedItems");
    return savedLikedItems ? JSON.parse(savedLikedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }, [likedItems]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const toggleLike = (product) => {
    setLikedItems((prev) => {
      const isLiked = prev.some((item) => item.id === product.id);
      if (isLiked) {
        // Agar mahsulot allaqachon yoqqan bo'lsa, uni olib tashlaymiz
        return prev.filter((item) => item.id !== product.id);
      } else {
        // Agar mahsulot hali yoqilmagan bo'lsa, uni qo'shamiz
        return [...prev, product];
      }
    });
  };

  return (
    <>
      <Navbar />
      <Brand
        cart={cart}
        setCart={setCart}
        likedItems={likedItems}
        setLikedItems={setLikedItems}
        toggleLike={toggleLike} 
      />
      <Slider />
      <Items addToCart={addToCart} likedItems={likedItems} toggleLike={toggleLike} />
      <Statistic />
      <Footer />
    </>
  );
}

export default App;