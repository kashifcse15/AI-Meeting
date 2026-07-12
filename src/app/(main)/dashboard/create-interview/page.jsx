"use client"
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Progress } from "@/components/ui/progress"
import { useState } from 'react'
import Form from './_components/Form'
import QuestionList from './_components/QuestionList'
import { toast } from 'sonner'
import InterviewLink from './_components/InterviewLink'

const CreateInterviews = () => {
  const [step, setstep] = useState(3);
  const [formData, setFormData] = useState({});
  const [interviewId, setInterviewId]=useState();
  const onHandleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }
  const onGoToNext = () => {

    if (!formData?.jobPosition || !formData?.jobDescription || !formData?.duration) {
      toast('Please Enter the first 3 fields')
      return;
    }

    setstep(step + 1);
  }

  const onCreateLink=(interview_id)=>{
      setInterviewId(interview_id);
      setStep(step+1);
  }

  const router = useRouter();
  return (
    <div className='mt-2 px-10 md:px-24 lg:px-44 xl:px-56'>
      <div className='flex gap-5 items-center'>
        <ArrowLeft onClick={() => router.back()} className='cursor-pointer' />
        <h2 className='text-2xl font-bold'>Create New Interview</h2>
      </div>
      <Progress className='mt-4 my-5' value={step * 33.33} />
      {step == 1 ? <Form onHandleInputChange={onHandleInputChange} GoToNext={() => onGoToNext()} />
        : step == 2 ? <QuestionList formData={formData} OnCreateLink={(interview_id)=>OnCreateLink(interview_id)}/> : 
        step==3? <InterviewLink formData={formData} interview_id={interviewId} />:null}
    </div>
  )
}

export default CreateInterviews