import React from 'react';
import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router';

const JobsCard = ({ job }) => {

    const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job;

    return (
        <div className="card bg-base-100 shadow-sm">
            <div className='flex gap-2 m-2'>
                <figure>
                    <img
                        className='w-16'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h4 className="text-2xl">{company}</h4>
                    <p className='text-gray-500 flex gap-2 items-center'><FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className='flex gap-2 flex-wrap'>
                    {
                        requirements.map((skill, index) => <p
                            key={index}
                            className='border rounded-md p-0.5 text-center bg-gray-300 hover:text-blue-200 hover:bg-black'
                        >{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-center items-center">
                    <p className='flex items-center'>Salary: <FaDollarSign></FaDollarSign> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;