import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { FaLink, FaMedium } from "react-icons/fa";
import { v4 as uuid } from "uuid";

import { blogData } from "../assets/data/blogData";
// import { IoIosArrowDropdown } from "react-icons/io";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      allProjects: blogData,
    };
  }
  handleCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  };
  render() {
    return (
      <>
        {" "}
        <>
          <div className="container mt-5" id="articles">
            <h2 className=" font-weight-bold">Articles</h2>
            <p className="font-weight-bold">To write is to reveal oneself.</p>

            {/* all articles */}
            <Flipper flipKey={this.state.activeTab}>
              <div className="card-groups">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                  {/* <Shuffle> */}
                  {this.state.allProjects.map((project, index) => {
                    if (index <= 5) {
                      return (
                        <Flipped
                          flipId="coolDiv"
                          ease="easeOutExpo"
                          key={uuid()}
                        >
                          <div className="col mb-5 mt-3">
                            <div className="card h-100 border-0 shadow card_background rounded">
                              {" "}
                              <div className="overlay_container rounded">
                                <img
                                  src={`./articles/${project.img}`}
                                  loading="lazy"
                                  className="card-img-top article_svg_responsive rounded"
                                  alt="bimlendu portfolio article image"
                                />
                                <div className="work_image_overlay rounded">
                                  <div className="text">
                                    {project.link ? (
                                      <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <button
                                          title="Live"
                                          type="button"
                                          className="btn btn-light btn-lg mr-3"
                                        >
                                          <FaLink />
                                        </button>
                                      </a>
                                    ) : (
                                      ""
                                    )}

                                    <a
                                      href={project.mediumLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <button
                                        title="Medium"
                                        type="button"
                                        className="btn btn-light btn-lg"
                                      >
                                        <FaMedium />
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
                                  {project.description}{" "}
                                  <a
                                    href={project.mediumLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Read More
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </Flipped>
                      );
                    } else
                      return (
                        <div
                          className={`collapse ${
                            this.state.collapse ? "show" : ""
                          }`}
                          id="collapse"
                          key={uuid()}
                        >
                          <Flipped flipId="coolDiv" ease="easeOutExpo">
                            <div className="col mb-5 mt-3">
                              <div className="card h-100 border-0 shadow card_background rounded">
                                <div className="overlay_container">
                                  <img
                                    src={`./articles/${project.img}`}
                                    loading="lazy"
                                    className="card-img-top article_svg_responsive rounded"
                                    alt="Bimlendu profolio project image"
                                  />
                                  <div className="work_image_overlay rounded">
                                    <div className="text">
                                      {project.link ? (
                                        <a
                                          href={project.link}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <button
                                            title="Live"
                                            type="button"
                                            className="btn btn-light btn-lg mr-3"
                                          >
                                            <FaLink />
                                          </button>
                                        </a>
                                      ) : (
                                        ""
                                      )}

                                      <a
                                        href={project.mediumLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <button
                                          title="medium"
                                          type="button"
                                          className="btn btn-light btn-lg"
                                        >
                                          <FaMedium />
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
                                    {project.description}{" "}
                                    <a
                                      href={project.mediumLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Read More
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Flipped>
                        </div>
                      );
                  })}
                  {/* </Shuffle> */}
                </div>
              </div>
            </Flipper>
            {/* all articles*/}
            {/* collapse */}
            <a
              className={`btn btn-dark font-weight-bold ml-5 mr-5 mb-5 ${
                this.state.collapse ? "" : "collapsed"
              }`}
              data-toggle="collapse"
              href="#collapse"
              role="button"
              aria-expanded={this.state.collapse}
              aria-controls="collapseExample"
              onClick={() => {
                this.setState({ collapse: !this.state.collapse });
              }}
            >
              {" "}
              {!this.state.collapse ? "Show All" : "Show Less"}
            </a>
          </div>
        </>{" "}
      </>
    );
  }
}

export default Article;
