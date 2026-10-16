import { Github, ExternalLink } from "lucide-react";

function ProjectCard({project}) {
  return (
    <div className="card project-card">
      <div className="project-image">
      {
      project.image ? (
        <img src={project.image} alt={project.tittle}/>
      ):(
        <span className="image-placeholder">{project.tittle}</span>
      )
      }
      </div>

      <h3>{project.tittle}</h3>
      <p className="muted">{project.description}</p>

      <div className="badges">
        {
          project.technologies.map((tech)=>(
              <span className="badge small" key={tech}>{tech}</span>
          ))
        }
      
      </div>

      <div className="project-links">
        <a className="btn btn-ghost btn-small" href={project.github}><Github size={16} />github</a>
        <a className="btn btn-primary btn-small" href={project.demo}><ExternalLink size={16} />demo</a>
      </div>
    </div>
  );
}

export default ProjectCard;
