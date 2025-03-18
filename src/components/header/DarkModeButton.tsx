import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { useThemeStore } from "../../store/themeStore";

const DarkModeButton = () => {
  const { darkMode, toogleDarkMode } = useThemeStore();
  return (
    <button
      className="theme-toogle"
      onClick={toogleDarkMode}
      aria-label={darkMode ? "Light Mode" : "Dark Mode"}
    >
      {darkMode ? <IoIosSunny color="gold" /> : <IoIosMoon />}
    </button>
  );
};

export default DarkModeButton;
