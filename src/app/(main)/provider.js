import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import AppSidebar from './_components/AppSidebar'

const DashboardProvider = ({ children }) => {
    return (
        <SidebarProvider>
        <AppSidebar />
        <div className='w-full h-full'>
            <SidebarTrigger />
            {children}
        </div>
        </SidebarProvider>
    )
}

export default DashboardProvider