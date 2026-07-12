import { LoaderCircleIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import {toast} from 'sonner';
import axios from 'axios';

const QuestionList = ({formData}) => {

  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    if(formData){
      GenerateQuestionList();
    }
  },[formData]);
  const GenerateQuestionList=async()=>{
    setLoading(true);
    try{
    const result=await axios.post('/api/ai-model',{
      ...formData
    })
    console.log(result.data);
    setLoading(false);
  }
  catch(e){
    console.log(e);
    console.log(e.response);
    console.log(e.response?.data);

    toast('Server Error');
    setLoading(false);
  }
  }
  return (
    <div>
      {loading&&<div className='p-5 bg-blue-50 rounded-xl border border-gray-100 flex gap-5 items-center'>
        <LoaderCircleIcon className='animate-spin'/>
        <div>
          <h2>Generating Interview Questions</h2>
          <p>Our AI is crafting personalized questions bases on your job position</p>
        </div>
        </div>}
    </div>
  )
}

export default QuestionList