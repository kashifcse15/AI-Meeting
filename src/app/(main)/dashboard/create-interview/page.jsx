"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

import Form from "./_components/Form";
import QuestionList from "./_components/QuestionList";
import InterviewLink from "./_components/InterviewLink";
import { useUser } from "@/app/components2/auth/provider";

const CreateInterviews = () => {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [interviewId, setInterviewId] = useState("");
  const [questionCount, setQuestionCount] = useState(0);
  const { user } = useUser();

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onGoToNext = () => {
    if (user?.credits <= 0) {
      toast("Out of Interviews, Buy Credits to Continue");
      return;
    }

    if (
      !formData?.jobPosition ||
      !formData?.jobDescription ||
      !formData?.duration
    ) {
      toast("Please Enter the first 3 fields");
      return;
    }

    setStep(2);
  };

  const onCreateLink = (interview_id, count) => {
    setInterviewId(interview_id);
    setQuestionCount(count);
    setStep(3);
  };

  return (
    <div className="w-full px-3 py-2 sm:px-6 md:px-12 lg:px-24 xl:px-40">

      {/* Header */}
      <div className="flex items-center gap-3 sm:gap-5">

        <ArrowLeft
          onClick={() => router.back()}
          className="h-5 w-5 shrink-0 cursor-pointer sm:h-6 sm:w-6"
        />

        <h2 className="text-xl font-bold leading-tight text-gray-900 sm:text-2xl">
          Create New Interview
        </h2>

      </div>

      {/* Progress */}
      <Progress
        className="my-4 h-1.5 sm:my-5"
        value={step * 33.33}
      />

      {/* Steps */}
      {step === 1 ? (
        <Form
          onHandleInputChange={onHandleInputChange}
          GoToNext={onGoToNext}
        />
      ) : step === 2 ? (
        <QuestionList
          formData={formData}
          OnCreateLink={onCreateLink}
        />
      ) : (
        <InterviewLink
          formData={formData}
          interview_id={interviewId}
          questionCount={questionCount}
        />
      )}

    </div>
  );
};

export default CreateInterviews;