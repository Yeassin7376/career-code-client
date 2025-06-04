import React from "react";
import { Link, useParams } from "react-router";
import axios from 'axios';
import Swal from 'sweetalert2'

import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedIn, github, resume);
    
    const applicationData = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      resume
    }

    axios.post('http://localhost:3000/application', applicationData)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
        
      }).catch((err) => {
        console.log(err);
        
      });

  }

  return (
    <div>
      <h2>Apply For this Job <Link to={`/jobs/${jobId}`}> see details</Link></h2>
      <form onSubmit={handleFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        
          <label className="label">LinkedIn Link</label>
          <input type="url" name="linkedIn" className="input" placeholder="LinkedIn profile link" />

          <label className="label">Github Link</label>
          <input type="url" name="github" className="input" placeholder="Github Link" />

          <label className="label">Resume link</label>
          <input type="url" name="resume" className="input" placeholder="Resume link" />
          <input type="submit" className="btn w-full" value="Apply" />
        </fieldset>
        
      </form>
    </div>
  );
};

export default JobApply;
