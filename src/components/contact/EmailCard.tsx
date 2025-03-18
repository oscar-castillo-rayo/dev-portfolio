import { FaClipboardCheck } from "react-icons/fa";
import { useClipboard } from "../../helpers/hooks";
import { IoClipboardSharp } from "react-icons/io5";

interface Props {
  email: string;
}

const EmailCard = ({ email }: Props) => {
  const { copyToClipboard, error, isCopied } = useClipboard();

  return (
    <div className="about-details">
      <div className="detail-item flex  ">
        <span className="detail-title">Email:</span>
        <span className="detail-info flex content-center">
          <div>
            <span
              className="detail-info cursor-pointer"
              onClick={() => copyToClipboard(email)}
            >
              {email}
            </span>
            <button
              onClick={() => copyToClipboard(email)}
              style={{ marginLeft: "10px" }}
              className="cursor-pointer"
            >
              {isCopied ? (
                <FaClipboardCheck color="green" />
              ) : (
                <IoClipboardSharp />
              )}
            </button>
            {error && (
              <span className="copy-error" style={{ color: "red" }}>
                {error}
              </span>
            )}
          </div>
        </span>
      </div>
    </div>
  );
};

export default EmailCard;
