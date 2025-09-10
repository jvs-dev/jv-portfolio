import React from "react";
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

const Home = () => {
  return (
    <main className="main">
      <div className="homeTopLine"></div>
      <Header />
      <section className="homeSection">
        <img className="home__patternSvg" src="/backgrountPaternSvg.svg" />
        <h1 className="home__title">Hi there, I'm</h1>
        <h1 className="home__title--2">João Vitor Santana</h1>
        <h2 className="home__title--3">Full-stack developer</h2>
        <div className="home__div--1">
          <Link className="home__button" to={"#"}>
            <ion-icon name="logo-linkedin"></ion-icon>
            Linkedin
          </Link>
          <Link className="home__button button--2" to={"#"}>
            Talk Me
          </Link>
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
