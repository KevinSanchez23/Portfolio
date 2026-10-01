import "./About.css";

export function About() {
  return (
    <section id="about" className="about">
      <div className="about__heading">
        <p className="section-eyebrow">About me</p>
        <h2>I turn complex requirements into maintainable systems.</h2>
      </div>

      <div className="about__content">
        <div className="about__copy">
          <p>
            I’m a backend developer focused on building reliable APIs and
            business systems. I enjoy designing data models, keeping codebases
            maintainable, and deploying containerized applications.
          </p>

          <p>
            My primary tools include Java, PostgreSQL, Docker, and AWS. I’m
            currently learning React and TypeScript to better understand the
            complete product-development process.
          </p>
        </div>

        <dl className="about__facts">
          <div>
            <dt>Focus</dt>
            <dd>Backend development</dd>
          </div>
          <div>
            <dt>Primary stack</dt>
            <dd>Java + PostgreSQL</dd>
          </div>
          <div>
            <dt>Infrastructure</dt>
            <dd>Docker + AWS</dd>
          </div>
          <div>
            <dt>Exploring</dt>
            <dd>React + TypeScript</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
