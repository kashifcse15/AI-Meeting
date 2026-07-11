"use client"
import React from 'react'
import { useUser } from '@/app/auth/provider'
import Image from 'next/image'

const Welcome = () => {
    const {user} = useUser();
  return (
    <div  className='bg-white p-3 rounded-xl flex justify-between items-center gap-3'> 
    <div>
        <h2 className='text-lg font-bold'>Welcome Back, {user?.name}</h2>
        <p >AI-Driven Interviews, Hassel-free Hiring</p>
    </div>
       {user && <Image src={user?.picture} alt="userImage" width={50} height={50} className='rounded-full'/>}
    </div>
  )
}

export default Welcome