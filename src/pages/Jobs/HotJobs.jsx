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
            <h1 className='text-5xl'>Hot Jobs are available here.</h1>
            <div>
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