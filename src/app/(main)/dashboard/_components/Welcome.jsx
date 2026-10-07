"use client";

import React from "react";
import { useUser } from "@/app/components2/auth/provider";
import Image from "next/image";
import { Coins, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <header className="relative mt-2 ml-4 mr-4 w-[calc(100%-2rem)] overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm sm:mt-3 sm:px-5 sm:py-3.5 md:ml-5 md:mr-5 md:mt-3 md:px-6">
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative flex items-center justify-between gap-4">

        <div className="min-w-0">
          <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-500 sm:text-xs">
            ArtemusXR
          </p>

          <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            <span className="sm:hidden">Welcome !!</span>
            <span className="hidden sm:inline">
              Welcome{user?.name ? `, ${user.name}` : ""} 👋
            </span>
          </h1>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

          {user && (
            <button
              type="button"
              onClick={() => router.push("/billing")}
              className="group flex cursor-pointer items-center gap-2 rounded-xl border border-violet-100 bg-violet-50 px-3 py-2 text-sm font-semibold text-violet-700 transition-all hover:border-violet-200 hover:bg-violet-100 sm:px-4"
            >
              <Coins size={17} />
              <span>{user.credits ?? 0}</span>
              <span className="hidden sm:inline">Credits</span>
              <ArrowUpRight
                size={15}
                className="hidden transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block"
              />
            </button>
          )}

          {user?.picture && (
            <Image
              src={user.picture}
              alt="Profile"
              width={44}
              height={44}
              className="h-10 w-10 rounded-full border-2 border-violet-200 object-cover shadow-sm sm:h-11 sm:w-11"
            />
          )}

        </div>

      </div>
    </header>
  );
};

export default Welcome;