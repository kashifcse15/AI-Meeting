"use client";

import React from "react";
import { useUser } from "@/app/components2/auth/provider";
import Image from "next/image";
import { Coins } from "lucide-react";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const { user } = useUser();
  const router=useRouter();

  return (
    <div className="mt-5 mx-3 bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-5 flex items-center justify-between">
      {/* Left */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Welcome Back{user?.name ? `, ${user.name}` : ""} 👋
        </h2>

        <p className="mt-2 text-gray-500">
          Ready for your next AI-powered interview? Let's sharpen your skills.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        {user && (
          <div className="flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-2 rounded-full font-semibold">
            <Coins size={18} />
            <button onClick={()=>router.push("/billing")} className="cursor-pointer">{user.credits} Credits</button>
          </div>
        )}

        {user && (
          <Image
            src={user.picture}
            alt="User"
            width={55}
            height={55}
            className="rounded-full border-2 border-violet-500 object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default Welcome;