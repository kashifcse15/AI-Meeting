"use client";

import { InterviewDataContext } from "@/context/InterviewDataContext";
import {
  Mic,
  PhoneOff,
  Timer,
} from "lucide-react";
import Image from "next/image";
import React, { useContext } from "react";

const StartInterview = () => {
  const { interviewInfo } = useContext(InterviewDataContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 lg:px-36 xl:px-56">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            AI Interview Session
          </h1>

          <p className="mt-1 text-gray-500">
            Stay focused and answer confidently.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-md">
          <Timer className="h-5 w-5 text-red-500" />
          <span className="font-semibold text-gray-700">
            00:00:00
          </span>
        </div>
      </div>

      {/* Interview Panels */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

        {/* AI Recruiter */}
        <div className="flex h-[450px] flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white shadow-lg">

          <div >
            <Image
              src="/link.jpg"
              alt="AI Recruiter"
              width={100}
              height={100}
              className="rounded-full h-28 w-28 object-cover"
            />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-gray-800">
            AI Recruiter
          </h2>

          <span className="mt-3 rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
            ● Speaking
          </span>

        </div>

        {/* Candidate */}
        <div className="flex h-[450px] flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white shadow-lg">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary text-4xl font-bold text-white shadow-lg">
            {interviewInfo?.userName?.charAt(0).toUpperCase()}
          </div>

          <h2 className="mt-6 text-2xl font-bold text-gray-800">
            {interviewInfo?.userName}
          </h2>

          <span className="mt-3 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            ● Connected
          </span>

        </div>

      </div>

      {/* Controls */}
      <div className="mt-10 flex justify-center gap-6">

        <button
          title="Mute / Unmute Microphone"
          className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gray-900 text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-gray-800"
        >
          <Mic className="h-6 w-6" />
        </button>

        <button
          title="End Interview"
          className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-red-700"
        >
          <PhoneOff className="h-7 w-7" />
        </button>

      </div>
      <h2 className="flex items-center justify-center mt-3 text-sm text-gray-500">Interview in Progress....</h2>

    </div>
  );
};

export default StartInterview;