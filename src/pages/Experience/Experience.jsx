import React from "react";
import "./Experience.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

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
          {t('home.aboutTitle')}<ion-icon name="person"></ion-icon>
        </h2>
        <p className="experienceSection__text">
          {t('home.aboutDescription')}
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