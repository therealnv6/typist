import React from "react";

interface TypingAreaProps {
  text: string;
  typed: string;
}

export const TypingArea: React.FC<TypingAreaProps> = ({ text, typed }) => {
  return (
    <h2 className="text-3xl font-normal transition-all">
      {text.split("").map((char, index) => (
        <React.Fragment key={index}>
          {index === typed.length && <span className="caret">&nbsp;</span>}
          <span
            className={`${index > typed.length - 1
                ? "text-gray-500"
                : char === typed[index]
                  ? "text-green-500"
                  : "text-red-500"
              }`}
          >
            {char}
          </span>
        </React.Fragment>
      ))}
    </h2>
  );
};
