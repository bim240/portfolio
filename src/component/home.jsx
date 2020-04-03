import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Jumbotron } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

import homeImage from "../assets/images/home.jpg";

const Home = () => {
  return (
    <>
      <section className="home_section parallex">
        <Card className="bg-dark text-white no_radius flex">
          <Card.ImgOverlay>
            <Container>
              <Card.Title className="margin_top">
                <h2>I'M Bimlendu</h2>
              </Card.Title>
              <Card.Text>A Full Stack Developer</Card.Text>
              <Card.Text>
                A profession that completely matches your talent, aspirations
                and
                <br />
                skills is the best profession you can choose.
              </Card.Text>
              <div className="mt-4">
                <a
                  className="link_icon mr-3"
                  href="https://www.facebook.com/bim240"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  className="link_icon mr-3"
                  href="https://twitter.com/bim240"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitter />
                </a>
                <a
                  className="link_icon mr-3"
                  href="https://github.com/bim240"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="link_icon mr-3"
                  href="https://www.linkedin.com/in/bim240/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </Container>
          </Card.ImgOverlay>
        </Card>
        ;
      </section>
    </>
  );
};

export default Home;
