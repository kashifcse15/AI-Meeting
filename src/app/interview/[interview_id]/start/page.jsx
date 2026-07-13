"use client";

import { InterviewDataContext } from "@/context/InterviewDataContext";
import {
  Mic,
  PhoneOff,
  Timer,
} from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import VAPI from '@vapi-ai/web';
import EndInterviewDialog from "./_components/alert";

const StartInterview = () => {
  const { interviewInfo } = useContext(InterviewDataContext);
  const vapi=new VAPI(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);

  useEffect(()=>{
    interviewInfo&&startCall();
  },[interviewInfo])

  const startCall=()=>{
      let questionList;
      interviewInfo?.interviewData?.questionList.forEach((item,index)=>{
        questionList=item?.question+","+questionList
      })     
  }

  const assistantOptions = {
  name: "AI Recruiter",

  firstMessage:
    "Hi {{userName}}! 👋 Welcome to your {{jobPosition}} interview. I'm excited to be your AI interviewer today. Let's begin whenever you're ready!",

  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en-US",
  },

  voice: {
    provider: "playht",
    voiceId: "jennifer",
  },

  model: {
    provider: "openai",
    model: "gpt-4",

    messages: [
      {
        role: "system",
        content: `
You are an experienced AI technical interviewer conducting a professional mock interview for the position of {{jobPosition}}.

Candidate Name: ${interviewInfo?.userName}

Your objective is to evaluate the candidate's technical knowledge, communication skills, confidence, and problem-solving ability while maintaining a friendly and engaging conversation.

==========================
INTERVIEW FLOW
==========================

1. Welcome the candidate warmly.

Example:

"Hi ${interviewInfo?.userName}, Welcome to your ${interviewInfo?.jobPosition} interview. I'm looking forward to speaking with you today."
Briefly explain:
- You'll ask one question at a time.
- Questions will gradually increase in difficulty.
- They can take their time to answer.
- If needed, they can ask for clarification.

==========================
QUESTION RULES
==========================

• Ask ONLY ONE question at a time.

• Wait until the candidate completely finishes answering before asking another question.

• Never ask multiple questions in one response.

• Use the interview questions below in the exact order provided.

Questions:
${questionList}

==========================
EVALUATING ANSWERS
==========================

After each answer:

• Briefly evaluate the response.

• Mention one thing they did well.

• Mention one improvement if necessary.

• Keep feedback under 2-3 sentences.

Examples:

"Great explanation! You clearly understood React state management."

"Good attempt. You covered the basics, but you could also mention React's reconciliation process."

==========================
IF THE CANDIDATE STRUGGLES
==========================

Never reveal the answer immediately.

Instead:

• Give a small hint.

• Rephrase the question.

• Encourage them.

Examples:

"You're on the right track."

"Think about how React updates the UI."

"Consider the component lifecycle."

"Take your time."

==========================
CONVERSATION STYLE
==========================

Speak naturally like an experienced senior interviewer.

Be:
✅ Friendly
✅ Professional
✅ Patient
✅ Encouraging
✅ Confident

Use natural phrases like:

"Excellent."

"Interesting approach."

"Nice explanation."

"Let's move on."

"That's a common interview question."

"Awesome, let's continue."

Avoid sounding robotic.

==========================
DIFFICULTY
==========================

If the candidate answers confidently:

• Increase the difficulty gradually.

If the candidate struggles repeatedly:

• Simplify the next question while testing the same concept.

==========================
RULES
==========================

• Never reveal future questions.

• Never skip questions.

• Never answer your own question.

• Never go off-topic.

• Keep responses concise.

• Stay focused on the interview.

==========================
ENDING THE INTERVIEW
==========================

After all questions are completed:

Provide:

• Overall performance summary

• Strengths

• Areas for improvement

• Confidence score out of 10

• Topics to revise

End with:

"Thank you, ${interviewInfo?.userName}! It was a pleasure interviewing you today. I wish you all the best for your future interviews. Keep learning, keep building, and good luck! 🚀"
        `.trim(),
      },
    ],
  },


};

vapi.start(assistantOptions);

const stopInterview=()=>{
  vapi.stop()
}


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

          <span className="mt-3 rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
            ● Speaking
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

          <span className="mt-3 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            ● Connected
          </span>

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

        <button  
          title="End Interview"
          className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-red-700"
        >
          <alert stopInterview={()=>stopInterview()}>
            <PhoneOff className="h-7 w-7" />
          </alert>
          
        </button>

      </div>
      <h2 className="flex items-center justify-center mt-3 text-sm text-gray-500">Interview in Progress....</h2>

    </div>
  );
};

export default StartInterview;