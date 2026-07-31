import { skills } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Skills() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="skills" className="skills">
      <div className="reveal" ref={headerRef}>
        <p className="section-tag">Skills⚡</p>
        <h2 className="section-title">
          My Tech <span className="accent-text">Stack</span>
        </h2>
        <p className="section-sub">
          Technologies I work with regularly — and the tools that keep my
          workflow tight.
        </p>
      </div>

      <div className="skills__grid reveal" ref={gridRef}>
        {skills.map((group) => (
          <div key={group.category} className="skill-card">
            <div className="skill-card__head">
              <span className="skill-card__icon">{group.icon}</span>
              <h3 className="skill-card__title">{group.category}</h3>
            </div>
            <ul className="skill-card__list">
              {group.items.map((item) => (
                <li key={item} className="skill-card__item">
                  <span className="skill-card__dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
