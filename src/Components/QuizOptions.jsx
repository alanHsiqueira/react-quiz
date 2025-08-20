import React from "react";
import ButtonOptions from "./ButtonOptions";
const QuizOptions = ({ options, correct, selected, onAnswer }) => {
  return (
    <div className="grid grid-cols-2  gap-3 md:gap-6 ">
      {options.map((option, i) => (
        <ButtonOptions
          key={i}
          content={option}
          onClick={() => onAnswer(option)}
          isSelected={selected === option}
          isCorrect={option === correct}
          disabled={selected !== null}
        />
      ))}
    </div>
  );
};

export default QuizOptions;
