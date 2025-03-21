import { useEffect } from "react";
import { FaCircleUp } from "react-icons/fa6";

const ButtonToTop = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        let button = document.getElementById("buttonToTop");
        if (button) {
          if (window.scrollY > 500) {
            button.style.display = "block";
          } else {
            button.style.display = "none";
          }
        }
      });
    }
  }, []);
  return (
    <FaCircleUp
      id="buttonToTop"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      style={{ cursor: "pointer" }}
      className="h-8 w-8 md:w-10 md:h-10 fixed bottom-5 right-2 md:right-5 lg:right-15 z-50 boton-to-top rounded-full p-2"
    />
  );
};

export default ButtonToTop;
