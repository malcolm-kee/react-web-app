import { CareerItem, useCreateJobMutation, useJobs } from "domains/career";
import { useFormik } from "formik";
import * as React from "react";
import { TextInput } from "../components/text-input";
import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  level: Yup.string().required("Level is required"),
  department: Yup.string().required("Department is required"),
  summary: Yup.string().required("Summary is required"),
  headcount: Yup.number()
    .required("Headcount is required")
    .min(1, "Headcount must be at least 1"),
});

export const Career = () => {
  const titleInputRef = React.useRef();

  const { page, setPage, data: jobs } = useJobs();
  const createJobMutation = useCreateJobMutation();
  const formik = useFormik({
    initialValues: {
      title: "",
      level: "internship",
      department: "",
      summary: "",
      headcount: 1,
    },
    validationSchema,
    onSubmit: (values) => {
      createJobMutation.mutate(
        {
          ...values,
          headcount: Number(values.headcount),
        },
        {
          onSuccess: () => {
            formik.resetForm();

            if (titleInputRef.current) {
              titleInputRef.current.focus();
            }
          },
        }
      );
    },
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <form onSubmit={formik.handleSubmit} className="p-3">
          <div className="text-xl mb-3">Add Job Posting</div>
          <div className="space-y-5">
            <div>
              <label className="block text-sm" htmlFor="title">
                Job Title
              </label>
              <TextInput
                name="title"
                id="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                ref={titleInputRef}
                disabled={createJobMutation.isLoading}
              />
              {formik.touched.title && formik.errors.title && (
                <div className="block text-xs text-red-500">
                  {formik.errors.title}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm" htmlFor="level">
                Level
              </label>
              <select
                name="level"
                id="level"
                value={formik.values.level}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={createJobMutation.isLoading}
              >
                <option value="internship">Internship</option>
                <option value="entry">Entry</option>
                <option value="experienced">Experienced</option>
                <option value="manager">Manager</option>
              </select>
              {formik.touched.level && formik.errors.level && (
                <div className="block text-xs text-red-500">
                  {formik.errors.level}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm" htmlFor="department">
                Department
              </label>
              <input
                type="text"
                value={formik.values.department}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="department"
                id="department"
                placeholder="e.g. Engineering"
                disabled={createJobMutation.isLoading}
              />
              {formik.touched.department && formik.errors.department && (
                <div className="block text-xs text-red-500">
                  {formik.errors.department}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm" htmlFor="summary">
                Summary
              </label>
              <textarea
                name="summary"
                id="summary"
                value={formik.values.summary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={createJobMutation.isLoading}
              />
              {formik.touched.summary && formik.errors.summary && (
                <div className="block text-xs text-red-500">
                  {formik.errors.summary}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm" htmlFor="headcount">
                Headcount
              </label>
              <TextInput
                type="number"
                name="headcount"
                id="headcount"
                value={formik.values.headcount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={createJobMutation.isLoading}
              />
              {formik.touched.headcount && formik.errors.headcount && (
                <div className="block text-xs text-red-500">
                  {formik.errors.headcount}
                </div>
              )}
            </div>
            <div>
              <button type="submit" disabled={createJobMutation.isLoading}>
                ADD
              </button>
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
