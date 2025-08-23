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
        <div className="footer__div--1">
          <h4 className="footer__listTitle">Socials</h4>
          <ul className="footer__ul">
            <li className="footer__li">
              <Link>
                <ion-icon name="logo-instagram"></ion-icon> Instagram
              </Link>
            </li>
            <li className="footer__li">
              <Link>
                <ion-icon name="logo-linkedin"></ion-icon> Linkedin
              </Link>
            </li>
            <li className="footer__li">
              <Link>
                <ion-icon name="logo-whatsapp"></ion-icon> Whatsapp
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__div--2">
          <h4 className="footer__listTitle">Navigation</h4>
          <nav className="footer__nav">
            <Link to={"#"} className="footer__nav__a">
              Home
            </Link>
            <Link to={"#"} className="footer__nav__a">
              About
            </Link>
            <Link to={"#"} className="footer__nav__a">
              Projects
            </Link>
            <Link to={"#"} className="footer__nav__a">
              Skills
            </Link>
            <Link to={"#"} className="footer__nav__a">
              Blog
            </Link>
            <Link to={"#"} className="footer__nav__a">
              Contact
            </Link>
          </nav>
        </div>
        <div className="footer__div--3">
          <Link to={"/"} className="header__logoLink">
            <img className="header__logo" src="jvs-logo.svg" alt="JOÃO SILVA" />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
