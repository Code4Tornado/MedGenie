

import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SessionDetail } from "../medical-agent/[sessionId]/page";
import moment from "moment";

type props = {
  record: SessionDetail;
};

function ViewReportDialog({ record }: props) {
  const report: any = record?.report;

  const formatDate = moment(record?.createdOn).format("MMMM Do YYYY, h:mm a");


  const renderSymptoms = (symptoms: string | string[] | undefined) => {
    if (Array.isArray(symptoms)) {
      return (
        <ul className="list-disc list-inside text-black">
          {symptoms.map((symptom, idx) => (
            <li key={idx}>{symptom}</li>
          ))}
        </ul>
      );
    }
    if (typeof symptoms === "string") {
      return (
        <ul className="list-disc list-inside text-black">
          {symptoms.split(",").map((symptom, idx) => (
            <li key={idx}>{symptom.trim()}</li>
          ))}
        </ul>
      );
    }
    return <p className="text-black">No symptoms provided.</p>;
  };

  const renderMedications = (meds: string | string[] | undefined) => {
    if (Array.isArray(meds)) {
      return (
        <ul className="list-disc list-inside text-black">
          {meds.map((med, idx) => (
            <li key={idx}>{med}</li>
          ))}
        </ul>
      );
    }

    if (typeof meds === "string") {
      return (
        <ul className="list-disc list-inside text-black">
          {meds.split(",").map((med, idx) => (
            <li key={idx}>{med.trim()}</li>
          ))}
        </ul>
      );
    }

    return <p className="text-black">No medications provided.</p>;
  };

  const renderRecommendations = (recs: string | string[] | undefined) => {
    if (Array.isArray(recs)) {
      return (
        <ul className="list-disc list-inside text-black">
          {recs.map((rec, idx) => (
            <li key={idx}>{rec}</li>
          ))}
        </ul>
      );
    }
    if (typeof recs === "string") {
      return (
        <ul className="list-disc list-inside text-black">
          {recs.split(",").map((rec, idx) => (
            <li key={idx}>{rec.trim()}</li>
          ))}
        </ul>
      );
    }
    return <p className="text-black">No recommendations provided.</p>;
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"link"} size={"sm"}>
          View Report
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto bg-white shadow-lg p-6">

        <div>
          <DialogHeader>
            <DialogTitle asChild>
              <h2 className="text-center text-3xl font-bold text-blue-500 mb-6 ">
                🧾Medical Report By AI Agent{" "}
              </h2>
            </DialogTitle>
            <DialogDescription asChild>
              <div className="space-y-2 text-sm">
                {/* {Section 1: Session Info} */}
                <div>
                  <h3 className="py-2 font-semibold text-blue-500 text-lg ">
                    Session Info
                  </h3>
                  <hr className=" border-blue-500 border-1 " />
                  <div className="py-1" />

                  <div className="grid grid-cols-2 space-y-3 space-x-2 text-black">
                    <h2>
                      <span className="font-bold">Doctor Name: </span>{" "}
                      {record.selectedDoctor?.voiceId
                        ? record.selectedDoctor.voiceId
                            .charAt(0)
                            .toUpperCase() +
                          record.selectedDoctor.voiceId.slice(1).toLowerCase()
                        : ""}
                    </h2>
                    <h2>
                      <span className="font-bold ">User: </span>
                      {record.userName || "Anonymous User"}
                    </h2>
                    <h2>
                      <span className="font-bold">Consulted On: </span>
                      {formatDate}
                    </h2>
                    <h2>
                      <span className="font-bold">Agent: </span>
                      {""}
                      AI {record.selectedDoctor?.specialist}
                    </h2>
                  </div>
                </div>

                {/* {Section 2: Chief Complaint} */}
                <div>
                  <h3 className="py-2 font-semibold text-blue-500 text-lg ">
                    Chief Complaint
                  </h3>
                  <hr className=" border-blue-500 border-1" />
                  <div className="py-1" />
                  <p className="text-black">
                    {report?.chiefComplaint || "No chief complaint provided."}
                  </p>
                </div>

                {/* {Section 3: Summary} */}
                <div>
                  <h3 className="py-2 font-semibold text-blue-500 text-lg ">
                    Summary
                  </h3>
                  <hr className=" border-blue-500 border-1" />
                  <div className="py-1" />
                  <p className="text-black">
                    {report?.summary || "No summary provided."}
                  </p>
                </div>

                {/* {Section 4: Symptoms} */}
                <div>
                  <h3 className="py-2 font-semibold text-blue-500 text-lg ">
                    Symptoms
                  </h3>
                  <hr className=" border-blue-500 border-1" />
                  <div className="py-1" />
                  {renderSymptoms(report?.symptoms)}
                </div>

                {/* {Section 5: Duration & Severity} */}
                <div>
                  <h3 className="py-2 font-semibold text-blue-500 text-lg ">
                    Duration & Severity
                  </h3>
                  <hr className=" border-blue-500 border-1" />
                  <div className="py-1" />
                  <h2 className="text-black">
                    <span className="font-bold">Duration: </span>
                    {report?.duration || "No duration provided."}
                  </h2>
                  <h2 className="text-black">
                    <span className="font-bold">Severity: </span>
                    {report?.severity || "No severity provided."}
                  </h2>
                </div>

                {/* {Section 6: Medications Mentioned} */}
                <div>
                  <h3 className="py-2 font-semibold text-blue-500 text-lg ">
                    Medicines Suggested
                  </h3>
                  <hr className=" border-blue-500 border-1" />
                  <div className="py-1" />
                  {renderMedications(report?.medications)}
                </div>

                {/* {Section 7: Recommendations} */}
                <div>
                  <h3 className="py-2 font-semibold text-blue-500 text-lg ">
                    Recommendations
                  </h3>
                  <hr className=" border-blue-500 border-1" />
                  <div className="py-1" />

                  {renderRecommendations(report?.recommendations)}
                </div>

                <div className="py-1" />
                <hr className="border-red-400" />
                <p className="text-red-500 text-sm">
                  Note: This report is generated by an AI Medical Assistant and
                  should not be considered a substitute for professional medical
                  advice, diagnosis, or treatment.
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ViewReportDialog;
