function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand-wrap">
          <a href="/#home" className="footer-brand">
            Aditya Jena
          </a>
          <p className="footer-tagline">
            Computer science student building practical software to solve real problems.
          </p>
        </div>

        <div className="footer-nav-wrap">
          <div className="footer-links">
            <a href="/#home">Home</a>
            <a href="/#about">About</a>
            <a href="/#skills">Skills</a>
            <a href="/#projects">Projects</a>
            <a
              href="https://github.com/adityajena-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span className="arrow-ext" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aditya Jena. Built with React & Vite.</p>
        <a href="#home" className="back-to-top">
          Back to top <span className="arrow-up" aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;