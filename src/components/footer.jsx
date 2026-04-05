import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footerGrid">
      <div className="footerBrand">
        <p className="footerName">Jocelyn Heredia</p>
        <p className="footerTagline">Frontend Developer · UI/UX Designer</p>
        <p className="footerTagline">Designed & Built by Jocelyn Heredia</p>
      </div>

        <div className="footerNav">
          <p className="footerLabel">Explore</p>
          <Link to="/">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footerSocial">
          <p className="footerLabel">Connect</p>
          <a href="mailto:jocelynheredia018@gmail.com">Email</a>
          <a href="https://linkedin.com/in/jocelynheredia18" target="_blank">LinkedIn</a>
          <a href="https://github.com/Jocelyn18c" target="_blank">GitHub</a>
        </div>
      </div>

    </footer>
  );
}