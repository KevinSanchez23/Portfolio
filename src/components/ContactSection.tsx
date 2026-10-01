import "./ContactSection.css";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <p className="section-eyebrow">Let’s connect</p>
      <h2>Have a backend problem worth solving?</h2>

      <p>
        If you’d like to discuss an opportunity or simply connect, send me an
        email or find me on LinkedIn.
      </p>

      <ul className="contact-links">
        <li>
          <a href="mailto:kevin23bradon12@gmail.com">Email me</a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/kevin-alexis-sánchez-maldonado-4295aa209/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
}
