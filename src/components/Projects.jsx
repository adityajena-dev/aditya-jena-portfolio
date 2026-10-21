import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <p className="eyebrow">WHAT I'VE BUILT</p>
        <h2 className="section-title">My Projects</h2>
      </div>

      <div className="projects-grid">
        {/* Project 01: Count Your Work (Full clickable card linking to Case Study) */}
        <Link
          to="/projects/count-your-work"
          className="project-card project-card-interactive"
          aria-label="View case study for Count Your Work"
        >
          <div className="project-card-header">
            <span className="project-number">PROJECT 01</span>
            <span className="case-study-pill">Case Study <span className="arrow-ext" aria-hidden="true">↗</span></span>
          </div>

          <h3 className="project-title">Count Your Work</h3>
          <p className="project-desc">
            A work-tracking app that helps users count batches and view their work history, with offline access.
          </p>

          <div className="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>LocalStorage</span>
            <span>Service Worker</span>
          </div>
        </Link>

        {/* Project 02: DSA Revision Tracker */}
        <article className="project-card">
          <div className="project-card-header">
            <span className="project-number">PROJECT 02</span>
            <a
              href="https://github.com/adityajena-dev/revision-tracker"
              className="project-link-badge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View repository for DSA Revision Tracker"
            >
              View Repo <span className="arrow-ext" aria-hidden="true">↗</span>
            </a>
          </div>

          <h3 className="project-title">DSA Revision Tracker</h3>
          <p className="project-desc">
            A revision tool to organise DSA topics, track revision progress, and support consistent practice.
          </p>

          <div className="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>LocalStorage</span>
          </div>
        </article>

        {/* Project 03: Blouse Work Planner */}
        <article className="project-card">
          <div className="project-card-header">
            <span className="project-number">PROJECT 03</span>
            <a
              href="https://github.com/adityajena-dev/Work-Tracker"
              className="project-link-badge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View repository for Blouse Work Planner"
            >
              View Repo <span className="arrow-ext" aria-hidden="true">↗</span>
            </a>
          </div>

          <h3 className="project-title">Blouse Work Planner</h3>
          <p className="project-desc">
            A work-planning app designed to manage blouse batches and keep a history of completed work.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>TypeScript</span>
            <span>LocalStorage</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;