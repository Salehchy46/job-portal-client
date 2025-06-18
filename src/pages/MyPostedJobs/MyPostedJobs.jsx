import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyPostedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [user.email])

    return (
        <div>
            <h2 className="text-3xl font-bold text-center py-10">My Posted Jobs: {jobs.length}</h2>
        </div>
    );
};

export default MyPostedJobs;