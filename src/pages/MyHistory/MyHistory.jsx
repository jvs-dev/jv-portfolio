import React from "react";
import "./MyHistory.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import MusicButton from "../../components/MusicButton/MusicButton";

const MyHistory = () => {
  const [certifiesShow, setCertifiesShow] = React.useState(4);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    scrollToTop();
  }, []);
  const historys = [
    {
      year: "2025",
      title: "Ford Enter",
      description:
        "Lorem ipsum dolor sit amet. Et placeat doloremque quo quaerat labore ut alias dolorem aut galisum quia a explicabo laborum aut nulla officiis sit ullam error. At laboriosam tempora At veniam perferendis ut repellat tempora! Aut culpa explicabo id Quis rerum ad sequi quis ut veniam vero ut odio odio non rerum tempore.",
      src: "https://media.licdn.com/dms/image/v2/D4D22AQFeuheWhHyZQw/feedshare-shrink_800/B4DZdneDGfGUAg-/0/1749787621503?e=1760572800&v=beta&t=7jMRiNmB9VCTYv94J6KsL0Dr2xlNhQlXVmZNirILbF0",
      imgAlt: "Turma Ford Enter 3º Edital",
    },
    {
      year: "2024",
      title: "Cubos Academy",
      description:
        "Lorem ipsum dolor sit amet. Et placeat doloremque quo quaerat labore ut alias dolorem aut galisum quia a explicabo laborum aut nulla officiis sit ullam error. At laboriosam tempora At veniam perferendis ut repellat tempora! Aut culpa explicabo id Quis rerum ad sequi quis ut veniam vero ut odio odio non rerum tempore.",
      src: "https://media.licdn.com/dms/image/v2/D4D22AQGKwmE-Ul9hKQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1699070864706?e=1760572800&v=beta&t=r6LXQDaJ3cLmxeqosYsTATb_eO3vUZYHM6kgKJVn4JE",
      imgAlt: "Mercado Livre + Cubos Academy - Vivence Beta Hub",
    },
  ];

  const certifies = [
    {
      title: "React: Desenvolvendo com JavaScript",
      src: "https://media.licdn.com/dms/image/v2/D4D22AQF9vtTsn0C_Qg/feedshare-shrink_2048_1536/B4DZfraE_pGgAw-/0/1752001171988?e=1760572800&v=beta&t=EyINzrN0floJrniWGEuyrqDklkbbMgXPCMfLdAmk4Pw",
      date: "08/07/2025",
    },
  ];

  return (
    <main className="main">
      <div className="homeTopLine"></div>
      <Header />
      <section className="historySection">
        <div className="historySection__div--1">
          <div className="historySection__div--2">
            <h1 className="history home__title">This is</h1>
            <h1 className="history home__title--2">My History</h1>
            <p className="historySection__myResume">
              Lorem ipsum dolor sit amet. Et placeat doloremque quo quaerat
              labore ut alias dolorem aut galisum quia a explicabo laborum aut
              nulla officiis sit ullam error. At laboriosam tempora At veniam
              perferendis ut repellat tempora! Aut culpa explicabo id Quis rerum
              ad sequi quis ut veniam vero ut odio odio non rerum tempore.
            </p>
          </div>
          <div className="historySection__div--3">
            <img
              src="https://avatars.githubusercontent.com/u/94786847?v=4"
              alt="My Photo"
              className="historySection__myPhoto"
            />
          </div>
        </div>
        <div className="historySection__line"></div>
        <div className="historySection__historysDiv">
          {historys.map((obj, index) => (
            <div
              className="historySection__historyCard"
              key={index}
              style={{ flexDirection: index % 2 == 0 ? "row" : "row-reverse" }}
            >
              <div className="historyCard__div--1">
                <img
                  className="historyCard__img"
                  src={obj.src}
                  alt={obj.imgAlt}
                />
                <p className="historyCard__imgDescription">{obj.imgAlt}</p>
              </div>
              <div className="historyCard__div--2">
                <h2 className="historyCard__title">{obj.year}</h2>
                <p className="historyCard__text">
                  <strong style={{ color: "var(--primary-red)" }}>
                    {obj.title}
                  </strong>{" "}
                  - {obj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="experienceSection__title">
          My Certifies<ion-icon name="school"></ion-icon>
        </h2>
        <div className="historySection__certifiesDiv">
          {certifies.map(
            (obj, index) =>
              index < certifiesShow && (
                <div className="historySection__certifyCard" key={index}>
                  <div className="certifyCard__div">
                    <img
                      className="certifyCard__img"
                      src={obj.src}
                      alt={obj.title}
                    />
                  </div>
                  <p className="certifyCard__title">{obj.title}</p>
                  <p className="certifyCard__date">{obj.date}</p>
                </div>
              )
          )}
          {certifiesShow < certifies.length && (
            <button
              type="button"
              className="certifiesDiv__viewMoreBtn"
              onClick={() => setCertifiesShow(certifiesShow + 4)}
            >
              See More
            </button>
          )}
        </div>
      </section>
      <MusicButton />
      <Footer />
    </main>
  );
};

export default MyHistory;
