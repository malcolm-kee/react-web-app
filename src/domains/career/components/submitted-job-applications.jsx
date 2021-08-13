import { XIcon } from "@heroicons/react/solid";
import { IconButton } from "components/icon-button";
import { useAuth } from "domains/auth";
import {
  useDeleteJobApplication,
  useJobApplications,
} from "../hooks/use-job-application";

export const SubmittedJobApplications = ({ jobId }) => {
  const { status } = useAuth();

  const { data, loadData } = useJobApplications(jobId);
  const deleteApplication = useDeleteJobApplication();

  return status === "anonymous" ? (
    <div className="p-12 text-center">Login to view job applications</div>
  ) : (
    <div className="py-6">
      <h2 className="text-2xl p-3 font-medium">Job Applications</h2>
      <ul className="p-3 space-y-3 bg-gray-50">
        {data &&
          data.map((application) => (
            <li key={application._id}>
              <div className="flex justify-between items-center px-4 sm:px-6 py-3 bg-white">
                <div>
                  <div>LinkedIn URL: {application.linkedinUrl}</div>
                  <div>
                    Submitted at:{" "}
                    {new Date(application.createdAt).toLocaleString()}
                  </div>
                </div>
                <IconButton
                  onClick={() =>
                    deleteApplication(application._id).then(() => loadData())
                  }
                >
                  <XIcon className="w-5 h-5 text-gray-400" />
                </IconButton>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
