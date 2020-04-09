import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { FaLink, FaMedium } from "react-icons/fa";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "all",
      allProjects: [
        {
          title: "JWT Authentication",
          description:
            "This project was made for a better understanding of React internal and its working",
          link: null,
          mediumLink:
            "https://medium.com/@bim240/jwt-authentication-fe47f8993461",
          img: "react.png",
          tag: ["Node"],
          catagory: "node",
        },
        {
          title: "DOM (Document Object Model)",
          description:
            "This project was aimed for those who dont know where to look for resources. This is a one point destination for them. We all know internet is a big mess, its just a little help",
          link: "https://techeveryday.codes",
          mediumLink:
            "https://medium.com/@bim240/dom-document-object-model-8e12d6f47c1e",
          img: "techeveryday.jpg",
          tag: ["JavaScript"],
          catagory: "js",
        },
        {
          title: "Variables in js",
          description:
            "This project has neumorphic design which gives a real life interaction feel ",
          link: "https://medium-clone357.netlify.com",
          mediumLink: "https://medium.com/@bim240/variables-in-js-bc5fcb46e640",
          img: "medium.jpg",
          tag: ["React"],
          catagory: "react",
        },
        {
          title: "AltCampus",
          description:
            "This article is about my 1-month experience at AltCampus.As at AltCampus, we learn technical skills so I will first discuss the technical part and other stuff later on.",
          link: "https://paint357.netlify.com",
          mediumLink: "https://medium.com/@bim240/altcampus-48208a0b92d5",
          img: "paint.jpg",
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
          img: "bookly.jpg",
          tag: ["HTML & CSS"],
          catagory: "html",
        },
        {
          title: "Flexbox",
          description:
            "As the heading suggests we will be learning about flexbox today. We will go in-depth today. It will be better if we code as we move ahead in flexbox and actually see what each piece of code does.",
          link: null,
          mediumLink:
            "https://medium.com/@bim240/flexbox-altcampus-a9627fab44ff",
          img: "todo.jpg",
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
          img: "canvas1.jpg",
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
          img: "canvas2.jpg",
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
          img: "alienface.jpg",
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
          img: "alienface.jpg",
          tag: ["HTML", "CSS"],
          catagory: "html",
        },
        {
          title: "HTML & CSS",
          description:
            "Recently I started learning Html & CSS. HTML is used for content writing and CSS is used for designing those content. Let’s take the human body as an example to understand it better. Now here skeleton is Html and CSS part is how muscle cover our skeleton",
          link: null,
          mediumLink: "https://medium.com/@bim240/html-css-713c434d0946",
          img: "alienface.jpg",
          tag: ["HTML", "CSS"],
          catagory: "html",
        },
      ],
    };
  }
  render() {
    return (
      <>
        {" "}
        <>
          <div class="container mt-5">
            <h2 className=" font-weight-bold">Articles</h2>
            <p className="font-weight-bold">To write is to reveal oneself.</p>

            {/* <Flipper flipKey={this.state.activeTab}> */}
            <div class="card-groups">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {/* <Shuffle> */}
                {this.state.allProjects.map((project) => {
                  return (
                    // <Flipped flipId="coolDiv" ease="easeOutExpo">
                    <div class="col mb-5 mt-3">
                      <div class="card h-100 ">
                        <div class="overlay_container">
                          <img
                            src={`./project/${project.img}`}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="work_image_overlay">
                            <div class="text">
                              {project.link ? (
                                <a href={project.link} target="_blank">
                                  <button
                                    title="Live"
                                    type="button"
                                    class="btn btn-light btn-lg mr-3"
                                  >
                                    <FaLink />
                                  </button>
                                </a>
                              ) : (
                                ""
                              )}

                              <a href={project.mediumLink} target="_blank">
                                <button
                                  title="Medium"
                                  type="button"
                                  class="btn btn-light btn-lg"
                                >
                                  <FaMedium />
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title font-weight-bold">
                            {project.title}
                          </h5>
                          <p class="card-text font-weight-bold">
                            {project.description}{" "}
                            <a href={project.mediumLink}> Read more</a>
                          </p>
                        </div>
                        <div class="card-footer"></div>
                      </div>
                    </div>
                    // </Flipped>
                  );
                })}
                {/* </Shuffle> */}
              </div>
            </div>
            {/* </Flipper> */}
          </div>
        </>{" "}
      </>
    );
  }
}

export default Article;
