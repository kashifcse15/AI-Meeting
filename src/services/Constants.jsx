import { Calendar, LayoutDashboard, Settings2Icon, WalletCards } from "lucide-react";

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
        name:"Billing",
        icon:WalletCards,
        path:"/billing"
    },
    {
        name:"Settings",
        icon:Settings2Icon,
        path:"/settings"
    }
]