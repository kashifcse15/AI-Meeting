"use client";
import React from "react";
import { useUser } from "@/app/components2/auth/provider";
import Image from "next/image";
import { Coins, Sparkles, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <header className="relative w-full overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      
      <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute -bottom-24 left-1/3 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative flex flex-col gap-6 p-5 sm:p-6 md:p-7">

        <div className="flex items-start justify-between gap-4">

          <div className="min-w-0">

            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                <Sparkles size={14} />
              </div>

              <span className="text-[10px] font-bold tracking-[0.2em] text-violet-600 sm:text-xs">
                ARTEMUSXR
              </span>
            </div>

            <h1 className="truncate text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
              Welcome back
              {user?.name ? (
                <span className="text-violet-600">, {user.name}</span>
              ) : (
                ""
              )}
              <span className="ml-1">👋</span>
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Ready for your next AI-powered interview?
              <span className="hidden sm:inline">
                {" "}
                Sharpen your skills, practice smarter, and get closer to your
                dream role.
              </span>
            </p>

          </div>

          {user?.picture && (
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 opacity-20 blur-sm" />

              <Image
                src={user.picture}
                alt="Profile"
                width={56}
                height={56}
                className="relative h-12 w-12 rounded-full border-2 border-white object-cover shadow-md sm:h-14 sm:w-14"
              />

              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
            </div>
          )}

        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          {user && (
            <button
              type="button"
              onClick={() => router.push("/billing")}
              className="group flex w-full cursor-pointer items-center justify-between rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 to-indigo-50 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md sm:w-auto sm:min-w-[190px]"
            >
              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                  <Coins size={18} />
                </div>

                <div className="text-left">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Available credits
                  </p>

                  <p className="text-sm font-bold text-gray-900 sm:text-base">
                    {user.credits ?? 0} Credits
                  </p>
                </div>

              </div>

              <ArrowUpRight
                size={17}
                className="text-gray-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-600"
              />
            </button>
          )}

          <div className="hidden items-center gap-2 text-xs text-gray-400 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            AI Interview System Ready
          </div>

        </div>

      </div>
    </header>
  );
};

export default Welcome;