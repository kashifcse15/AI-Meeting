"use client"
import { useUser } from '@/app/auth/provider';
import Button from '@/app/components/button';
import { supabase } from '@/services/supabaseClient';
import { CameraIcon, VideoIcon } from 'lucide-react';
import React, { use, useEffect } from 'react'
import { useState } from 'react'
import InterviewCard from './InterviewCard';

const LatestInterview = () => {
  const [interviewList, setInterviewList] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    user && GetInterviewList();
  }, [user]);

  const GetInterviewList = async () => {
    let { data: Interviews, error } = await supabase
      .from('Interviews')
      .select('*')
      .eq('userEmail', user?.email);

    console.log(Interviews);
    setInterviewList(Interviews);
  }

  return (
    <div className='my-5'>
      <div className="flex items-end justify-between mt-10 mb-6">

  <div>

    <h2 className="text-3xl font-bold text-gray-800">
      Previously Created Interviews
    </h2>

    <p className="text-gray-500 mt-1">
      View, manage and continue your AI interview sessions.
    </p>

  </div>

</div>

      {interviewList?.length == 0 &&
        <div className='p-5 flex flex-col gap-3 items-center bg-white mt-5 border border-gray-300 rounded-xl mt-5'>
          <VideoIcon className='h-10 w-10 text-primary ' />
          <h2>You don't have any Interviews created !!</h2>
          <Button>+ Create New Interview</Button>
        </div>}

      {interviewList &&
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
          {interviewList.map((interview, index) => (
            <InterviewCard
              key={index}
              interview={interview}
            />
          ))}
        </div>

      }
    </div>
  )
}

export default LatestInterview