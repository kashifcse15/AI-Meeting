"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@/app/components2/auth/provider";
import { supabase } from "@/services/supabaseClient";
import { VideoIcon } from "lucide-react";
import Button from "@/app/components/button";
import InterviewCard from "../dashboard/_components/InterviewCard";

const ScheduledInterview = () => {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);

  useEffect(() => {
    if (user) {
      GetInterviewList();
    }
  }, [user]);

  const GetInterviewList = async () => {
    const { data, error } = await supabase
      .from("Interviews")
      .select(`
        jobPosition,
        duration,
        interview_id,
        created_at,
        interview-feedback (
          userEmail
        )
      `)
      .eq("userEmail", user?.email)
      .order("id", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    console.log(data);
    setInterviewList(data);
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-gray-800">
        Interview List with Candidate Feedback
      </h2>

      <p className="mt-1 text-gray-500">
        View interviews completed by candidates along with their feedback.
      </p>

      {interviewList.length === 0 ? (
        <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <VideoIcon className="h-12 w-12 text-primary" />

          <h2 className="text-lg font-semibold">
            No interviews found
          </h2>

          <p className="text-sm text-gray-500">
            Create an interview and share it with candidates.
          </p>

          <Button>
            + Create New Interview
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {interviewList.map((interview) => (
            <InterviewCard
              key={interview.interview_id}
              interview={interview} viewDetail={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ScheduledInterview;