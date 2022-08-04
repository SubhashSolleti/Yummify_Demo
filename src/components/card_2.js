import React from "react";

const Cards_2 = ({ item, handleClick }) => {
  const { title, imgUrl, price } = item;
  return (
    <div className="single__product">
      <div className="product__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="product__content">
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

        <h6>{title}</h6>

        <div className=" d-flex align-items-center justify-content-between">
          <span className="price d-flex align-items-center">
            {" "}
            Price: $<span>{price}</span>
          </span>
          {/* <span className="shopping__icon"> */}
          <button onClick={() => handleClick(item)}>Add to Cart</button>
            {/* <i class="ri-shopping-cart-line" onClick={() => handleClick(props.item)}></i> */}
          {/* </span> */}
        </div>
      </div>
    </div>
  );
};

export default Cards_2;
// id, title, autor, price, img
