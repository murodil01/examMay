import { useState } from 'react';
import Navbar from './components/Navbar';
import Brand from './components/Brand';
import Cards from './components/Cards';
import Slider from './components/Slider';
import Statistic from './components/Statistic';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prev) => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  return (
    <>
      <Navbar />
      <Brand cart={cart} />
      <Slider />
      <Cards addToCart={addToCart} />
      <Statistic />
      <Footer />
    </>
  );
}

export default App;



/*import { useState } from 'react'
import Navbar from "./components/Navbar"
import Brand from './components/Brand'
import Cards from "./components/Cards"
import Slider from './components/Slider'
import Statistic from './components/Statistic'
import Footer from "./components/Footer"
function App() {

  return (
    <>
    <Navbar/>
    <Brand/>
    <Slider/>
    <Cards/>
    <Statistic/>
    <Footer/>
    </>
  )
}

export default App*/
