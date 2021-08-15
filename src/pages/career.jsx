import { BASE_URL } from "const";
import { CareerItem, useJobs } from "domains/career";
import { fetchJson } from "lib/fetch-json";
import * as React from "react";
import { useMutation } from "react-query";
import { TextInput } from "../components/text-input";

const createJob = (data) =>
  fetchJson(`${BASE_URL}/job`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

const useCreateJobMutation = () => useMutation((data) => createJob(data));

const usePersistedState = (storageKey, defaultValue) => {
  const [value, setValue] = React.useState(
    () => sessionStorage.getItem(storageKey) || defaultValue
  );

  React.useEffect(() => {
    sessionStorage.setItem(storageKey, value);
  }, [value, storageKey]);

  return [value, setValue];
};

export const Career = () => {
  const [title, setTitle] = usePersistedState("jobTitle", "");

  const [level, setLevel] = usePersistedState("level", "internship");
  const [department, setDepartment] = usePersistedState("department", "");
  const [summary, setSummary] = usePersistedState("summary", "");
  const [headcount, setHeadcount] = usePersistedState("headcount", 1);

  const titleInputRef = React.useRef();

  const { page, setPage, data: jobs, refetch } = useJobs();
  const createJobMutation = useCreateJobMutation();

  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            createJobMutation.mutate(
              {
                title,
                level,
                department,
                summary,
                headcount: Number(headcount),
              },
              {
                onSuccess: () => {
                  refetch();
                  setTitle("");
                  setLevel("internship");
                  setDepartment("");
                  setSummary("");
                  setHeadcount(1);

                  if (titleInputRef.current) {
                    titleInputRef.current.focus();
                  }
                },
              }
            );
          }}
          className="p-3"
        >
          <div className="text-xl mb-3">Add Job Posting</div>
          <div className="space-y-5">
            <div>
              <label className="block text-sm" htmlFor="title">
                Job Title
              </label>
              <TextInput
                name="title"
                id="title"
                value={title}
                onChangeValue={setTitle}
                required
                ref={titleInputRef}
                disabled={createJobMutation.isLoading}
              />
            </div>
            <div>
              <label className="block text-sm" htmlFor="level">
                Level
              </label>
              <select
                name="level"
                id="level"
                value={level}
                onChange={(ev) => setLevel(ev.target.value)}
                required
                disabled={createJobMutation.isLoading}
              >
                <option value="internship">Internship</option>
                <option value="entry">Entry</option>
                <option value="experienced">Experienced</option>
                <option value="manager">Manager</option>
              </select>
            </div>
            <div>
              <label className="block text-sm" htmlFor="department">
                Department
              </label>
              <input
                type="text"
                value={department}
                onChange={(ev) => setDepartment(ev.target.value)}
                name="department"
                id="department"
                placeholder="e.g. Engineering"
                required
                disabled={createJobMutation.isLoading}
              />
            </div>
            <div>
              <label className="block text-sm" htmlFor="summary">
                Summary
              </label>
              <textarea
                name="summary"
                id="summary"
                value={summary}
                onChange={(ev) => setSummary(ev.target.value)}
                required
                disabled={createJobMutation.isLoading}
              />
            </div>
            <div>
              <label className="block text-sm" htmlFor="headcount">
                Headcount
              </label>
              <TextInput
                type="number"
                name="headcount"
                id="headcount"
                value={headcount}
                onChangeValue={setHeadcount}
                required
                disabled={createJobMutation.isLoading}
              />
            </div>
            <div>
              <button disabled={createJobMutation.isLoading}>ADD</button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <div className="flex justify-between max-w-xl mx-auto">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>
          <button type="button" onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>
        <div className="max-w-xl mx-auto p-6 space-y-5">
          {jobs &&
            jobs.map((job) => (
              <CareerItem
                title={job.title}
                department={job.department}
                level={job.level}
                onEdit={() => alert("Edit btn clicked, populate the form!")}
                onDelete={() => alert("Delete btn clicked, delete the item!")}
                key={job._id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
