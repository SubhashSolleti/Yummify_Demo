import "./app.css";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import React, { Fragment } from "react";
import  { useState, useEffect } from "react";

import Amazon from "./components/amazon";
import Cart from "./components/cart";

import HeroSlider from "./components/hero-slider/HeroSlider";
import Yummify_Specials from "./components/YummifySpecials/YummifySpecials";
import Footer from "./components/footer/Footer";
import MenuPack from "./components/menu-pack/MenuPack";


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

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]); Hola This is Kumar Sashank

  return (
    <React.Fragment>
      <Header setShow={setShow} size={cart.length}  />
      <HeroSlider />
      <Yummify_Specials />
      {show ? (
        <Amazon  handleClick={handleClick} />
        
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      <Footer />
      
    </React.Fragment>
  );
};

export default App;
