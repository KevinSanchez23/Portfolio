import "./App.css";
import { ProjectCard } from "./components/ProjectCard";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { ContactSection } from "./components/ContactSection";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

function App() {
  const projects = [
    {
      title: "MobySuite",
      category: "Real estate platform",
      description:
        "MobySuite is real estate software featuring solutions designed to streamline and simplify the real estate sales process.",
      technologies: ["Java", "MySQL", "Docker", "AWS"],
    },
    {
      title: "Axen Life",
      category: "Investment platform",
      description:
        "Axen Life is an investment platform that provides users with access to a variety of financial products and services.",
      technologies: ["PHP", "PostgreSQL", "Docker", "Azure"],
    },
  ];

  return (
    <>
      <Header />

      <main className="page">
        <section className="hero">
          <div className="hero__glow" aria-hidden="true" />

          <p className="hero__eyebrow">
            <span aria-hidden="true" />
            Backend engineering · APIs · Cloud
          </p>

          <h1>
            Backend systems
            <span> built to stay reliable.</span>
          </h1>

          <p className="hero__intro">
            I’m Kevin, a backend developer building maintainable APIs and
            business systems with Java, PostgreSQL, Docker, and AWS.
          </p>

          <div className="hero__actions">
            <a className="button-link button-link--primary" href="#projects">
              View projects
            </a>
            <a className="button-link button-link--secondary" href="#contact">
              Contact me
            </a>
          </div>

          <ul className="hero__stack" aria-label="Primary technology stack">
            <li>Java</li>
            <li>PostgreSQL</li>
            <li>Docker</li>
            <li>AWS</li>
          </ul>
        </section>

        <About />

        <section id="projects" className="projects">
          <div className="section-heading">
            <p className="section-eyebrow">Selected work</p>
            <h2>Systems built for real businesses.</h2>
            <p>
              A selection of commercial platforms I’ve worked with. Project
              details are limited because the products and repositories are
              private.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                category={project.category}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
          </div>
        </section>

        <Skills />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
