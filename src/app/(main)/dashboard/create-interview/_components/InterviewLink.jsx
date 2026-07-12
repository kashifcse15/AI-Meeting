import { CircleCheck } from 'lucide-react'
import React from 'react'

const InterviewLink = ({interviewId, formData}) => {
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
        <div className='w-[50px] h-[50px]'>
            <CircleCheck className="text-green-500 w-20 h-20" />
        </div>
        <h2 className='font-bold text-lg mt-10'>Your AI Interview is Ready !</h2>
        <p className='mt-3'>Share this link with your candidates to start the interview process</p>

        <div className='w-full p-7 mt-6 rounded-xl bg-white'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold'>Interview Link</h2>
                <h2 className='p-2 px-3 text-primary bg-blue-50 rounded-xl'>Valid for 30 Days</h2>
            </div>
        </div>
    </div>
  )
}

export default InterviewLink