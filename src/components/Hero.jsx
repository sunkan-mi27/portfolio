import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

const ROLES = [
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
  "UI/UX Enthusiast",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[index];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        80,
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        40,
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <section id="hero" className="hero">
      <div className="hero__dots" aria-hidden="true" />

      <div className="hero__body">
        {/* Status badge */}
        <div className="hero__badge">
          <span className="hero__badge-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="hero__name">
          Hi, I'm <span className="accent-text">{personalInfo.name}</span>
        </h1>

        {/* Typewriter role */}
        <h2 className="hero__role">
          <span>{text}</span>
          <span className="hero__cursor" aria-hidden="true" />
        </h2>

        <p className="hero__tagline">{personalInfo.tagline}</p>

        {/* CTA buttons */}
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary btn--lg">
            View My Work
            <ArrowIcon />
          </a>
          <a href="#contact" className="btn btn--ghost btn--lg">
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="hero__socials">
          <a
            href={personalInfo.socials.github}
            className="social-icon"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubSVG />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            className="social-icon"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInSVG />
          </a>
          <a
            href={personalInfo.socials.twitter}
            className="social-icon"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter/X"
          >
            <TwitterSVG />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero__scroll" aria-label="Scroll to about">
        <span>Scroll</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 4v12M5 11l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}

/* ── Inline SVG icons ─────────────────────────────────────────── */
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubSVG() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
        0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
        -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
        .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
        -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844
        c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651
        .64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855
        0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedInSVG() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136
        2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267
        5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063
        1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z
        M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227
        24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

function TwitterSVG() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401
        6.231H2.742l7.727-8.828-8.14-10.672h6.195l4.26 5.632L18.244 2.25zm-1.161
        17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
      />
    </svg>
  );
}
