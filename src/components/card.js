import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, price, img } = item;
  return (
    <div className="cards">
        <div className="image_box">
          <img src={img} alt="" />
        </div>
      
      <div className="product__content">
      <h6>{title}</h6>
          <div className="rating text-center">
            <span>
              <i class="ri-star-s-fill"></i>
            </span>
            <span>
              <i class="ri-star-s-fill"></i>
            </span>
            <span>
              <i class="ri-star-s-fill"></i>
            </span>
            <span>
              <i class="ri-star-s-fill"></i>
            </span>
            <span>
              <i class="ri-star-s-fill"></i>
            </span>
          </div>
        <div className=" d-flex align-items-center justify-content-between">
          <span className="price d-flex align-items-center">
            {" "}
            Price: $<span>{price}</span>
          </span>
        <button onClick={() => handleClick(item)}><span className="shopping__icon">
            <i class="ri-shopping-cart-line"></i>
          </span></button>
      </div>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
