import moment from 'moment/moment'
import React from 'react'

const InterviewCard = ({interview}) => {
  return (
    <div className='p-5 bg-white rounded-lg border'>
        <div className='flex items-center justify-between'>
            <div className='h-[40px] w-[40px] bg-primary rounded'>
                <h2 className='text-sm'>{moment(interview?.created_at).format("DD MM yyyy")}</h2>
            </div>
            <h2 className='mt-3 font-bold text-lg'>{interview?.jobPosition}</h2>
            <h2 className='mt-2 text-sm'>{interview?.duration} Minutes</h2>

        </div>
    </div>
  )
}

export default InterviewCard