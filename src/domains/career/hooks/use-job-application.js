import { useAuth } from "domains/auth";
import * as React from "react";
import { deleteJobApplication, getJobApplications } from "../career.service";

export const useJobApplications = (jobId) => {
  const [data, setData] = React.useState(undefined);
  const { accessToken } = useAuth();
  const loadData = (signal) =>
    getJobApplications(jobId, { token: accessToken, signal }).then(setData);

  React.useEffect(() => {
    if (accessToken) {
      const ab = new AbortController();
      loadData(ab.signal);
      return () => {
        ab.abort();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobId, accessToken]);

  return {
    data,
    loadData,
  };
};

export const useDeleteJobApplication = () => {
  const { accessToken } = useAuth();

  return function run(applicationId) {
    return deleteJobApplication(applicationId, { token: accessToken });
  };
};
