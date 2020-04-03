import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

const AboutMe = () => {
  return (
    <>
      {" "}
      <Jumbotron>
        <Container fluid="md">
          <Row>
            <Col>1 of 3</Col>
            <Col lg="auto">Variable width content</Col>
            <Col xs lg="2">
              3 of 3
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};

export default AboutMe;
