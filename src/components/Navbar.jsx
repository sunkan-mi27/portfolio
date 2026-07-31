import { useState, useEffect } from "react";
import { navLinks } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <>
      <nav className={scrolled ? "navbar navbar--scrolled" : "navbar"}>
        <a href="#hero" className="navbar__logo">
          Sunkan_mii<span className="navbar__logo-dot">.</span>Dev
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn--sm btn--primary navbar__hire">
          Hire Me
        </a>

        <button
          className={menuOpen ? "hamburger hamburger--open" : "hamburger"}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={menuOpen ? "mobile-menu mobile-menu--open" : "mobile-menu"}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="mobile-menu__link"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn--primary" onClick={closeMenu}>
          Hire Me
        </a>
      </div>
    </>
  );
}
