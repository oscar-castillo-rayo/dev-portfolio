import { useState } from "react";

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setError(null);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      setIsCopied(false);
      setError("Failed to copy to clipboard");
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  return { isCopied, error, copyToClipboard };
};

export default useClipboard;
