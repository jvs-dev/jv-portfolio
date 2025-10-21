import React, { useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { faBootstrap, faJava, faNpm, faYarn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLanguage } from "../../contexts/LanguageContext";
import ProjectModal from "../../components/ProjectModal/ProjectModal";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Responsive landing page for cat food",
      description: `"Catspi" is an academic landing page project for a fictional premium cat food brand. Developed in partnership with designer Cauã Silveira, this project was completed for Unijorje University.`,
      webLink: "https://catspy-omega.vercel.app",
      image: "./projects/project-1-banner.svg",
      logo: "./projects/project-1-logo.svg",
      model: "./projects/project-1-model.svg",
      gitHubLink: "https://github.com/jvs-dev/catspy",
      languageTags: [
        { name: "HTML", icon: <ion-icon className="projectTag__icon" name="logo-html5"></ion-icon>, color: "#E34C26" },
        { name: "CSS", icon: <ion-icon className="projectTag__icon" name="logo-css3"></ion-icon>, color: "#1572B6" },
        { name: "JavaScript", icon: <ion-icon className="projectTag__icon" name="logo-javascript"></ion-icon>, color: "#F7DF1E" },
        { name: "React.js", icon: <ion-icon className="projectTag__icon" name="logo-react"></ion-icon>, color: "#61DAFB" },
        { name: "Bootstrap", icon: <FontAwesomeIcon icon={faBootstrap} className="projectTag__icon" />, color: "#7952B3" },
      ],
    },
    {
      title: "Barber shop app with online scheduling",
      description: `A website where clients can schedule services online, integrated with a barber management app. Through the app, professionals can update all website data and text and manage their schedule in real time.`,
      webLink: "https://lio-hairstyle.vercel.app",
      image: "./projects/project-2-banner.svg",
      model: "./projects/project-2-model.svg",
      logo: "./projects/project-2-logo.svg",
      gitHubLink: "https://github.com/jvs-dev/lio-hairstyle-web",
      languageTags: [
        { name: "HTML", icon: <ion-icon className="projectTag__icon" name="logo-html5"></ion-icon>, color: "#E34C26" },
        { name: "CSS", icon: <ion-icon className="projectTag__icon" name="logo-css3"></ion-icon>, color: "#1572B6" },
        { name: "JavaScript", icon: <ion-icon className="projectTag__icon" name="logo-javascript"></ion-icon>, color: "#F7DF1E" }
      ],
    },
    {
      title: "Complete system for robotics classes",
      description: `"Makeroom" is a comprehensive website designed to manage robotics courses for students at partner schools. The platform was created as an interactive, gamified learning ecosystem.`,
      webLink: "https://makeroom.vercel.app",
      image: "./projects/project-3-banner.svg",
      logo: "./projects/project-3-logo.svg",
      model: "./projects/project-3-model.svg",
      gitHubLink: "https://github.com/jvs-dev/Makeroom",
      languageTags: [
        { name: "HTML", icon: <ion-icon className="projectTag__icon" name="logo-html5"></ion-icon>, color: "#E34C26" },
        { name: "CSS", icon: <ion-icon className="projectTag__icon" name="logo-css3"></ion-icon>, color: "#1572B6" },
        { name: "JavaScript", icon: <ion-icon className="projectTag__icon" name="logo-javascript"></ion-icon>, color: "#F7DF1E" },
        { name: "Node.js", icon: <ion-icon className="projectTag__icon" name="logo-nodejs"></ion-icon>, color: "#339933" },
        { name: "Next.js", icon: <img src="./icons/nextjs.svg" alt="Next.js" />, color: "#339933" },
        { name: "Firebase", icon: <ion-icon className="projectTag__icon" name="logo-firebase"></ion-icon>, color: "#FBC02D" },
      ],
    },
    {
      title: "Website for advertising the new Ford Ranger.",
      description: `This website was an academic project developed during the FORD ENTER course to announce the launch of the new Ford Ranger. The development strictly followed a detailed design and brand guidelines provided by Ford Motors Company.`,
      webLink: "https://jvs-dev-desafio-ford.vercel.app",
      image: "./projects/project-4-banner.svg",
      model: "./projects/project-4-model.svg",
      logo: "./projects/project-4-logo.svg",
      gitHubLink: "https://github.com/jvs-dev/DESAFIO-HTML-E-CSS",
      languageTags: [
        { name: "HTML", icon: <ion-icon className="projectTag__icon" name="logo-html5"></ion-icon>, color: "#E34C26" },
        { name: "CSS", icon: <ion-icon className="projectTag__icon" name="logo-css3"></ion-icon>, color: "#1572B6" },
        { name: "JavaScript", icon: <ion-icon className="projectTag__icon" name="logo-javascript"></ion-icon>, color: "#F7DF1E" }
      ],
    },
  ]
  const [projectViwed, setProjectViwed] = React.useState(1);
  const [animation, setAnimation] = useState(false);
  const [listView, setListView] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

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
              onClick={() => openProjectModal(projects[projectViwed - 1])}
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

      <ProjectModal
        project={selectedProject}
        onClose={closeProjectModal}
      />
    </section>
  );
};

export default Projects;