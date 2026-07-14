"use client";

import { InterviewDataContext } from "@/context/InterviewDataContext";
import {
  Mic,
  PhoneOff,
  Timer,
} from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import VAPI from '@vapi-ai/web';
import EndInterviewDialog from "./_components/EndInterviewDialog";
import createAssistantOptions from "@/services/AssistantOptions";
import { toast } from "sonner";
import axios from "axios";
import { supabase } from "@/services/supabaseClient";
import { useParams, useRouter } from "next/navigation";

const StartInterview = () => {
  const [activeUser, setActiveUser] = useState(false);
  const [conversation, setConversation] = useState();
  const { interviewInfo } = useContext(InterviewDataContext);
  const startedRef = useRef(false);
  const conversationRef = useRef([]);
  const { interview_id } = useParams();
  const router = useRouter();

  const vapiRef = useRef(
    new VAPI(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY)
  )

  useEffect(() => {
    if (interviewInfo && !startedRef.current) {
      startedRef.current = true;
      startCall();
    }

    return () => {
      vapiRef.current.stop();
    };
  }, [interviewInfo]);

  const startCall = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      const questionList =
        interviewInfo?.interviewData?.questionList
          ?.map((item, index) => `${index + 1}. ${item.question}`)
          .join("\n") || "";


      const assistantOptions = createAssistantOptions(
        interviewInfo,
        questionList
      );

      console.log("Interview Info:", interviewInfo);
      console.log("Question List:", questionList);
      console.log("Assistant Options:", assistantOptions);


      await vapiRef.current.start(assistantOptions);
    }
    catch (err) {
      toast.error('Failed to Start Interview')
    }

  };

  const stopInterview = () => {
    vapiRef.current.stop()
  }

  useEffect(() => {
    const vapi = vapiRef.current;

    const handleCallStart = () => {
      toast("Call Connected....(Best of Luck)");
    };

    const handleSpeechStart = () => {
      setActiveUser(false);
    };

    const handleSpeechEnd = () => {
      setActiveUser(true);
    };

    const handleCallEnd = async () => {
      toast("Interview Ended");
      await GenerateFeedback();
    };
    const handleMessage = (message) => {
      console.log("VAPI Message:", message);

      if (message?.conversation) {
        conversationRef.current = message.conversation;
      }

      console.log("Conversation Ref:", conversationRef.current);
    };

    vapi.on("call-start", handleCallStart);
    vapi.on("speech-start", handleSpeechStart);
    vapi.on("speech-end", handleSpeechEnd);
    vapi.on("call-end", handleCallEnd);
    vapi.on("message", handleMessage)

    return () => {
      vapi.off("call-start", handleCallStart);
      vapi.off("speech-start", handleSpeechStart);
      vapi.off("speech-end", handleSpeechEnd);
      vapi.off("call-end", handleCallEnd);
      vapi.off("message", handleMessage)
    };
  }, []);

  const GenerateFeedback = async () => {
    try {
      console.log("Sending Conversation:");
      console.log(conversationRef.current);

      // Prevent empty conversation
      if (!conversationRef.current || conversationRef.current.length === 0) {
        toast.error("Conversation not found.");
        return;
      }

      // Generate AI Feedback
      const result = await axios.post("/api/ai-feedback", {
        conversation: conversationRef.current,
      });

      console.log("AI Response:");
      console.log(result.data);

      // Parse AI JSON response
      const feedback =
        typeof result.data.content === "string"
          ? JSON.parse(result.data.content)
          : result.data;

      console.log("Parsed Feedback:");
      console.log(feedback);
      console.log("Before Insert");

      // Save feedback in Supabase
      const { data, error } = await supabase
        .from("interview-feedback")
        .insert([
          {
            userName: interviewInfo.userName,
            userEmail: interviewInfo.userEmail,
            interview_id: interview_id,
            feedback: feedback,
            recommendation: feedback.feedback.recommendation,
          },
        ])
        .select();

console.log("After Insert");
console.log(data);
console.log(error);
      if (error) {
        console.error("Supabase Error:", error);
        toast.error("Failed to save interview feedback.");
        return;
      }

      console.log("Saved Successfully:");
      console.log(data);

      toast.success("Interview completed successfully!");

      router.replace("/interview/completed");
    } catch (err) {
      console.error("Generate Feedback Error:");
      console.error(err);

      toast.error(
        err?.response?.data?.error ||
        err?.message ||
        "Something went wrong while generating feedback."
      );
    }
  };

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

          <span
            className={`mt-3 rounded-full px-4 py-1 text-sm font-medium ${activeUser
              ? "bg-blue-100 text-blue-700"
              : "bg-green-100 text-green-700"
              }`}
          >
            {activeUser ? "● Listening" : "● Speaking"}
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

        <EndInterviewDialog stopInterview={stopInterview}>
          <button
            type="button"
            title="End Interview"
            className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-red-700"
          >
            <PhoneOff className="h-7 w-7" />
          </button>
        </EndInterviewDialog>

      </div>
      <h2 className="flex items-center justify-center mt-3 text-sm text-gray-500">Interview in Progress....</h2>

    </div>
  );
};

export default StartInterview;