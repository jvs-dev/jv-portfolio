import { Link } from "react-router-dom";
import "./Contact.css";
import { useState } from "react";
import Notification from "../../components/Notification/Notification";
import { useLanguage } from "../../contexts/LanguageContext";

const Contact = () => {
  const { t, language } = useLanguage();
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    subject: "",
    mailText: "",
  });
  
  const [notification, setNotification] = useState({
    isVisible: false,
    message: "",
    type: "success"
  });

  // Add loading state
  const [isLoading, setIsLoading] = useState(false);

  const showNotification = (message, type = "success") => {
    setNotification({
      isVisible: true,
      message,
      type
    });
    
    // Auto hide notification after 3 seconds
    setTimeout(() => {
      setNotification(prev => ({
        ...prev,
        isVisible: false
      }));
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set loading state
    setIsLoading(true);

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
        showNotification(
          language === 'pt' ? 
          "Mensagem enviada com sucesso!" : 
          "Message sent successfully!", 
          "success"
        );
        // Reset form
        setFormObject({
          name: "",
          email: "",
          subject: "",
          mailText: "",
        });
      } else {
        console.error("Erro ao enviar e-mail:", await sendEmailResponse.text());
        showNotification(
          language === 'pt' ? 
          "Erro ao enviar mensagem. Tente novamente." : 
          "Failed to send message. Please try again.", 
          "error"
        );
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
      showNotification(
        language === 'pt' ? 
        "Erro de conexão. Verifique sua internet." : 
        "Connection error. Please check your internet.", 
        "error"
      );
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };

  return (
    <section className="contactSection" id="contact">
      <h2 className="experienceSection__title">
        {t('contact.title')} <ion-icon name="mail-unread"></ion-icon>
      </h2>
      <form onSubmit={(e) => handleSubmit(e)} className="contactSection__form">
        <label className="contactSection__inputGroup" htmlFor="name">
          {t('contact.nameLabel')}
          <div>
            <ion-icon name="person-outline"></ion-icon>
            <input
              type="text"
              placeholder={t('contact.namePlaceholder')}
              id="name"
              name="name"
              value={formObject.name}
              onChange={(e) =>
                setFormObject({ ...formObject, name: e.target.value })
              }
              required
              // Disable input when loading
              disabled={isLoading}
            />
          </div>
        </label>

        <label className="contactSection__inputGroup" htmlFor="email">
          {t('contact.emailLabel')}
          <div>
            <ion-icon name="mail-outline"></ion-icon>
            <input
              type="email"
              placeholder={t('contact.emailPlaceholder')}
              id="email"
              name="email"
              value={formObject.email}
              onChange={(e) =>
                setFormObject({ ...formObject, email: e.target.value })
              }
              required
              // Disable input when loading
              disabled={isLoading}
            />
          </div>
        </label>

        <label className="contactSection__inputGroup" htmlFor="subject">
          {t('contact.subjectLabel')}
          <div>
            <ion-icon name="chatbox-ellipses-outline"></ion-icon>
            <input
              type="text"
              placeholder={t('contact.subjectPlaceholder')}
              id="subject"
              name="subject"
              value={formObject.subject}
              onChange={(e) =>
                setFormObject({ ...formObject, subject: e.target.value })
              }
              required
              // Disable input when loading
              disabled={isLoading}
            />
          </div>
        </label>

        <label className="contactSection__inputGroup" htmlFor="mailText">
          {t('contact.messageLabel')}
          <div>
            <textarea
              name="mailText"
              id="mailText"
              cols="30"
              rows="5"
              placeholder={t('contact.messagePlaceholder')}
              value={formObject.mailText}
              onChange={(e) =>
                setFormObject({ ...formObject, mailText: e.target.value })
              }
              required
              // Disable textarea when loading
              disabled={isLoading}
            ></textarea>
          </div>
        </label>
        <button 
          className="contactSection__submitBtn" 
          type="submit"
          // Disable button when loading
          disabled={isLoading}
        >
          {/* Show loader or text based on loading state */}
          {isLoading ? (
            <>
              <span className="loader"></span>
              {t('contact.sendingButton')}
            </>
          ) : (
            t('contact.sendButton')
          )}
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
      <Notification 
        message={notification.message}
        isVisible={notification.isVisible}
        type={notification.type}
      />
    </section>
  );
};

export default Contact;