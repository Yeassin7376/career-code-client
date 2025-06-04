import React from "react";

const JobApplicationRow = ({ job, index }) => {
  const { company, company_logo, title, linkedIn, github, resume } = job;

  return (
    <tr>
      <th>
        <label>{index + 1}</label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{company}</div>
            <div className="text-sm opacity-50">{title}</div>
          </div>
        </div>
      </td>
      <td>
        <p>
          <a className="underline" href={linkedIn}>LinkedIn</a>
        </p>
        <p>
          <a className="underline" href={github}>Github</a>
        </p>
        <p>
          <a className="underline" href={resume}>Resume</a>
        </p>
      </td>
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default JobApplicationRow;
