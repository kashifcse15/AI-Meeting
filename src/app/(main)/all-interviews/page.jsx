"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/services/supabaseClient";
import { Search } from "lucide-react";
import InterviewCard from "../dashboard/_components/InterviewCard";

const Page = () => {
  const [interviews, setInterviews] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    GetAllInterviews();
  }, []);

  const GetAllInterviews = async () => {
    const { data, error } = await supabase
      .from("Interviews")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    setInterviews(data);
  };

  const filteredInterviews = interviews.filter((item) =>
    item.jobPosition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-8 lg:px-16 xl:px-24">

      <div className="mb-10">

        <h1 className="text-4xl font-extrabold text-gray-900">
          Explore Interviews
        </h1>

        <p className="mt-2 text-gray-500">
          Discover interview templates created by the community and instantly
          share or reuse them.
        </p>

      </div>

      {/* Search */}

      <div className="relative mb-10">

        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search interview by role..."
          className="
          w-full
          rounded-2xl
          border
          border-gray-200
          bg-white
          py-3
          pl-12
          pr-4
          outline-none
          shadow-sm
          focus:border-primary
          "
        />

      </div>

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

        {filteredInterviews.map((interview) => (
          <InterviewCard
            key={interview.id}
            interview={interview}
          />
        ))}

      </div>

    </div>
  );
};

export default Page;
