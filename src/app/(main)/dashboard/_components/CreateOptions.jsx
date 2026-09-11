import { FileSearch, Video } from "lucide-react";
import React from "react";
import Link from "next/link";

const CreateOptions = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

      {/* Create Interview */}
      <Link
        href="/dashboard/create-interview"
        className="
          w-full
          rounded-xl
          border
          border-gray-300
          bg-white
          p-4
          transition-all
          duration-200
          ease-in-out
          hover:scale-[1.02]
          hover:shadow-md
        "
      >
        <Video className="h-11 w-11 rounded-lg bg-blue-50 p-2.5 text-primary" />

        <h2 className="mt-3 text-lg font-bold">
          Create New Interview
        </h2>

        <p className="mt-1 text-sm leading-6 text-gray-600">
          Create AI Interviews and schedule them with candidates.
        </p>
      </Link>

      {/* Resume Analyzer */}
      <Link
        href="/resume-analyzer"
        className="
          w-full
          rounded-xl
          border
          border-gray-300
          bg-white
          p-4
          transition-all
          duration-200
          ease-in-out
          hover:scale-[1.02]
          hover:shadow-md
        "
      >
        <FileSearch className="h-11 w-11 rounded-lg bg-blue-50 p-2.5 text-primary" />

        <h2 className="mt-3 text-lg font-bold">
          Resume Analyzer
        </h2>

        <p className="mt-1 text-sm leading-6 text-gray-600">
          Analyze resumes and evaluate candidates with AI.
        </p>
      </Link>

    </div>
  );
};

export default CreateOptions;