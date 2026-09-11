"use client";

import React from "react";
import { useUser } from "@/app/components2/auth/provider";
import Image from "next/image";
import { Coins } from "lucide-react";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm sm:px-6 sm:py-5">

      {/* Welcome Text */}
      <div>
        <h2 className="text-xl font-bold leading-tight text-gray-900 sm:text-2xl md:text-3xl">
          Welcome Back{user?.name ? `, ${user.name}` : ""} 👋
        </h2>

        {/* Only visible on laptop/desktop */}
        <p className="mt-2 hidden max-w-xl text-sm leading-6 text-gray-500 md:block md:text-base">
          Ready for your next AI-powered interview? Let's sharpen your skills.
        </p>
      </div>

      {/* Credits + Avatar */}
      <div className="mt-4 flex items-center justify-between">

        {/* Credits */}
        {user && (
          <button
            onClick={() => router.push("/billing")}
            className="flex cursor-pointer items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700 transition hover:bg-violet-100 sm:px-5 sm:py-2.5 sm:text-base"
          >
            <Coins size={18} />
            <span>{user.credits} Credits</span>
          </button>
        )}

        {/* Avatar only on laptop/desktop */}
        {user && (
          <Image
            src={user.picture}
            alt="User"
            width={52}
            height={52}
            className=" h-12 w-12 rounded-full border-2 border-violet-500 object-cover md:block sm:h-14 sm:w-14"
          />
        )}

      </div>
    </div>
  );
};

export default Welcome;