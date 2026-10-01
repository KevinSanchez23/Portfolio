import "./Skills.css";

export function Skills() {
  const skillGroups = [
    { title: "Backend", skills: ["Java", "PHP", "Python"] },
    { title: "Databases", skills: ["PostgreSQL", "MySQL"] },
    { title: "Infrastructure", skills: ["Docker", "AWS", "Azure"] },
    { title: "Currently learning", skills: ["React", "TypeScript"] },
  ];

  return (
    <section className="skills">
      <div className="section-heading">
        <p className="section-eyebrow">Technical toolkit</p>
        <h2>Tools I use to ship dependable software.</h2>
      </div>

      <div className="skills__grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
