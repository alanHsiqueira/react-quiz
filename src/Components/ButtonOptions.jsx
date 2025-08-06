import React from "react";

const ButtonOptions = ({
  content,
  onClick,
  isSelected,
  isCorrect,
  disabled,
}) => {
  let bgColor = "bg-gray-900";
  if (disabled) {
    if (isCorrect) {
      bgColor = "bg-green-600";
    } else if (isSelected) {
      bgColor = "bg-red-600";
    } else {
      bgColor = "bg-gray-700";
    }
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-xl py-5 px-16 text-xl ${bgColor}`}
    >
      {content}
    </button>
  );
};

export default ButtonOptions;
