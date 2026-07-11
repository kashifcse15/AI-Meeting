import { BriefcaseBusinessIcon, Calendar, Code2Icon, Files, LayoutDashboard, Settings2, User2Icon, WalletCards,Speech,PuzzleIcon } from "lucide-react";

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

export const InterviewType=[
    {
        title:'Technical',
        icon:Code2Icon
    },
    {
        title:'Behavioral',
        icon:User2Icon
    },
    {
        title:'Experience',
        icon:BriefcaseBusinessIcon
    },
    {
        title:'Coding',
        icon:PuzzleIcon
    },
    {
        title:'Leadership',
        icon:Speech
    },
]