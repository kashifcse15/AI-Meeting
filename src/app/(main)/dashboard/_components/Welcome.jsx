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
    <div className="
      mt-4
      flex
      w-full
      flex-col
      gap-4
      rounded-2xl
      border
      border-gray-200
      bg-white
      px-4
      py-5
      shadow-sm
      sm:px-6
      md:flex-row
      md:items-center
      md:justify-between
      md:gap-0
    ">

      {/* Left */}
      <div className="min-w-0">

        <h2 className="
          text-xl
          font-bold
          leading-tight
          text-gray-900
          sm:text-2xl
        ">
          Welcome Back
          {user?.name ? `, ${user.name}` : ""} 👋
        </h2>

        <p className="
          mt-2
          max-w-xl
          text-sm
          leading-6
          text-gray-500
          sm:text-base
        ">
          Ready for your next AI-powered interview?
          Let's sharpen your skills.
        </p>

      </div>

      {/* Right */}
      <div className="
        flex
        items-center
        justify-between
        gap-3
        sm:justify-start
        sm:gap-5
      ">

        {user && (
          <button
            onClick={() => router.push("/billing")}
            className="
              flex
              cursor-pointer
              items-center
              gap-2
              rounded-full
              bg-violet-50
              px-3
              py-2
              text-sm
              font-semibold
              text-violet-700
              transition
              hover:bg-violet-100
            "
          >
            <Coins size={17} />

            <span>
              {user.credits} Credits
            </span>
          </button>
        )}

        {user && (
          <Image
            src={user.picture}
            alt="User"
            width={50}
            height={50}
            className="
              h-11
              w-11
              rounded-full
              border-2
              border-violet-500
              object-cover
              sm:h-[50px]
              sm:w-[50px]
            "
          />
        )}

      </div>

    </div>
  );
};

export default Welcome;