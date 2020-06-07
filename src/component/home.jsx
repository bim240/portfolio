import React from "react";
import QueueAnim from "rc-queue-anim";
// import { Link } from "react-router-dom";
import Typical from "react-typical";
import { Card, Container } from "react-bootstrap";
import { FaTwitter, FaGithub, FaLinkedin, FaLaptopCode } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <QueueAnim>
        <section className="home_section parallex" id="home">
          <Card className="bg-dark text-white no_radius flex">
            <Card.ImgOverlay>
              <Container>
                <Card.Title className="margin_top">
                  <h1 className="font-weight-bold " key="1">
                    I'm Bimlendu
                  </h1>
                  <h2 className="seo">Bimlendu Portfolio</h2>
                </Card.Title>
                <Card.Text>
                  <h4 key="2">
                    I'm a{" "}
                    <Typical
                      steps={[
                        "Web Designer.",
                        1000,
                        "Web Developer.",
                        1000,
                        "Full Stack Developer.",
                        1000,
                        "MERN Developer.",
                        1000,
                      ]}
                      loop={Infinity}
                      wrapper="b"
                    />{" "}
                  </h4>
                </Card.Text>
                <Card.Text ket="3">
                  A profession that completely matches your talent, aspirations
                  and
                  <br />
                  skills is the best profession you can choose.
                </Card.Text>
                <div className="mt-4" key="5">
                  <a
                    title="CodeWars"
                    className="link_icon mr-3"
                    href="https://www.codewars.com/users/bim240"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLaptopCode />
                  </a>
                  <a
                    title="Twitter"
                    className="link_icon mr-3"
                    href="https://twitter.com/bim240"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaTwitter />
                  </a>
                  <a
                    title="GitHub"
                    className="link_icon mr-3"
                    href="https://github.com/bim240"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    title="LinkedIn"
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
        </section>
      </QueueAnim>
    </>
  );
};

export default Home;
