import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // 👉 Hook up EmailJS, Formspree, or your own API here
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__wrap reveal" ref={ref}>
        <p className="section-tag">Contact📩</p>
        <h2 className="section-title">
          Let's build something
          <br />
          <span className="accent-text">together.</span>
        </h2>
        <p className="section-sub">
          Have a project in mind or just want to say hi? My inbox is always
          open.
        </p>

        <div className="contact__grid">
          {/* ── Info panel ── */}
          <div className="contact__info">
            <div className="contact__field">
              <span className="contact__field-label">Email</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact__field-value link-hover"
              >
                {personalInfo.email}
              </a>
            </div>
            <div className="contact__field">
              <span className="contact__field-label">Status</span>
              <span className="contact_field-value contact_status">
                <span className="status-pulse" />
                Available for work
              </span>
            </div>
            <div className="contact__socials">
              <a
                href={personalInfo.socials.github}
                className="contact__social"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={personalInfo.socials.linkedin}
                className="contact__social"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={personalInfo.socials.twitter}
                className="contact__social"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* ── Form ── */}
          <form className="contact__form" onSubmit={handleSubmit}>
            {sent ? (
              <div className="contact__success">
                <span>✓</span>
                <p>Message sent! I'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn--primary btn--full">
                  Send Message
                  <SendSVG />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function SendSVG() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}
