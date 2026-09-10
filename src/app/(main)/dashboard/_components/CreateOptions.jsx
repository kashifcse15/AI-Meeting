import { FileSearch, Video } from "lucide-react";
import React from "react";
import Link from "next/link";

const CreateOptions = () => {
  return (
    <div className="grid grid-cols-2 gap-5">

      {/* Create Interview */}
      <Link
        href="/dashboard/create-interview"
        className="bg-white border border-gray-300 p-3 rounded-xl cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
      >
        <Video className="p-3 text-primary bg-blue-50 h-12 w-12" />

        <h2 className="font-bold text-lg">
          Create New Interview
        </h2>

        <p className="text-gray-600">
          Create AI Interviews and schedule them with candidates.
        </p>
      </Link>

      {/* Resume Analyzer */}
      <Link
        href="/resume-analyzer"
        className="bg-white border border-gray-300 p-3 rounded-xl cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
      >
        <FileSearch className="p-3 text-primary bg-blue-50 h-12 w-12" />

        <h2 className="font-bold text-lg">
          Resume Analyzer
        </h2>

        <p className="text-gray-600">
          Analyze resumes and evaluate candidates with AI.
        </p>
      </Link>

    </div>
  );
};

export default CreateOptions;