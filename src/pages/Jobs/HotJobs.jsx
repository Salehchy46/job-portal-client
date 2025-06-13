import React, { useEffect, useState } from 'react';
import JobsCard from './JobsCard';

const HotJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => {
            setJobs(data);
        })
    }, [])

    return (
        <div>
            <h1 className='text-4xl text-center my-10 font-bold'>Hot Jobs are available here</h1>
            <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <JobsCard 
                        key={job._id}
                        job={job}></JobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;