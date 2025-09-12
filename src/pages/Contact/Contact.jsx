import { Link } from "react-router-dom";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    subject: "",
    mailText: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const sendEmailResponse = await fetch(
        "https://portfolio-api-jet-seven.vercel.app/api/sendEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formObject),
        }
      );
      if (sendEmailResponse.ok) {
        console.log("E-mail enviado com sucesso.");
      } else {
        console.error("Erro ao enviar e-mail:", await sendEmailResponse.text());
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
    alert("Form submitted!");
  };

  return (
    <section className="contactSection" id="contact">
      <h2 className="experienceSection__title">
        Contact Me <ion-icon name="mail-unread"></ion-icon>
      </h2>
      <form onSubmit={(e) => handleSubmit(e)} className="contactSection__form">
        <label className="contactSection__inputGroup" htmlFor="name">
          Nome
          <div>
            <ion-icon name="person-outline"></ion-icon>
            <input
              type="text"
              placeholder="Digite seu nome"
              id="name"
              name="name"
              value={formObject.name}
              onChange={(e) =>
                setFormObject({ ...formObject, name: e.target.value })
              }
              required
            />
          </div>
        </label>

        <label className="contactSection__inputGroup" htmlFor="email">
          Email
          <div>
            <ion-icon name="mail-outline"></ion-icon>
            <input
              type="email"
              placeholder="Digite seu email"
              id="email"
              name="email"
              value={formObject.email}
              onChange={(e) =>
                setFormObject({ ...formObject, email: e.target.value })
              }
              required
            />
          </div>
        </label>

        <label className="contactSection__inputGroup" htmlFor="subject">
          Assunto
          <div>
            <ion-icon name="chatbox-ellipses-outline"></ion-icon>
            <input
              type="text"
              placeholder="Digite o assunto"
              id="subject"
              name="subject"
              value={formObject.subject}
              onChange={(e) =>
                setFormObject({ ...formObject, subject: e.target.value })
              }
              required
            />
          </div>
        </label>

        <label className="contactSection__inputGroup" htmlFor="mailText">
          Assunto
          <div>
            <textarea
              name="mailText"
              id="mailText"
              cols="30"
              rows="5"
              placeholder="Digite sua menssagem"
              value={formObject.mailText}
              onChange={(e) =>
                setFormObject({ ...formObject, mailText: e.target.value })
              }
              required
            ></textarea>
          </div>
        </label>
        <button className="contactSection__submitBtn" type="submit">
          Enviar
        </button>
      </form>
      <div className="contactSection__div--2">
        <a
          href={"https://linkedin.com/in/joão-vitor-dev"}
          target="_blank"
          className="contactSection__linkCard"
          style={{ "--hover-color": "#0e76a8 " }}
        >
          <ion-icon name="logo-linkedin"></ion-icon>
          <p className="contactSection__linkText">Linkedin</p>
        </a>
        <a
          href={"https://github.com/jvs-dev"}
          target="_blank"
          className="contactSection__linkCard"
          style={{ "--hover-color": "#000 " }}
        >
          <ion-icon name="logo-github"></ion-icon>
          <p className="contactSection__linkText">Github</p>
        </a>
        <a
          href={"https://wa.me/71982451668"}
          target="_blank"
          className="contactSection__linkCard"
          style={{ "--hover-color": "#25D366 " }}
        >
          <ion-icon name="logo-whatsapp"></ion-icon>
          <p className="contactSection__linkText">Whatsapp</p>
        </a>
        <a
          href={"https://www.instagram.com/jvs.dev"}
          target="_blank"
          className="contactSection__linkCard"
          style={{
            "--hover-color":
              "linear-gradient(45deg, #ffdf9e, #ffc273, #e56969, #c1558b,#8a49a1)",
          }}
        >
          <ion-icon name="logo-instagram"></ion-icon>
          <p className="contactSection__linkText">Instagram</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
