import { useEffect, useState, useRef } from "react";
import "./header.css";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import DarkModeButton from "./DarkModeButton";

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Función para manejar clics fuera del menú
    const handleClickOutside = (event: Event) => {
      // only run if the menu is open and the device is mobile
      if (isMobile && isMenuOpen) {
        // verify if the navRef exists and if the click is outside the nav
        if (
          navRef.current &&
          !navRef.current.contains(event.target as Node) &&
          menuButtonRef.current &&
          !menuButtonRef.current.contains(event.target as Node)
        ) {
          setIsMenuOpen(false);
        }
      }
    };

    // addEventListener to detect clicks outside the nav
    document.addEventListener("mousedown", handleClickOutside);

    // cleanup function to remove the event listener when the component unmounts or the dependency changes (isMenuOpen) to avoid memory leaks or unexpected behavior
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`navbar ${isMobile ? "mobile" : ""}`}>
        <div className="logo">
          <h1>
            <a href="#home">Portfolio</a>
          </h1>
        </div>

        {isMobile && (
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            ref={menuButtonRef}
          >
            {isMenuOpen ? (
              <IoIosClose color="white" size={30} />
            ) : (
              <IoIosMenu color="white" size={30} />
            )}
          </button>
        )}

        <nav
          className={`nav ${isMobile && !isMenuOpen ? "hidden" : ""}`}
          ref={navRef}
        >
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#WorkExperience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          {isMobile && <DarkModeButton />}
        </nav>
        {!isMobile && <DarkModeButton />}
      </div>
    </>
  );
};

export default Header;
