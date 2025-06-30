import React, { useEffect, useState } from 'react';

const useJobs = () => {

    //a url can be set here as baseUrl and can be used easily
    //You can add anything here and can use in any component
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('https://api.reactrouter.com/v7/modules/react_router.html')
        .then(res => res())
        .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <h1>{jobs.length}</h1>
        </div>
    );
};

export default useJobs;