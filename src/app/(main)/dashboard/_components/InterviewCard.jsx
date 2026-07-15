import moment from "moment";
import React from "react";
import { CalendarDays, Clock3, Briefcase, Play, ShareIcon, Share2 } from "lucide-react";
import Button from "@/app/components/button";
import { toast } from "sonner";
import { Share } from "next/font/google";
import { useUser } from "@/app/auth/provider";

const InterviewCard = ({ interview }) => {

const url=process.env.NEXT_PUBLIC_HOST_URL+'/'+interview?.interview_id
  const copyLink = () => {
    navigator.clipboard.writeText(url);
    toast('Copied');
  }

const onSend = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "AI Recruiter Interview",
        text: "Join my AI interview!",
        url,
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    await navigator.clipboard.writeText(url);
    toast.success("Interview link copied!");
  }
};
  return (
    <div
      className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1
      transition-all duration-300 p-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">

          <div
            className=" h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600
            flex flex-col items-center justify-center text-white shadow-md ">
            <span className="text-lg font-bold">
              {moment(interview.created_at).format("DD")}
            </span>

            <span className="text-[10px] uppercase">
              {moment(interview.created_at).format("MMM")}
            </span>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {interview.jobPosition}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              AI Technical Interview
            </p>
          </div>

        </div>

        <div className="rounded-full bg-blue-50 px-3 py-1">
          <span className="text-sm font-semibold text-blue-600">
            {interview.duration} min
          </span>
        </div>

      </div>

      <div className="my-5 border-t"></div>
      <div className="space-y-3">

        <div className="flex items-center gap-3 text-gray-600">
          <CalendarDays className="h-4 w-4 text-primary" />
          <span className="text-sm">
            {moment(interview.created_at).format("DD MMM YYYY")}
          </span>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <Clock3 className="h-4 w-4 text-primary" />
          <span className="text-sm">
            {interview.duration} Minutes
          </span>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <Briefcase className="h-4 w-4 text-primary" />
          <span className="text-sm">
            Technical Interview
          </span>
        </div>
      </div>

      <div className="flex gap-3 mt-6">

        <Button onClick={()=>copyLink()} className="w-full" variant="outline">
          Copy Link
        </Button>

        <Button onClick={()=>onSend()} className="w-full flex items-center justify-center gap-2">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </div>

    </div>
  );
};

export default InterviewCard;