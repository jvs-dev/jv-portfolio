import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useLanguage } from "../../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="footer__topLine"></div>
      <footer className="footer">
        <div className="footer__div--1">
          <h3 className="footer__title">{t('footer.thanks')}</h3>
          <p className="footer__copy">
            {t('footer.rights').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className="footer__div--4">
          <Link to={"/"} className="header__logoLink">
            <img className="header__logo" src="jvs-logo.svg" alt="JOÃO SILVA" />
          </Link>
          {/* Language Toggle Button */}
          <LanguageToggle />
        </div>
      </footer>
    </>
  );
};

export default Footer;