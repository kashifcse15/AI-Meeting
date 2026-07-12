import React from 'react'

const QuestionContainer = ({questionList}) => {
  return (
    <div>
        {questionList.map((item, index) => (
          <div
            key={index}
            className="mt-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-400"
          >
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                Q{index + 1}. {item.question}
              </h2>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                {item.type}
              </span>
            </div>
          </div>
        ))}
    </div>
  )
}

export default QuestionContainer