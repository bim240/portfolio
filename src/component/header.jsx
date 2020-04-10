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
          <Navbar.Brand href="#home" className="font-weight-bold">
            Bimlendu
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto h4_heading">
              <Nav.Link className="mr-2 nav-link" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="mr-2 nav-link" href="#aboutme">
                About Me
              </Nav.Link>
              <Nav.Link className="mr-2 nav-link" href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link className="mr-2 nav-link" href="#mywork">
                My Work
              </Nav.Link>
              <Nav.Link className="mr-2 nav-link" href="#articles">
                Blog
              </Nav.Link>
              <Nav.Link className="mr-2 nav-link" href="#contacts">
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
