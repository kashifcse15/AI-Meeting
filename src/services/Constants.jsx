import { Calendar, Files, LayoutDashboard, Settings2, WalletCards } from "lucide-react";

export const SideBarOptions=[
    {
        name:"Dashboard",
        icon:LayoutDashboard ,
        path:"/dashboard"
    },
    {
        name:"Scheduled Interviews",
        icon:Calendar,
        path:"/scheduled-interviews"
    },
    {
        name:"All Interviews",
        icon:Files,
        path:"/all-interviews"
    },
    {
        name:"Billing",
        icon:WalletCards,
        path:"/billing"
    },
    {
        name:"Settings",
        icon:Settings2,
        path:"/settings"
    }
]

