"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import {
  Clock,
  Video,
  User,
  ShieldCheck,
  Mic,
  Camera,
  Loader2Icon,
  MessageCircleCheck,
  Wifi,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Button from "@/app/components/button";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/services/supabaseClient";
import { InterviewDataContext } from "@/context/InterviewDataContext";
import { toast } from "sonner";

const Interview = () => {
  const { interview_id } = useParams();
  const router = useRouter();

  const [interviewData, setInterviewData] = useState(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { setInterviewInfo } = useContext(InterviewDataContext);

  useEffect(() => {
    if (interview_id) {
      GetInterviewDetails();
    }
  }, [interview_id]);

  const GetInterviewDetails = async () => {
    setLoading(true);

    try {
      const { data: interviews, error } = await supabase
        .from("Interviews")
        .select("jobPosition, jobDescription, duration, type")
        .eq("interview_id", interview_id);

      if (error) {
        toast.error(error.message);
        setLoading(false);
        return;
      }

      if (!interviews || interviews.length === 0) {
        toast.error("Incorrect Interview Link");
        setLoading(false);
        return;
      }

      setInterviewData(interviews[0]);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }

    setLoading(false);
  };

  const onJoinInterview = async () => {
    if (!userName.trim() || !userEmail.trim()) {
      toast.error("Please enter your name and email.");
      return;
    }

    setLoading(true);

    try {
      const { data: interviews, error } = await supabase
        .from("Interviews")
        .select("*")
        .eq("interview_id", interview_id);

      if (error) {
        toast.error(error.message);
        setLoading(false);
        return;
      }

      if (!interviews || interviews.length === 0) {
        toast.error("Interview not found");
        setLoading(false);
        return;
      }

      setInterviewInfo({
        userName: userName.trim(),
        userEmail: userEmail.trim(),
        interviewData: interviews[0],
      });

      router.push(`/interview/${interview_id}/start`);
    } catch (err) {
      console.error(err);
      toast.error("Failed to join interview.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-3 py-5 sm:px-6 sm:py-10">

      <div className="mx-auto w-full max-w-3xl">

        {/* Main Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg sm:rounded-3xl sm:shadow-xl">

          {/* Top Section */}
          <div className="px-5 pt-7 text-center sm:px-10 sm:pt-10">

            {/* Logo */}
            <div className="flex justify-center">
              <Image
                src="/ArtemusXRNav.jpeg"
                alt="ArtemusXR"
                width={110}
                height={110}
                className="h-20 w-20 rounded-xl object-contain shadow-sm sm:h-24 sm:w-24"
              />
            </div>

            {/* Heading */}
            <div className="mt-5 sm:mt-6">

              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                AI Interview Lobby
              </h1>

              <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
                Complete the details below before joining your AI-powered
                interview.
              </p>

            </div>

            {/* Illustration */}
            <div className="mt-5 flex justify-center sm:mt-7">
              <Image
                src="/Meeting.jpg"
                alt="AI Interview"
                width={220}
                height={220}
                className="h-40 w-40 object-contain drop-shadow-lg sm:h-48 sm:w-48"
              />
            </div>

          </div>


          {/* Content */}
          <div className="px-5 pb-6 sm:px-10 sm:pb-10">

            {/* Interview Information */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 sm:p-5">

              <div className="flex items-start justify-between gap-3">

                <div className="min-w-0">

                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-blue-600">
                    Position
                  </p>

                  <h2 className="truncate text-xl font-bold text-gray-900 sm:text-2xl">
                    {interviewData?.jobPosition || "AI Interview"}
                  </h2>

                </div>

                <div className="hidden shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-green-700 shadow-sm sm:flex sm:items-center sm:gap-1.5">
                  <ShieldCheck className="h-4 w-4" />
                  Secure
                </div>

              </div>


              {/* Interview Meta */}
              <div className="mt-4 grid grid-cols-2 gap-3">

                <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-sm">

                  <Clock className="h-5 w-5 shrink-0 text-blue-600" />

                  <div>
                    <p className="text-[11px] text-gray-400">
                      Duration
                    </p>

                    <p className="text-sm font-semibold text-gray-800">
                      {interviewData?.duration} Minutes
                    </p>
                  </div>

                </div>


                <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-sm">

                  <ShieldCheck className="h-5 w-5 shrink-0 text-green-600" />

                  <div>
                    <p className="text-[11px] text-gray-400">
                      Status
                    </p>

                    <p className="text-sm font-semibold text-gray-800">
                      Secure Interview
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* Candidate Details */}
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white sm:mt-7">

              <div className="border-b border-gray-100 px-4 py-4 sm:px-5">

                <h2 className="text-base font-bold text-gray-900 sm:text-lg">
                  Candidate Details
                </h2>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Enter your details before starting the interview.
                </p>

              </div>


              <div className="space-y-4 p-4 sm:p-5">

                {/* Name */}
                <div>

                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">

                    <User className="h-4 w-4 text-blue-600" />

                    Full Name

                  </label>

                  <Input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="e.g. Jude Bellingham"
                    className="h-11 rounded-xl text-sm sm:h-12 sm:text-base"
                  />

                </div>


                {/* Email */}
                <div>

                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">

                    <MessageCircleCheck className="h-4 w-4 text-blue-600" />

                    Email Address

                  </label>

                  <Input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="e.g. jude15@gmail.com"
                    className="h-11 rounded-xl text-sm sm:h-12 sm:text-base"
                  />

                </div>

              </div>

            </div>


            {/* Before You Begin */}
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:mt-6 sm:p-5">

              <h2 className="text-base font-bold text-gray-900 sm:text-lg">
                Before You Begin
              </h2>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">

                {/* Camera */}
                <div className="flex items-center gap-3 rounded-xl bg-white/70 px-3 py-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <Camera className="h-4 w-4 text-blue-600" />
                  </div>

                  <span className="text-xs leading-5 text-gray-600">
                    Ensure your camera is enabled.
                  </span>

                </div>


                {/* Microphone */}
                <div className="flex items-center gap-3 rounded-xl bg-white/70 px-3 py-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100">
                    <Mic className="h-4 w-4 text-green-600" />
                  </div>

                  <span className="text-xs leading-5 text-gray-600">
                    Test your microphone before joining.
                  </span>

                </div>


                {/* Internet */}
                <div className="flex items-center gap-3 rounded-xl bg-white/70 px-3 py-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-100">
                    <Wifi className="h-4 w-4 text-orange-500" />
                  </div>

                  <span className="text-xs leading-5 text-gray-600">
                    Maintain a stable internet connection.
                  </span>

                </div>

              </div>

            </div>


            {/* Join */}
            <div className="mt-6 sm:mt-7">

              <Button
                onClick={onJoinInterview}
                className="h-12 w-full rounded-xl text-base font-semibold sm:h-13 sm:text-lg"
                disabled={
                  loading ||
                  !userName.trim() ||
                  !userEmail.trim()
                }
              >

                {loading ? (
                  <Loader2Icon className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <Video className="mr-2 h-5 w-5" />
                )}

                {loading ? "Joining..." : "Join Interview"}

              </Button>

              <p className="mt-3 text-center text-[11px] text-gray-400 sm:text-xs">
                By joining, you agree to participate in the AI-powered
                interview session.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Interview;