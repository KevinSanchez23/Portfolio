import { useState } from "react";
import "./ProjectCard.css";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
};

export function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const technologyCount = technologies.length;

  function handleToggle() {
    setExpanded((current) => !current);
  }

  return (
    <article className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>

    <p className="project-card__availability">
      Private commercial project
    </p>

    {expanded && (
        <ul className="project-card__technologies">
        {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
        ))}
        </ul>
    )}

    <button
    type="button"
    onClick={handleToggle}
    aria-expanded={expanded}
    >
    {expanded ? "Hide technologies" : `Show ${technologyCount} technologies`}
    </button>
    </article>
  );
}