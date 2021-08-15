import { fetchJson } from "lib/fetch-json";
import { BASE_URL } from "const";

export const createJobApplication = (jobId, token) =>
  fetchJson(`${BASE_URL}/job-application`, {
    method: "POST",
    body: {
      linkedinUrl: "https://www.linkedin.com/in/leehsienloong/",
      jobId,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getJobApplications = (jobId, { token, signal }) =>
  fetchJson(`${BASE_URL}/job-application` + (jobId ? `?jobId=${jobId}` : ""), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    signal,
  });

export const deleteJobApplication = (applicationId, { token }) =>
  fetchJson(`${BASE_URL}/job-application/${applicationId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getJobs = (page, signal) => {
  return fetchJson(
    `${BASE_URL}/job?limit=5&page=${page}` + (page === 2 ? "&delay=3000" : ""),
    {
      signal,
    }
  );
};

export const getJobDetails = (jobId, signal) =>
  fetchJson(`${BASE_URL}/job/${jobId}`, { signal });

export const createJob = (data) =>
  fetchJson(`${BASE_URL}/job`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
