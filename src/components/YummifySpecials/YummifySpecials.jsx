import React from "react";

import { Container, Row, Col } from "reactstrap";
import { YummifySpecials } from "../../assets/fake-data/products";
import ProductCard from "../product-card/ProductCard";
import "./YummifySpecials.css";

const Yummify_Specials = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2 className="YummifySpecials-title">Yummify Specials 😋🍴</h2>
          </Col>

          {YummifySpecials.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Yummify_Specials;
