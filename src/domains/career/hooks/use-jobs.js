import * as React from "react";
import { useQuery } from "react-query";
import { getJobs, getJobDetails } from "../career.service";

export const useJobs = () => {
  const [page, setPage] = React.useState(1);

  const query = useQuery(["jobs", page], () => getJobs(page), {
    staleTime: 5000,
  });

  return {
    ...query,
    page,
    setPage,
  };
};

export const useJobDetails = (jobId) => {
  return useQuery(["jobDetails", jobId], () => getJobDetails(jobId), {
    staleTime: 5000,
  });
};
