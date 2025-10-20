import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import CubesAnimated from "../../components/CubesAnimated/CubesAnimated";
import MusicButton from "../../components/MusicButton/MusicButton";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Footer from "../../components/Footer/Footer";
import { useLanguage } from "../../contexts/LanguageContext";
import { trackButtonClick } from "../../utils/buttonTracker";

const Home = () => {
  const { t, language } = useLanguage();
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);
  const [firstLineComplete, setFirstLineComplete] = useState(false);
  const [secondLineComplete, setSecondLineComplete] = useState(false);
  const [thirdLineComplete, setThirdLineComplete] = useState(false);
  
  // Texts for typing animation
  const firstLineText = "Hi there, I'm";
  const secondLineText = "João Vitor Santana";
  const thirdLineText = t('home.heroTitle');
  
  // State for typed texts
  const [typedFirstLine, setTypedFirstLine] = useState('');
  const [typedSecondLine, setTypedSecondLine] = useState('');
  const [typedThirdLine, setTypedThirdLine] = useState('');
  
  // Typing effect for first line
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= firstLineText.length) {
        setTypedFirstLine(firstLineText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setFirstLineComplete(true);
        // Start second line animation after first line is complete
        setShowSecondLine(true);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);
  
  // Typing effect for second line
  useEffect(() => {
    if (!showSecondLine) return;
    
    let index = 0;
    const timer = setInterval(() => {
      if (index <= secondLineText.length) {
        setTypedSecondLine(secondLineText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setSecondLineComplete(true);
        // Start third line animation after second line is complete
        setShowThirdLine(true);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, [showSecondLine]);
  
  // Typing effect for third line
  useEffect(() => {
    if (!showThirdLine) return;
    
    let index = 0;
    const timer = setInterval(() => {
      if (index <= thirdLineText.length) {
        setTypedThirdLine(thirdLineText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setThirdLineComplete(true);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, [showThirdLine, thirdLineText]);

  return (
    <main className="main">
      <div className="homeTopLine"></div>
      <Header />
      <section className="homeSection" id="home">        
        <div className="background-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
          <div className="circle circle-5"></div>
        </div>
        <img className="home__patternSvg" src="/backgrountPaternSvg.svg" />
        <h1 className="home__title">
          {typedFirstLine}
          {!firstLineComplete && <span className="cursor"></span>}
        </h1>
        {showSecondLine && (
          <h1 className="home__title--2">
            {typedSecondLine}
            {!secondLineComplete && <span className="cursor"></span>}
          </h1>
        )}
        {showThirdLine && (
          <h2 className="home__title--3">
            {typedThirdLine}
            {!thirdLineComplete && <span className="cursor"></span>}
          </h2>
        )}
        <div className="home__div--1">
          <a className="home__button" href="https://linkedin.com/in/joão-vitor-dev" target="_blank"
            onClick={() => trackButtonClick("LinkedIn Button")}>
            <ion-icon name="logo-linkedin"></ion-icon>
            Linkedin
          </a>
          <a className="home__button button--2" href={"https://linktr.ee/jvs_dev"} target="_blank"
            onClick={() => trackButtonClick("Linktree Button")}>
            {t('home.heroCta')}
          </a>
        </div>        
        <span className="home__downArrow">
          <ion-icon name="chevron-down-outline"></ion-icon>
        </span>
      </section>
      <CubesAnimated />
      <MusicButton />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;