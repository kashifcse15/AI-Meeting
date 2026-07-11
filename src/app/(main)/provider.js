import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import AppSidebar from './_components/AppSidebar'
import Welcome from './dashboard/_components/Welcome'

const DashboardProvider = ({ children }) => {
    return (
        <SidebarProvider>
        <AppSidebar />
        <div className='w-full h-full'>
            <SidebarTrigger />
                  <Welcome />
            {children}
        </div>
        </SidebarProvider>
    )
}

export default DashboardProvider