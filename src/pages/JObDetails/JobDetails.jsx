import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const {
    _id,
    title,
    company,
    // company_logo,
    // description,
    // location,
    // requirements,
    // salaryRange,
  } = useLoaderData();

  return (
    <div>
      <h1 className="text-5xl">Job details for : {title}</h1>
      <p>Company : {company}</p>
      <Link to={`/application/:${_id}`}>
        <button className="btn btn-primary">Apply now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
