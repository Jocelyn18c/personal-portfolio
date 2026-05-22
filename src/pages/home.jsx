import bg from "../assets/gradient.jpg";
import "../styles/home.css";
import food from "../assets/coffee.png";
import selfie from "../assets/me.jpg";
import drinks from "../assets/matcha.png";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();
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
          <p className="subtitle reveal delay1">UX Engineer · MS HCI Incoming</p>
          <p className="subtitle reveal delay2">Frontend Developer · UI/UX Designer</p>
          <p className="tagline reveal delay3">Creating simple, thoughtful digital systems</p>
        </div>
      </div>

      <section className="about" id="about">
        <div className="aboutLeft">
          <h2 className="reveal-on-scroll">About Me</h2>
          <p className="reveal-on-scroll delay-1"><em>Hi, I'm Jocelyn Heredia!</em></p>
          <p className="reveal-on-scroll delay-2">I recently graduated with a B.S. in Computer Engineering and a minor in Mathematics from University of Illinois Chicago (UIC), and I'll be starting my M.S. in Human-Computer Interaction at DePaul this fall. </p>
          <p className="reveal-on-scroll delay-3">I'm passionate about building thoughtful, intuitive digital experiences especially at the intersection of front-end development and UX, where clean code meets intentional design. </p>
          <p className="reveal-on-scroll delay-4">I value simplicity, structure, and collaboration, and I'm constantly pushing myself to grow both technically and personally.</p>
          <p className="reveal-on-scroll delay-4">You'll usually find me refining ideas over coffee whether it's debugging code, designing interfaces, or planning my next big goal.</p>
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
        <h2 className="reveal-on-scroll">Technical Skills</h2>
        <div className="skillsGrid">
          <div className="reveal-on-scroll delay-1">
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
          <div className="reveal-on-scroll delay-2">
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