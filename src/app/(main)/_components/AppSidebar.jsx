"use client"
import Button from "@/app/components/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SideBarOptions } from "@/services/Constants"


export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center mt-2">
        <Image src={'/spotify.jpeg'} alt="logo" width={200} height={100}
        className="w-[150px] " />
        <Button className="flex w-full mt-2 cursor-pointer  ">
          <Plus className="w-5  mr-3" />
            <span className="text-lg font-light">Create Interview</span>
             </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarContent>
            <SidebarMenu>
              {SideBarOptions.map((option, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link href={option.path}>
                    <option.icon />
                    <span>{option.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar