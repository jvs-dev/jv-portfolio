import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer__topLine"></div>
      <footer className="footer">
        <div className="footer__div--1">
          <h3 className="footer__title">Thanks For View All!</h3>
          <p className="footer__copy">
            © 2025 João Vitor Santana da Silva
            <br />
            todos os direitos reservados
          </p>
        </div>
        <div className="footer__div--4">
          <Link to={"/"} className="header__logoLink">
            <img className="header__logo" src="jvs-logo.svg" alt="JOÃO SILVA" />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
