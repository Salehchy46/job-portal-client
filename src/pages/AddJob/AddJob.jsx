import React from 'react';

const AddJob = () => {

    const handleAddJob = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        // console.log(form.entries());
        
        const initialData = Object.fromEntries(form.entries());
        console.log(initialData);
        const {min, max, currency, ...newJob} = initialData;
        console.log(newJob);

        newJob.salaryRange = {min, max, currency};
        console.log(newJob);
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-center py-10">Add a Job</h2>
            <div className="card bg-base-100 w-full mx-auto shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleAddJob}>
                        <fieldset className="fieldset">
                            {/* Job title */}
                            <label className="label">Job Title</label>
                            <input name='title' type="text" className="input w-full" placeholder="Job Title" />
                            {/* Job location */}
                            <label className="label">Job Location</label>
                            <input type="text" name='location' className="input w-full" placeholder="Job Location" />
                            {/* Job Type */}
                            <label className="label">Job Type</label>
                            <select name='jobType' defaultValue="Pick a job type" className="select select-info w-full">
                                <option disabled={true}>Pick a job type</option>
                                <option>Intern</option>
                                <option>Finance</option>
                                <option>Part-time</option>
                            </select>
                            {/* JOb Category */}
                            <label className="label">Job Category</label>
                            <select name='jobType' defaultValue="Pick a job category" className="select select-info w-full">
                                <option disabled={true}>Pick a job category</option>
                                <option>Engineering</option>
                                <option>Finance</option>
                                <option>Marketing</option>
                                <option>Teaching</option>
                            </select>
                            {/* Salary Range */}
                            <p>Salary Range</p>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                                <div>
                                    <label className="label">Min</label>
                                    <input name='min' type="text" className="input w-full" placeholder="Min" />
                                </div>
                                <div>
                                    <label className="label">Max</label>
                                    <input name='max' type="text" className="input w-full" placeholder="Max" />
                                </div>
                                <div>
                                    <label className="label">Currency</label>
                                    <select name='currency' defaultValue="Pick a Currency" className="select select-info w-full">
                                        <option disabled={true}>Pick a Currency</option>
                                        <option>$</option>
                                        <option>৳</option>
                                        <option>₹</option>
                                        <option>€</option>
                                    </select>
                                </div>
                            </div>
                            {/* Description */}
                            <label className="label">Description</label>
                            <input name='description' type="text" className="input w-full" placeholder="Description" />
                            {/* Company */}
                            <label className="label">Company</label>
                            <input name='company' type="text" className="input w-full" placeholder="Company" />
                            {/* Requirements */}
                            <fieldset className="fieldset">
                                <label className="label">Requirements</label>
                                <textarea name='requirements' className="textarea h-24 w-full" placeholder="Add each requirements in a new line."></textarea>
                            </fieldset>
                            {/* Responsibilites */}
                            <fieldset className="fieldset">
                                <label className="label">Responsibilites</label>
                                <textarea name='responsibilites' className="textarea h-24 w-full" placeholder="Add each Responsibilites in a new line."></textarea>
                            </fieldset>
                            {/* HR Name */}
                            <label className="label">HR Name</label>
                            <input name='hrName' type="text" className="input w-full" placeholder="HR Name" />
                            {/* HR Email */}
                            <label className="label">HR Email</label>
                            <input name='hrEmail' type="text" className="input w-full" placeholder="HR Email" />
                            {/* Company Logo URL */}
                            <label className="label">Company Logo URL</label>
                            <input name='logo_url' type="url" className="input w-full" placeholder="Company Logo URL" />
                            {/* Submit button */}
                            <button className="btn btn-neutral mt-4">Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJob;