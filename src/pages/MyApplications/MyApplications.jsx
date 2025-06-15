import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyApplications = () => {

    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])

    const deleteJobApplication = () => {
        fetch(`http://localhost:3000/job-application/${user.email}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount === 1) {
                console.log("Application deleted successfully.");
            }
        })
    }

    return (
        <div className='my-10'>
            <h2 className="text-3xl font-bold text-center mb-10">My Applications: {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Company</th>
                            <th>Job Type</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Jobs list */}
                        {
                            jobs.map(job => <tr key={job._id}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={job.company_logo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{job.title}</div>
                                        <div className="text-sm opacity-50">{job.location}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {job.company}
                                <br />
                            </td>
                            <td>{job.jobType}</td>
                            <th>
                                <button onClick={() => deleteJobApplication(job._id)} className="btn btn-ghost btn-xs">delete</button>
                            </th>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplications;