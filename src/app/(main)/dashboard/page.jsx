import React from "react";
import Welcome from "./_components/Welcome";
import CreateOptions from "./_components/CreateOptions";
import LatestInterview from "./_components/LatestInterview";

const Dashboard = () => {
  return (
    <div className="w-full px-3 sm:px-4 md:px-6">
      <Welcome />

      <h2 className="my-5 text-2xl font-bold md:text-3xl">
        DASHBOARD
      </h2>

      <CreateOptions />

      <LatestInterview />
    </div>
  );
};

export default Dashboard;