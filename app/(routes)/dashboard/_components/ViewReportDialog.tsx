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
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"link"} size={"sm"}>
          View Report
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto bg-white shadow-lg p-6">
        <DialogHeader>
          <DialogTitle asChild>
            <h2 className="text-center text-3xl font-bold text-blue-500 mb-6">🧾Medical Report By AI Agent </h2>
            </DialogTitle>
          <DialogDescription asChild>
            <div className="space-y-6 text-gray-800 text-sm">
                {/* {Section 1: Session Info} */}
                <h2 className="font-bold text-blue-500 text-lg">Video Info:</h2>

                <div className="grid grid-cols-2">

                        <h2><span className="font-bold">Doctor Specialization: </span> {record.selectedDoctor?.specialist}</h2>
                        <h2>Consult Date: {moment(new Date(record?.createdOn)).fromNow()}</h2>

                </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ViewReportDialog;
