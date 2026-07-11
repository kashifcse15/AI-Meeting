"use client"
import Button from '@/app/components/button';
import { CameraIcon, VideoIcon } from 'lucide-react';
import React from 'react'
import { useState } from 'react'

const LatestInterview = () => {
    const [interviewList, setInterviewList]=useState([]);
  return (
    <div className='my-5'>
        <h2 className='font-bold text-2xl'>Previously Created Interviews</h2>

       {interviewList?.length==0 &&
       <div className='p-5 flex flex-col gap-3 items-center bg-white mt-5 border border-gray-300 rounded-xl mt-5'>
            <VideoIcon className='h-10 w-10 text-primary '/>
            <h2>You don't have any Interviews created !!</h2>
            <Button>+ Create New Interview</Button>
       </div>
       }
    </div>
  )
}

export default LatestInterview