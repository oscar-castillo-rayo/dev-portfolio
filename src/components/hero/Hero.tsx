import "./Hero.css";
import { useTypingEffect } from "../../helpers/hooks/useTipingEffect";
import ResumeDownloadButton from "./ResumeDownloadButton";
import profileImage from "../../assets/profilePhoto.jpg";
const Hero = () => {
  const { text, cursorElement } = useTypingEffect([
    "Developer",
    "Self-taught",
    "Tech Enthusiast",
  ]);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Oscar Castillo</span>
        </h1>
        <h2 className="hero-subtitle">
          I'm a{" "}
          <span className="dev-text">
            {`${text}`} {cursorElement}
          </span>
        </h2>
        <div className="hero-buttons">
          <a href="#projects" className="btn-secondary btn-contact-me">
            Watch projects
          </a>
          <a href="#contact" className="btn-secondary btn-contact-me">
            Contact me
          </a>
        </div>
        <div className="w-full flex justify-center">
          <ResumeDownloadButton />
        </div>
      </div>
      <div className="hero-image">
        <div className="profile-image-placeholder">
          <img
            src={profileImage}
            alt="Oscar Castillo"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
