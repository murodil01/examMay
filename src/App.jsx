import { useState } from 'react'
import Navbar from "./components/Navbar"
import Brand from './components/Brand'
import Slider from './components/Slider'
import Cards from "./components/Cards"
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

export default App
