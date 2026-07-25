"use client"
import { useRouter } from "next/navigation";
import { useUser } from "./provider";
import { useEffect } from "react";

export default function ProtectedRoute({children}){
    const {user}=useUser();
    const router=useRouter();

    useEffect(()=>{
        if(user===null) return;
        if(!user){
            router.replace('/');
        }
    },[user,router]);

    if(!user) return;
    return children;
    
}