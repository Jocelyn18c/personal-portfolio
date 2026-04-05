import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import Projects from "./pages/projects";

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const scroll = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setWidth((scroll / height) * 100);
    };
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div className="scroll-progress" style={{ width: `${width}%` }} />;
}

function Navbar() {
  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 80 || currentScrollY < lastScrollY.current) {
        nav.classList.remove("navbar--hidden");
      } else {
        nav.classList.add("navbar--hidden");
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="nav-brand">Jocelyn Heredia</div>
      <div className="nav-links">
        <a href="/#about" className={location.pathname === "/" ? "active" : ""}>About</a>
        <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link>
        <Link to="/resume" className={location.pathname === "/resume" ? "active" : ""}>Resume</Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Me</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;