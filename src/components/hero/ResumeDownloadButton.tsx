import pdfResume from "/documents/Oscar_Manuel_Castillo_Rayo_Resume.pdf";
import "./Hero.css";

const ResumeDownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfResume;
    link.setAttribute("download", "Oscar_Manuel_Castillo_Rayo_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <button onClick={handleDownload} className="cv-button">
        <svg
          className="w-4 h-4 mr-2"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        Get Resume
      </button>
    </>
  );
};

export default ResumeDownloadButton;
