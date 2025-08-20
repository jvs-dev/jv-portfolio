import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <button className="header__resumeBtn" type="button">
          <i className="bi bi-file-earmark-medical-fill"></i>
        </button>
        <nav className="header__nav">
          <Link className="header__navLink active" to={"#"}>
            Home
          </Link>
          <Link className="header__navLink" to={"#"}>
            About
          </Link>
          <Link className="header__navLink" to={"#"}>
            Tech Stacks
          </Link>
          <Link className="header__navLink" to={"#"}>
            FAQ
          </Link>
          <span className="header__line"></span>
          <Link className="header__navLink" to={"#"}>
            Projects
          </Link>
        </nav>
      </div>
      <Link to={"/"} className="header__logoLink">
        <img className="header__logo" src="jvs-logo.svg" alt="JOÃO SILVA" />
      </Link>
    </header>
  );
};

export default Header;
