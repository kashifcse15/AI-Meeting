import React from "react";
import { Progress } from "@/components/ui/progress";
import {
  User,
  Mail,
  Award,
  BadgeCheck,
  Brain,
  CircleCheckBig,
  TriangleAlert,
  FileText,
  Download,
  XCircle,
  Star,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import Button from "@/app/components/button";

const CandidateFeedback = ({ candidate }) => {

  const report = candidate?.feedback?.feedback;
  const ratings = report?.ratings;
  const recommendation = report?.recommendation;
  const recommendationMessage = report?.recommendationMessage;
  const strengths = report?.strengths || [];
  const improvements = report?.improvements || [];
  const summary = report?.summary;

  const labels = {
    overall: "Overall",
    technicalSkills: "Technical Skills",
    communication: "Communication",
    confidence: "Confidence",
    experience: "Experience",
    problemSolving: "Problem Solving",
  };
  return (
    <Dialog>
      <DialogTrigger
        render={<Button />}
      >
        View Report
      </DialogTrigger>

      <DialogContent
  className="
    w-[95vw]
    max-w-5xl
    h-[90vh]
    overflow-hidden
    rounded-3xl
    p-0
  "
>

        {/* Candidate UI */}
        <div className="h-full overflow-y-auto p-8">
          <DialogHeader>
          <DialogTitle>Feedback</DialogTitle>

          <DialogDescription>
            Candidate Interview Report
          </DialogDescription>
        </DialogHeader>
          <div className="rounded-2xl border bg-gradient-to-r from-slate-50 to-blue-50 p-6 shadow-sm mt-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-md">
                  {candidate?.userName?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    {candidate?.userName}
                  </h2>
                  <div className="flex items-center gap-2 mt-2 text-gray-500">
                    <Mail size={16} />
                    <span>
                      {candidate?.userEmail}
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex">
                <div className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
                  Candidate
                </div>
              </div>
            </div>
          </div>

          {/* Overall Score */}

          <div className="rounded-2xl mt-3 border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-gray-500">
                  Overall Score
                </p>
                <h2 className="text-5xl font-bold text-blue-600 mt-1">
                  {ratings?.overall}/10
                </h2>
              </div>
              <Award
                size={60}
                className="text-yellow-500"
              />
            </div>
            <Progress
              value={ratings?.overall * 10}
              className="h-3 bg-blue-100"
            />
          </div>

          {/* Skills Assessment */}

          <div className="rounded-2xl mt-3 border bg-white shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="text-blue-600" size={28} />
              <h2 className="text-2xl font-bold">
                Skills Assessment
              </h2>
            </div>

            <div className="space-y-6">
              {Object.entries(ratings || {}).map(([key, value]) => (
                <div key={key}>
                  <div className="flex justify-between items-center mb-2">
                    <span
  className={`font-bold ${
    value >= 8
      ? "text-green-600"
      : value >= 6
      ? "text-yellow-500"
      : "text-red-500"
  }`}
>
                      {labels[key] || key}
                    </span>
                    <span className="font-semibold text-blue-600">
                      {value}/10
                    </span>
                  </div>
                  <Progress
                    value={value * 10}
                    className="h-3 rounded-full bg-blue-100"
                  />
                </div>
              ))}
            </div>

          </div>

          {/* AI Summary */}

<div className="rounded-2xl mt-3 border bg-white shadow-sm p-6">

  <div className="flex items-center gap-3 mb-4">

    <FileText className="text-blue-600" size={24} />

    <h2 className="text-2xl font-bold">
      AI Summary
    </h2>

  </div>

  <p className="leading-8 text-gray-600">
    {summary}
  </p>

</div>

{/* Strengths */}

<div className="rounded-2xl mt-3 border bg-white shadow-sm p-6">

  <div className="flex items-center gap-3 mb-5">

    <CircleCheckBig
      className="text-green-600"
      size={24}
    />

    <h2 className="text-2xl font-bold">
      Strengths
    </h2>

  </div>

  <div className="space-y-4">

    {strengths.map((item, index) => (

      <div
        key={index}
        className="flex items-start gap-4 rounded-xl bg-green-50 border border-green-100 p-4"
      >

        <CircleCheckBig
          className="text-green-600 mt-1"
          size={18}
        />

        <p className="text-gray-700 leading-7">
          {item}
        </p>

      </div>

    ))}

  </div>

  {/* Improvements */}

<div className="rounded-2xl mt-3 border bg-white shadow-sm p-6">

  <div className="flex items-center gap-3 mb-5">

    <TriangleAlert
      className="text-orange-500"
      size={24}
    />

    <h2 className="text-2xl font-bold">
      Areas of Improvement
    </h2>

  </div>

  <div className="space-y-4">

    {improvements.map((item, index) => (

      <div
        key={index}
        className="flex items-start gap-4 rounded-xl bg-orange-50 border border-orange-100 p-4"
      >

        <TriangleAlert
          className="text-orange-500 mt-1"
          size={18}
        />

        <p className="text-gray-700 leading-7">
          {item}
        </p>

      </div>

    ))}

  </div>

</div>

{/* Recommendation */}

<div
  className={`rounded-2xl mt-3 border-2 p-6 shadow-sm transition-all duration-300 ${
    recommendation
      ? "border-green-300 bg-green-50"
      : "border-red-300 bg-red-50"
  }`}
>

  <div className="flex items-center gap-3">

    {recommendation ? (
      <BadgeCheck className="text-green-600" size={28} />
    ) : (
      <XCircle className="text-red-600" size={28} />
    )}

    <h2
      className={`text-2xl font-bold ${
        recommendation
          ? "text-green-700"
          : "text-red-700"
      }`}
    >
      {recommendation
        ? "Recommended"
        : "Not Recommended"}
    </h2>

  </div>

  <p className="mt-4 leading-8 text-gray-700">
    {recommendationMessage}
  </p>

</div>

<div className="flex justify-end gap-4 mt-8">

  <Button className="flex items-center gap-2">

    <Download size={18} />

    Download Report

  </Button>

  <DialogClose
    render={
        <Button>
            Close
        </Button>
    }
/>

</div>

</div>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CandidateFeedback;