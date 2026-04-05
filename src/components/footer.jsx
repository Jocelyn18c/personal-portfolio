import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-title">Portfolio created by Jocelyn Heredia</p>
        <p className="footer-subtitle">Thank you for visiting my site, take a look at my Resume!</p>
        <Link to="/resume">
          <button className="footer-btn">Resume</button>
        </Link>
      </div>
    </footer>
  );
}