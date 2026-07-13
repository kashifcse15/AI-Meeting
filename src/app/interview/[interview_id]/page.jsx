"use client";

import React, { useContext, useEffect, useState } from "react";
import Header from "./_components/Header";
import Image from "next/image";
import {
  Clock,
  Video,
  User,
  ShieldCheck,
  Mic,
  Camera,
  Loader2Icon,
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />

      <div className="mx-auto mt-12 max-w-3xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-xl">

          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/spotify.jpeg"
              alt="logo"
              width={140}
              height={140}
              className="rounded-2xl shadow-md"
            />
          </div>

          {/* Heading */}
          <div className="mt-6 text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              AI Interview Lobby
            </h1>

            <p className="mt-2 text-gray-500">
              Complete the details below before joining your AI-powered
              interview.
            </p>
          </div>

          {/* Illustration */}
          <div className="mt-8 flex justify-center">
            <Image
              src="/link.jpg"
              alt="Interview"
              width={280}
              height={280}
              className="drop-shadow-xl"
            />
          </div>

          {/* Interview Info */}
          <div className="mt-8 rounded-2xl bg-blue-50 p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {interviewData?.jobPosition}
            </h2>

            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="font-medium">
                  {interviewData?.duration} Minutes
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span className="font-medium">Secure Interview</span>
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="mt-8">
            <label className="mb-2 flex items-center gap-2 font-semibold text-gray-700">
              <User className="h-5 w-5 text-blue-600" />
              Full Name
            </label>

            <Input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="e.g. Jude Bellingham"
              className="h-12 rounded-xl"
            />
          </div>

          {/* Instructions */}
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="mb-4 text-lg font-semibold text-gray-800">
              Before You Begin
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <Camera className="h-5 w-5 text-blue-600" />
                Ensure your camera is enabled.
              </li>

              <li className="flex items-center gap-3">
                <Mic className="h-5 w-5 text-green-600" />
                Test your microphone before joining.
              </li>

              <li className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-orange-500" />
                Maintain a stable internet connection.
              </li>
            </ul>
          </div>

          {/* Join Button */}
          <div className="mt-10">
            <Button
              onClick={onJoinInterview}
              className="h-12 w-full rounded-xl text-lg"
              disabled={loading || !userName.trim()}
            >
              {loading && (
                <Loader2Icon className="mr-2 h-5 w-5 animate-spin" />
              )}

              <Video className="mr-2 h-5 w-5" />

              Join Interview
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Interview;