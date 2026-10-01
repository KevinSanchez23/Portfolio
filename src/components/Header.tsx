import { useState } from "react";
import "./Header.css";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen((current) => !current);
  }

  function handleNavigation() {
    setIsMenuOpen(false);
  }

  return (
    <header id="top" className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="site-brand" href="#top" aria-label="Back to top">
          <span className="site-brand__mark" aria-hidden="true">
            K
          </span>
          <span>Kevin Sánchez</span>
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={handleMenuToggle}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          {isMenuOpen ? "Close menu" : "Menu"}
        </button>

        <ul
          id="primary-navigation"
          className={`nav-links ${isMenuOpen ? "nav-links--open" : ""}`}
        >
          <li>
            <a href="#about" onClick={handleNavigation}>
              About
            </a>
          </li>

          <li>
            <a href="#projects" onClick={handleNavigation}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={handleNavigation}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
