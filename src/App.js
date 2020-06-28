import React, { Suspense, lazy } from "react";

import "./assets/stylesheets/style.scss";
import Loading from "./component/loading/loading";

const Header = lazy(() => import("./component/header"));
const Home = lazy(() => import("./component/home"));
const AboutMe = lazy(() => import("./component/aboutMe"));
const Skills = lazy(() => import("./component/skills"));
const MyWork = lazy(() => import("./component/myWork"));
const Article = lazy(() => import("./component/article"));
const Contact = lazy(() => import("./component/contact"));
const Footer = lazy(() => import("./component/footer"));

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Header />
        <Home />
        <AboutMe />
        <Skills />
        <MyWork />
        <Article />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
