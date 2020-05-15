import React from "react";
import { v4 as uuid } from "uuid";
import { Flipper, Flipped } from "react-flip-toolkit";
import { FaLink, FaGithub } from "react-icons/fa";

class MyWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "all",
      allProjects: [
        {
          title: "Mini React",
          description:
            "This project was made for a better understanding of React internal and its working.",
          link: null,
          gitLink: "https://github.com/bim240/mini-react",
          img: "react.png",
          tag: ["React"],
          catagory: "react",
        },
        {
          title: "TechEveryDay",
          description:
            "This project was aimed for those who dont know where to look for resources. This is a one point destination for them. We all know internet is a big mess, its a little help for beginner.",
          link: "https://techeveryday.codes",
          gitLink: "https://github.com/bim240/TechEveryday",
          img: "techeveryday.jpg",
          tag: ["HTML", "CSS"],
          catagory: "html",
        },
        {
          title: "Medium Clone",
          description:
            "This project has neumorphic design which gives a real life interaction feel. This is a replica of real life conduit app example(not responsive).",
          link: "https://medium-clone357.netlify.com",
          gitLink: "https://github.com/bim240/medium-clone",
          img: "medium.jpg",
          tag: ["React"],
          catagory: "react",
        },
        {
          title: "Paint",
          description:
            "A project aimed at learning to draw different shapes in react just like we used to do in paint. For now one can only draw few shapes but will continue to add more features.",
          link: "https://paint357.netlify.com",
          gitLink: "https://github.com/bim240/paint",
          img: "paint.jpg",
          tag: ["React"],
          catagory: "react",
        },

        {
          title: "Bookly",
          description:
            "A project made to keep track of all the books one is reading.",
          link: "https://bookly357.netlify.com",
          gitLink: "https://github.com/bim240/bookly",
          img: "bookly.jpg",
          tag: ["JavaScript"],
          catagory: "js",
        },
        {
          title: "Todo",
          description:
            "A project aimed for better understanding of vanillia js and how DOM manupulation works.",
          link: "https://todo357.netlify.com",
          gitLink: "https://github.com/bim240/todos",
          img: "todo.jpg",
          tag: ["JavaScript"],
          catagory: "js",
        },
        {
          title: "Canvas 1",
          description:
            "A project aimed for better understanding of Canvas. Creating path for different particles and there motion.",
          link: "https://canvas1-357.netlify.com",
          gitLink: "https://github.com/bim240/canvasproject1",
          img: "canvas1.jpg",
          tag: ["JavaScript"],
          catagory: "js",
        },
        {
          title: "Canvas 2",
          description:
            "A project aimed for better understanding of Canvas. Creating path for different particles and there motion.",
          link: "https://canvas2-357.netlify.com",
          img: "canvas2.jpg",
          tag: ["JavaScript"],
          gitLink: "https://github.com/bim240/canvasproject3",
          catagory: "js",
        },
        {
          title: "Alien face",
          description:
            "An alien face made with HTML & CSS. Its really cool and funny",
          link: "https://alienface357.netlify.com",
          gitLink: "https://github.com/bim240/alienface",
          img: "alienface.jpg",
          tag: ["HTML", "CSS"],
          catagory: "html",
        },
      ],
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
          <h2 className=" font-weight-bold">My Work</h2>
          <p className="font-weight-bold">
            You've got to get up every morning with determination if you're
            <br />
            going to go to bed with satisfaction.
          </p>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              onClick={() => this.handleFilter("all")}
              className="nav-item nav-link text-reset font-weight-bold active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              All
            </a>
            <a
              onClick={() => this.handleFilter("react")}
              className="nav-item nav-link text-reset font-weight-bold "
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              React
            </a>
            <a
              onClick={() => this.handleFilter("js")}
              className="nav-item nav-link text-reset font-weight-bold"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              JavaScript
            </a>
            <a
              onClick={() => this.handleFilter("html")}
              className="nav-item nav-link text-reset font-weight-bold"
              id="nav-contact-tab"
              data-toggle="tab"
              href="#nav-contact"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              HTML & CSS
            </a>
          </div>
          <Flipper flipKey={this.state.activeTab}>
            <div className="card-groups">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {/* <Shuffle> */}
                {this.state.allProjects.map((project) => {
                  if (this.state.activeTab === "all") {
                    return (
                      <Flipped flipId="coolDiv" ease="easeOutExpo" key={uuid()}>
                        <div className="col mb-5 mt-3">
                          <div className="card h-100 ">
                            <div className="overlay_container">
                              <img
                                src={`./project/${project.img}`}
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="work_image_overlay">
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
                                    href={project.gitLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <button
                                      title="GitHub"
                                      type="button"
                                      className="btn btn-light btn-lg"
                                    >
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
                            <div className="card-footer"></div>
                          </div>
                        </div>
                      </Flipped>
                    );
                  } else if (this.state.activeTab === project.catagory) {
                    return (
                      <Flipped
                        flipId="coolDiv"
                        ease="easeOutExpo"
                        kkey={uuid()}
                      >
                        <div className="col mb-5 mt-3">
                          <div className="card h-100 ">
                            <div className="overlay_container">
                              <img
                                src={`./project/${project.img}`}
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="work_image_overlay">
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
                                    href={project.gitLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <button
                                      title="GitHub"
                                      type="button"
                                      className="btn btn-light btn-lg"
                                    >
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
                            <div className="card-footer"></div>
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
