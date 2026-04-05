import "../styles/resume.css";

export default function Resume() {
  return (
    <div className="resumeContainer">
      <h1>Resume</h1>
      <p>Here's my full resume! Feel free to reach out with any questions.</p>
      <a href="/resume.pdf" download className="downloadBtn">
        Download Resume ↓
      </a>
      <div className="resumePreview">
        <iframe
          src="/resume.pdf"
          title="Jocelyn Heredia Resume"
          className="resumeFrame"
        />
      </div>
    </div>
  );
}