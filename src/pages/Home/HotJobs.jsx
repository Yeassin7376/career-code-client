import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise)
    console.log(jobs);
    
    return (
        <div>
            <h1 className="text-4xl text-center my-12">Hot Jobs for today</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    jobs.map(job => 
                        <JobCard key={job._id} job={job}></JobCard>
                    )
                }
            </div>
        </div>
    );
};

export default HotJobs;