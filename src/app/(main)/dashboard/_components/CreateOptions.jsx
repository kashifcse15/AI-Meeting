import { FileSearch, Video } from "lucide-react";
import React from "react";
import Link from "next/link";

const CreateOptions = () => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">

      {/* Create Interview */}
      <Link
        href="/dashboard/create-interview"
        className="
          group
          flex
          min-h-0
          flex-col
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-4
          shadow-sm
          transition-all
          duration-200
          hover:-translate-y-1
          hover:shadow-md
          sm:min-h-[210px]
          sm:p-6
        "
      >

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:h-12 sm:w-12">
          <Video className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>

        <h2 className="text-xl font-bold leading-tight text-gray-900 sm:text-2xl">
  Create New Interview
</h2>

        <p className="mt-1 text-sm leading-5 text-gray-500 sm:mt-2 sm:text-base sm:leading-6">
          Create AI interviews and schedule them with candidates.
        </p>

      </Link>


      {/* Resume Analyzer */}
      <Link
        href="/resume-analyzer"
        className="
          group
          flex
          min-h-0
          flex-col
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-4
          shadow-sm
          transition-all
          duration-200
          hover:-translate-y-1
          hover:shadow-md
          sm:min-h-[210px]
          sm:p-6
        "
      >

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:h-12 sm:w-12">
          <FileSearch className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>

        <h2 className="mt-4 text-lg font-bold text-gray-900 sm:mt-5 sm:text-2xl">
          Resume Analyzer
        </h2>

        <p className="mt-1 text-sm leading-5 text-gray-500 sm:mt-2 sm:text-base sm:leading-6">
          Analyze resumes and evaluate candidates with AI.
        </p>

      </Link>

    </div>
  );
};

export default CreateOptions;