import { useAuth } from "domains/auth";
import * as React from "react";
import { deleteJobApplication, getJobApplications } from "../career.service";

export const useJobApplications = (jobId) => {
  const [data, setData] = React.useState(undefined);
  const { accessToken } = useAuth();
  const loadData = (jobId, { token, signal }) =>
    getJobApplications(jobId, { token, signal }).then(setData);

  React.useEffect(() => {
    if (accessToken) {
      const ab = new AbortController();
      loadData(jobId, { token: accessToken, signal: ab.signal });
      return () => {
        ab.abort();
      };
    }
  }, [jobId, accessToken]);

  return {
    data,
    loadData: (jobId) => loadData(jobId, { token: accessToken }),
  };
};

export const useDeleteJobApplication = () => {
  const { accessToken } = useAuth();

  return function run(applicationId) {
    return deleteJobApplication(applicationId, { token: accessToken });
  };
};
