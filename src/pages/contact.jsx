import "../styles/contact.css";
import useScrollReveal from "../hooks/useScrollReveal";
import avatar from "../assets/me.png";
import laptopIcon from "../assets/laptop.png";
import paintIcon from "../assets/paint.png";
import matchaIcon from "../assets/strawberry matcha.png";
import headphonesIcon from "../assets/headphones.png";

export default function Contact() {
  useScrollReveal();

  return (
    <section className="contact">
      <div className="contactLayout">

      <div className="contactLeft">
      <div className="avatarWrapper">
        <img src={avatar} alt="Jocelyn cartoon avatar" className="contactAvatar" />
        <img src={laptopIcon} className="floatingIcon icon1" alt="laptop" />
        <img src={matchaIcon} className="floatingIcon icon2" alt="matcha" />
        <img src={paintIcon} className="floatingIcon icon3" alt="paint" />
        <img src={headphonesIcon} className="floatingIcon icon4" alt="headphones" />
      </div>
      </div>
        <div className="contactRight">
          <h1 className="reveal-on-scroll">Let's Talk :)!!</h1>
          <p className="contactSubtitle reveal-on-scroll delay-1">
            I'm always interested in new opportunities and meaningful projects. Reach out anytime.
          </p>
          <div className="contactLinks reveal-on-scroll delay-2">
            <a href="mailto:jocelynheredia018@gmail.com">Email ↗</a>
            <a href="https://linkedin.com/in/jocelynheredia18" target="_blank">LinkedIn ↗</a>
            <a href="https://github.com/Jocelyn18c" target="_blank">GitHub ↗</a>
          </div>
          <p className="contactNote reveal-on-scroll delay-3">
            I typically respond within 24 hours. For urgent inquiries, LinkedIn is best.
          </p>
        </div>
      </div>
    </section>
  );
}