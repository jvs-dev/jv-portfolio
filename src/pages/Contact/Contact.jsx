import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contactSection">
      <h2 className="experienceSection__title">
        Contact Me <ion-icon name="mail-unread"></ion-icon>
      </h2>
      <form action="" className="contactSection__form">
        <label className="contactSection__inputGroup" htmlFor="">
          Nome
          <div>
            <ion-icon name="person-outline"></ion-icon>
            <input type="text" placeholder="Digite seu nome" />
          </div>
        </label>

        <label className="contactSection__inputGroup" htmlFor="">
          Email
          <div>
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" placeholder="Digite seu email" />
          </div>
        </label>

        <label className="contactSection__inputGroup" htmlFor="">
          Assunto
          <div>
            <ion-icon name="chatbox-ellipses-outline"></ion-icon>
            <input type="text" placeholder="Digite o assunto" />
          </div>
        </label>

        <label className="contactSection__inputGroup" htmlFor="">
          Assunto
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Digite sua menssagem"
            ></textarea>
          </div>
        </label>
        <button className="contactSection__submitBtn" type="submit">
          Enviar
        </button>
      </form>
      <div className="contactSection__div--2">
        <Link
          to={"#"}
          className="contactSection__linkCard"
          style={{ "--hover-color": "#0e76a8 " }}
        >
          <ion-icon name="logo-linkedin"></ion-icon>
          <p className="contactSection__linkText">Linkedin</p>
        </Link>
        <Link
          to={"#"}
          className="contactSection__linkCard"
          style={{ "--hover-color": "#000 " }}
        >
          <ion-icon name="logo-github"></ion-icon>
          <p className="contactSection__linkText">Github</p>
        </Link>
        <Link
          to={"#"}
          className="contactSection__linkCard"
          style={{ "--hover-color": "#25D366 " }}
        >
          <ion-icon name="logo-whatsapp"></ion-icon>
          <p className="contactSection__linkText">Whatsapp</p>
        </Link>
        <Link
          to={"#"}
          className="contactSection__linkCard"
          style={{
            "--hover-color":
              "linear-gradient(45deg, #ffdf9e, #ffc273, #e56969, #c1558b,#8a49a1)",
          }}
        >
          <ion-icon name="logo-instagram"></ion-icon>
          <p className="contactSection__linkText">Instagram</p>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
