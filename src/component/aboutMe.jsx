import React from "react";
import { FaBirthdayCake, FaGlobeAsia, FaCity, FaBook } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { DiYeoman } from "react-icons/di";
import { MdEmail } from "react-icons/md";
import { GiFreedomDove } from "react-icons/gi";
import { Jumbotron, Container } from "react-bootstrap";

const AboutMe = () => {
  return (
    <>
      {" "}
      <Jumbotron id="aboutme" className="aboutme_section">
        <Container>
          <h1 className="hide"> bimlendu portfolio about section </h1>
          <h2 className=" font-weight-bold">About Me</h2>
          <h5 className="font-weight-bold heading-3">
            Hello I'm Bimlendu Kumar
          </h5>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-4">
            <div className="col">
              <div className="col m-3 font-weight-bold">
                {" "}
                <FaBirthdayCake className="mr-2" />
                Birthday : 23 Febuary
              </div>
              <div className="col m-3 alert-link">
                {" "}
                <FaGlobeAsia className="mr-2" />
                Website : <a href="https://www.bimlendu.me/">
                  www.bimlendu.me
                </a>{" "}
              </div>
              <div className="col m-3 font-weight-bold">
                {" "}
                <IoIosCall className="mr-2" />
                Phone no : +91 8910610326
              </div>
              <div className="col m-3 font-weight-bold">
                {" "}
                <FaCity className="mr-2" />
                City : Dharamshala, INDIA
              </div>
              {/* <div className="col m-3 font-weight-bold">
                <button type="button" className="btn btn-dark m-3">
                  Download CV
                </button>
              </div> */}
            </div>
            {/* columan 2 */}
            <div className="col">
              {" "}
              <div className="col m-3 font-weight-bold">
                {" "}
                <DiYeoman className="mr-2" />
                Age : 24
              </div>
              <div className="col m-3 font-weight-bold">
                {" "}
                <FaBook className="mr-2" />
                Degree : Bachelor
              </div>
              <div className="col m-3 font-weight-bold">
                {" "}
                <MdEmail className="mr-2" />
                Email : bimlendu357@gmail.com
              </div>
              <div className="col m-3 font-weight-bold">
                {" "}
                <GiFreedomDove className="mr-2" />
                Freelance : Available
              </div>
              {/* <div className="col m-3 font-weight-bold">
                <button type="button" className="btn btn-dark m-3">
                  Message Me
                </button>
              </div> */}
            </div>
          </div>
        </Container>
      </Jumbotron>
    </>
  );
};

export default AboutMe;
