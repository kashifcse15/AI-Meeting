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
    <div className="my-8 sm:my-10">

      {/* Section Heading */}
      <div className="mb-5 sm:mb-6">

        <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
          Previously Created Interviews
        </h2>

        {/* Hide description on mobile */}
        <p className="mt-2 hidden text-sm leading-6 text-gray-500 sm:block sm:text-base">
          View, manage and continue your AI interview sessions.
        </p>

      </div>

      {/* Empty State */}
      {interviewList?.length === 0 && (
        <div className="mt-5 flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">

          <VideoIcon className="h-10 w-10 text-primary" />

          <h2 className="text-base font-semibold text-gray-800">
            You don't have any interviews created yet.
          </h2>

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
      {interviewList && interviewList.length > 0 && (
        <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">

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