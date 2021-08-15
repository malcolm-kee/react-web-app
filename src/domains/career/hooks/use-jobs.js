import * as React from "react";
import { useQuery } from "react-query";
import { getJobs, getJobDetails } from "../career.service";

export const useJobs = () => {
  const [page, setPage] = React.useState(1);

  const query = useQuery("jobs", () => getJobs(page));

  return {
    ...query,
    page,
    setPage,
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
