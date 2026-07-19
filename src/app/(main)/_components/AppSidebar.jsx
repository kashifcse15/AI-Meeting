"use client";

import Button from "@/app/components/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SideBarOptions } from "@/services/Constants";
import { useRouter } from "next/navigation";

export function AppSidebar() {
  const router = useRouter();
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center mt-2">
        <Image
          src="/spotify.jpeg"
          alt="logo"
          width={200}
          height={100}
          className="w-[150px]"
          priority
        />

        <Button onClick={() => router.push('/dashboard/create-interview')} className="w-full mt-2 cursor-pointer">
          <Plus className="w-5 h-5" />
          <span className="text-lg font-light">Create Interview</span>
        </Button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {SideBarOptions.map((option, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton
                  render={
                    <Link
                      href={option.path}
                      className="flex items-center gap-3 w-full rounded-xl px-4 py-3 text-gray-600 transition-all duration-300 hover:bg-violet-100 hover:text-violet-700 hover:shadow-sm mt-4"
                    >
                      <option.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      <span className="font-bold text-md ">{option.name}</span>
                    </Link>
                  }
                />
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}

export default AppSidebar;