"use client";

import { useUser } from "@/app/components2/auth/provider";
import { supabase } from "@/services/supabaseClient";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import JobDetails from "./_components/JobDetails";
import CandidateList from "./_components/CandidateList";

const InterviewDetails = () => {
  const { interview_id } = useParams();
  const { user } = useUser();

  const [interviewDetail, setInterviewDetail] = useState(null);

  useEffect(() => {
    if (user) {
      GetInterviewDetail();
    }
  }, [user]);

  const GetInterviewDetail = async () => {
    const { data, error } = await supabase
      .from("Interviews")
      .select(`jobPosition, jobDescription, type, questionList, duration,interview_id, created_at,
        interview-feedback (userEmail,userName,feedback,created_at)`)
      .eq("userEmail", user.email)
      .eq("interview_id", interview_id);
      console.log("Interview Detail:", data[0]);
      console.log(data);

    if (error) {
      console.log(error);
      return;
    }

    if (data && data.length > 0) {
      setInterviewDetail(data[0]);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-2xl">
        Interview Details
      </h2>

      <JobDetails interviewDetail={interviewDetail} />
      <CandidateList detail={interviewDetail?.["interview-feedback"]}/>
    </div>
  );
};

export default InterviewDetails;