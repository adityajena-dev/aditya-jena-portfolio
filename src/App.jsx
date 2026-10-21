import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import CountYourWork from "./pages/CountYourWork";

// Helper component: scrolls smoothly to anchor tags across route changes
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const scroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      // Allow DOM to settle before scrolling
      const timer = setTimeout(scroll, 60);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navRef = useRef(null);

  // Close mobile menu when navigating
  const closeMenu = () => setMenuOpen(false);

  // Close menu when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Close menu when clicking outside navbar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu if viewport is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Gentle pointer shift for floating orbs on desktop
  const handleMouseMove = (e) => {
    if (window.innerWidth <= 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div className="portfolio-app">
      <ScrollToHash />

      {/* Navigation Bar */}
      <header className="site-header">
        <nav ref={navRef} className="navbar" aria-label="Main Navigation">
          <a href="/#home" className="brand" onClick={closeMenu}>
            <img
              src="/favicon.svg"
              alt=""
              className="brand-icon"
              width="30"
              height="30"
              aria-hidden="true"
            />
            <span className="brand-name">Aditya Jena</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>

          {/* Navigation Links */}
          <div
            id="primary-navigation"
            className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}
          >
            <a href="/#about" className="nav-link" onClick={closeMenu}>
              About
            </a>
            <a href="/#skills" className="nav-link" onClick={closeMenu}>
              Skills
            </a>
            <a href="/#projects" className="nav-link" onClick={closeMenu}>
              Projects
            </a>
            <a
              href="https://github.com/adityajena-dev"
              className="nav-link nav-link-github"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              GitHub <span className="arrow-ext" aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <div className="home-layout">
              {/* Hero Section */}
              <main
                id="home"
                className="hero-section"
                onMouseMove={handleMouseMove}
              >
                {/* Floating Decorative Orbs (pure CSS, pointer-events: none) */}
                <div className="hero-orbs-container" aria-hidden="true">
                  <div
                    className="floating-orb orb-violet"
                    style={{
                      transform: `translate3d(${mousePos.x * 24}px, ${mousePos.y * 24}px, 0)`
                    }}
                  />
                  <div
                    className="floating-orb orb-peach"
                    style={{
                      transform: `translate3d(${mousePos.x * -32}px, ${mousePos.y * -32}px, 0)`
                    }}
                  />
                  <div
                    className="floating-orb orb-mint"
                    style={{
                      transform: `translate3d(${mousePos.x * 16}px, ${mousePos.y * 16}px, 0)`
                    }}
                  />
                </div>

                <div className="hero-container">
                  <p className="eyebrow">
                    Computer Science Student
                  </p>

                  <h1 className="hero-heading">
                    Learning to build <span className="highlight-text">useful things.</span>
                  </h1>

                  <p className="hero-description">
                    I build practical projects to solve everyday problems while developing my programming and problem-solving skills.
                  </p>

                  <div className="hero-actions">
                    <a href="/#projects" className="button button-primary">
                      Explore My Projects
                    </a>

                    <a
                      href="https://github.com/adityajena-dev"
                      className="button button-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub <span className="arrow-ext" aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </main>

              <About />
              <Skills />
              <Projects />
            </div>
          }
        />

        <Route
          path="/projects/count-your-work"
          element={<CountYourWork />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
