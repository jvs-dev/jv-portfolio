import React from "react";
import "./MyHistory.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import MusicButton from "../../components/MusicButton/MusicButton";
import { useLanguage } from "../../contexts/LanguageContext";
import CertificateModal from "../../components/CertificateModal/CertificateModal";

const MyHistory = () => {
  const { t } = useLanguage();
  const [certifiesShow, setCertifiesShow] = React.useState(4);
  const [selectedCertificate, setSelectedCertificate] = React.useState(null);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    scrollToTop();
  }, []);
  const historys = [
    {
      year: "2025",
      title: t('myHistory.fordEnter.title'),
      description: t('myHistory.fordEnter.description'),
      src: "./historyPhotos/photo1.jpeg",
      imgAlt: "Turma Ford Enter 3º Edital",
    },
    {
      year: "2025",
      title: t('myHistory.nasaChallenge.title'),
      description: t('myHistory.nasaChallenge.description'),
      src: "./historyPhotos/photo3.jpg",
      imgAlt: "Nasa Space Apps Challenge - Time Ford Enter",
    },
    {
      year: "2025",
      title: t('myHistory.circularTech.title'),
      description: t('myHistory.circularTech.description'),
      src: "./historyPhotos/photo4.jpg",
      imgAlt: "Circular Tech Skills 2025 - Atuação direta na organização e credenciamento.",
    },
    {
      year: "2024",
      title: t('myHistory.cubosAcademy.title'),
      description: t('myHistory.cubosAcademy.description'),
      src: "./historyPhotos/photo2.jpeg",
      imgAlt: "Mercado Livre + Cubos Academy - Vivence Beta Hub",
    },
  ];

  const certifies = [
    {
      title: "oficina de preparaçao integral para o mundo do trabalho",
      src: "./certifies/c1.png",
      date: "13/06/2025",
    },
    {
      title: "Desenvolvimento de Software - Front-end",
      src: "./certifies/c41.png",
      date: "11/03/2025",
    },
    {
      title: "Imersão Beta Hub by Mercado Livre",
      src: "./certifies/c21.png",
      date: "07/02/2024",
    },
    {
      title: "trilha Fundamentar do Discover",
      src: "./certifies/c25.png",
      date: "13/01/2023",
    },
    {
      title: "técnico em desenvolvimento de sistemas, eixo tecnológico informação e comunicação",
      src: "./certifies/c20.png",
      date: "03/09/2025",
    },
    {
      title: "react: estilize componentes com styled components e manipule arquivos estáticos",
      src: "./certifies/c2.png",
      date: "12/08/2025",
    },
    {
      title: "",
      src: "./certifies/c3.png",
      date: "",
    },
    {
      title: "",
      src: "./certifies/c4.png",
      date: "",
    },
    {
      title: "",
      src: "./certifies/c5.png",
      date: "",
    },
    {
      title: "",
      src: "./certifies/c6.png",
      date: "",
    },
    {
      title: "",
      src: "./certifies/c7.png",
      date: "",
    },
    {
      title: "",
      src: "./certifies/c8.png",
      date: "",
    },
    {
      title: "",
      src: "./certifies/c9.png",
      date: "",
    },
    {
      title: "",
      src: "./certifies/c10.png",
      date: "",
    },
    {
      title: "",
      src: "./certifies/c11.png",
      date: "",
    },
    {
      title: "",
      src: "./certifies/c12.png",
      date: "",
    },
    {
      title: "",
      src: "./certifies/c13.png",
      date: "",
    },
    {
      title: "",
      src: "./certifies/c14.png",
      date: "",
    },
    {
      title: "",
      src: "./certifies/c22.png",
      date: "",
    },
    {
      title: "",
      src: "./certifies/c27.png",
      date: "",
    },
    {
      title: "",
      src: "./certifies/c28.png",
      date: "",
    },
    {
      title: "",
      src: "./certifies/c30.png",
      date: "",
    },
    {
      title: "",
      src: "./certifies/c35.png",
      date: "",
    },
    {
      title: "",
      src: "./certifies/c36.png",
      date: "",
    },
    {
      title: "",
      src: "./certifies/c37.png",
      date: "",
    },
  ];

  const openCertificateModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <main className="main">
      <div className="homeTopLine"></div>
      <Header />
      <section className="historySection">
        <div className="historySection__div--1">
          <div className="historySection__div--2">
            <h1 className="history home__title">{t('myHistory.title')}</h1>
            <h1 className="history home__title--2">{t('myHistory.subtitle')}</h1>
            <p className="historySection__myResume">
              {t('myHistory.description')}
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
          {t('myHistory.certificatesTitle')}<ion-icon name="school"></ion-icon>
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
                      onClick={() => openCertificateModal(obj)}
                    />
                    <button
                      className="certifyCard__expandBtn"
                      onClick={() => openCertificateModal(obj)}
                      title="Expandir certificado"
                    >
                      <ion-icon name="expand-outline"></ion-icon>
                    </button>
                  </div>
                  <p className="certifyCard__title">{obj.title}</p>
                  <p className="certifyCard__date">{obj.date}</p>
                </div>
              )
          )}
        </div>
        {certifiesShow < certifies.length && (
          <button
            type="button"
            className="certifiesDiv__viewMoreBtn"
            onClick={() => setCertifiesShow(certifiesShow + 4)}
          >
            {t('myHistory.seeMore')}
          </button>
        )}
      </section>
      <MusicButton />
      <Footer />

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={closeCertificateModal}
      />
    </main>
  );
};

export default MyHistory;