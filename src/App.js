import React from "react";
// import { Row } from "react-bootstrap";

import Header from "./component/header";
import Home from "./component/home";
import AboutMe from "./component/aboutMe";
import Skills from "./component/skills";
import "./assets/stylesheets/style.css";
import MyWork from "./component/myWork";
import Article from "./component/article";
import Contact from "./component/contact";
import Footer from "./component/footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <MyWork />
      <Article />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
