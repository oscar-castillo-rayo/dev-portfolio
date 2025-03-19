import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "This is a project description",
      tecnologies: ["React", "TypeScript", "Sass"],
      image: "project1.png",
      url: "#",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is a project description",
      tecnologies: ["React", "TypeScript", "Sass"],
      image: "project2.png",
      url: "#",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is a project description",
      tecnologies: ["React", "TypeScript", "Sass"],
      image: "project3.png",
      url: "#",
    },
    {
      id: 4,
      title: "Project 4",
      description: "This is a project description",
      tecnologies: ["React", "TypeScript", "Sass"],
      image: "project4.png",
      url: "#",
    },
    // {
    //   id: 5,
    //   title: "Project 5",
    //   description: "This is a project description",
    //   tecnologies: ["React", "TypeScript", "Sass"],
    //   image: "project5.png",
    //   url: "#",
    // },
    // {
    //   id: 6,
    //   title: "Project 6",
    //   description: "This is a project description",
    //   tecnologies: ["React", "TypeScript", "Sass"],
    //   image: "project6.png",
    //   url: "#",
    // },
  ];
  console.log("projects.length", projects.length);
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div
        className={`projects-grid ${
          projects.length >= 3 ? "many-items" : "few-items"
        }`}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <div className="more-projects">
        <a href="#" target="_blank" className="btn">
          View More Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
