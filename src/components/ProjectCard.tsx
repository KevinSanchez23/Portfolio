import "./ProjectCard.css";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
};

export function ProjectCard({
  title,
  category,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__meta">
        <span>{category}</span>
        <span className="project-card__availability">Private project</span>
      </div>

      <h3>{title}</h3>
      <p className="project-card__description">{description}</p>

      <ul className="project-card__technologies" aria-label="Technologies">
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  );
}
