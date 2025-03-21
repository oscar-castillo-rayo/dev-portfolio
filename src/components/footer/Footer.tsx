import "./Footer.css";
import { FaCoffee } from "react-icons/fa";
import {
  FaCode,
  FaEnvelope,
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaLocationArrow,
  FaLocationDot,
  FaMapLocation,
  FaPhone,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <h3>About Me</h3>
              <p>
                Self-taught web developer with a passion for creating beautiful
                and functional websites. I specialize in front-end development
                and have experience with back-end technologies.
              </p>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h3>Get In Touch</h3>
              <ul>
                <li>
                  <p>
                    <FaLocationDot className="footer-icon" /> New York, USA
                  </p>
                </li>
                <li>
                  <p>
                    <FaEnvelope className="footer-icon" />{" "}
                    manuel.rayo3@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <FaPhone className="footer-icon" /> +506 6009-9234
                  </p>
                </li>
              </ul>
              <div className="social-bar">
                <a
                  href="https://github.com/oscar-castillo-rayo"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon github"
                  aria-label="Github"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/oscar-manuel-castillo-rayo-34a552255/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon linkedin"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Designed with <FaHeart color="red" /> <FaCoffee /> & <FaCode />{" "}
            </p>
            <p>&copy; 2025 Oscar Manuel Castillo Rayo | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
