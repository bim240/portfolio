import React, { Suspense, lazy } from "react";
// import { Row } from "react-bootstrap";
// const OtherComponent = React.lazy(() => import("./OtherComponent"));

import Header from "./component/header";
import Home from "./component/home";
import AboutMe from "./component/aboutMe";
import Skills from "./component/skills";
import "./assets/stylesheets/style.css";
import MyWork from "./component/myWork";
import Article from "./component/article";
import Contact from "./component/contact";
import Footer from "./component/footer";
// const Header = lazy(() => import("./component/header"));
// const Home = lazy(() => import("./component/home"));
// const AboutMe = lazy(() => import("./component/aboutMe"));
// const Skills = lazy(() => import("./component/skills"));
// const MyWork = lazy(() => import("./component/myWork"));
// const Article = lazy(() => import("./component/article"));
// const Contact = lazy(() => import("./component/contact"));
// const Footer = lazy(() => import("./component/footer"));

function App() {
  return (
    <div>
      {/* <Suspense fallback={<div>loading</div>}> */}
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <MyWork />
      <Article />
      <Contact />
      <Footer />
      {/* </Suspense> */}
    </div>
  );
}

export default App;
