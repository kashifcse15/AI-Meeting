import React from "react";

const QuestionContainer = ({ questionList }) => {
  return (
    <div>
      {questionList.map((item, index) => (
        <div
          key={index}
          className="mt-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-lg sm:mt-4 sm:p-5"
        >
          <div className="flex items-start justify-between gap-3">
            
            <h2 className="text-sm font-semibold leading-5 text-gray-800 sm:text-lg sm:leading-6">
              Q{index + 1}. {item.question}
            </h2>

            <span className="shrink-0 rounded-full bg-blue-100 px-2 py-1 text-[10px] font-medium text-blue-700 sm:px-3 sm:text-xs">
              {item.type}
            </span>

          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionContainer;