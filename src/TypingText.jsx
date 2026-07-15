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
          setTimeout(() => setIsDeleting(true), 1000);
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
    <span className="text-[11px] sm:text-xs md:text-sm lg:text-base font-medium tracking-wide bg-linear-to-r from-blue-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent whitespace-nowrap">
      {displayText}
      <span className="ml-0.5 text-blue-500 animate-pulse">|</span>
    </span>
  
  );
};

export default TypingText;


