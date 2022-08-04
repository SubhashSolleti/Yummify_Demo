import React from "react";
import "./footer.css";
import { Container, Row, Col } from "reactstrap";
import logo from "./Yummify1.png";
import spoon from "./spoon.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bottom">
        <Container>
          <Row>
            <Col lg="12">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <img src={spoon} alt="about_spoon" className="spoon__img" />
              <p>2022 Yummify😋🍴. All Rights reserved</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
