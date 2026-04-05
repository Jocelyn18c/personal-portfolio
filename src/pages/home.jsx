import { useEffect, useRef } from "react";
import bg from "../assets/gradient.jpg";
import "../styles/home.css";
import food from "../assets/coffee.png";
import selfie from "../assets/me.jpg";
import drinks from "../assets/matcha.png";


export default function Home() {
  const heroRef = useRef(null);
  const orbRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const orb = orbRef.current;
    if (!hero || !orb) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      orb.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="hero"
        id="home"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="heroOverlay"></div>

        <div className="heroContent">
        <h1 className="heroTitle"> Jocelyn Heredia </h1>
          <p className="subtitle subtitle reveal delay1">Computer Engineering Student</p>
          <p className="subtitle subtitle reveal delay2">Frontend Developer · UI/UX Enthusiast</p>
          <p className="tagline tagline reveal delay3">Creating simple, thoughtful digital systems</p>
        </div>
      </div>

      <section className="about" id="about">
  <div className="aboutLeft">
    <h2>About Me</h2>
    <p><em>Hi, I'm Jocelyn Heredia!</em></p>
    <p>I'm Computer Engineering student with a minor in Mathematics, passionate about building thoughtful, intuitive digital experiences.</p>
    <p>I'm especially interested in front-end development and data-driven design where clean code meets intentional user experience.</p>
    <p>I value simplicity, structure, and collaboration, and I'm constantly pushing myself to grow both technically and personally.</p>
    <p>You'll usually find me refining ideas over coffee whether it's debugging code, designing interfaces, or planning my next big goal.</p>
  </div>

  <div className="aboutRight">
    <div className="collage">
      <div className="photo photoFood">
        <img src={food} alt="Food" />
      </div>
      <div className="photo photoSelfie polaroid">
        <img src={selfie} alt="Selfie" />
      </div>
      <div className="photo photoDrinks">
        <img src={drinks} alt="Drinks" />
      </div>
    </div>
  </div>
</section>

      <section className="skills" id="skills">
        <h2>Technical Skills</h2>
        <div className="skillsGrid">
          <div>
            <h3>Languages</h3>
            <div className="skillTags">
              <span>HTML/CSS</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>Java</span>
              <span>SQL</span>
              <span>Python</span>
              <span>R</span>
              <span>C/C++</span>
            </div>
          </div>
          <div>
            <h3>Tools & Frameworks</h3>
            <div className="skillTags">
              <span>Vite/React</span>
              <span>VS Code</span>
              <span>GitHub</span>
              <span>Git</span>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}