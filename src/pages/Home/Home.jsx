import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import CubesAnimated from "../../components/CubesAnimated/CubesAnimated";
import MusicButton from "../../components/MusicButton/MusicButton";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <main className="main">
      <div className="homeTopLine"></div>
      <Header />
      <section className="homeSection">
        <img className="home__patternSvg" src="/backgrountPaternSvg.svg" />
        <h1 className="home__title">
          I am João Vitor
          <br />
          <span>Full-stack developer</span>
        </h1>
        <p className="home__subTitle">Hire a qualified programmer.</p>
        <Link className="home__button" to={"#"}>
          <ion-icon name="logo-linkedin"></ion-icon>
          See Me On Linkedin
        </Link>
      </section>
      <CubesAnimated />
      <MusicButton />
      <Experience />
      <Projects />
    </main>
  );
};

export default Home;
