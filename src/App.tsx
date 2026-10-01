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
      description:
        "MobySuite is real estate software featuring solutions designed to streamline and simplify the real estate sales process.",
      technologies: ["Java", "MySQL", "Docker", "AWS"],
    },
    {
      title: "Axen Life",
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
          <p>Backend Developer</p>
          <h1>Kevin Alexis Sanchez Maldonado</h1>

          <p>
            I build reliable APIs and backend systems using Java, PostgreSQL,
            Docker, and AWS.
          </p>
        </section>

        <About />

        <section id="projects" className="projects">
          <h2>Selected projects</h2>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
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
