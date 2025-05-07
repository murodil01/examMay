import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Brand from './components/Brand';
import Cards from './components/Cards';
import Slider from './components/Slider';
import Statistic from './components/Statistic';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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

  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <>
      <Navbar />
      <Brand cart={cart} setCart={setCart} updateQuantity={updateQuantity} />
      <Slider />
      <Cards addToCart={addToCart} />
      <Statistic />
      <Footer />
    </>
  );
}

export default App;

