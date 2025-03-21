import SkillComponent from "./SkillComponent";
import "./Skills.css";
import WorkExperience from "./WorkExperience";

const WorkExperiences = [
  {
    id: 1,
    startYear: "2023",
    endYear: "2025",
    startMonth: "Sep",
    endMmonth: "Feb",
    company: "CISSO",
    position: "QA Tester & Developer",
    description: `
      Responsible for conducting quality testing on company products through the use of automation tools and manual testing.
Utilization of tools such as Rainforest QA and Cypress for the automation of end-to-end testing and integration tests.
I was responsible for reporting errors to external teams using the Jira tool. Additionally, I suggested improvements to systems or processes within the company.
I also performed development work on company product features using technologies such as React, TypeScript, PHP, among others.
    `,
    knowledge: "Knowledge",
    knowledgeDescription: `Manual testing and End-to-end testing, Error documentation and reporting, System improvement analysis, 
    Bug management, Rainforest QA, Cypress, Jira, React, TypeScript, PHP`,
  },
  {
    id: 2,
    startYear: "2013",
    endYear: "2022",
    startMonth: "Mar",
    endMmonth: "Jan",
    company: "Company Name",
    position: "Position",
    description: `I worked for 9 years at [supermarket name], where I developed strong customer service skills and fundamental 
    professional values. This experience allowed me to cultivate excellent communication abilities, problem-solving skills, 
    and the capacity to work under pressure. I learned to handle diverse situations with customers, work efficiently in teams, 
    and adapt to dynamic work environments. The values of responsibility, punctuality, and service orientation that I acquired in 
    this role have been important pillars in my professional development.`,
    knowledge: "Knowledge",
    knowledgeDescription: `Customer service, Communication skills, Problem-solving, Working under pressure, 
    Handling diverse customer situations, Teamwork, Adaptability, Responsibility, Punctuality, Service orientation`,
  },
];

const Skills = () => {
  return (
    <>
      <div id="skills" className="skills-section">
        <div className="work-experience container row-auto ">
          <div className="title-heading">
            <p className="sub-title mb-0">What I'm best at</p>
            <h3 className="title m-0 uppercase">Skills</h3>
            <hr className="line" />
          </div>
          <div className="skills-section">
            <SkillComponent />
          </div>
        </div>
      </div>
      <div id="WorkExperience" className="skills-section">
        <div className="work-experience container row-auto ">
          <div className="title-heading">
            <p className="sub-title mb-0">My Background</p>
            <h3 className="title m-0 uppercase">Work Experience & Knowledge</h3>
            <hr className="line" />
          </div>
          {WorkExperiences.map((workExperience) => (
            <WorkExperience key={workExperience.id} {...workExperience} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
