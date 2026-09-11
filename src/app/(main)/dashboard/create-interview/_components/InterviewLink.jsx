"use client";

import { Input } from "@/components/ui/input";
import {
  CircleCheck,
  Clock,
  CopyIcon,
  ListCollapse,
  Mail,
  MessageCircle,
  Send,
  Copy,
  Plus,
  ArrowLeft,
  BriefcaseBusiness,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

const InterviewLink = ({ interview_id, formData, questionCount }) => {
  const url = `${process.env.NEXT_PUBLIC_HOST_URL}/interview/${interview_id}`;

  const onCopyLink = async () => {
    await navigator.clipboard.writeText(url);
    toast.success("Interview link copied successfully!");
  };

  const onSend = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "AI Recruiter Interview",
          text: "Join my AI interview!",
          url,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      await navigator.clipboard.writeText(url);
      toast.success("Interview link copied!");
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center py-6 sm:py-10">

      {/* Success Icon */}
      <div className="flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20">
        <CircleCheck className="h-16 w-16 text-green-500 sm:h-20 sm:w-20" />
      </div>

      {/* Heading */}
      <h2 className="mt-6 text-center text-xl font-bold text-gray-900 sm:mt-8 sm:text-2xl">
        Your AI Interview is Ready!
      </h2>

      <p className="mt-2 max-w-xl px-4 text-center text-sm leading-6 text-gray-600 sm:text-base">
        Share this link with your candidates to start the interview process.
      </p>


      {/* Main Card */}
      <div className="mt-6 w-full rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 shadow-sm sm:mt-8 sm:p-6">

        {/* Card Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

          <div className="min-w-0">
            <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
              Interview Link
            </h2>

            <p className="mt-1 max-w-md text-sm leading-5 text-gray-500">
              Share this link with the candidate to start the interview.
            </p>
          </div>

          {/* Expiry */}
          <span className="w-fit rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700 sm:px-4 sm:text-sm">
            ⏳ Expires in 30 Days
          </span>

        </div>


        {/* URL + Copy */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">

          <Input
            className="h-11 min-w-0 flex-1 rounded-xl border-gray-300 bg-white text-sm text-gray-700 sm:text-base"
            value={url}
            readOnly
          />

          <button
            onClick={onCopyLink}
            className="flex h-11 w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700 active:scale-95 sm:w-auto sm:text-base"
          >
            <CopyIcon className="h-4 w-4" />
            Copy Link
          </button>

        </div>


        {/* Interview Stats */}
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">

          {/* Duration */}
          <div className="flex min-w-0 items-center gap-3 rounded-xl bg-white/80 px-4 py-3 shadow-sm">
            <Clock className="h-5 w-5 shrink-0 text-blue-600" />

            <div className="min-w-0">
              <p className="text-xs text-gray-500">
                Duration
              </p>

              <p className="truncate text-sm font-semibold text-gray-800">
                {formData?.duration} Minutes
              </p>
            </div>
          </div>


          {/* Questions */}
          <div className="flex min-w-0 items-center gap-3 rounded-xl bg-white/80 px-4 py-3 shadow-sm">
            <ListCollapse className="h-5 w-5 shrink-0 text-green-600" />

            <div className="min-w-0">
              <p className="text-xs text-gray-500">
                Questions
              </p>

              <p className="text-sm font-semibold text-gray-800">
                {questionCount} Questions
              </p>
            </div>
          </div>


          {/* Role */}
          <div className="flex min-w-0 items-center gap-3 rounded-xl bg-white/80 px-4 py-3 shadow-sm">
            <BriefcaseBusiness className="h-5 w-5 shrink-0 text-red-600" />

            <div className="min-w-0">
              <p className="text-xs text-gray-500">
                Role
              </p>

              <p className="truncate text-sm font-semibold text-gray-800">
                {formData?.jobPosition}
              </p>
            </div>
          </div>

        </div>


        {/* Share Via */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:mt-8 sm:p-6">

          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            Share Via
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">

            {/* Email */}
            <button
              onClick={onSend}
              className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-3 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:shadow-md sm:p-4"
            >
              <Mail className="mb-2 h-6 w-6 text-red-500 sm:h-7 sm:w-7" />
              <span className="text-xs font-medium sm:text-sm">
                Email
              </span>
            </button>


            {/* Telegram */}
            <button
              onClick={onSend}
              className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-3 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:shadow-md sm:p-4"
            >
              <Send className="mb-2 h-6 w-6 text-sky-500 sm:h-7 sm:w-7" />
              <span className="text-xs font-medium sm:text-sm">
                Telegram
              </span>
            </button>


            {/* WhatsApp */}
            <button
              onClick={onSend}
              className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-3 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:shadow-md sm:p-4"
            >
              <MessageCircle className="mb-2 h-6 w-6 text-green-500 sm:h-7 sm:w-7" />
              <span className="text-xs font-medium sm:text-sm">
                WhatsApp
              </span>
            </button>


            {/* Copy */}
            <button
              onClick={onCopyLink}
              className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-3 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:shadow-md sm:p-4"
            >
              <Copy className="mb-2 h-6 w-6 text-indigo-500 sm:h-7 sm:w-7" />
              <span className="text-xs font-medium sm:text-sm">
                Copy Link
              </span>
            </button>

          </div>
        </div>


        {/* Bottom Actions */}
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-end">

          <Link href="/dashboard" className="w-full sm:w-auto">
            <button
              className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-100 sm:h-12 sm:w-auto sm:px-6 sm:text-base"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              Back to Dashboard
            </button>
          </Link>


          <Link
            href="/dashboard/create-interview"
            className="w-full sm:w-auto"
          >
            <button
              className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg active:scale-95 sm:h-12 sm:w-auto sm:px-6 sm:text-base"
            >
              <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
              Create New Interview
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default InterviewLink;