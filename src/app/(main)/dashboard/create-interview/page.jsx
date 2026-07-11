"use client"
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation'

const CreateInterviews = () => {
    const router=useRouter();
  return (
    <div className='mt-2 px-10 md:px-24 lg:px-44 xl:px-56'>
        <div className='flex gap-5 items-center'>
            <ArrowLeft onClick={() => router.back()} className='cursor-pointer' />
            <h2 className='text-2xl font-bold'>Create New Interview</h2>
        </div>
    </div>
  )
}

export default CreateInterviews