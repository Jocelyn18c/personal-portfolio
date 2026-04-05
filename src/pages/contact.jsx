import "../styles/contact.css";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  useScrollReveal();

  return (
    <>
      <section className="contact">
        <div className="contactContainer">
          <h1 className="reveal-on-scroll">Let's talk</h1>
          <p className="contactSubtitle reveal-on-scroll delay-1">
            I'm always interested in new opportunities and meaningful projects.
            Reach out anytime.
          </p>
          <div className="contactLinks reveal-on-scroll delay-2">
            <a href="mailto:jocelynheredia018@gmail.com">Email</a>
            <a href="https://linkedin.com/in/jocelynheredia18" target="_blank">LinkedIn</a>
            <a href="https://github.com/Jocelyn18c" target="_blank">GitHub</a>
          </div>
          <p className="contactNote reveal-on-scroll delay-3">
            I typically respond within 24 hours. For urgent inquiries, LinkedIn is best.
          </p>
        </div>
      </section>
    </>
  );
}