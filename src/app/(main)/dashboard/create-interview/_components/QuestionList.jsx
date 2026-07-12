import { LoaderCircleIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import axios from 'axios';

const QuestionList = ({ formData }) => {

  const [loading, setLoading] = useState(true);
  const [questionList, setQuestionList] = useState([]);
  useEffect(() => {
    if (formData) {
      GenerateQuestionList();
    }
  }, [formData]);
  const GenerateQuestionList = async () => {
    setLoading(true);
    try {
      const result = await axios.post('/api/ai-model', {
        ...formData
      })
      console.log(result.data.content);
      const Content = JSON.parse(result.data.content);
      setQuestionList(Content?.interviewQuestions);
      setLoading(false);
    }
    catch (e) {
      console.log(e);
      console.log(e.response);
      console.log(e.response?.data);

      toast('Server Error');
      setLoading(false);
    }
  }
  return (
    <div>
      {loading && <div className='p-5 bg-blue-50 rounded-xl border border-gray-100 flex gap-5 items-center'>
        <LoaderCircleIcon className='animate-spin' />
        <div>
          <h2>Generating Interview Questions</h2>
          <p>Our AI is crafting personalized questions bases on your job position</p>
        </div>
      </div>}

      <div className="space-y-4 mt-6">
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
    </div>
  )
}

export default QuestionList