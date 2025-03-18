import "./Projects.css";

interface Props {
  id: number;
  title: string;
  description: string;
  tecnologies: string[];
  image: string;
  url: string;
}

const ProjectCard = ({
  id,
  description,
  title,
  //image,
  tecnologies,
  url,
}: Props) => {
  return (
    <div key={id} className="project-card">
      <div className="project-image">
        <div className="image-placeholder"></div>
        {/* <img src={`images/${image}`} alt={title} />  */}
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tecnologies">
          {tecnologies.map((tecnology) => (
            <span key={tecnology} className="tech-tag">
              {tecnology}
            </span>
          ))}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn project-link"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
