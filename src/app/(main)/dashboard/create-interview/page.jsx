"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

import Form from "./_components/Form";
import QuestionList from "./_components/QuestionList";
import InterviewLink from "./_components/InterviewLink";

const CreateInterviews = () => {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [interviewId, setInterviewId] = useState("");
  const [questionCount, setQuestionCount] = useState(0);

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onGoToNext = () => {
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

  const onCreateLink = (interview_id,count) => {
    setInterviewId(interview_id);
  setQuestionCount(count);
  setStep(3);
  };

  return (
    <div className="mt-2 px-10 md:px-24 lg:px-44 xl:px-56">
      <div className="flex items-center gap-5">
        <ArrowLeft
          onClick={() => router.back()}
          className="cursor-pointer"
        />

        <h2 className="text-2xl font-bold">
          Create New Interview
        </h2>
      </div>

      <Progress className="my-5 mt-4" value={step * 33.33} />

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