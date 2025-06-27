import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const MyApplications = () => {

    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {

        // fetch(`http://localhost:3000/job-application?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setJobs(data))

        axios.get(`http://localhost:3000/job-application?email=${user.email}`, { withCredentials: true })
            .then(res => setJobs(res.data))
    }, [user.email])

    const deleteJobApplication = (id) => {
        fetch(`http://localhost:3000/job-application/${id}?email=${user.email}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    console.log("Application deleted successfully.");
                    const updatedJobs = jobs.filter(job => job._id !== id);
                    setJobs(updatedJobs);
                }
            })
    }

    return (
        <div className=''>
            <div
                className="hero min-h-80"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/LG8Knh9/download.jpg)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold shadow-2xl">Hello! Check your Applications</h1>
                        <p className="mb-5 shadow-2xl">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>
            <h2 className="text-3xl font-bold text-center my-10">My Applications: {jobs.length}</h2>
            <div className="overflow-x-auto mb-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Deadline</th>
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