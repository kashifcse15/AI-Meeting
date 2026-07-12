import { Loader2Icon, LoaderCircleIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import axios from 'axios';
import Button from '@/app/components/button';
import QuestionContainer from './QuestionContainer';
import { supabase } from '@/services/supabaseClient';
import { useUser } from '@/app/auth/provider';
import { v4 as uuidv4 } from 'uuid';

const QuestionList = ({ formData, OnCreateLink }) => {

  const [loading, setLoading] = useState(true);
  const [questionList, setQuestionList] = useState([]);
  const [saveloading, setSaveLoading] = useState(false);
  const { user } = useUser();
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
  const onFinish = async () => {
    setSaveLoading(true);
    const interview_id = uuidv4();
    const { data, error } = await supabase
      .from('Interviews')
      .insert([
        {
          ...formData,
          questionList: questionList,
          userEmail: user?.email,
          interview_id: interview_id,
        },
      ])
      .select()
    setSaveLoading(false);
    console.log(data);

  }
    OnCreateLink(interview_id)


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
        <QuestionContainer questionList={questionList} />
      </div>
      {!loading && <div className='flex justify-end mt-10'>
        <Button onClick={() => onFinish()} disabled={saveloading}>
          {saveloading && <Loader2Icon className='animate-spin' />} Finish
        </Button>
      </div>}

    </div>
  )
}

export default QuestionList