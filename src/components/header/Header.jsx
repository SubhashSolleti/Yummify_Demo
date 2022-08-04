import React, { useRef } from "react";
import { useState } from "react";
import "./header.css";
import logo from "./Yummify1.png";

import { Container } from "reactstrap";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "Menu",
    url: "#",
  },

  {
    display: "Orders",
    url: "#",
  },
  {
    display: "About us",
    url: "#",
  },
  {
    display: "Contact",
    url: "#",
  },
];

const Header = ({ setShow, size }) => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo my_shop" onClick={() => setShow(true)}>
                <img src={logo} alt=''/>
            {/* <h2 className=" d-flex align-items-center gap-1">
            Yummify😋
              <span>
                <i class="ri-restaurant-2-line"></i>
              </span>{" "}
            </h2> */}
          </div>

          <div className="nav__menu " ref={menuRef}>
            <div className="nav__list__wrapper d-flex align-items-center gap-5">
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <a href={item.url} onClick={menuToggle}>
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="menu__right">
                <div className="custom__search ">
                  <input type="text" placeholder="search item...." />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <span className="cart__icon">
              <i class="ri-shopping-basket-line"></i>

              <span className="badge">2</span>
            </span>
          </div> */}
          <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="ri-shopping-basket-line"></i>
          </span>
          <span id="b">{size}</span>
        </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
