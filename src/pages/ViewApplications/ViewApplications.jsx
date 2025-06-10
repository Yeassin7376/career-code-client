import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {

    const {job_id} = useParams()
    const applications = useLoaderData();

    const handleStatusChange = (e, app_id) =>{

        axios.patch(`http://localhost:3000/application/${app_id}`, {status : e.target.value})
            .then((res) => {
                 if (res.data.modifiedCount) {
                          Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Application Status Updated',
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
            <h2 className='text-4xl'>Application of Job : {job_id}</h2>
            <h2 className='text-4xl'>Application of Job : {applications.length }</h2>

            <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Deadline</th>
              <th>View Application</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {applications.map((applicant, index) => (
              <tr key={applicant._id}>
                <th>{index+1}</th>
                <td>{applicant.applicant}</td>
                <td>
                    <p>
                    <a className="underline" href={applicant.linkedIn}>LinkedIn</a>
                    </p>
                    <p>
                    <a className="underline" href={applicant.github}>Github</a>
                    </p>
                    <p>
                    <a className="underline" href={applicant.resume}>Resume</a>
                    </p>
                </td>
                <td className='my-auto'>
                    <select onChange={e => handleStatusChange(e, applicant._id)} defaultValue={applicant.status} className="select">
                        <option disabled={true}>Update Status</option>
                        <option>Pending</option>
                        <option>Interview</option>
                        <option>Hired</option>
                        <option>Rejected</option>
                    </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ViewApplications;