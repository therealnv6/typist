interface TypingAreaProps {
  text: string;
  typed: string;
}

export const TypingArea: React.FC<TypingAreaProps> = ({ text, typed }) => {
  return (
    <h2 className="text-3xl font-normal transition-all">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`${index > typed.length - 1
              ? "text-gray-500"
              : (char === typed[index] ? "text-green-500" : "text-red-500")
            }`}
        >
          {char}
        </span>
      ))}
    </h2>
  );
};
