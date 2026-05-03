import { useEffect, useState } from "react";

const TypingText = () => {
  const text =
    "NexVoya Consultancy Services | Scaling Teams. Accelerating Innovation.";

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 25 : 45;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.slice(0, index + 1));
        setIndex(index + 1);

        if (index === text.length) {
          setTimeout(() => setIsDeleting(true), 1000); // pause after full text
        }
      } else {
        setDisplayText(text.slice(0, index - 1));
        setIndex(index - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <span className="ml-2 text-base font-medium tracking-wide bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
      {displayText}
      <span className="ml-1 text-blue-500 animate-pulse">|</span>
    </span>
  );
};

export default TypingText;