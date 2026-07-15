"use client";

import Button from "@/app/components/button";
import { Mail, Calendar, CircleCheckBig, CircleX } from "lucide-react";
import moment from "moment";
import CandidateFeedback from "./CandidateFeedback";

const CandidateList = ({ detail }) => {
  if (!detail || detail.length === 0) {
    return (
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">
          Candidates (0)
        </h2>

        <div className="mt-5 rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
          <h2 className="text-gray-500">
            No candidates have attempted this interview yet.
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-gray-800">
          Candidates ({detail.length})
        </h2>

      </div>

      <div className="space-y-4">

        {detail.map((candidate, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-5
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            {/* Left */}

            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-blue-500
                  to-indigo-600
                  text-xl
                  font-bold
                  text-white
                "
              >
                {candidate.userName?.charAt(0).toUpperCase()}
              </div>

              <div>

                <h2 className="font-bold text-gray-800">
                  {candidate.userName}
                </h2>

                <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                  <Mail className="h-4 w-4" />
                  {candidate.userEmail}
                </div>

              </div>

            </div>

            {/* Right */}

            <div className="text-right">

              <div className="flex items-center justify-end gap-2 text-sm text-gray-500">

                <Calendar className="h-4 w-4" />

                {moment(candidate.created_at).format("DD MMM YYYY")}

              </div>

              <div className="mt-3">
                <CandidateFeedback />

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default CandidateList;