import React from "react";

type QuestionCardProps = {
  question: string;
  onClick?: () => void;
};

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 max-w-xl mx-auto"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter" && onClick) onClick();
      }}
    >
      <p className="text-xl font-semibold text-gray-800">{question}</p>
    </div>
  );
};

export default QuestionCard;
