import React, { Fragment } from "react";
import  { useState, useEffect } from "react";

import Amazon from "../components/amazon";
import Cart from "../components/cart";


import Header from "../components/header/Header";
import HeroSlider from "../components/hero-slider/HeroSlider";
import Yummify_Specials from "../components/YummifySpecials/YummifySpecials";
import MenuPack from "../components/menu-pack/MenuPack";
import Footer from "../components/footer/Footer";

const Home = () => {

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
    <Fragment>
      <HeroSlider />
      <Yummify_Specials />
      <MenuPack />
      <Footer />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </Fragment>
  );
};

export default Home;
