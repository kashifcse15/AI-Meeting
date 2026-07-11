import { PhoneCall, Video } from 'lucide-react'
import React from 'react'

const CreateOptions = () => {
  return (
    <div className='grid grid-cols-2 gap-5 '>
        <div className='bg-white border border-gray-300 p-3 rounded-xl cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out'>
            <Video className='p-3 text-primary bg-blue-50 h-12 w-12' />
            <h2 className='font-bold text-lg'>Create New Interview</h2>
            <p className='text-gray-600'>Create AI Interviews and schedule them with candidates.</p>
        </div>
        <div className='bg-white border border-gray-300 p-3 rounded-xl cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out'>
            <PhoneCall className='p-3 text-primary bg-blue-50 h-12 w-12' />
            <h2 className='font-bold text-lg'>Create Phone Screening Call</h2>
            <p className='text-gray-600'>Conduct initial phone interviews with candidates.</p>
        </div>
    </div>
  )
}

export default CreateOptions