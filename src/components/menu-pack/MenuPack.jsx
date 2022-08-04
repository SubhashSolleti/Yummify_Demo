import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";

import ProductCard from "../product-card/ProductCard";
import Cards_2 from "../card_2";
import {
  fastFoodProducts,
  riceMenuProducts,
  startersProducts,
  dessertProducts,
} from "../../assets/fake-data/products";
import "./menu-pack.css";

const MenuPack = () => {
  const [filter, setFilter] = useState("Starters");
  const [products, setProducts] = useState(riceMenuProducts);

  useEffect(() => {
    if (filter === "RICE-MENU") {
      setProducts(riceMenuProducts);
    }
    if (filter === "FAST-FOOD") {
      setProducts(fastFoodProducts);
    }

    if (filter === "Starters") {
      setProducts(startersProducts);
    }

    if (filter === "DESSERT") {
      setProducts(dessertProducts);
    }
  }, [filter]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h3 className="menu__title">Yummify Menu🍽️</h3>
          </Col>
          <Col lg="12" className="text-center mb-5">
          <button
              className={`filter-btn ${
                filter === "Starters" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("Starters")}
            >
              Starters
            </button>
            <button
              className={`filter-btn ${
                filter === "FAST-FOOD" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("FAST-FOOD")}
            >
              Fast Food
            </button>
            <button
              className={`filter-btn ${
                filter === "RICE-MENU" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("RICE-MENU")}
            >
              Rice Menu
            </button>
            
            <button
              className={`filter-btn ${
                filter === "DESSERT" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("DESSERT")}
            >
              Desserts
            </button>
          </Col>

          {products.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
              {" "}
              {/* <ProductCard item={item} /> */}
              <Cards_2 item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuPack;
