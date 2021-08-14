import { JobDetails } from "domains/career";
import { useParams } from "react-router-dom";

export const JobDetailsPage = () => {
  const params = useParams();

  return <JobDetails jobId={params.jobId} />;
};
