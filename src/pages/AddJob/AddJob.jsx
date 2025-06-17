import React from 'react';

const AddJob = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center py-10">Add a Job</h2>
            <div className="card bg-base-100 w-full mx-auto shadow-2xl">
                <div className="card-body">
                    <fieldset className="fieldset">
                        {/* Job title */}
                        <label className="label">Job Title</label>
                        <input name='title' type="text" className="input w-full" placeholder="Job Title" />
                        {/* Job location */}
                        <label className="label">Job Location</label>
                        <input type="text" name='location' className="input w-full" placeholder="Job Location" />
                        {/* Job Type */}
                        <label className="label">Job Type</label>
                        <select defaultValue="Pick a job type" className="select select-info w-full">
                            <option disabled={true}>Pick a job type</option>
                            <option>Intern</option>
                            <option>Finance</option>
                            <option>Part-time</option>
                        </select>
                        {/* JOb Category */}
                        <label className="label">Job Category</label>
                        <select defaultValue="Pick a job category" className="select select-info w-full">
                            <option disabled={true}>Pick a job category</option>
                            <option>Engineering</option>
                            <option>Finance</option>
                            <option>Marketing</option>
                            <option>Teaching</option>
                        </select>
                        {/* Salary Range */}
                        <div>
                            <label className="label">Min</label>
                            <input name='title' type="text" className="input w-full" placeholder="Min" />
                            <label className="label">Max</label>
                            <input name='title' type="text" className="input w-full" placeholder="Max" />
                            <label className="label">Currency</label>
                            <select defaultValue="Pick a Currency" className="select select-info w-full">
                                <option disabled={true}>Pick a Currency</option>
                                <option>$</option>
                                <option>৳</option>
                                <option>₹</option>
                                <option>€</option>
                            </select>
                        </div>
                        <button className="btn btn-neutral mt-4">Add Job</button>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default AddJob;