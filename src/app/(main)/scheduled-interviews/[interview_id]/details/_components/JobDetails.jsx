import { BriefcaseBusinessIcon, Calendar, Clock } from "lucide-react";
import moment from "moment";
import React from "react";

const JobDetails = ({ interviewDetail }) => {
  // Wait until data is loaded
  if (!interviewDetail) {
    return (
      <div className="p-5 mt-5 bg-white rounded-lg shadow">
        <h2 className="text-gray-500">Loading interview details...</h2>
      </div>
    );
  }

  // Safely parse type
  let interviewType = "N/A";

  try {
    interviewType = interviewDetail.type
      ? JSON.parse(interviewDetail.type)[0]
      : "N/A";
  } catch (err) {
    interviewType = interviewDetail.type || "N/A";
  }

  return (
    <div className="p-6 mt-5 bg-white rounded-xl shadow border border-gray-200">

      <h2 className="text-2xl font-bold text-gray-800">
        {interviewDetail.jobPosition}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

        <div>
          <h2 className="text-sm text-gray-500">Duration</h2>

          <div className="flex items-center gap-2 mt-2 font-semibold">
            <Clock className="h-4 w-4 text-primary" />
            {interviewDetail.duration} Minutes
          </div>
        </div>

        <div>
          <h2 className="text-sm text-gray-500">Created On</h2>

          <div className="flex items-center gap-2 mt-2 font-semibold">
            <Calendar className="h-4 w-4 text-primary" />
            {moment(interviewDetail.created_at).format("MMM DD, YYYY")}
          </div>
        </div>

        <div>
          <h2 className="text-sm text-gray-500">Interview Type</h2>

          <div className="flex items-center gap-2 mt-2 font-semibold">
            <BriefcaseBusinessIcon className="h-4 w-4 text-primary" />
            {interviewType}
          </div>
        </div>

      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold">
          Job Description
        </h2>

        <p className="mt-3 text-gray-600 leading-7">
          {interviewDetail.jobDescription || "No Job Description Available"}
        </p>
      </div>

    </div>
  );
};

export default JobDetails;