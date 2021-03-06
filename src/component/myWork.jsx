import React from "react";
import { v4 as uuid } from "uuid";
import { Flipper, Flipped } from "react-flip-toolkit";
import { FaLink, FaGithub } from "react-icons/fa";

import { workData } from "../assets/data/workdata";

class MyWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "all",
      allProjects: workData,
    };
  }
  handleFilter = (key) => {
    console.log(key);
    this.setState({ activeTab: key });
  };
  render() {
    return (
      <>
        <div className="container mt-5" id="mywork">
          <h1 className="hide"> bimlendu portfolio myWork section </h1>
          <h2 className=" font-weight-bold">My Work</h2>
          <p className="font-weight-bold">
            You've got to get up every morning with determination if you're
            <br />
            going to go to bed with satisfaction.
          </p>
        </div>
        <div className="container">
          <Flipper flipKey={this.state.activeTab}>
            <div className="card-groups">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                {/* <Shuffle> */}
                {this.state.allProjects.map((project) => {
                  if (this.state.activeTab === "all") {
                    return (
                      <Flipped flipId="coolDiv" ease="easeOutExpo" key={uuid()}>
                        <div className="col mb-5 mt-3">
                          <div className="card h-100 border-0 shadow card_background rounded">
                            <div className="overlay_container rounded">
                              <img
                                src={`./project/${project.img}`}
                                loading="lazy"
                                className="card-img-top work_svg_responsive rounded"
                                alt="bimlendu portfolio work "
                              />
                              <div className="work_image_overlay rounded">
                                <div className="text">
                                  {project.link ? (
                                    <a
                                      href={project.link}
                                      target="_blank"
                                      rel="noopener noreferrer">
                                      <button
                                        title="Live"
                                        type="button"
                                        className="btn btn-light btn-lg mr-3">
                                        <FaLink />
                                      </button>
                                    </a>
                                  ) : (
                                    ""
                                  )}

                                  <a
                                    href={project.gitLink}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <button
                                      title="GitHub"
                                      type="button"
                                      className="btn btn-light btn-lg">
                                      <FaGithub />
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="card-body">
                              <h5 className="card-title font-weight-bold">
                                {project.title}
                              </h5>
                              <p className="card-text font-weight-bold">
                                {project.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Flipped>
                    );
                  } else if (this.state.activeTab === project.catagory) {
                    return (
                      <Flipped
                        flipId="coolDiv"
                        ease="easeOutExpo"
                        kkey={uuid()}>
                        <div className="col mb-5 mt-3">
                          <div className="card h-100 border-0 shadow card_background rounded">
                            <div className="overlay_container rounded  ">
                              <img
                                src={`./project/${project.img}`}
                                loading="lazy"
                                className="card-img-top work_svg_responsive rounded "
                                alt="bimlendu portfolio work "
                              />
                              <div className="work_image_overlay rounded">
                                <div className="text">
                                  {project.link ? (
                                    <a
                                      href={project.link}
                                      target="_blank"
                                      rel="noopener noreferrer">
                                      <button
                                        title="Live"
                                        type="button"
                                        className="btn btn-light btn-lg mr-3">
                                        <FaLink />
                                      </button>
                                    </a>
                                  ) : (
                                    ""
                                  )}

                                  <a
                                    href={project.gitLink}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <button
                                      title="GitHub"
                                      type="button"
                                      className="btn btn-light btn-lg">
                                      <FaGithub />
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="card-body">
                              <h5 className="card-title font-weight-bold">
                                {project.title}
                              </h5>
                              <p className="card-text font-weight-bold">
                                {project.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Flipped>
                    );
                  }
                })}
                {/* </Shuffle> */}
              </div>
            </div>
          </Flipper>
        </div>
      </>
    );
  }
}

export default MyWork;
