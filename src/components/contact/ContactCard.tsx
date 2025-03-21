import { FaClipboardCheck } from "react-icons/fa";
import { useClipboard } from "../../helpers/hooks";
import { IoClipboardSharp } from "react-icons/io5";

interface Props {
  contactInformation: string;
}

const ContactCard = ({ contactInformation }: Props) => {
  const { copyToClipboard, error, isCopied } = useClipboard();

  return (
    <span className="flex items-center font-bold ">
      <span
        className="cursor-pointer"
        onClick={() => copyToClipboard(contactInformation)}
      >
        {contactInformation}
      </span>
      <button
        onClick={() => copyToClipboard(contactInformation)}
        style={{ marginLeft: "5px" }}
        className="cursor-pointer"
      >
        {isCopied ? <FaClipboardCheck color="green" /> : <IoClipboardSharp />}
      </button>
      {error && (
        <span className="copy-error" style={{ color: "red" }}>
          {error}
        </span>
      )}
    </span>
  );
};

export default ContactCard;
