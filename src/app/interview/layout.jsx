"use client"
import React, { useState } from 'react'
import Header from './[interview_id]/_components/Header'
import { InterviewDataContext } from '@/context/InterviewDataContext'

const InterviewLayout = ({children}) => {
  const [interviewInfo, setInterviewInfo]=useState();
  return (
    <InterviewDataContext.Provider value={{interviewInfo, setInterviewInfo}}>
    <div className='bg-secondary h-screen'>
      
        <Header />
        {children}
        </div>
        </InterviewDataContext.Provider>
    
  )
}

export default InterviewLayout