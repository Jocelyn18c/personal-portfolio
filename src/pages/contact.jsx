import "../styles/contact.css";

export default function Contact() {
  return (
    <>
    <section className="contact">
      <div className="contactContainer">
        <h1>Let's talk</h1>

        <p className="contactSubtitle">
          I'm always interested in new opportunities and meaningful projects.
          Reach out anytime.
        </p>

        <div className="contactLinks">
          <a href="mailto:jocelynheredia018@gmail.com">Email</a>
          <a href="https://linkedin.com/in/jocelynheredia18" target="_blank">LinkedIn</a>
          <a href="https://github.com/jocelynheredia" target="_blank">GitHub</a>
        </div>

        <p className="contactNote">
          I typically respond within 24 hours. For urgent inquiries, LinkedIn is best.
        </p>
      </div>
    </section>
  </>
  );
}