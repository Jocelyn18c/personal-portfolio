import "../styles/home.css";
import skyline  from "../assets/chicago@night.pdf";
import milagro  from "../assets/corazon en diseño.pdf";
import selfie   from "../assets/me.pdf";
import food     from "../assets/coffeshop.pdf";
import drinks   from "../assets/bluebottle.pdf";
import exploring from "../assets/exploring.pdf";
import hciDepaul from "../assets/HCI:DePaul.pdf";
import ingArte from "../assets/ingeniería+arte.pdf";
import power from "../assets/powered.pdf";
import coffee from "../assets/coffee.png";
import portrait from "../assets/me.jpg";
import matcha from "../assets/matcha.png";
import grad from "../assets/graduation.jpg";
import lincoln from "../assets/lincolnpark.jpeg";
import hardware from "../assets/hardware.png";
import useScrollReveal from "../hooks/useScrollReveal";


export default function Home() {
  useScrollReveal();

  return (
    <>

      <section className="bento-hero" id="home">
        <div className="bento-left">
          <h1>Jocelyn<br />Heredia</h1>
          <div className="bento-role">
            <img src={hciDepaul} alt="HCI DePaul" />
          </div>
        </div>


        <div className="bento-grid">
          <div className="portrait-card">
            <img src={selfie} alt="me" />
          </div>
          <div className="exploring-card">
            <img src={exploring} alt="exploring" />
          </div>
          <div className="text-bubble">
            <img src={power} alt="powered" />
          </div>
          <div className="food-card">
            <img src={food} alt="coffeeshop" />
          </div>
          <div className="chicago-card">
            <img src={skyline} alt="chicago" />
          </div>
          <div className="blue-bottle-card">
            <img src={drinks} alt="bluebottle" />
          </div>
          <div className="corazon-card">
            <img src={milagro} alt="corazon" />
          </div>
          <div className="inge-card">
            <img src={ingArte} alt="ingeniería + arte" />
          </div>
          <div className="grad-card">
            <img src={grad} alt="graduation" />
          </div>
          <div className="lincoln-card">
            <img src={lincoln} alt="lincolnpark" />
        </div>
        <div className="hardware-card">
            <img src={hardware} alt="hardware" />
        </div>
        </div>
      </section>


      <div className="about-wrapper" id="about">
        <section className="about">
          <h2 className="reveal-on-scroll">About Me</h2>
          <p className="reveal-on-scroll delay-1"><em>Hi, I'm Jocelyn Heredia!</em></p>
          <p className="reveal-on-scroll delay-2">I recently graduated with a B.S. in Computer Engineering and a minor in Mathematics from University of Illinois Chicago (UIC), and I'll be starting my M.S. in Human-Computer Interaction at DePaul this fall 2026.</p>
          <p className="reveal-on-scroll delay-3">I'm passionate about building thoughtful, intuitive digital experiences especially at the intersection of front-end development and UX—where clean code meets intentional design.</p>
          <p className="reveal-on-scroll delay-4">I value simplicity, structure, and collaboration, and I'm constantly pushing myself to grow both technically and personally.</p>
          <p className="reveal-on-scroll delay-4">You'll usually find me refining ideas over coffee whether it's debugging code, designing interfaces, or planning my next big goal.</p>
        </section>

        <div className="aboutRight">
          <div className="collage">
            <div className="photo photoFood">
              <img src={coffee} alt="coffee" />
            </div>
            <div className="photo photoSelfie polaroid">
              <img src={portrait} alt="me" />
            </div>
            <div className="photo photoDrinks">
              <img src={matcha} alt="matcha" />
            </div>
          </div>
        </div>
      </div>

      <section className="skills" id="skills">
        <h2 className="reveal-on-scroll">Technical Skills</h2>
        <div className="skillsGrid">
          <div className="reveal-on-scroll delay-1">
            <h3>Languages</h3>
            <div className="skillTags">
              <span>HTML/CSS</span><span>JavaScript</span>
              <span>TypeScript</span><span>Java</span>
              <span>SQL</span><span>Python</span>
              <span>R</span><span>C/C++</span>
            </div>
          </div>
          <div className="reveal-on-scroll delay-2">
            <h3>Tools & Frameworks</h3>
            <div className="skillTags">
              <span>Vite/React</span><span>VS Code</span>
              <span>GitHub</span><span>Git</span><span>Figma</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

