import { useState } from "react";
import "../styles/projects.css";

const projects = [
  {
    title: "OpenCall",
    badge: "🥈 2nd Place — SparkHacks 2026",
    stats: [{ label: "built in", value: "24hrs" }, { label: "of 200 teams", value: "2nd" }],
    description:
      "A match-based talent discovery platform for film & TV. Connects writers, actors, and producers through creative alignment — not follower counts. Designed end-to-end in Figma and built with React and TypeScript.",
    tags: ["React", "TypeScript", "Figma", "UX Design"],
    links: [
      { label: "GitHub", url: "https://github.com/beyinah7/OpencallSparkhacks" },
      { label: "Devpost", url: "https://devpost.com/software/open-call" },
    ],
  },
  {
    title: "Auffline",
    badge: "🎓 Senior Capstone",
    stats: null,
    description:
      "An embedded offline music player with a fully custom graphical UI built in C/C++ on a Teensy 4.1. Features file explorer, playlist management, album browsing, and playback controls — music stored and accessed via SD card over USB MTP.",
    tags: ["C/C++", "Teensy 4.1", "ESP32", "UI Design", "ILI9341"],
    links: [],
  },
  {
    title: "TechnoLuz",
    logo: "/technoluna-logo.png",
    badge: null,
    stats: null,
    description:
    "A bilingual ed-tech platform designed to inspire Hispanic K–8 students to explore STEM and envision a future in college. Features interactive lessons, Hispanic role model profiles, and light coding activities for students plus a teacher dashboard with progress tracking and language toggling between English and Spanish.", 
    tags: ["React", "Vite", "CSS", "Figma"],
    links: [],
  },
  {
    title: "OutlookSpark",
    badge: null,
    stats: null,
    description:
      "A Chrome extension that overhauls Microsoft Outlook's UI with a cleaner, more intuitive interface and keyword-based email categorization — no API access or OAuth setup required.",
    tags: ["HTML/CSS", "JavaScript", "Chrome Extension"],
    links: [
      { label: "Devpost", url: "https://devpost.com/software/outlooksparks" },
    ],
  },
  {
    title: "Personal Portfolio",
    badge: null,
    stats: null,
    description:
      "This site! Designed and built from scratch with a focus on smooth animations, intentional typography, and a cohesive visual identity.",
    tags: ["React", "Vite", "CSS", "Figma"],
    links: [],
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === projects.length - 1 ? 0 : i + 1));

  const getPosition = (index) => {
    const diff = index - current;
    if (diff === 0) return "active";
    if (diff === 1 || diff === -(projects.length - 1)) return "next";
    if (diff === -1 || diff === projects.length - 1) return "prev";
    return "hidden";
  }; 

  return (
    <div className="projects">
      <h2>Projects</h2>

      <div className="carouselScene">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`projectCard ${getPosition(i)}`}
            onClick={() => {
              if (getPosition(i) === "next") next();
              if (getPosition(i) === "prev") prev();
            }}
          >
            <div className="cardAccent" />

            <div className="projectHeader">
            <div className="projectTitleRow">
            {project.logo && (<img src={project.logo} alt="" className="projectLogo" />)}
            <h3>{project.title}</h3>
              {project.badge && <span className="badge">{project.badge}</span>}
            </div>
            </div>

            {project.stats && (
              <div className="statRow">
                {project.stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <strong>{s.value}</strong>
                    {s.label}
                  </div>
                ))}
              </div>
            )}

            <p>{project.description}</p>

            <div className="projectTags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {project.links.length > 0 && (
              <>
                <div className="linkDivider">
                  <hr /><span>links</span><hr />
                </div>
                <div className="projectLinks">
                  {project.links.map((link) => (
                    <a 
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="projectLinkBtn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}

        <button className="carouselBtn left" onClick={prev}>‹</button>
        <button className="carouselBtn right" onClick={next}>›</button>
      </div>

      <div className="carouselDots">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}