import { Badge } from "components/badge";
import { Button } from "components/button";
import { useAuth } from "domains/auth";
import { useJobDetails } from "../hooks/use-jobs";
import { createJobApplication } from "../career.service";
import { SubmittedJobApplications } from "./submitted-job-applications";

export const JobDetails = ({ jobId }) => {
  const { data } = useJobDetails(jobId);
  const { status, accessToken } = useAuth();

  return (
    <div>
      <div className="p-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3">
            <span
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              {data ? data.department : "..."}
            </span>
          </div>
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
                {data ? data.title : "..."}
              </h1>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              {status === "authenticated" ? (
                <Button
                  onClick={() => createJobApplication(jobId, accessToken)}
                  className="ml-3"
                  variant="primary"
                >
                  Apply
                </Button>
              ) : (
                <Button variant="outline" className="ml-3">
                  Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 pt-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-y-6">
            <div>Level</div>
            <div className="md:col-span-2 text-lg font-bold">
              {data ? data.level : "..."}
              {data && data.level === "internship" && (
                <Badge color="green" className="ml-2">
                  Student-friendly
                </Badge>
              )}
            </div>
            <div>Requirements</div>
            <div className="md:col-span-2 text-lg font-bold">
              <ul className="list-disc list-inside">
                {data
                  ? data.requirements.map((requirement, i) => (
                      <li key={i}>{requirement}</li>
                    ))
                  : "..."}
              </ul>
            </div>
          </div>
          <SubmittedJobApplications jobId={jobId} />
        </div>
      </div>
    </div>
  );
};
