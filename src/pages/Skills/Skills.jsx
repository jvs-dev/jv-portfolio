import React from "react";
import "./Skills.css";

const Skills = () => {
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
      icon: (
        <ion-icon className="techCard__icon" name="logo-nodejs"></ion-icon>
      ),
      name: "NODE.JS",
    },
    {
      icon: (
        <ion-icon className="techCard__icon" name="logo-react"></ion-icon>
      ),
      name: "REACT.JS",
    },
    {
      icon: (
        <ion-icon className="techCard__icon" name="logo-angular"></ion-icon>
      ),
      name: "ANGULAR",
    },
    {
      icon: (
        <ion-icon className="techCard__icon" name="logo-github"></ion-icon>
      ),
      name: "GITHUB",
    },
    {
      icon: (
        <ion-icon className="techCard__icon" name="logo-firebase"></ion-icon>
      ),
      name: "FIREBASE",
    },
    {
      icon: (
        <ion-icon className="techCard__icon" name="logo-figma"></ion-icon>
      ),
      name: "FIGMA",
    },
  ];

  return (
    <section className="skillsSection">
      <h2 className="experienceSection__title">
        My Skills <ion-icon name="flame"></ion-icon>
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
    </section>
  );
};

export default Skills;
