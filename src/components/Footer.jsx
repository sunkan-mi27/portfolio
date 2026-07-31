import { personalInfo, navLinks } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  const mailtoLink = "mailto:" + personalInfo.email;

  return (
    <footer className="footer">
      <div className="footer__top">
        {/* Brand */}
        <div className="footer__brand">
          <a href="#hero" className="footer__logo">
            Sunkan_mii<span className="footer__logo-dot">.</span>Dev
          </a>
          <p className="footer__tagline">
            Building clean, fast, interactive and accessible web experiences.
          </p>
        </div>

        {/* Navigation links */}
        <div className="footer__col">
          <p className="footer__col-title">Navigation</p>
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social links */}
        <div className="footer__col">
          <p className="footer__col-title">Connect</p>
          <ul>
            <li>
              <a
                href={personalInfo.socials.github}
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={personalInfo.socials.linkedin}
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={personalInfo.socials.twitter}
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a href={mailtoLink} className="footer__link">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p>© {year} Sunkanmi. Built with React and 💚.</p>
        <p>
          Open to work{" "}
          <a href="#contact" className="footer__cta">
            Let's talk
          </a>
        </p>
      </div>
    </footer>
  );
}
