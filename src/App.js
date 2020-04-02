import React from "react";
import { Row } from "react-bootstrap";

import Header from "./component/header";
import Home from "./component/home";
import "./assets/stylesheets/style.css";

function App() {
  return (
    <div>
      <Header />

      <Home />
    </div>
  );
}

export default App;
