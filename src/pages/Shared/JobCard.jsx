import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    description,
    location,
    requirements,
    salaryRange,
  } = job;

  return (
    <div className="card bg-base-100 p-5 border shadow-sm">
      <div className="flex gap-2">
        <figure>
          <img className="w-24" src={company_logo} alt="Shoes" />
        </figure>
        <div className="">
          <h3 className="text-2xl">{company}</h3>
          <p className="flex gap-1 items-center">
            <FaMapMarkerAlt /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions ">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}><button className="btn btn-primary">See More</button></Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
