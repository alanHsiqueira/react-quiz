import React from "react";

const ButtonNextPrev = ({ content, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` px-3 py-1 md:px-6 md:py-2 rounded-xl font-semibold text-white ${
        disabled
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-pink-600 hover:bg-pink-700"
      }`}
    >
      {content}
    </button>
  );
};

export default ButtonNextPrev;
