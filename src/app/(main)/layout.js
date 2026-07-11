import React from 'react'
import DashboardProvider from './provider'

const DashboardLayout = ({children}) => {
  return (
    <div className='flex flex-row w-full h-full bg-secondary'> 
        <DashboardProvider>
          <div className='w-full h-full p-10'>
            {children}
          </div>
            
        </DashboardProvider>
        </div>
  )
}

export default DashboardLayout