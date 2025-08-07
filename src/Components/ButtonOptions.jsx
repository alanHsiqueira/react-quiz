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
      className={` text-center w-full rounded-xl py-3 md:py-5 px-5 md:px-10 md:text-lg text-sm ${bgColor} break-words whitespace-normal`}
    >
      {content}
    </button>
  );
};

export default ButtonOptions;
