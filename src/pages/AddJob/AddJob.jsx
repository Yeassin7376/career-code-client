import React from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {
  const { user } = useAuth();

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    const data = Object.fromEntries(formdata.entries());

    // process salaryRange
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };

    // process Requirements
    const requirementsString = newJob.requirements;
    const requirementsDirty = requirementsString.split(',');
    const requirementsClean = requirementsDirty.map((req) => req.trim());
    newJob.requirements = requirementsClean;

    // process Responsibilities
    newJob.responsibilities = newJob.responsibilities.split(',').map((res) => res.trim());

    newJob.status = 'active';
    console.log(newJob);

    // save to database
    axios
      .post('http://localhost:3000/jobs', newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'New Job has been saved',
            showConfirmButton: false,
            timer: 1500
          });
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="my-12">
      <h1 className="text-4xl font-bold text-center mb-8">Please add a new job</h1>
      <form onSubmit={handleAddJob} className="w-2/5 mx-auto">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Basic details</legend>

          <label className="label">Job Title</label>
          <input type="text" name="title" className="input w-full" placeholder="Job Title" />

          <label className="label">Company</label>
          <input type="text" name="company" className="input w-full" placeholder="Company Name" />

          <label className="label">Location</label>
          <input type="text" name="location" className="input w-full" placeholder="Company Location" />
          <label className="label">Company Logo</label>
          <input type="text" name="company_logo" className="input w-full" placeholder="Company Logo URL" />
        </fieldset>

        {/* Job Type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
            <input className="btn" type="radio" name="jobType" aria-label="On-site" value="On-site" />
            <input className="btn" type="radio" name="jobType" aria-label="Remote" value="Remote" />
            <input className="btn" type="radio" name="jobType" aria-label="Hybrid" value="Hybrid" />
          </div>
        </fieldset>

        {/* Job Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Page details</legend>
          <select defaultValue="Select a Category" name="category" className="select w-full">
            <option disabled={true}>Select a Category</option>
            <option>Engineering</option>
            <option>Teaching</option>
            <option>Management</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Data Science</option>
          </select>
        </fieldset>

        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input type="date" name="applicationDeadline" className="input w-full" />
        </fieldset>

        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div>
              <label className="label">Minimum Salary</label>
              <input type="text" name="min" className="input w-full" placeholder="Minimum salary" />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input type="text" name="max" className="input w-full" placeholder="Maximum salary" />
            </div>

            <div>
              <label className="label">Currency</label>
              <select defaultValue="Select Currency" name="currency" className="select ">
                <option disabled={true}>Select a Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Description</legend>
          <textarea className="textarea w-full" name="description" placeholder="Description"></textarea>
        </fieldset>

        {/* job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Requirements</legend>
          <textarea
            className="textarea w-full"
            name="requirements"
            placeholder="Requirements (Separate by comma)"
          ></textarea>
        </fieldset>

        {/* job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Responsibilities</legend>
          <textarea
            className="textarea w-full"
            name="responsibilities"
            placeholder="Responsibilities (Separate by comma)"
          ></textarea>
        </fieldset>

        {/* HR related Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">HR related Info</legend>

          <label className="label">HR Name</label>
          <input type="text" name="hr_name" className="input w-full" placeholder="HR Name" />

          <label className="label">HR Email</label>
          <input
            type="text"
            value={user.email}
            readOnly
            name="hr_email"
            className="input w-full"
            placeholder="HR Email"
          />

          <input type="submit" className="w-full btn my-5 border" value="Add Job" />
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
