import "./Footer.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        © {currentYear} Kevin Alexis Sánchez Maldonado
      </p>

      <p>Built with React, TypeScript, and Vite.</p>

    </footer>
  );
}