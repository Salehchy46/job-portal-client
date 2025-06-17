import React from 'react';

const AddJob = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center py-10">Add a Job</h2>
            <div className="card bg-base-100 w-full mx-auto shadow-2xl">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Job Title</label>
                        <input name='title' type="text" className="input w-full" placeholder="Job Title" />
                        <label className="label">Job Location</label>
                        <input type="text" className="input w-full" placeholder="Job Location" />
                        <button className="btn btn-neutral mt-4">Add Job</button>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default AddJob;