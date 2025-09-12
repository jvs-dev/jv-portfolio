import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="./Curriculo-Joao-Vitor-Santana.pdf" target="_blank">
          <button className="header__resumeBtn" type="button">
            <i className="bi bi-file-earmark-medical-fill"></i>
          </button>
        </a>
        <nav className="header__nav">
          <Link className="header__navLink active" to={"/"}>
            Home
          </Link>
          <a className="header__navLink" href="#about">
            About
          </a>
          <a className="header__navLink" href="#skills">
            Tech Stacks
          </a>
          <a className="header__navLink" href="#projects">
            Projects
          </a>
          <span className="header__line"></span>
          <a className="header__navLink" href="#contact">
            FAQ
          </a>
        </nav>
      </div>
      <Link to={"/"} className="header__logoLink">
        <img className="header__logo" src="jvs-logo.svg" alt="JOÃO SILVA" />
      </Link>
      <button type="button" className="menutoggle-btn"></button>
    </header>
  );
};

export default Header;
