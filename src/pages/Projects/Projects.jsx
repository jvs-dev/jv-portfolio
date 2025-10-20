import React, { useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Responsive landing page for cat food",
      description: "A website for a cat food company.",
      webLink: "https://catspy-omega.vercel.app",
      image: "./projects/project-1-banner.svg",
      logo: "./projects/project-1-logo.svg",
      model: "./projects/project-1-model.svg",
      gitHubLink: "https://github.com/jvs-dev/catspy",
      languageTags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Barber shop app with online scheduling",
      description: "A website for a barber shop.",
      webLink: "https://lio-hairstyle.vercel.app",
      image: "./projects/project-2-banner.svg",
      model: "./projects/project-2-model.svg",
      logo: "./projects/project-2-logo.svg",
      gitHubLink: "https://github.com/jvs-dev/lio-hairstyle-web",
      languageTags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Complete system for robotics classes",
      description: "A platform for teaching programming through robots.",
      webLink: "https://makeroom.vercel.app",
      image: "./projects/project-3-banner.svg",
      logo: "./projects/project-3-logo.svg",
      model: "./projects/project-3-model.svg",
      gitHubLink: "https://github.com/jvs-dev/Makeroom",
      languageTags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Website for advertising the new Ford Ranger.",
      description: "A website for Ford Enter.",
      webLink: "https://jvs-dev-desafio-ford.vercel.app",
      image: "./projects/project-2-banner.svg",
      model: "./projects/project-2-model.svg",
      logo: "./projects/project-2-logo.svg",
      gitHubLink: "https://github.com/jvs-dev/DESAFIO-HTML-E-CSS",
      languageTags: ["HTML", "CSS", "JavaScript"]
    },
  ]
  const [projectViwed, setProjectViwed] = React.useState(1);
  const [animation, setAnimation] = useState(false);
  const [listView, setListView] = useState(false);

  function handleClick(goTo) {
    setAnimation(true);
    if (projectViwed == 1 && goTo == "back") {
      setProjectViwed(projects.length);
    } else if (projectViwed == projects.length && goTo == "forward") {
      setProjectViwed(1);
    } else {
      setProjectViwed((lastValue) =>
        goTo == "back" ? lastValue - 1 : lastValue + 1
      );
    }
    setTimeout(() => {
      setAnimation(false);
    }, 1000);
  }

  return (
    <section className="projectsSection" id="projects">
      <h2 className="experienceSection__title">
        {t('home.projectsTitle')}<ion-icon name="cafe"></ion-icon>
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
              className={`projectWindow__projectText ${animation && "sideAnime"
                }`}
            >
              {projects[projectViwed - 1].title}
            </h2>
            <button
              className={`projectWindow__viewButton ${animation && "sideAnime"
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
            onClick={() => handleClick("back")}
          >
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <button
            className="projectWindow__slideButton"
            type="button"
            onClick={() => handleClick("forward")}
          >
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
      <div className="projectWindow__buttonsDiv">
        <button
          type="button"
          className={`projectWindow__showButton ${listView ? "" : "active"}`}
          onClick={() => setListView(!listView)}
        >
          Cards
          <ion-icon name="grid"></ion-icon>
        </button>
        <button
          type="button"
          className={`projectWindow__showButton ${listView ? "active" : ""}`}
          onClick={() => setListView(!listView)}
        >
          List
          <ion-icon name="list"></ion-icon>
        </button>
      </div>

      <div
        className={`projectWindow__projectsList ${listView ? "listMode" : ""}`}
      >
        {projects.map((el, index) => (
          <article
            onClick={() => {
              setAnimation(true);
              setProjectViwed(index + 1);
              setTimeout(() => {
                setAnimation(false);
              }, 1000);
            }}
            className={`projectWindow__projectCard ${listView ? "listMode" : ""
              } ${index + 1 == projectViwed ? "active" : ""}`}
            key={index}
          >
            <ion-icon name="eye-outline"></ion-icon>
            <img
              className="projectCard__projectImage"
              src={`./projects/project-${index + 1}-banner.svg`}
              alt="Project banner"
            />
            <div className="projectCard__div--1">
              <img
                className="projectCard__logo"
                src={`./projects/project-${index + 1}-logo.svg`}
                alt="Project logo"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;