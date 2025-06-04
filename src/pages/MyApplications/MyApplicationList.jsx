import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const MyApplicationList = ({ myApplicationPromise }) => {
  const jobs = use(myApplicationPromise);
  return (
    <div>
      job application go so far : {jobs.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  #
                </label>
              </th>
              <th>Name</th>
              <th>Links</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                jobs.map((job, index) => <JobApplicationRow 
                    key={job._id}
                    index={index}
                    job={job}
                ></JobApplicationRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplicationList;
