import { AIDoctorAgents } from "@/shared/list";
import React from "react";
import DoctorAgentsCard from "./DoctorAgentsCard";

function DoctorsAgentList() {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-xl">AI Specialist Doctors</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-5">
        {AIDoctorAgents.map((doctor, index) => (
          <div key={index}>
            <DoctorAgentsCard doctorAgent={doctor} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsAgentList;
