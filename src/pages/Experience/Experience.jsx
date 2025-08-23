import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experienceSection">
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
          Lorem ipsum dolor sit amet. In vero tempore id quia inventore et
          quidem rerum rem corporis quibusdam ut similique quia ut rerum
        </p>
        <button className="experienceSection__button" type="button">
          See More
        </button>
      </div>
    </section>
  );
};

export default Experience;
