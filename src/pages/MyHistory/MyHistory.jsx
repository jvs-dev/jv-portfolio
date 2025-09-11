import React from "react";
import "./MyHistory.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import MusicButton from "../../components/MusicButton/MusicButton";

const MyHistory = () => {
  return (
    <main className="main">
      <div className="homeTopLine"></div>
      <Header />
      <section className="historySection">
        
      </section>
      <MusicButton />
      <Footer />
    </main>
  );
};

export default MyHistory;
