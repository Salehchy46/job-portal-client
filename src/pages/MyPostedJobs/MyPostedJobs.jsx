import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router';

const MyPostedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://job-portal-server-ten-nu.vercel.app/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])

    return (
        <div className='mb-5'>
            <h2 className="text-3xl font-bold text-center py-10">My Posted Jobs: {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>logo</th>
                            <th>company</th>
                            <th>Name</th>
                            <th>Application Count</th>
                            <th>Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, index) => <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td><img src={job.company_logo} className='rounded-full w-10 h-10' alt="logo" /></td>
                                <td>{job.company}</td>
                                <td>{job.title}</td>
                                <td>{job.applicationCount}</td>
                                <td>
                                    <Link to={`/viewApplication/${job._id}`}>
                                        <button className='btn btn-accent'>View Applications</button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;