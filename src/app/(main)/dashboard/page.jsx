import React from "react";
import Welcome from "./_components/Welcome";
import CreateOptions from "./_components/CreateOptions";
import LatestInterview from "./_components/LatestInterview";

const Dashboard = () => {
  return (
    <div className="w-full px-4 py-4 sm:px-6 lg:px-8">

      <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900 sm:mt-10 sm:text-3xl">
        DASHBOARD
      </h2>

      <CreateOptions />

      <LatestInterview />
    </div>
  );
};

export default Dashboard;