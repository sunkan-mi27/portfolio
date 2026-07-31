import { personalInfo } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about" className="about">
      <div className="about__grid">
        {/* Left — text */}
        <div className="reveal" ref={leftRef}>
          <p className="section-tag">About Me👤</p>
          <h2 className="section-title">
            A developer who
            <br />
            cares about <span className="accent-text">craft</span>
          </h2>

          {personalInfo.bio.map((para, i) => (
            <p key={i} className="about__text">
              {para}
            </p>
          ))}

          <div className="about__ctas">
            <a
              href={personalInfo.socials.github}
              className="btn btn--ghost"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
            <a href="#contact" className="btn btn--outline">
              Let's Talk
            </a>
          </div>
        </div>

        {/* Right — stats + code block */}
        <div className="reveal" ref={rightRef}>
          <div className="about__stats">
            {personalInfo.stats.map((stat) => (
              <div key={stat.label} className="about__stat">
                <span className="about__stat-num">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="code-block">
            <div className="code-block__bar">
              <span className="code-dot code-dot--red" />
              <span className="code-dot code-dot--yellow" />
              <span className="code-dot code-dot--green" />
              <span className="code-block__file">sunkanmi.js</span>
            </div>
            <pre className="code-block__body">
              <code>{`const sunkanmi = {
  role:      "Full Stack Dev",
  languages: ["JS", "SQL"],
  frontend:  ["React", "CSS"],
  backend:   ["Node", "Express"],
  database:  ["PostgreSQL", "Mongo"],
  available:  true,
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
