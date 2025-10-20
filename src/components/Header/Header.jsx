import React, { useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useLanguage } from "../../contexts/LanguageContext";

const Header = () => {
  const { t } = useLanguage();
  const [openMenu, setOpenMenu] = React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (openMenu) {
      document.querySelector("html").style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.querySelector("html").style.overflow = "auto";
    }
  }, [openMenu]);

  return (
    <header className="header">
      <div className={`header__container ${openMenu ? "active" : ""}`}>
        <a href="./Curriculo-Joao-Vitor-Santana.pdf" target="_blank">
          <button className="header__resumeBtn" type="button" title={t('header.resume')}>
            <i className="bi bi-file-earmark-medical-fill"></i>
          </button>
        </a>
        <nav className="header__nav">
          <Link
            className="header__navLink active"
            to={"/"}
            onClick={() => setOpenMenu(false)}
          >
            {t('header.home')}
          </Link>
          <a
            className="header__navLink"
            href="/#about"
            onClick={() => setOpenMenu(false)}
          >
            {t('header.about')}
          </a>
          <a
            className="header__navLink"
            href="/#skills"
            onClick={() => setOpenMenu(false)}
          >
            {t('header.skills')}
          </a>
          <a
            className="header__navLink"
            href="/#projects"
            onClick={() => setOpenMenu(false)}
          >
            {t('header.projects')}
          </a>
          <span className="header__line"></span>
          <a
            className="header__navLink"
            href="/#contact"
            onClick={() => setOpenMenu(false)}
          >
            {t('header.contact')}
          </a>
        </nav>
        {/* Language Toggle Button */}
        <LanguageToggle />
      </div>
      <Link to={"/"} className="header__logoLink">
        <img className="header__logo" src="jvs-logo.svg" alt="JOÃO SILVA" />
      </Link>
      <button
        type="button"
        className={`menutoggle-btn ${openMenu ? "active" : ""}`}
        onClick={() => setOpenMenu(!openMenu)}
      ></button>
    </header>
  );
};

export default Header;