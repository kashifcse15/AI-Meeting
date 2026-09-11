import React from "react";
import DashboardProvider from "./provider";
import ProtectedRoute from "../components2/auth/ProtectedAuth";

const DashboardLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      <div className="flex h-full w-full flex-row bg-secondary">
        <DashboardProvider>
          <div className="h-full w-full p-3 sm:p-6 lg:p-10">
            {children}
          </div>
        </DashboardProvider>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardLayout;