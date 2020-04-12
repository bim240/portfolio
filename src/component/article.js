import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { FaLink, FaMedium } from "react-icons/fa";
import { v4 as uuid } from "uuid";
// import { IoIosArrowDropdown } from "react-icons/io";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      allProjects: [
        {
          title: "JWT Authentication",
          description:
            "Before we get into action, there are few things you need to know and they are not fancy, you can google them. Even if you don't know them I will do my best to make it easy for you.",
          link: null,
          mediumLink:
            "https://medium.com/@bim240/jwt-authentication-fe47f8993461",
          img: "jwt.png",
          tag: ["Node"],
          catagory: "node",
        },
        {
          title: "DOM (Document Object Model)",
          description:
            "The Document Object Model (DOM) connects web pages to scripts or programming languages by representing the structure of a document — such as the HTML representing a web page — in memory.",
          link: null,
          mediumLink:
            "https://medium.com/@bim240/dom-document-object-model-8e12d6f47c1e",
          img: "dom.png",
          tag: ["JavaScript"],
          catagory: "js",
        },
        {
          title: "Variables in js",
          description:
            "In general, a variable represents a concept or an item whose magnitude can be represented by a number, i.e. measured quantitatively. Variables are called variables because they vary, i.e. they can have a variety of values",
          link: null,
          mediumLink: "https://medium.com/@bim240/variables-in-js-bc5fcb46e640",
          img: "variable.png",
          tag: ["React"],
          catagory: "react",
        },
        {
          title: "AltCampus",
          description:
            "This article is about my 1-month experience at AltCampus.As at AltCampus, we learn technical skills so I will first discuss the technical part and other stuff later on.",
          link: null,
          mediumLink: "https://medium.com/@bim240/altcampus-48208a0b92d5",
          img: "altcampus.png",
          tag: ["AltCampus"],
          catagory: "react",
        },

        {
          title: "What, and Why of Responsive web design",
          description:
            "Responsive web design (RWD) creates a system for a single site to react to the size of a user’s device — with one URL and one content source. A responsive website has a fluid and flexible layout which adjusts according to screen size.",
          link: null,
          mediumLink:
            "https://medium.com/@bim240/what-and-why-of-responsive-web-design-29f5d3d47ec1",
          img: "responsive.png",
          tag: ["HTML & CSS"],
          catagory: "html",
        },
        {
          title: "Flexbox",
          description:
            "As the heading suggests we will be learning about flexbox today. We will go in-depth today. It will be better if you code as we move ahead in flexbox and actually see what each piece of code does.",
          link: null,
          mediumLink:
            "https://medium.com/@bim240/flexbox-altcampus-a9627fab44ff",
          img: "flexbox.jpg",
          tag: ["HTML & CSS"],
          catagory: "js",
        },
        {
          title: "Advanced positioning in CSS",
          description:
            "In this Article you will learn how to use:position -top, bottom, left and right. All of these properties work together to give an element a specific position. When you use a position value other than the default, you can position it using the top, bottom, left and right properties.",
          link: null,
          mediumLink:
            "https://medium.com/@bim240/advanced-positioning-in-css-aa397c73c4",
          img: "position.jpeg",
          tag: ["HTML & CSS"],
          catagory: "html",
        },
        {
          title: "Positioning content in html&css",
          description:
            "CSS helps to position your HTML element. We can put any HTML element at whatever location we like. We can specify whether we want the element positioned relative to its natural position in the page or absolute based on its parent element. ",
          link: null,
          mediumLink:
            "https://medium.com/@bim240/positioning-content-in-html-css-8794c6d4c2a1",
          img: "position1.jpeg",
          tag: ["HTML & CSS"],
          catagory: "html",
        },
        {
          title: "BOX MODEL",
          description:
            "Before moving ahead with the box model first let’s discuss the display properties, few other properties, and their uses. By default, some elements in html are block-level elements and some are inline-level elements. Here are a few examples",
          link: null,
          mediumLink:
            "https://medium.com/@bim240/box-model-altcampus-c26668dc5eed",
          img: "box-model.png",
          tag: ["HTML", "CSS"],
          catagory: "html",
        },
        {
          title: "CSS IN USE",
          description:
            "Let’s continue what we did in the last article. Here we will cover more of the CSS part. We will cover eight different topics today, starting from CSS reset and ending with length. By the time we finish this article, we will take another step towards a full-stack developer.",
          link: null,
          mediumLink:
            "https://medium.com/@bim240/css-in-use-at-altcampus-39af963e37c",
          img: "css.jpeg",
          tag: ["HTML", "CSS"],
          catagory: "html",
        },
        {
          title: "HTML & CSS",
          description:
            "Recently I started learning Html & CSS. HTML is used for content writing and CSS is used for designing those content. Let’s take the human body as an example to understand it better. Now here skeleton is Html and CSS part is how muscle cover our skeleton",
          link: null,
          mediumLink: "https://medium.com/@bim240/html-css-713c434d0946",
          img: "html&css.png",
          tag: ["HTML", "CSS"],
          catagory: "html",
        },
      ],
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
                            <div className="card h-100 ">
                              <div className="overlay_container">
                                <img
                                  src={`./articles/${project.img}`}
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
                              <div className="card-footer"></div>
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
                              <div className="card h-100 ">
                                <div className="overlay_container">
                                  <img
                                    src={`./articles/${project.img}`}
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
                                <div className="card-footer"></div>
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
              {!this.state.collapse ? "Show All" : "Hide"}
            </a>
          </div>
        </>{" "}
      </>
    );
  }
}

export default Article;
