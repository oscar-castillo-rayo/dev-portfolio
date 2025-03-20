import { RiNotionFill, RiTailwindCssFill } from "react-icons/ri";
import "./SkillComponent.css";
import {
  FaBootstrap,
  FaCss3,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { TbBrandCSharp, TbBrandCypress } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { DiMysql, DiVisualstudio } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";

const SkillComponent = () => {
  return (
    <>
      <h2 className="skill-title">Skills</h2>
      <div className="skill-container">
        <FaReact className="skill-icon react-icon" />
        <FaHtml5 className="skill-icon html-icon" />
        <FaCss3 className="skill-icon css-icon" />
        <FaJs className="skill-icon js-icon" />
        <RiTailwindCssFill className="skill-icon tailwind-icon" />
        <FaGitAlt className="skill-icon git-icon" />
        <TbBrandCSharp className="skill-icon csharp-icon" />
        <TbBrandCypress className="skill-icon cypress-icon" />
        <FaBootstrap className="skill-icon bootstrap-icon" />
      </div>

      <h2 className="skill-title">Tools</h2>
      <div className="tools-container">
        <BsGithub className="skill-icon github-icon" />
        <FaDocker className="skill-icon docker-icon" />
        <DiMysql className="skill-icon mysql-icon" />
        <RiNotionFill className="skill-icon notion-icon" />
        <BiLogoVisualStudio className="skill-icon vscode-icon" />
        <DiVisualstudio className="skill-icon visualstudio-icon" />
        <SiPostman className="skill-icon postman-icon" />
      </div>
    </>
  );
};

export default SkillComponent;
