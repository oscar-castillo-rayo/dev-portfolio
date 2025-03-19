import "./Skills.css";
import WorkExperience from "./WorkExperience";

const WorkExperiences = [
  {
    id: 1,
    startYear: "2019",
    endYear: "2020",
    startMonth: "Jan",
    endMmonth: "Dec",
    company: "Company Name",
    position: "Position",
    description: `Lorem ipsum dolorLorem ipsum dolor sit, amet consectetur adipisicing elit. Error odit non ipsam tenetur, omnis aperiam aut eligendi. Corporis, perspiciatis autem enim at
      ducimus velit incidunt vero laboriosam. Nihil, velit eos sit, amet consectetur adipisicing elit. Error odit non ipsam tenetur, omnis aperiam aut eligendi. Corporis, 
      perspiciatis autem enim at ducimus velit incidunt vero laboriosam. Nihil, velit eos`,
  },
  {
    id: 2,
    startYear: "2019",
    endYear: "2020",
    startMonth: "Jan",
    endMmonth: "Dec",
    company: "Company Name",
    position: "Position",
    description: `Lorem ipsum dolorLorem ipsum dolor sit, amet consectetur adipisicing elit. Error odit non ipsam tenetur, omnis aperiam aut eligendi. Corporis, perspiciatis autem enim at
      ducimus velit incidunt vero laboriosam. Nihil, velit eos sit, amet consectetur adipisicing elit. Error odit non ipsam tenetur, omnis aperiam aut eligendi. Corporis, 
      perspiciatis autem enim at ducimus velit incidunt vero laboriosam. Nihil, velit eos`,
  },
  {
    id: 3,
    startYear: "2019",
    endYear: "2020",
    startMonth: "Jan",
    endMmonth: "Dec",
    company: "Company Name",
    position: "Position",
    description: `Lorem ipsum dolorLorem ipsum dolor sit, amet consectetur adipisicing elit. Error odit non ipsam tenetur, omnis aperiam aut eligendi. Corporis, perspiciatis autem enim at
      ducimus velit incidunt vero laboriosam. Nihil, velit eos sit, amet consectetur adipisicing elit. Error odit non ipsam tenetur, omnis aperiam aut eligendi. Corporis, 
      perspiciatis autem enim at ducimus velit incidunt vero laboriosam. Nihil, velit eos`,
  },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="work-experience container row-auto ">
        <div className="title-heading">
          <p className="sub-title mb-0">My Background</p>
          <h3 className="title m-0 uppercase">Work Experience</h3>
          <hr className="line" />
        </div>

        {WorkExperiences.map((workExperience) => (
          <WorkExperience key={workExperience.id} {...workExperience} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
