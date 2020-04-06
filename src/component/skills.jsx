import React from "react";
import {
  Jumbotron,
  Container,
  ProgressBar,
  Card,
  CardDeck,
} from "react-bootstrap";

const Skills = () => {
  return (
    <>
      {" "}
      {/* <Jumbotron> */}
      <div className="container">
        <h2 className=" font-weight-bold">Skills</h2>
        <p className="font-weight-bold">
          The future belongs to those who Learn more skills and combine them in
          creative ways.
        </p>
        <div className="row mt-5">
          {/* html css */}
          <div
            className="col-md-3 col-sm-6 mb-5"
            // style={{ border: "1px solid green" }}
          >
            <div className="progress blue">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">90%</div>
            </div>
            <h5 className="font-weight-bold text-center mt-3">HTML & CSS</h5>
          </div>
          {/* js */}
          <div className="col-md-3 col-sm-6 mb-5">
            <div className="progress yellow">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">90%</div>
            </div>
            <h5 className="font-weight-bold text-center mt-3">JavaScript</h5>
          </div>
          {/* mongodb */}
          <div className="col-md-3 col-sm-6 mb-5">
            <div className="progress pink">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">75%</div>
            </div>
            <h5 className="font-weight-bold text-center mt-3">MongoDB</h5>
          </div>
          {/*  node express*/}
          <div className="col-md-3 col-sm-6 mb-5">
            <div className="progress green">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">75%</div>
            </div>
            <h5 className="font-weight-bold text-center mt-3">Node/Express</h5>
          </div>
          {/* react / react-redux */}
          <div className="col-md-3 col-sm-6 mb-5">
            <div className="progress red">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">75%</div>
            </div>
            <h5 className="font-weight-bold text-center mt-3">React</h5>
          </div>
          {/* bootstrap */}
          <div className="col-md-3 col-sm-6 mb-5">
            <div className="progress greenyellow">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">75%</div>
            </div>
            <h5 className="font-weight-bold text-center mt-3">Bootstrap</h5>
          </div>
        </div>
      </div>
      {/* </Jumbotron> */}
    </>
  );
};

export default Skills;
