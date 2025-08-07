import React from "react";

const ButtonNumbers = ({ content, onClick, isActive, isAnswered, isWrong }) => {
  let classes = " w-10 h-10 rounded-full font-bold";
  if (isActive) classes += " bg-pink-500";
  else if (isWrong) classes += " bg-red-500";
  else if (isAnswered) classes += " bg-green-500";
  else classes += " bg-gray-900";
  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default ButtonNumbers;
