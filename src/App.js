import "./app.css";
import Header from "./components/header/Header";
import React from "react";
import  { useState } from "react";

import Menu from "./components/MenuCards/menu";
import Cards from "./components/MenuCards/cart";

import HeroSlider from "./components/hero-slider/HeroSlider";
import Yummify_Specials from "./components/YummifySpecials/YummifySpecials";
import Footer from "./components/footer/Footer";



const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };


  return (
    <React.Fragment>
      <Header setShow={setShow} size={cart.length}  />
      <HeroSlider />
      <Yummify_Specials />
 
       {show ? (
         <Menu  handleClick={handleClick} />
        
       ) : (
         <Cards cart={cart} setCart={setCart} handleChange={handleChange} />
       )}
       <Footer />
      
     </React.Fragment>
   );
 };

export default App;
