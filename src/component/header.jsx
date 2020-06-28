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
      if (window.scrollY < 600) {
        this.setState({ active: "home" });
      } else if (window.scrollY > 600 && window.scrollY < 1075) {
        this.setState({ active: "aboutme" });
      } else if (window.scrollY > 1075 && window.scrollY < 1775) {
        this.setState({ active: "skills" });
      } else if (window.scrollY > 1775 && window.scrollY < 3200) {
        this.setState({ active: "work" });
      } else if (window.scrollY > 3200 && window.scrollY < 4500) {
        this.setState({ active: "articles" });
      } else {
        this.setState({ active: "contacts" });
      }
    });
  }
  render() {
    return (
      <>
        <Navbar
          className="sticky_bottom"
          collapseOnSelect
          expand="xl"
          sticky="top"
          bg="dark"
          variant="dark">
          <Container>
            <h1 className="hide"> bimlendu portfolio header section </h1>
            <Navbar.Brand href="#home" className="font-weight-bold mob_brand">
              Bimlendu
            </Navbar.Brand>
            <div className="mob_hamburger_icon">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </div>

            <Navbar.Collapse id="responsive-navbar-nav ">
              <Nav className="ml-auto h4_heading mob_nav_bar ">
                <Nav.Link
                  className={`mr-2 nav-link mob_nav_bar_link ${
                    this.state.active === "home" ? "active" : ""
                  }`}
                  href="#home">
                  Home
                </Nav.Link>
                <Nav.Link
                  className={`mr-2 nav-link mob_nav_bar_link ${
                    this.state.active === "aboutme" ? "active" : ""
                  }`}
                  href="#aboutme">
                  About Me
                </Nav.Link>
                <Nav.Link
                  className={`mr-2 nav-link mob_nav_bar_link${
                    this.state.active === "skills" ? "active" : ""
                  }`}
                  href="#skills">
                  Skills
                </Nav.Link>
                <Nav.Link
                  className={`mr-2 nav-link mob_nav_bar_link ${
                    this.state.active === "work" ? "active" : ""
                  }`}
                  href="#mywork">
                  My Work
                </Nav.Link>
                <Nav.Link
                  className={`mr-2 nav-link  mob_nav_bar_link${
                    this.state.active === "articles" ? "active" : ""
                  }`}
                  href="#articles">
                  Blog
                </Nav.Link>
                <Nav.Link
                  className={`mr-2 nav-link mob_nav_bar_link${
                    this.state.active === "contacts" ? "active" : ""
                  }`}
                  href="#contacts">
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
