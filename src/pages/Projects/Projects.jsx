import React, { useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  const texts = [
    "Responsive landing page for cat food",
    "barber shop app with online scheduling",
  ];
  const [projectViwed, setProjectViwed] = React.useState(1);
  const [animation, setAnimation] = useState(false);

  function handleClick(calcIndex) {
    setAnimation(true);
    setProjectViwed((last) => last + calcIndex);
    setTimeout(() => {
      setAnimation(false);
    }, 1000);
  }

  return (
    <section className="projectsSection">
      <h2 className="experienceSection__title">
        My Projects<ion-icon name="cafe"></ion-icon>
      </h2>

      <div className="projectWindowDiv">
        <img
          className={`projectWindow__banner ${animation && "sideAnime"}`}
          src={`./projects/project-${projectViwed}-banner.svg`}
          alt="Project banner"
        />
        <div className="projectWindow__div--1">
          <div className="projectWindow__div--2">
            <Link className="projectWindow__logoLink" to={"#"}>
              <img
                className={`projectWindow__logo ${animation && "sideAnime"}`}
                src={`./projects/project-${projectViwed}-logo.svg`}
                alt="Project logo"
              />
            </Link>
            <h2
              className={`projectWindow__projectText ${
                animation && "sideAnime"
              }`}
            >
              {texts[projectViwed - 1]}
            </h2>
            <button
              className={`projectWindow__viewButton ${
                animation && "sideAnime"
              }`}
              type="button"
            >
              View
            </button>
          </div>
          <img
            className={`projectWindow__model ${animation && "sideAnime"}`}
            src={`./projects/project-${projectViwed}-model.svg`}
            alt="Project model"
          />
        </div>
        <div className="projectWindow__div--3">
          <button
            className="projectWindow__slideButton"
            type="button"
            onClick={() => handleClick(-1)}
          >
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <button
            className="projectWindow__slideButton"
            type="button"
            onClick={() => handleClick(1)}
          >
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
