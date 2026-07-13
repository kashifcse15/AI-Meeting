import React from 'react'
import Header from './_components/Header'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import { Input } from '@/components/ui/input'

const Interview = () => {
  return (
    <div className='px-10 md:px-28 lg:px-48 xl:px-64 mt-16'>
      <div className='flex flex-col items-center justify-center border rounded-lg bg-white p-5'>
        <Image src={'/spotify.jpeg'} alt='logo' width={100} height={100} className='w-[140px]'/>
        <h2 className='mt-3'>AI-Powered Interview Platform</h2>

        <Image src={'/link.jpg'} alt='interview' width={500} height={500} 
        className='w-[250px] my-6' />
        <h2 className='font-bold text-xl'>Full Stack Developer</h2>
        <h2 className='flex gap-2 items-center text-gray-500 mt-3'><Clock className='h-4 w-4' /> 30 minutes</h2>

        <div className='w-full'>
       <h2>Enter your full name</h2>
       <Input placeholder="e.g. Jude Bellingham"/>
    </div>
    </div>
    
   
    </div>
  )
}

export default Interview