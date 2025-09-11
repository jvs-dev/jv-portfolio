import React from "react";
import "./Experience.css";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <section className="experienceSection" id="about">
      <div className="experienceSection__logosDiv">
        <div className="experienceSection__logoCard logoCard--column">
          <img src="/logos/ford.svg" alt="Logo Ford" />
          <img src="/logos/senaiCimatec.svg" alt="Logo Senai" />
        </div>

        <div className="experienceSection__logoCard">
          <img src="/logos/cubosAcademy.svg" alt="Logo Cubos Academy" />
        </div>

        <div className="experienceSection__logoCard">
          <img src="/logos/dio.svg" alt="Logo Dioi" />
        </div>

        <div className="experienceSection__logoCard">
          <img src="/logos/senac.svg" alt="Logo Senac" />
        </div>

        <div className="experienceSection__logoCard large-item">
          <img src="/logos/rocketseat.svg" alt="Logo Rocketseat" />
        </div>
      </div>
      <div className="experienceSection__textDiv">
        <h2 className="experienceSection__title">
          My Experience<ion-icon name="person"></ion-icon>
        </h2>
        <p className="experienceSection__text">
          Hello! My name is João, and I'm a developer who's passionate about
          technology and automation. I have extensive programming experience
          from both freelance and individual projects, as well as from my work
          at companies like EcoRecitec. I'm also part of the Ford
          &#60;Enter&#62; program, a Frontend Programming course in partnership
          with...
        </p>
        <Link to={"/MyHistory"}>
          <button className="experienceSection__button" type="button">
            See More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Experience;
