import React from "react";
import { Card, Container } from "react-bootstrap";
import homeImage from "../assets/images/home.jpg";

const Home = () => {
  return (
    <>
      <Card className="bg-dark text-white no_radius" style={{ margin: 0 }}>
        <Card.Img src={`${homeImage}`} alt="Home image" />
        <Card.ImgOverlay>
          <Container>
            <Card.Title style={{ marginTop: 100, fontSize: 60 }}>
              I'M Bimlendu
            </Card.Title>
            <Card.Text>A</Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default Home;
