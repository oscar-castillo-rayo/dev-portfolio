import pdfResume from "../../public/documents/Oscar_Manuel_Castillo_Rayo_Resume.pdf";

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
      <button
        onClick={handleDownload}
        className="bg-blue-400  hover:bg-blue-500 font-bold py-2 px-4 rounded flex items-center"
      >
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
