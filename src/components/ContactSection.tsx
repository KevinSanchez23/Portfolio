import "./ContactSection.css";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>

      <p>
        If you would like to get in touch, please feel free to reach out via
        email or connect with me on LinkedIn.
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