"use client";

import { useUser } from "@/app/components2/auth/provider";
import Button from "@/app/components/button";
import { supabase } from "@/services/supabaseClient";
import { VideoIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import InterviewCard from "./InterviewCard";
import { useRouter } from "next/navigation";

const LatestInterview = () => {
  const router = useRouter();

  const [interviewList, setInterviewList] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      GetInterviewList();
    }
  }, [user]);

  const GetInterviewList = async () => {
    const { data: Interviews, error } = await supabase
      .from("Interviews")
      .select("*")
      .eq("userEmail", user?.email)
      .order("id", { ascending: false })
      .limit(6);

    if (error) {
      console.log("Error fetching interviews:", error);
      return;
    }

    setInterviewList(Interviews || []);
  };

  return (
    <div className="my-6 w-full">

      {/* Section Header */}
      <div className="mt-8 mb-5">

        <h2 className="
          text-2xl
          font-bold
          leading-tight
          text-gray-800
          sm:text-3xl
        ">
          Previously Created Interviews
        </h2>

        <p className="
          mt-2
          text-sm
          leading-6
          text-gray-500
          sm:text-base
        ">
          View, manage and continue your AI interview sessions.
        </p>

      </div>

      {/* Empty State */}
      {interviewList.length === 0 && (
        <div className="
          mt-5
          flex
          flex-col
          items-center
          gap-3
          rounded-xl
          border
          border-gray-300
          bg-white
          px-5
          py-8
          text-center
        ">

          <VideoIcon className="h-10 w-10 text-primary" />

          <h2 className="font-medium text-gray-800">
            You don't have any interviews yet.
          </h2>

          <p className="text-sm text-gray-500">
            Create your first AI-powered interview.
          </p>

          <Button
            onClick={() =>
              router.push("/dashboard/create-interview")
            }
            className="cursor-pointer"
          >
            + Create New Interview
          </Button>

        </div>
      )}

      {/* Interview Cards */}
      {interviewList.length > 0 && (
        <div className="
          mt-5
          grid
          grid-cols-1
          gap-5
          md:grid-cols-2
          xl:grid-cols-3
        ">
          {interviewList.map((interview, index) => (
            <InterviewCard
              key={interview.id ?? index}
              interview={interview}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default LatestInterview;