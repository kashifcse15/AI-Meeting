import React from 'react'
import DashboardProvider from './provider'
import ProtectedRoute from '../components2/auth/ProtectedAuth'

const DashboardLayout = ({children}) => {
  return (
    <ProtectedRoute>
    <div className='flex flex-row w-full h-full bg-secondary'> 
        <DashboardProvider>
          <div className='w-full h-full p-10'>
            {children}
          </div>
            
        </DashboardProvider>
        </div>
        </ProtectedRoute>
  )
}

export default DashboardLayout