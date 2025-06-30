import React from 'react';
import { useNavigate, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {

    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    // console.log(id, user);

    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        // console.log(linkedIn, github, resume);

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            resume,
            github,
        }

        fetch('https://job-portal-server-ten-nu.vercel.app/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Job applied successfully!",
                        icon: "success",
                    });
                    navigate('/myApplications')
                }
            })
    }

    return (
        <div className="card bg-base-100 w-full shadow-2xl  my-10">
            <h1 className="text-5xl font-bold text-center">Apply Job now!</h1>
            <div className="card-body">
                <form onSubmit={submitJobApplication}>
                    <fieldset className="fieldset">
                        <label className="label">LinkedIn URL</label>
                        <input name='linkedIn' type="url" className="input w-full" placeholder="LinkedIn URL" />
                        <label className="label">Github URL</label>
                        <input name='github' type="url" className="input w-full" placeholder="Github URL" />
                        <label className="label">Resume URL</label>
                        <input name='resume' type="url" className="input w-full" placeholder="Resume URL" />
                        <button className="btn btn-neutral mt-4">Apply</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default JobApply;