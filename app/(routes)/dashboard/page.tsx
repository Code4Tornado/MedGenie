import React from "react";
import HistoryList from "./_components/HistoryList";
import DoctorsAgentList from "./_components/DoctorsAgentList";
import AddNewSessionDialog from "./_components/AddNewSessionDialog";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-between gap-3 md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="font-bold text-2xl text-center md:text-left">
          My Dashboard
        </h2>
        <AddNewSessionDialog />
      </div>
      <HistoryList />
      <DoctorsAgentList />
    </div>
  );
};

export default Dashboard;
