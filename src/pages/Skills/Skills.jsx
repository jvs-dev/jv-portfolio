import React from "react";
import "./Skills.css";
import { faJava, faNpm, faYarn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLanguage } from "../../contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();
  
  const skillsObj = [
    {
      icon: <ion-icon className="techCard__icon" name="logo-html5"></ion-icon>,
      name: "HTML",
    },
    {
      icon: <ion-icon className="techCard__icon" name="logo-css3"></ion-icon>,
      name: "CSS",
    },
    {
      icon: (
        <ion-icon className="techCard__icon" name="logo-javascript"></ion-icon>
      ),
      name: "JAVASCRIPT",
    },
    {
      icon: <ion-icon className="techCard__icon" name="logo-nodejs"></ion-icon>,
      name: "NODE.JS",
    },
    {
      icon: <ion-icon className="techCard__icon" name="logo-react"></ion-icon>,
      name: "REACT.JS",
    },
    {
      icon: (
        <ion-icon className="techCard__icon" name="logo-angular"></ion-icon>
      ),
      name: "ANGULAR",
    },
    {
      icon: <FontAwesomeIcon icon={faJava} />,
      name: "JAVA",
    },
    {
      icon: <FontAwesomeIcon icon={faNpm} />,
      name: "NPM",
    },
    {
      icon: <FontAwesomeIcon icon={faYarn} />,
      name: "YARN",
    },
    {
      icon: <i className="bi bi-git"></i>,
      name: "GIT",
    },
    {
      icon: <ion-icon className="techCard__icon" name="logo-github"></ion-icon>,
      name: "GITHUB",
    },
  ];

  const techsInPairs = [
    ["Figma", "UI & UX Design"],
    ["Rest APIs", "Jest para testes"],
    ["Tensorflow", "Gemini AI - APIs"],
    ["Git", "Github"],
    ["Scrum", "Kabam"],
    ["Firebase", "Appwrite"],
  ];

  const techLists = [];
  let techIndex = 0;

  for (let i = 0; i < techsInPairs.length / 2; i++) {
    techLists.push(
      <div className="skillsSection__div--4" key={i}>
        <ul className="skillsSection__techsList">
          <li className="skillsSection__techsList__li">
            {techsInPairs[techIndex][0]}
          </li>
          <li className="skillsSection__techsList__li">
            {techsInPairs[techIndex++][1]}
          </li>
        </ul>
        <div className="skillsSection__techsList__line"></div>
        <ul className="skillsSection__techsList">
          <li className="skillsSection__techsList__li">
            {techsInPairs[techIndex][0]}
          </li>
          <li className="skillsSection__techsList__li">
            {techsInPairs[techIndex++][1]}
          </li>
        </ul>
      </div>
    );
  }

  return (
    <section className="skillsSection" id="skills">
      <h2 className="experienceSection__title">
        {t('home.skillsTitle')} <ion-icon name="flame"></ion-icon>
      </h2>

      <div className="skillsSection__div--1">
        <h3 className="skillsSection__h3">
          Languages <ion-icon name="hardware-chip"></ion-icon>
        </h3>
        <div className="skillsSection__div--2">
          {skillsObj.map((el) => (
            <article key={el.name} className="skillsSection__techCard">
              {el.icon}
              <p className="techCard__p">{el.name}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="skillsSection__div--1">
        <h3 className="skillsSection__h3">
          Techs And More <ion-icon name="rocket"></ion-icon>
        </h3>
        <div className="skillsSection__div--3">{techLists}</div>
      </div>
    </section>
  );
};

export default Skills;