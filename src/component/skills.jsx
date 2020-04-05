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
      <Jumbotron>
        <div class="container">
          <h1 class="display-4 font-weight-bold">Skills</h1>
          <p className="font-weight-bold">
            The future belongs to those who Learn more skills and combine them
            in creative ways.
          </p>
          <div class="row mt-5">
            {/* html css */}
            <div
              class="col-md-3 col-sm-6 mb-5"
              // style={{ border: "1px solid green" }}
            >
              <div class="progress blue">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                  <span class="progress-bar"></span>
                </span>
                <div class="progress-value">90%</div>
              </div>
              <h5 class="font-weight-bold text-center mt-3">HTML & CSS</h5>
            </div>
            {/* js */}
            <div class="col-md-3 col-sm-6 mb-5">
              <div class="progress yellow">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                  <span class="progress-bar"></span>
                </span>
                <div class="progress-value">90%</div>
              </div>
              <h5 class="font-weight-bold text-center mt-3">JavaScript</h5>
            </div>
            {/* mongodb */}
            <div class="col-md-3 col-sm-6 mb-5">
              <div class="progress pink">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                  <span class="progress-bar"></span>
                </span>
                <div class="progress-value">75%</div>
              </div>
              <h5 class="font-weight-bold text-center mt-3">MongoDB</h5>
            </div>
            {/*  node express*/}
            <div class="col-md-3 col-sm-6 mb-5">
              <div class="progress green">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                  <span class="progress-bar"></span>
                </span>
                <div class="progress-value">75%</div>
              </div>
              <h5 class="font-weight-bold text-center mt-3">Node/Express</h5>
            </div>
            {/* react / react-redux */}
            <div class="col-md-3 col-sm-6 mb-5">
              <div class="progress red">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                  <span class="progress-bar"></span>
                </span>
                <div class="progress-value">75%</div>
              </div>
              <h5 class="font-weight-bold text-center mt-3">React</h5>
            </div>
            {/* bootstrap */}
            <div class="col-md-3 col-sm-6 mb-5">
              <div class="progress greenyellow">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                  <span class="progress-bar"></span>
                </span>
                <div class="progress-value">75%</div>
              </div>
              <h5 class="font-weight-bold text-center mt-3">Bootstrap</h5>
            </div>
          </div>
        </div>
      </Jumbotron>
    </>
  );
};

export default Skills;
