import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">Bimlendu</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto h4_heading">
              <Nav.Link className="mr-2" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="mr-2" href="#aboutme">
                About Me
              </Nav.Link>
              <Nav.Link className="mr-2" href="#resume">
                Resume
              </Nav.Link>
              <Nav.Link className="mr-2" href="#portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link className="mr-2" href="#blog">
                Blog
              </Nav.Link>
              <Nav.Link className="mr-2" href="#contacts">
                Contacts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
