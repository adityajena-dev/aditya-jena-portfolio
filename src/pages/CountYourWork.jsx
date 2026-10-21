import { Link } from "react-router-dom";
import "../pages CSS/Common.css";

function CountYourWork() {
  return (
    <main className="case-study-page">
      <div className="case-study-header-container">
        <nav className="case-study-nav" aria-label="Breadcrumb">
          <Link to="/#projects" className="back-link">
            <span className="arrow-back" aria-hidden="true">←</span> Back to portfolio
          </Link>
        </nav>

        <header className="case-study-hero">
          <div className="case-study-hero-content">
            <p className="eyebrow">PROJECT CASE STUDY</p>
            <h1 className="case-study-title">Count Your Work</h1>
            <p className="case-study-intro">
              A simple work-tracking app built to make counting batches and reviewing completed work easier, with offline support.
            </p>

            <div className="case-study-actions">
              <a
                href="https://count-your-work.vercel.app"
                className="button button-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <span className="arrow-ext" aria-hidden="true">↗</span>
              </a>
              <a
                href="https://github.com/adityajena-dev/Count-Your-Work"
                className="button button-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository <span className="arrow-ext" aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>LocalStorage</span>
              <span>Service Worker</span>
            </div>
          </div>

          <div className="case-study-hero-media">
            <img
              src="/projects/count-your-work.png"
              alt="Count Your Work application preview"
              className="case-study-image"
              loading="eager"
            />
          </div>
        </header>
      </div>

      <div className="case-study-body-container">
        {/* 01. Why I built this project */}
        <section className="case-study-section">
          <h2><span className="section-num">01.</span> Why I built this project</h2>
          <p>
            I wanted to build a practical application for my mother to help her track blouse-work batches
            and maintain a history of her work. Rather than building a project just for practice, I wanted
            to solve a real problem for someone in my family.
          </p>
        </section>

        {/* 02. The problem */}
        <section className="case-study-section">
          <h2><span className="section-num">02.</span> The problem</h2>
          <p>
            Keeping track of work batches and checking previous records can become inconvenient without a simple,
            organized system. When working through multiple batches by hand, paper notes or memory are easy to misplace.
            The application needed to be straightforward, fast to use, and reliable even without an internet connection.
          </p>
        </section>

        {/* 03. What I implemented */}
        <section className="case-study-section">
          <h2><span className="section-num">03.</span> What I implemented</h2>
          <ul className="case-study-list">
            <li>A counter for recording completed batches with single-click operation.</li>
            <li>A confirmation step before saving a count to prevent accidental entries.</li>
            <li>Work history with readable date and time timestamps.</li>
            <li>Monthly grouping and collapsible history to keep records organized.</li>
            <li>LocalStorage to retain records in the browser across page reloads.</li>
            <li>Offline caching through a service worker so the app works without Wi-Fi.</li>
            <li>A responsive layout tested on mobile screens.</li>
          </ul>
        </section>

        {/* 04. What I learned */}
        <section className="case-study-section">
          <h2><span className="section-num">04.</span> What I learned</h2>
          <p>
            Building this application helped me practice fundamental JavaScript logic, DOM manipulation, browser storage,
            and date/time formatting.
          </p>
          <p>
            One key challenge was ensuring that saved records remained available after refreshing the page and that
            the service worker cached assets correctly for offline use. Testing the tool with my mother also taught me
            the value of simple, clear buttons and avoiding unnecessary clicks during manual work.
          </p>
        </section>

        {/* 05. Future improvements */}
        <section className="case-study-section">
          <h2><span className="section-num">05.</span> Future improvements</h2>
          <p>
            In future updates, I would like to explore data export, record editing with an
            adjustment history, and lightweight summaries based on feedback from actual daily use.
          </p>
        </section>

        {/* Navigation back and project actions */}
        <div className="case-study-footer-nav">
          <Link to="/#projects" className="button button-ghost back-projects-btn">
            <span className="arrow-back" aria-hidden="true">←</span> Back to projects
          </Link>
          <div className="case-study-footer-actions">
            <a
              href="https://github.com/adityajena-dev/Count-Your-Work"
              className="button button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository <span className="arrow-ext" aria-hidden="true">↗</span>
            </a>
            <a
              href="https://count-your-work.vercel.app"
              className="button button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo <span className="arrow-ext" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CountYourWork;