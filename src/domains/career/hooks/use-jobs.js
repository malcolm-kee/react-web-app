import * as React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { createJob, getJobDetails, getJobs } from "../career.service";

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

export const useCreateJobMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((data) => createJob(data), {
    onSuccess: () => queryClient.invalidateQueries("jobs"),
  });
};
