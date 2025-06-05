import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplications = () => {

    const {job_id} = useParams()
    const applications = useLoaderData();


    return (
        <div>
            <h2 className='text-4xl'>Application of Job : {job_id}</h2>
            <h2 className='text-4xl'>Application of Job : {applications.length }</h2>
        </div>
    );
};

export default ViewApplications;