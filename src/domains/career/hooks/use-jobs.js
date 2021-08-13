import * as React from "react";
import { getJobs, getJobDetails } from "../career.service";

export const useJobs = () => {
  const loadJobs = (pageNum, signal) =>
    getJobs(pageNum, signal).then((data) => setJobs(data));

  const [page, setPage] = React.useState(1);
  const [jobs, setJobs] = React.useState(undefined);

  React.useEffect(() => {
    const ab = new AbortController();
    loadJobs(page, ab.signal);
    return () => {
      ab.abort();
    };
  }, [page]);

  return {
    jobs,
    page,
    setPage,
    loadJobs,
  };
};

export const useJobDetails = (jobId) => {
  const [data, setData] = React.useState(undefined);

  React.useEffect(() => {
    const ab = new AbortController();
    getJobDetails(jobId, ab.signal).then(setData);

    return () => {
      ab.abort();
    };
  }, [jobId]);

  return {
    data,
  };
};
