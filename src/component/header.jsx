import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "home",
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      // console.log("scroll log");
      // const isTop = window.scrollY < 100;
      if (window.scrollY < 600) {
        this.setState({ active: "home" });
        // console.log("scroll top");
      } else if (window.scrollY > 600 && window.scrollY < 1075) {
        this.setState({ active: "aboutme" });
        // this.setState.active === "about" ? "active" : "";
        // console.log("scroll top about me");
      } else if (window.scrollY > 1075 && window.scrollY < 1775) {
        this.setState({ active: "skills" });
        // console.log("scroll top skills");
      } else if (window.scrollY > 1775 && window.scrollY < 3200) {
        this.setState({ active: "work" });
        console.log("scroll top work");
      } else if (window.scrollY > 3200 && window.scrollY < 4500) {
        this.setState({ active: "articles" });
        console.log("scroll top article");
      } else {
        this.setState({ active: "contacts" });
      }
    });
  }
  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="xl"
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
                <Nav.Link
                  className={`mr-2 nav-link ${
                    this.state.active === "home" ? "active" : ""
                  }`}
                  href="#home"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className={`mr-2 nav-link ${
                    this.state.active === "aboutme" ? "active" : ""
                  }`}
                  href="#aboutme"
                >
                  About Me
                </Nav.Link>
                <Nav.Link
                  className={`mr-2 nav-link ${
                    this.state.active === "skills" ? "active" : ""
                  }`}
                  href="#skills"
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  className={`mr-2 nav-link ${
                    this.state.active === "work" ? "active" : ""
                  }`}
                  href="#mywork"
                >
                  My Work
                </Nav.Link>
                <Nav.Link
                  className={`mr-2 nav-link ${
                    this.state.active === "articles" ? "active" : ""
                  }`}
                  href="#articles"
                >
                  Blog
                </Nav.Link>
                <Nav.Link
                  className={`mr-2 nav-link ${
                    this.state.active === "contacts" ? "active" : ""
                  }`}
                  href="#contacts"
                >
                  Contacts
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
